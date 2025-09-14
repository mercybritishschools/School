// script-homework2.js
import { getDatabase, ref, push, get, child } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

// ---------------------- Predefined Users ----------------------
const users = {
  "Chinedu Obiakor": { password: "Chi@98", role: "student", class: "SS3" },
  "Joy Okafor": { password: "Jo@45", role: "student", class: "JSS1" },
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
  // Fill all week dropdowns
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

    // Student subjects can be free entry or fixed list
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

    // Teacher subjects restricted
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

  // Clear fields
  $("q-text").value = "";
  $("optA").value = "";
  $("optB").value = "";
  $("optC").value = "";
  $("optD").value = "";
  $("q-answer").value = "";
  $("q-image").value = "";
});

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

  // Clear fields
  $("a-text").value = "";
  $("a-optA").value = "";
  $("a-optB").value = "";
  $("a-optC").value = "";
  $("a-optD").value = "";
  $("a-answer").value = "";
  $("a-image").value = "";
});

// ---------------------- Load Student Questions ----------------------
$("start-exam").addEventListener("click", async () => {
  const uname = $("student-name").textContent;
  const student = users[uname];
  const cls = student.class;
  const subject = $("student-subject").value;
  const week = $("student-week").value;

  const snapshot = await get(child(ref(db), `questions/${cls}/${subject}/${week}`));
  if (snapshot.exists()) {
    const questions = snapshot.val();
    console.log("Loaded questions:", questions);
    alert(`Questions loaded for ${subject}, Week ${week}. Check console for details.`);
  } else {
    alert("No questions found for that subject/week.");
  }
});
