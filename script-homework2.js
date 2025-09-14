// script-homework2.js

// ---------------------- Firebase SDK Imports ----------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getDatabase, ref, get, set, push, child, update, remove
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";

// ---------------------- Firebase Config ----------------------
const firebaseConfig = {
  apiKey: "AIzaSyCT57WDFfW7oR4HmCUmpqib_mJhaGUQxws",
  authDomain: "school-3a89e.firebaseapp.com",
  databaseURL: "https://school-3a89e-default-rtdb.firebaseio.com",
  projectId: "school-3a89e",
  storageBucket: "school-3a89e.firebasestorage.app",
  messagingSenderId: "656930590089",
  appId: "1:656930590089:web:7edf7b849b7436928ae558",
  measurementId: "G-RH3MKVQ90R"
};

// ---------------------- Initialize Firebase ----------------------
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

// ---------------------- Users ----------------------
const users = {
  "Chinedu Obiakor": { password: "Chi@98", role: "student", class: "SS3" },
  "Mr. Anonye": { password: "Ab@12", role: "teacher", subjects: ["Computer", "CRS"] },
  "Admin": { password: "admin123", role: "admin" }
};

let currentUser = null;

// ---------------------- Helpers ----------------------
function $(id) {
  return document.getElementById(id);
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  $(id).classList.remove("hidden");
}

// ---------------------- Login ----------------------
$("login-btn").addEventListener("click", () => {
  const uname = $("username").value.trim();
  const pwd = $("password").value.trim();

  if (users[uname] && users[uname].password === pwd) {
    currentUser = uname;
    const role = users[uname].role;
    if (role === "student") showPage("student-page");
    else if (role === "teacher") showPage("teacher-page");
    else showPage("admin-page");
  } else {
    alert("Invalid login.");
  }
});

// ---------------------- Student: Start Homework ----------------------
$("start-exam").addEventListener("click", () => {
  const subject = $("student-subject").value;
  const week = $("student-week").value;
  const cls = users[currentUser].class;
  loadStudentQuestions(cls, subject, week);
});

async function loadStudentQuestions(cls, subject, week) {
  const dbRef = ref(db);
  const snap = await get(child(dbRef, `questions/${cls}/${subject}/${week}`));
  if (!snap.exists()) {
    alert("No questions available for this subject/week.");
    return;
  }
  const data = Object.values(snap.val());
  startExam(data);
}

function startExam(questions) {
  $("exam-container").classList.remove("hidden");
  let current = 0;

  function render() {
    const q = questions[current];
    $("qpos").textContent = current + 1;
    $("qtotal").textContent = questions.length;
    $("question-box").innerHTML = `
      <p>${q.text}</p>
      ${q.image ? `<img src="${q.image}" class="q-image">` : ""}
      <ul>
        ${q.options.map((opt, i) =>
          `<li><label><input type="radio" name="ans" value="${i}"> ${opt}</label></li>`
        ).join("")}
      </ul>`;
  }

  render();

  $("next-btn").onclick = () => {
    if (current < questions.length - 1) {
      current++;
      render();
    }
    if (current === questions.length - 1) {
      $("submit-btn").classList.remove("hidden");
    }
  };

  $("prev-btn").onclick = () => {
    if (current > 0) {
      current--;
      render();
    }
  };
}

// ---------------------- Teacher/Admin: Save Question ----------------------
$("save-question").addEventListener("click", async () => {
  const subj = $("q-subject").value;
  const cls = $("q-class").value;
  const week = $("q-week").value;
  const qid = $("save-question").dataset.editId;

  const qdata = {
    text: $("q-text").value,
    options: [
      $("optA").value, $("optB").value, $("optC").value, $("optD").value
    ],
    answer: Number($("q-answer").value),
    image: $("q-image").value
  };

  if (!subj || !cls || !week || !qdata.text) {
    alert("Fill all fields.");
    return;
  }

  if (qid) {
    await update(ref(db, `questions/${cls}/${subj}/${week}/${qid}`), qdata);
    delete $("save-question").dataset.editId;
  } else {
    await push(ref(db, `questions/${cls}/${subj}/${week}`), qdata);
  }

  // Clear form
  $("q-text").value =
    $("optA").value =
    $("optB").value =
    $("optC").value =
    $("optD").value =
    $("q-answer").value =
    $("q-image").value = "";

  loadTeacherQuestions(currentUser);
});

// ---------------------- Teacher/Admin: Load Questions ----------------------
async function loadTeacherQuestions(teacherName) {
  const role = users[teacherName].role;
  const cls = $("q-class").value;
  const week = $("q-week").value;

  $("teacher-questions").innerHTML = "<p>Loading...</p>";

  const dbRef = ref(db);
  const snap = await get(child(dbRef, `questions/${cls}`));
  if (!snap.exists()) {
    $("teacher-questions").innerHTML = "<p>No questions yet.</p>";
    return;
  }

  let html = "";
  const allData = snap.val();
  (role === "teacher" ? users[teacherName].subjects : Object.keys(allData)).forEach(subject => {
    if (allData[subject] && allData[subject][week]) {
      const qset = allData[subject][week];
      for (let [qid, q] of Object.entries(qset)) {
        html += `
          <div class="q-item">
            <p><strong>${subject}</strong> (Week ${week})</p>
            <p>${q.text}</p>
            <button onclick="editQuestion('${cls}','${subject}','${week}','${qid}')">Edit</button>
            <button onclick="deleteQuestion('${cls}','${subject}','${week}','${qid}')">Delete</button>
          </div>`;
      }
    }
  });

  $("teacher-questions").innerHTML = html || "<p>No questions found.</p>";
}

// ---------------------- Edit/Delete ----------------------
window.editQuestion = async (cls, subject, week, qid) => {
  const snap = await get(ref(db, `questions/${cls}/${subject}/${week}/${qid}`));
  if (snap.exists()) {
    const q = snap.val();
    $("q-subject").value = subject;
    $("q-week").value = week;
    $("q-text").value = q.text;
    $("optA").value = q.options[0];
    $("optB").value = q.options[1];
    $("optC").value = q.options[2];
    $("optD").value = q.options[3];
    $("q-answer").value = q.answer;
    $("q-image").value = q.image || "";
    $("save-question").dataset.editId = qid; // mark edit mode
  }
};

window.deleteQuestion = async (cls, subject, week, qid) => {
  await remove(ref(db, `questions/${cls}/${subject}/${week}/${qid}`));
  loadTeacherQuestions(currentUser);
};

// ---------------------- Trigger Load when class/week changes ----------------------
["q-class", "q-week"].forEach(id => {
  $(id).addEventListener("change", () => {
    if (currentUser && (users[currentUser].role === "teacher" || users[currentUser].role === "admin")) {
      loadTeacherQuestions(currentUser);
    }
  });
});
