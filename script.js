// 🔸 Predefined users and passwords
const users = {
  "Memeh Favour": "pass123",
  "Uzoma Favour": "pass456",
  "Destiny Pretty": "pass789",
  "David": "pass012",
  "Ngozi": "pass111",
  "Andrew David": "pass222"
};

// 🔸 Lesson Notes
const lessonNotes = {
  "Mathematics": "Topic: Algebra – Solving linear equations with one variable.",
  "English": "Topic: Narrative Essay – Writing with structure and purpose.",
  "Basic Science": "Topic: States of Matter – Solids, liquids, gases.",
  "Civic Education": "Topic: Importance of National Values.",
};

// 🔸 Questions (grouped by class)
const classQuestions = {
  JSS1: [
    { q: "What does a computer store?", options: ["data", "food", "fuel", "money"], answer: 0 },
    { q: "Which of these is a computer storage unit?", options: ["bit", "bite", "boat", "bet"], answer: 0 },
    { q: "Which of these is not a computer storage unit?", options: ["byte", "nibble", "niddle", "bit"], answer: 2 },
  ],
  JSS2: [
    { q: "What does a computer store?", options: ["data", "food", "fuel", "money"], answer: 0 },
{ q: "Which of these is a computer storage unit?", options: ["bit", "bite", "boat", "bet"], answer: 0 },
{ q: "Which of these is not a computer storage unit?", options: ["byte", "nibble", "niddle", "bit"], answer: 2 },
{ q: "How many bits are there in a nibble?", options: ["8", "4", "2", "1/2"], answer: 1 },
{ q: "How many bits are there in a byte?", options: ["8", "4", "2", "1/2"], answer: 0 },
{ q: "How many nibbles are there in a byte?", options: ["8", "4", "2", "1/2"], answer: 2 },
{ q: "How many bytes are there in a nibble?", options: ["8", "4", "2", "1/2"], answer: 3 },
{ q: "How many bytes are there in a kilobyte?", options: ["11^2", "10^2", "2^10", "2^11"], answer: 2 },
{ q: "How many bytes are there in a megabyte?", options: ["20^2", "2^20", "30^2", "2^30"], answer: 1 },
{ q: "How many bytes are there in 7 kilobyte?", options: ["7168", "8176", "6718", "1876"], answer: 0 },
{ q: "Which of the following is a storage device?", options: ["keyboard", "mouse", "monitor", "flash"], answer: 3 }, 
{ q: "CD ROM is a ___ device.", options: ["input", "output", "storage", "processing"], answer: 2 }, 
{ q: "x + 5 = 20. Find x", options: ["20", "15", "10", "5"], answer: 1 }, 
{ q: "3x = 12. Find x", options: ["6", "5", "4", "3"], answer: 2 }, 
{ q: "9/y = 3. Find y", options: ["6", "5", "4", "3"], answer: 3 }, 
{ q: "m - 6 = 16. Find m", options: ["20", "21", "22", "23"], answer: 2 }, 
{ q: "3 - n = 2. Find n", options: ["1", "2", "3", "4"], answer: 0 }, 
{ q: "p/9 = 2. Find p", options: ["20", "18", "16", "12"], answer: 1 }, 
{ q: "14 + a = 30. Find a", options: ["20", "18", "16", "12"], answer: 2 }, 
{ q: "8z = 24. Find z", options: ["3", "6", "4", "8"], answer: 0 }, 
{ q: "Cows _____ grass.", options: ["eat", "eats", "chews", "swallows"], answer: 0 }, 
{ q: "A lion _____ in the forest.", options: ["live", "stay", "jump", "lives"], answer: 3 }, 
{ q: "Obi _____ a boy.", options: ["is", "were", "have", "are"], answer: 0 }, 
{ q: "Jack and Jill _____ bicycles.", options: ["has", "is", "does", "have"], answer: 3 }, 
{ q: "Obedience _____ better than sacrifice.", options: ["are", "have", "is", "do"], answer: 2 },
  ],
  JSS3: [
    { q: "Cows _____ grass.", options: ["eat", "eats", "chews", "swallows"], answer: 0 },
    { q: "A lion _____ in the forest.", options: ["live", "stay", "jump", "lives"], answer: 3 },
    { q: "Jack and Jill _____ bicycles.", options: ["has", "is", "does", "have"], answer: 3 },
  ]
};

// 🔸 Student mapping
const studentsByClass = {
  JSS1: ["Uzoma Favour", "Ngozi"],
  JSS2: ["Memeh Favour", "Andrew David"],
  JSS3: ["Destiny Pretty", "David"]
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

  const userClass = getClassForUser(username);
  const questions = classQuestions[userClass] || [];
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
    if (!q) return;
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
      class: userClass,
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
