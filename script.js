// 🔸 Predefined users and passwords
const users = {
  "Favour1": "pass123",
  "Favour2": "pass456",
  "Pretty": "pass789",
  "David": "pass012"
};

// 🔸 Predefined lesson notes by subject
const lessonNotes = {
  "Mathematics": "Topic: Algebra – Solving linear equations with one variable.",
  "English": "Topic: Narrative Essay – Writing with structure and purpose.",
  "Basic Science": "Topic: States of Matter – Solids, liquids, gases.",
  "Civic Education": "Topic: Importance of National Values.",
};

// 🔸 Questions
const questions = [
  { q: "2 + 2 = ?", options: ["3", "4", "5", "6"], answer: 1 },
  { q: "Capital of Nigeria?", options: ["Lagos", "Abuja", "Enugu", "Kano"], answer: 1 }
];

const studentsByClass = {
  JSS1: ["Ali", "Ngozi"],
  JSS2: ["Ada", "David"]
};

// 🔸 INIT LOGIN PAGE
if (document.getElementById("login-btn")) {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("login-btn");
  const errorMsg = document.getElementById("login-error");
  const userList = document.getElementById("user-list");

  Object.keys(users).forEach(user => {
    let opt = document.createElement("option");
    opt.value = user;
    userList.appendChild(opt);
  });

  loginBtn.onclick = () => {
    const uname = usernameInput.value.trim();
    const pwd = passwordInput.value.trim();
    if (users[uname] && users[uname] === pwd) {
      startExam(uname);
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  };
}

// 🔸 Start Exam After Login
function startExam(username) {
  const loginSection = document.getElementById("login-section");
  const examContainer = document.getElementById("exam-container");
  loginSection.style.display = "none";
  examContainer.style.display = "block";

  let currentIndex = 0;
  let selectedAnswers = {};
  let timeLeft = 300;
  let timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) submit();
  }, 1000);

  function renderQuestion() {
    const q = questions[currentIndex];
    let html = `<p><strong>Q${currentIndex + 1}:</strong> ${q.q}</p>`;
    q.options.forEach((opt, i) => {
      const checked = selectedAnswers[currentIndex] === i ? "checked" : "";
      html += `<label><input type="radio" name="opt" value="${i}" ${checked}> ${opt}</label><br>`;
    });
    document.getElementById("question-box").innerHTML = html;

    document.querySelectorAll("input[name='opt']").forEach(inp => {
      inp.onclick = () => {
        selectedAnswers[currentIndex] = parseInt(inp.value);
      };
    });

    document.getElementById("submit-btn").style.display = (currentIndex === questions.length - 1) ? "inline" : "none";
  }

  document.getElementById("next-btn").onclick = () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    }
  };

  document.getElementById("prev-btn").onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  };

  document.getElementById("submit-btn").onclick = submit;

  function submit() {
    clearInterval(timer);
    let score = 0;
    questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) score++;
    });

    const result = {
      name: username,
      class: getClassForUser(username),
      score: score,
      time: new Date().toLocaleString()
    };

    const allResults = JSON.parse(localStorage.getItem("results") || "[]");
    allResults.push(result);
    localStorage.setItem("results", JSON.stringify(allResults));
    alert("Exam submitted. Your score: " + score);
    location.reload();
  }

  renderQuestion();
}

function getClassForUser(name) {
  for (let cls in studentsByClass) {
    if (studentsByClass[cls].includes(name)) return cls;
  }
  return "Unknown";
}

// 🔸 Render Results Page
if (document.getElementById("result-table")) {
  const results = JSON.parse(localStorage.getItem("results") || "[]");
  const grouped = {};

  results.forEach(r => {
    if (!grouped[r.class]) grouped[r.class] = [];
    grouped[r.class].push(r);
  });

  const container = document.getElementById("result-table");
  for (let cls in grouped) {
    let html = `<h3>${cls}</h3><table><tr><th>Name</th><th>Score</th><th>Time</th></tr>`;
    grouped[cls].forEach(s => {
      html += `<tr><td>${s.name}</td><td>${s.score}</td><td>${s.time}</td></tr>`;
    });
    html += "</table><br>";
    container.innerHTML += html;
  }
}

// 🔸 Download Excel
function downloadExcel() {
  const results = JSON.parse(localStorage.getItem("results") || "[]");
  const worksheet = XLSX.utils.json_to_sheet(results);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
  XLSX.writeFile(workbook, "exam_results.xlsx");
}

// 🔸 Populate Lesson Notes
if (document.getElementById("lesson-notes")) {
  const div = document.getElementById("lesson-notes");
  for (let subject in lessonNotes) {
    div.innerHTML += `<h3>${subject}</h3><p>${lessonNotes[subject]}</p>`;
  }
}
