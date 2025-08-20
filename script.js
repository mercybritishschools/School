(() => {
  // -------- USERS --------
  const users = {
    students: [
      { username: "johnJSS1", password: "1234", class: "JSS1" },
      { username: "Pretty", password: "1982", class: "JSS1" },      
      { username: "Amarachi", password: "wxyz", class: "JSS1" },   
      { username: "Daniella", password: "1234", class: "JSS1" },         
      { username: "Success", password: "4812", class: "JSS1" },         
      { username: "maryJSS2", password: "2345", class: "JSS2" }
    ],
    teachers: [
      { username: "Mr. Anonye", password: "admin1" },
      { username: "teacherB", password: "admin2" }
    ]
  };

  // -------- QUESTION BANK (CLASS → SUBJECT → WEEK) --------
  const questionBank = {
    JSS1: {
      Mathematics: {
        1: [
         { q: "x + 5 = 20. Find x", options: ["20", "15", "10", "5"], answer: "15" }, 
{ q: "3x = 12. Find x", options: ["6", "5", "4", "3"], answer: "4" }, 
{ q: "9/y = 3. Find y", options: ["6", "5", "4", "3"], answer: "3" }, 
{ q: "m - 6 = 16. Find m", options: ["20", "21", "22", "23"], answer: "22" }, 
{ q: "3 - n = 2. Find n", options: ["1", "2", "3", "4"], answer: "1" }, 
{ q: "p/9 = 2. Find p", options: ["20", "18", "16", "12"], answer: "18" }, 
{ q: "14 + a = 30. Find a", options: ["20", "18", "16", "12"], answer: "16" }, 
{ q: "8z = 24. Find z", options: ["3", "6", "4", "8"], answer: "3" },
{ q: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
{ q: "5 × 3 = ?", options: ["8", "15", "10"], answer: "15" }
        ],
        2: [
          { q: "10 - 4 = ?", options: ["5", "6", "7"], answer: "6" }
        ]
      },
      English: {
        1: [
         { q: "Cows _____ grass.", options: ["eat", "eats", "chews", "swallows"], answer: "eat" }, 
{ q: "A lion _____ in the forest.", options: ["live", "stay", "jump", "lives"], answer: "lives" }, 
{ q: "Obi _____ a boy.", options: ["is", "were", "have", "are"], answer: "is" }, 
{ q: "Jack and Jill _____ bicycles.", options: ["has", "is", "does", "have"], answer: "have" }, 
{ q: "Obedience _____ better than sacrifice.", options: ["are", "have", "is", "do"], answer: "is" },
{ q: "Choose the correct spelling:", options: ["Recieve", "Receive", "Receeve"], answer: "Receive" }
        ],
     2: [
       { q: " ____ is a name of a person, animal, place, things, or idea.", options: ["Pronoun", "Verb", "Noun", "Preposition"], answer: "Noun" },
       { q: "Which of these is not a type of noun?", options: ["Common noun", "Written noun", "Proper noun", "Abstract noun"], answer: "Written noun" },
{ q: "An example of countable noun is sand.", options: ["True", "False"], answer: "False" },
{ q: "A group of words that works together like a noun in a sentence is called____", options: ["Verb", "Literature", "Preposition", "Noun phrase"], answer: "Noun phrase" },
{ q: "John is an example of _ noun.", options: ["Common noun", "Proper noun", "Concrete noun", "Abstract noun"], answer: "Proper noun"},
{ q: "Abstract noun cannot be touched.", options: ["True", "False"], answer: "True" },
{ q: "The word 'swimming pool' is an example of _ noun.", options: ["Compound noun", "Countable noun", "Common noun", "Concrete noun"], answer: "Compound noun" },
{ q: "Indicate the noun in this sentence: Anita is running.", options: ["Anita", "is", "running", "None of the above"], answer: "Anita" },
{ q: "A noun phrase is a noun + extra words.", options: ["True ", "False"], answer: "True" },
{ q: "____ is an example of countable noun.", options: ["Sand", "Air", "Gas", "Chairs"], answer: "Chairs" }         
     ]
      },
      Computer: {
          1: [
                { q: "What does a computer store?", options: ["data", "food", "fuel", "money"], answer: "data" },
{ q: "Which of these is a computer storage unit?", options: ["bit", "bite", "boat", "bet"], answer: "bit" },
{ q: "Which of these is not a computer storage unit?", options: ["byte", "nibble", "niddle", "bit"], answer: "niddle" },
{ q: "How many bits are there in a nibble?", options: ["8", "4", "2", "1/2"], answer: "4" },
{ q: "How many bits are there in a byte?", options: ["8", "4", "2", "1/2"], answer: "8" },
{ q: "How many nibbles are there in a byte?", options: ["8", "4", "2", "1/2"], answer: "2" },
{ q: "How many bytes are there in a nibble?", options: ["8", "4", "2", "1/2"], answer: "1/2" },
{ q: "How many bytes are there in a kilobyte?", options: ["11^2", "10^2", "2^10", "2^11"], answer: "2^10" },
{ q: "How many bytes are there in a megabyte?", options: ["20^2", "2^20", "30^2", "2^30"], answer: "2^20" },
{ q: "How many bytes are there in 7 kilobyte?", options: ["7168", "8176", "6718", "1876"], answer: "7168" },
{ q: "Which of the following is a storage device?", options: ["keyboard", "mouse", "monitor", "flash"], answer: "flash" }, 
{ q: "CD ROM is a ___ device.", options: ["input", "output", "storage", "processing"], answer: "storage" }              
   ],
      2: [
        { q: "Physical components of computer are called...", options: ["house", "particles", "hardware", "software"], answer: "hardware" },
        { q: "Which of the following is an input device?", options: ["CPU", "VDU", "printer", "Mouse"], answer: "Mouse" },
        { q: "The full meaning of VDU is...", options: ["ViDeo Unit", "Voice Data Upload", "Voice Detecting Unit", "Visual Display Unit"], answer: "Visual Display Unit" },
        { q: "Which of the following is an output device?", options: ["keyboard", "printer", "table"], answer: "printer" }, 
        { q: "Input devices help the computer to... data.", options: ["receive", "give", "keep", "destroy"], answer: "receive" }, 
        { q: "Output devices help the computer to... information.", options: ["receive", "give", "keep", "destroy"], answer: "give" },
        { q: "Storage devices help the computer to... data.", options: ["receive", "give", "keep", "destroy"], answer: "keep" },
        { q: "Another word for storage device is...", options: ["POS", "Computer Memory", "processor", "warehouse"], answer: "Computer Memory" },
        { q: "Which of the following is a component of the processing unit?", options: ["ALU", "VDU", "Mouse", "key"], answer: "ALU" },
        { q: "The full meaning of RAM is...", options: ["Read All Magazines", "Read Only Memory", "Random Access Memory", "Rate Above Mountain"], answer: "Random Access Memory" }      
      ]
      }
    },
    JSS2: {
      Mathematics: {
        1: [
          { q: "Solve: 12 ÷ 3", options: ["2", "3", "4"], answer: "4" }
        ]
      }
    }
  };

  // Defer DOM work until ready (prevents "Unexpected end of input" from partial parses)
  document.addEventListener("DOMContentLoaded", () => {
    // ------- Common element getters (guard each) -------
    const $ = id => document.getElementById(id);

    const loginBtn = $("login-btn");
    const usernameInput = $("username");
    const passwordInput = $("password");
    const loginError = $("login-error");
    const datalist = $("user-list");

    const selectionSection = $("selection-section");
    const subjectSelect = $("subject-select");
    const weekSelect = $("week-select");
    const startExamBtn = $("start-exam-btn");

    const examContainer = $("exam-container");
    const questionBox = $("question-box");
    const timerEl = $("timer");
    const prevBtn = $("prev-btn");
    const nextBtn = $("next-btn");
    const submitBtn = $("submit-btn");

    // ------- Populate username suggestions if the datalist exists -------
    if (datalist) {
      [...users.students, ...users.teachers].forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.username;
        datalist.appendChild(opt);
      });
    }

    // ------- State -------
    let currentUser = null;
    let currentClass = null;
    let currentSubject = null;
    let currentWeek = null;
    let currentQ = 0;
    let answers = [];
    let timer = null;

    // ------- Login (only if login controls exist on this page) -------
    if (loginBtn && usernameInput && passwordInput) {
      loginBtn.onclick = () => {
        const uname = usernameInput.value.trim();
        const pwd = passwordInput.value.trim();

        const student = users.students.find(u => u.username === uname && u.password === pwd);
        const teacher = users.teachers.find(u => u.username === uname && u.password === pwd);

        if (student) {
          currentUser = student.username;
          currentClass = student.class;
          // show subject/week selection
          const loginSection = $("login-section");
          if (loginSection) loginSection.style.display = "none";
          if (selectionSection) selectionSection.style.display = "block";

          // populate subjects for that class
          if (subjectSelect) {
            subjectSelect.innerHTML = "";
            const subjects = Object.keys(questionBank[currentClass] || {});
            subjects.forEach(s => {
              const opt = document.createElement("option");
              opt.value = s;
              opt.textContent = s;
              subjectSelect.appendChild(opt);
            });
          }
        } else if (teacher) {
          // teachers go to results page
          sessionStorage.setItem("loggedInUser", JSON.stringify({ username: teacher.username, role: "teacher" }));
          window.location.href = "result.html";
        } else {
          if (loginError) loginError.textContent = "Invalid login!";
        }
      };
    }

    // ------- Start exam (students) -------
    if (startExamBtn) {
      startExamBtn.onclick = () => {
        if (!subjectSelect || !weekSelect) return;

        currentSubject = subjectSelect.value;
        currentWeek = weekSelect.value;

        if (!currentSubject || !currentWeek) {
          alert("Please select both subject and week.");
          return;
        }

        // switch sections
        if (selectionSection) selectionSection.style.display = "none";
        if (examContainer) examContainer.style.display = "block";

        startExam();
      };
    }

    // ------- Exam engine -------
    function startExam() {
      const qs = (questionBank[currentClass]?.[currentSubject]?.[currentWeek]) || [];
      if (!qs.length) {
        alert("No questions set for this class/subject/week.");
        // return to selection
        if (examContainer) examContainer.style.display = "none";
        if (selectionSection) selectionSection.style.display = "block";
        return;
      }

      answers = new Array(qs.length).fill(null);
      currentQ = 0;

      // timer
      let timeLeft = 300;
      if (timerEl) timerEl.textContent = timeLeft;
      clearInterval(timer);
      timer = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timer);
          submitExam();
        }
      }, 1000);

      showQuestion();
    }

    function showQuestion() {
      const qs = (questionBank[currentClass]?.[currentSubject]?.[currentWeek]) || [];
      const q = qs[currentQ];
      if (!q || !questionBox) return;

      questionBox.innerHTML = `<h3>Q${currentQ + 1}. ${q.q}</h3>`;
      q.options.forEach(opt => {
        questionBox.innerHTML += `
          <label style="display:flex;align-items:center;gap:8px;margin:6px 0;">
            <input type="radio" name="option" value="${opt}" ${answers[currentQ] === opt ? "checked" : ""}>
            ${opt}
          </label>`;
      });

      if (prevBtn) prevBtn.style.display = currentQ > 0 ? "inline-block" : "none";
      if (nextBtn) nextBtn.style.display = currentQ < qs.length - 1 ? "inline-block" : "none";
      if (submitBtn) submitBtn.style.display = currentQ === qs.length - 1 ? "inline-block" : "none";

      document.querySelectorAll('input[name="option"]').forEach(radio => {
        radio.onchange = e => (answers[currentQ] = e.target.value);
      });
    }

    if (prevBtn) prevBtn.onclick = () => { currentQ--; showQuestion(); };
    if (nextBtn) nextBtn.onclick = () => { currentQ++; showQuestion(); };
    if (submitBtn) submitBtn.onclick = submitExam;

    function submitExam() {
      clearInterval(timer);
      const qs = (questionBank[currentClass]?.[currentSubject]?.[currentWeek]) || [];
      let score = 0;
      qs.forEach((q, i) => { if (answers[i] === q.answer) score++; });

      // Save (overwrite latest for same student+class+subject+week)
      let results = JSON.parse(localStorage.getItem("results") || "[]");
      results = results.filter(r => !(r.name === currentUser && r.class === currentClass && r.subject === currentSubject && r.week === currentWeek));
      results.push({
        name: currentUser,
        class: currentClass,
        subject: currentSubject,
        week: String(currentWeek),
        score: `${score}/${qs.length}`
      });
      localStorage.setItem("results", JSON.stringify(results));

      alert(`Exam submitted!\nScore: ${score}/${qs.length}`);

      // Back to subject/week selection
      if (examContainer) examContainer.style.display = "none";
      if (selectionSection) selectionSection.style.display = "block";
    }

    // ------- Protect result.html (teachers only) -------
    if (location.pathname.endsWith("result.html")) {
      const user = JSON.parse(sessionStorage.getItem("loggedInUser") || "null");
      if (!user || user.role !== "teacher") {
        document.body.innerHTML = "<h2 style='text-align:center;margin-top:40px;'>Access Denied — Teachers only.</h2>";
      }
    }

// --- Shuffle helper (Fisher–Yates) ---
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- Hook into startExam (monkey-patch) ---
const originalStartExam = startExam;
startExam = function() {
  const qs = (questionBank[currentClass]?.[currentSubject]?.[currentWeek]) || [];
  if (qs.length) {
    // Shuffle questions
    shuffle(qs);
    // Shuffle options in each question
    qs.forEach(q => shuffle(q.options));
  }
  originalStartExam();
};

  });
})();
