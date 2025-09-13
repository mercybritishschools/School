// script-homework.js
import { getDatabase, ref, push, get, child, update, remove } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

// ---------------------- Predefined Users ----------------------
const users = {
  "Chinedu Obiakor": { password: "Chi@98", role: "student", class: "SS3" },
  "Joy Okafor": { password: "Jo@45", role: "student", class: "JSS2" },
  "Mr. Anonye": { password: "Ab@12", role: "teacher", subjects: ["Computer", "CRS"] },
  "Mrs. Johnson": { password: "Mj@34", role: "teacher", subjects: ["English"] },
  "Admin": { password: "admin123", role: "admin" }
};

// ---------------------- DOM Helper ----------------------
function $(id) { return document.getElementById(id); }

// ---------------------- Week Dropdown Filler ----------------------
function weeksOptionsFill(selectEl) {
  selectEl.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = `Week ${i}`;
    selectEl.appendChild(opt);
  }
}

// ---------------------- Init UI ----------------------
document.addEventListener("DOMContentLoaded", () => {
  weeksOptionsFill($("student-week"));
  weeksOptionsFill($("q-week"));
  weeksOptionsFill($("a-week"));

  // Fill login datalist
  const userList = $("user-list");
  Object.keys(users).forEach(u => {
    const opt = document.createElement("option");
    opt.value = u;
    userList.appendChild(opt);
  });
});

// ---------------------- Login Handling ----------------------
$("login-btn").addEventListener("click", () => {
  const uname = $("username").value.trim();
  const pwd = $("password").value.trim();

  if (!users[uname] || users[uname].password !== pwd) {
    $("login-error").textContent = "Invalid username or password";
    return;
  }

  $("login-error").textContent = "";
  $("login-section").classList.add("hidden");

  const user = users[uname];
  if (user.role === "student") {
    $("student-name").textContent = uname;
    $("student-dashboard").classList.remove("hidden");

    // Student subjects list
    const subjSel = $("student-subject");
    subjSel.innerHTML = "";
    ["Mathematics", "English", "Computer", "CRS", "Biology", "Chemistry"].forEach(s => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      subjSel.appendChild(opt);
    });

  } else if (user.role === "teacher") {
    $("teacher-name").textContent = uname;
    $("teacher-dashboard").classList.remove("hidden");

    // Restrict subjects to teacher's
    const subjInput = $("q-subject");
    subjInput.setAttribute("list", "teacher-subjects");
    let dl = document.createElement("datalist");
    dl.id = "teacher-subjects";
    document.body.appendChild(dl);
    dl.innerHTML = "";
    user.subjects.forEach(sub => {
      const opt = document.createElement("option");
      opt.value = sub;
      dl.appendChild(opt);
    });

  } else if (user.role === "admin") {
    $("admin-dashboard").classList.remove("hidden");
  }
});

// ---------------------- Firebase ----------------------
const db = getDatabase();

// ---------------------- Save Teacher Question ----------------------
$("save-question").addEventListener("click", async () => {
  const cls = $("q-class").value;
  const subject = $("q-subject").value.trim();
  const week = $("q-week").value;

  if (!subject) {
    alert("Please enter a subject.");
    return;
  }

  const questionData = {
    text: $("q-text").value.trim(),
    options: [
      $("optA").value.trim(),
      $("optB").value.trim(),
      $("optC").value.trim(),
      $("optD").value.trim()
    ],
    answer: $("q-answer").value,
    image: $("q-image").value.trim() || null
  };

  const refPath = ref(db, `questions/${cls}/${subject}/${week}`);
  await push(refPath, questionData);

  alert("Question saved (teacher)!");
  clearTeacherFields();
  loadTeacherQuestions(cls, subject, week);
});

function clearTeacherFields() {
  $("q-text").value = "";
  $("optA").value = "";
  $("optB").value = "";
  $("optC").value = "";
  $("optD").value = "";
  $("q-answer").value = "";
  $("q-image").value = "";
}

// ---------------------- Save Admin Question ----------------------
$("a-save-question").addEventListener("click", async () => {
  const cls = $("a-class").value;
  const subject = $("a-subject").value.trim();
  const week = $("a-week").value;

  if (!subject) {
    alert("Please enter a subject.");
    return;
  }

  const questionData = {
    text: $("a-text").value.trim(),
    options: [
      $("a-optA").value.trim(),
      $("a-optB").value.trim(),
      $("a-optC").value.trim(),
      $("a-optD").value.trim()
    ],
    answer: $("a-answer").value,
    image: $("a-image").value.trim() || null
  };

  const refPath = ref(db, `questions/${cls}/${subject}/${week}`);
  await push(refPath, questionData);

  alert("Question saved (admin)!");
  $("a-text").value = "";
  $("a-optA").value = "";
  $("a-optB").value = "";
  $("a-optC").value = "";
  $("a-optD").value = "";
  $("a-answer").value = "";
  $("a-image").value = "";
});

// ---------------------- Student Exam Loader ----------------------
$("start-exam").addEventListener("click", async () => {
  const uname = $("student-name").textContent;
  const student = users[uname];
  const cls = student.class;
  const subject = $("student-subject").value;
  const week = $("student-week").value;

  const snapshot = await get(child(ref(db), `questions/${cls}/${subject}/${week}`));
  if (!snapshot.exists()) {
    alert("No questions found for that subject/week.");
    return;
  }

  const questions = Object.entries(snapshot.val()).map(([id, q]) => ({ id, ...q }));

  // Render exam interface
  let current = 0;
  let answers = {};

  $("exam-container").classList.remove("hidden");

  function renderQ() {
    const q = questions[current];
    let html = `<p><strong>Q${current + 1}:</strong> ${q.text}</p>`;
    if (q.image) html += `<img src="${q.image}" style="max-width:200px;display:block;">`;
    q.options.forEach((opt, i) => {
      const checked = answers[q.id] == i ? "checked" : "";
      html += `<label><input type="radio" name="opt" value="${i}" ${checked}> ${opt}</label><br>`;
    });
    $("question-box").innerHTML = html;

    document.querySelectorAll("input[name='opt']").forEach(inp => {
      inp.addEventListener("click", () => {
        answers[q.id] = parseInt(inp.value);
      });
    });

    $("qpos").textContent = current + 1;
    $("qtotal").textContent = questions.length;
    $("submit-btn").classList.toggle("hidden", current !== questions.length - 1);
  }

  $("next-btn").onclick = () => {
    if (current < questions.length - 1) { current++; renderQ(); }
  };
  $("prev-btn").onclick = () => {
    if (current > 0) { current--; renderQ(); }
  };
  $("submit-btn").onclick = (
