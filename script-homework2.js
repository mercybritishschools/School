// script-homework2.js
// (replace the old file entirely with this)

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getDatabase, ref, get, set, push, update, remove
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";

/* ----------------- Firebase config (your values) ----------------- */
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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

/* ----------------- Users ----------------- */
/* Keep/update this object as you like; structure matches your request */
const users = {
  "Ugbechie Rejoice": { password: "Re@608", role: "student", class: "JSS1" },
  "Chima Solomon": { password: "So@231", role: "student", class: "JSS1" },
  "Nwafechukwu-Cyril Victory": { password: "Vic@77", role: "student", class: "JSS1" },
  "Oweazim Emmanuel Kosiso": { password: "Ko@73", role: "student", class: "JSS1" },
  "Esther Elechukwu": { password: "Es@24", role: "student", class: "JSS1" },
  "Uche Chidimma Marvelous": { password: "Ma@73", role: "student", class: "JSS1" },
  "Andre Augustine Inyanbe": { password: "Aug@111", role: "student", class: "JSS1" },
  "Nweke Miracle": { password: "Mir@777", role: "student", class: "JSS1" },
  "Monday Blessing": { password: "Mon@161", role: "student", class: "JSS1" },                           
  "Okoye Chinenyenwa Favour": { password: "Chi@914", role: "student", class: "JSS1" },                           
  "Chukwuma Divine": { password: "Chu@300", role: "student", class: "JSS1" },                           
  "Ashybuogu Somtochukwu Andre": { password: "And@141", role: "student", class: "JSS1" },                           
  "Nwebem Favour": { password: "Fav@504", role: "student", class: "JSS1" },                           
  "Akwuobi Chilota Favour": { password: "Chil@114", role: "student", class: "JSS1" },                           
  "Tyoze Barnabas": { password: "Tyo@963", role: "student", class: "JSS1" },                           
  "Vincent Chinedu": { password: "Vin@601", role: "student", class: "JSS1" },                           
  "Njidoka Divine-Peace": { password: "Div@785", role: "student", class: "JSS1" },                           
  "Eze Ekpereamaka Marian": { password: "Ekp@357", role: "student", class: "JSS1" },                           
  "Nwoye Blessing Chinaza": { password: "Ble@159", role: "student", class: "JSS1" },                           
   
  "Victor Abel": { password: "Vic@869", role: "student", class: "JSS2" },
  "Favour Memeh": { password: "Fav@981", role: "student", class: "JSS2" },
  "Ifechukwude Miracle": { password: "Mi@052", role: "student", class: "JSS2" },
  "Benard Gift": { password: "Gif@98", role: "student", class: "JSS2" },
  "Okoro Ebube": { password: "Eb@008", role: "student", class: "JSS2" },
  "Ogolo Success": { password: "Su@272", role: "student", class: "JSS2" },
  "Dennis Ozioma": { password: "Oz@184", role: "student", class: "JSS2" },
  "Effium Winifred": { password: "Win@678", role: "student", class: "JSS2" },
  "Okafor Lucky": { password: "Lu@220", role: "student", class: "JSS2" },
  "Uche Michael": { password: "Mic@68", role: "student", class: "JSS2" },
  "Obalim Favour": { password: "Fav@68", role: "student", class: "JSS2" },
  "Thomas Magnus Chibuzor Uti": { password: "Mag@655", role: "student", class: "JSS2" },
    
  "Jude Emmanuella Chioma": { password: "Em@184", role: "student", class: "JSS3" },
  "Opara Chinonyerem Emmanuella": { password: "Em@766", role: "student", class: "JSS3" },
  "Izudike Chukwuoma Dominion": { password: "Izu@900", role: "student", class: "JSS3" },
  "Nyitar Timothy": { password: "Tim@156", role: "student", class: "JSS3" },
  "Richard Dominion": { password: "Rich@513", role: "student", class: "JSS3" },
  "Kingsley Grace": { password: "King@435", role: "student", class: "JSS3" },
  "Henry Nzurike": { password: "Hen@600", role: "student", class: "JSS3" },
  "Nnaka Benita Chiima": { password: "Ben@700", role: "student", class: "JSS3" },
  "Emmade Joseph": { password: "Em@573", role: "student", class: "JSS3" },
  "Dennis Ifechukwu": { password: "Ife@539", role: "student", class: "JSS3" },
  "Chukwuemeka Michael": { password: "Mic@606", role: "student", class: "JSS3" },
  "Chukwuemeka Michaella": { password: "Ela@66", role: "student", class: "JSS3" },
  "Uti Chinedu David": { password: "Ut@506", role: "student", class: "JSS3" },
  "Johnson Mmesomma Favour": { password: "Me@31", role: "student", class: "JSS3" },
  "Nnanna Chikamso Rita": { password: "Rit@99", role: "student", class: "JSS3" },
  "Ekene Goodness Chinemerem": { password: "Gd@99", role: "student", class: "JSS3" },
  "Ibeabuchi Matilda": { password: "Mat@406", role: "student", class: "JSS3" },
  "Nnakeh Miracle": { password: "Mir@419", role: "student", class: "JSS3" },
                              
  "Ginika Maryann": { password: "Gin@34", role: "student", class: "SS1" },
  "Albert Anabel": { password: "Ana@98", role: "student", class: "SS1" },
  "Nwafechukwu-Cyril Flourish": { password: "Flo@23", role: "student", class: "SS1" },

  "Ibeabuchi Majesty": { password: "Maj@96", role: "student", class: "SS2" },
  "Ugbala Success": { password: "Suc@906", role: "student", class: "SS2" },
  "Ashioba Nathan": { password: "Nat@98", role: "student", class: "SS2" },
               
  
  "Effium Emmanuel": { password: "Em@678", role: "student", class: "SS3" },
  "Chinedu Obiakor": { password: "Chi@98", role: "student", class: "SS3" },
  "Njidoka Uche": { password: "Uch@99", role: "student", class: "SS3" },
      
  "Mr. Anonye": { password: "Ab@12", role: "teacher", subjects: ["Computer", "CRS"] },
  "Miss Deborah": { password: "Deb@12", role: "teacher", subjects: ["HomeEconomics", "BusinessStudies"] },
  "Mr. Ken": { password: "Ke#28", role: "teacher", subjects: ["Geography", "Marketing", "CCA"] },
  "Mr. Stanley": { password: "St+50", role: "teacher", subjects: ["Agric", "Biology"] },
  "Mr. Emmanuel": { password: "Em?77", role: "teacher", subjects: [""] },
  "Mr. Chimezie": { password: "Me!98", role: "teacher", subjects: ["Mathematics", "Physics"] },
  "Miss Favour": { password: "Fa$73", role: "teacher", subjects: ["Chemistry", "BasicScience"] },
  "Miss Irene": { password: "Ir+99", role: "teacher", subjects: ["CivicEducation", "Government"] },
  "Miss Chinenye": { password: "Ch?89", role: "teacher", subjects: ["SocialStudies", "BasicTechnology"] },
  "Miss Chidimma": { password: "Ch&99", role: "teacher", subjects: ["English", "Literature"] },
  "Mr. Paul": { password: "Pa@20", role: "teacher", subjects: [""] },
  "Miss Ifeyinwa": { password: "If$78", role: "teacher", subjects: ["Economics"] },
  "Admin": { password: "admin123", role: "admin" }
};


let currentUser = null;

/* ----------------- DOM helpers ----------------- */
const $ = id => document.getElementById(id);

function hideAllDashboards() {
  const ids = ["login-section", "student-dashboard", "teacher-dashboard", "admin-dashboard"];
  ids.forEach(id => {
    const el = $(id);
    if (el) el.classList.add("hidden");
  });
  // hide exam container too
  if ($("exam-container")) $("exam-container").classList.add("hidden");
}

function showSection(sectionId) {
  hideAllDashboards();
  const el = $(sectionId);
  if (el) el.classList.remove("hidden");
}

/* ----------------- Fill week selects & login datalist ----------------- */
function fillWeeks(selectId) {
  const sel = $(selectId);
  if (!sel) return;
  sel.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = `Week ${i}`;
    sel.appendChild(opt);
  }
}

function fillLoginDatalist() {
  const dl = $("user-list");
  if (!dl) return;
  dl.innerHTML = "";
  Object.keys(users).forEach(name => {
    const o = document.createElement("option");
    o.value = name;
    dl.appendChild(o);
  });
}

/* ----------------- Student subject defaults ----------------- */
function fillStudentSubjectOptionsForUser(user) {
  const subjSel = $("student-subject");
  if (!subjSel) return;
  subjSel.innerHTML = "";

  // Junior vs Senior subjects
  const juniorSubs = ["Computer", "CRS", "Agric", "HomeEconomics", "BusinessStudies",
    "SocialStudies", "BasicTechnology", "BasicScience", "CCA", "CivicEducation", "Mathematics", "English", "PHE"];
  const seniorSubs = ["Computer", "English", "Mathematics", "Biology", "Chemistry", "Physics",
  "Economics", "Government", "CivicEducation", "Literature", "Geography", "Agric", "Marketing", "CRS"];

  const subjects = user.class.startsWith("JS") ? juniorSubs : seniorSubs;

  subjects.forEach(s => {
    const o = document.createElement("option");
    o.value = s;
    o.textContent = s;
    subjSel.appendChild(o);
  });
}


/* ----------------- DOMContentLoaded (initial setup) ----------------- */
document.addEventListener("DOMContentLoaded", () => {
  fillWeeks("student-week");
  fillWeeks("q-week");
  fillWeeks("a-week");
  fillLoginDatalist();
  
  // ensure save/edit buttons exist before attaching their handlers (they do in your HTML)
});

/* ----------------- Login handler ----------------- */
if ($("login-btn")) {
  $("login-btn").addEventListener("click", () => {
    const uname = $("username").value.trim();
    const pwd = $("password").value.trim();

    if (!users[uname] || users[uname].password !== pwd) {
      $("login-error").textContent = "Invalid username or password";
      return;
    }
    $("login-error").textContent = "";

    currentUser = uname;
    const user = users[uname];

    if (user.role === "student") {
      // show student dashboard
      $("student-name").textContent = uname;
      showSection("student-dashboard");
      fillStudentSubjectOptionsForUser(user);
      // ensure student subjects exist (already filled on DOMContentLoaded)
    } else if (user.role === "teacher") {
      $("teacher-name").textContent = uname;
      showSection("teacher-dashboard");
      // create datalist for teacher subjects (so teacher can only pick their subjects)
      const existing = document.getElementById("teacher-subjects");
      if (existing) existing.remove(); // avoid duplicates
      const dl = document.createElement("datalist");
      dl.id = "teacher-subjects";
      users[uname].subjects.forEach(s => {
        const o = document.createElement("option");
        o.value = s;
        dl.appendChild(o);
      });
      document.body.appendChild(dl);
      $("q-subject").setAttribute("list", "teacher-subjects");

      // Load current teacher's questions for default class/week
      loadTeacherQuestions(currentUser).catch(err => console.error(err));
    } else { // admin
      showSection("admin-dashboard");
      // admin can manage all subjects — load admin view as teacher load would do
      loadTeacherQuestions(currentUser).catch(err => console.error(err));
    }
  });
}

/* ----------------- Student: load & start exam (auto-render) ----------------- */
if ($("start-exam")) {
  $("start-exam").addEventListener("click", async () => {
    if (!currentUser) { alert("Please login as a student."); return; }
    const user = users[currentUser];
    if (!user || user.role !== "student") { alert("You must be logged in as a student."); return; }

    const cls = user.class;
    const subject = $("student-subject").value;
    const week = $("student-week").value;

    try {
      const snap = await get(ref(db, `questions/${cls}/${subject}/${week}`));
      if (!snap.exists()) {
        alert("No questions available for this subject/week.");
        return;
      }
      // keep the key order stable: convert to array of {id, ...q}
      const data = Object.entries(snap.val()).map(([id, q]) => ({ id, ...q }));
      startExam(cls, subject, week, data);
    } catch (err) {
      console.error("Failed to load questions:", err);
      alert("Error loading questions. See console for details.");
    }
  });
}

/* Render & run the exam */
function startExam(cls, subject, week, questions) {
  if (!questions || questions.length === 0) { alert("No questions to start."); return; }

  $("exam-container").classList.remove("hidden");
  let currentIndex = 0;
  const answers = new Array(questions.length).fill(null);

  // show counts
  $("qtotal").textContent = String(questions.length);

  function render() {
    const q = questions[currentIndex];
    $("qpos").textContent = String(currentIndex + 1);
    let html = `<p><strong>Q${currentIndex + 1}:</strong> ${escapeHtml(q.text)}</p>`;
    if (q.image) html += `<img src="${escapeHtml(q.image)}" style="max-width:320px; display:block; margin:8px 0;">`;
    html += `<div class="options">`;
    (q.options || []).forEach((opt, i) => {
      const checked = answers[currentIndex] === i ? "checked" : "";
      html += `<label style="display:block;margin:6px 0;"><input type="radio" name="ans" value="${i}" ${checked}> ${escapeHtml(opt)}</label>`;
    });
    html += `</div>`;
    $("question-box").innerHTML = html;

    // wire radio change
    document.querySelectorAll("input[name='ans']").forEach(r => {
      r.addEventListener("change", () => {
        answers[currentIndex] = parseInt(r.value, 10);
      });
    });

    // toggle submit button visibility
    if (currentIndex === questions.length - 1) $("submit-btn").classList.remove("hidden");
    else $("submit-btn").classList.add("hidden");
  }

  // nav handlers
  $("next-btn").onclick = () => {
    if (currentIndex < questions.length - 1) { currentIndex++; render(); }
  };
  $("prev-btn").onclick = () => {
    if (currentIndex > 0) { currentIndex--; render(); }
  };

  // submit handler: score & save results
  $("submit-btn").onclick = async () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] !== null && Number(q.answer) === Number(answers[idx])) score++;
    });
    const total = questions.length;

    alert(`Submitted!\nSubject: ${subject}\nWeek: ${week}\nScore: ${score}/${total}`);

    // save result to DB as results/{class}/{subject}/{week}/{studentName}
    try {
      await set(ref(db, `results/${cls}/${subject}/${week}/${currentUser}`), {
        score, total, timestamp: Date.now()
      });
    } catch (err) {
      console.error("Failed to save result:", err);
    }

    // cleanup UI
    $("exam-container").classList.add("hidden");
    $("question-box").innerHTML = "";
    $("qpos").textContent = "1";
    $("qtotal").textContent = "0";
  };

  render();
}

/* escape small bit of html output to prevent accidental markup */
function escapeHtml(s) {
  if (s === undefined || s === null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ----------------- Teacher/Admin: save question (create/update) ----------------- */
if ($("save-question")) {
  $("save-question").addEventListener("click", async () => {
    if (!currentUser) { alert("Please login as teacher or admin."); return; }
    const role = users[currentUser].role;
    if (!(role === "teacher" || role === "admin")) { alert("Only teachers or admin can save questions."); return; }

    const cls = $("q-class").value;
    const subject = $("q-subject").value.trim();
    const week = $("q-week").value;
    if (!cls || !subject || !week) { alert("Please select class, subject and week."); return; }

    // enforce teacher subject permission
    if (role === "teacher" && !users[currentUser].subjects.includes(subject)) {
      alert("You may only manage questions for your assigned subjects.");
      return;
    }

    const qdata = {
      text: $("q-text").value.trim(),
      options: [
        $("optA").value.trim(), $("optB").value.trim(), $("optC").value.trim(), $("optD").value.trim()
      ],
      answer: Number($("q-answer").value),
      image: $("q-image").value.trim() || null
    };

    if (!qdata.text || qdata.options.some(o => o === "")) { alert("Please fill question and all options."); return; }

    try {
      const editId = $("save-question").dataset.editId;
      if (editId) {
        // update existing
        await update(ref(db, `questions/${cls}/${subject}/${week}/${editId}`), qdata);
        delete $("save-question").dataset.editId;
        alert("Question updated.");
      } else {
        // create new
        await push(ref(db, `questions/${cls}/${subject}/${week}`), qdata);
        alert("Question saved.");
      }

      // clear teacher form for further entries
      $("q-text").value = "";
      $("optA").value = "";
      $("optB").value = "";
      $("optC").value = "";
      $("optD").value = "";
      $("q-answer").value = "";
      $("q-image").value = "";

      // refresh list
      loadTeacherQuestions(currentUser).catch(err => console.error(err));
    } catch (err) {
      console.error("Save question failed:", err);
      alert("Failed to save question. Check console.");
    }
  });
}

/* ----------------- Load teacher/admin questions for chosen class/week ----------------- */
async function loadTeacherQuestions(userName) {
  if (!userName) return;
  const role = users[userName].role;
  const cls = $("q-class").value;
  const week = $("q-week").value;

  const container = $("teacher-questions");
  if (!container) return;
  container.innerHTML = "<p>Loading...</p>";

  try {
    const snap = await get(ref(db, `questions/${cls}`));
    if (!snap.exists()) {
      container.innerHTML = "<p>No questions found for this class.</p>";
      return;
    }
    const allData = snap.val();
    let html = "";
    const subjectsToCheck = (role === "teacher") ? users[userName].subjects : Object.keys(allData || {});
    subjectsToCheck.forEach(subject => {
      if (allData[subject] && allData[subject][week]) {
        const qset = allData[subject][week];
        for (const [qid, q] of Object.entries(qset)) {
          html += `
            <div class="q-item" style="border:1px solid #ddd;padding:8px;margin:8px 0;">
              <p><strong>${escapeHtml(subject)}</strong> — Week ${escapeHtml(week)}</p>
              <p>${escapeHtml(q.text)}</p>
              <p style="font-size:0.9em;color:#555">Options: ${ (q.options||[]).map(o => escapeHtml(o)).join(" | ") }</p>
              <p style="font-size:0.9em;color:#555">Answer: ${escapeHtml(String(q.answer))}</p>
              <div>
                <button data-qid="${qid}" data-sub="${escapeHtml(subject)}" data-wk="${escapeHtml(week)}" class="edit-q">Edit</button>
                <button data-qid="${qid}" data-sub="${escapeHtml(subject)}" data-wk="${escapeHtml(week)}" class="del-q">Delete</button>
              </div>
            </div>
          `;
        }
      }
    });

    container.innerHTML = html || "<p>No questions found for your subjects/week.</p>";

    // wire up edit/delete buttons
    container.querySelectorAll(".edit-q").forEach(btn => {
      btn.addEventListener("click", () => {
        const subject = btn.getAttribute("data-sub");
        const week = btn.getAttribute("data-wk");
        const qid = btn.getAttribute("data-qid");
        window.editQuestion(cls, subject, week, qid);
      });
    });
    container.querySelectorAll(".del-q").forEach(btn => {
      btn.addEventListener("click", async () => {
        if (!confirm("Delete this question?")) return;
        const subject = btn.getAttribute("data-sub");
        const week = btn.getAttribute("data-wk");
        const qid = btn.getAttribute("data-qid");
        await remove(ref(db, `questions/${cls}/${subject}/${week}/${qid}`));
        loadTeacherQuestions(userName);
      });
    });

  } catch (err) {
    console.error("Error loading teacher questions:", err);
    container.innerHTML = "<p>Error loading questions. See console.</p>";
  }
}

/* expose edit function globally (so inline handlers or created buttons can call it) */
window.editQuestion = async (cls, subject, week, qid) => {
  try {
    const snap = await get(ref(db, `questions/${cls}/${subject}/${week}/${qid}`));
    if (!snap.exists()) { alert("Question not found."); return; }
    const q = snap.val();
    // populate form for editing
    $("q-class").value = cls;
    $("q-subject").value = subject;
    $("q-week").value = week;
    $("q-text").value = q.text;
    $("optA").value = q.options?.[0] || "";
    $("optB").value = q.options?.[1] || "";
    $("optC").value = q.options?.[2] || "";
    $("optD").value = q.options?.[3] || "";
    $("q-answer").value = q.answer;
    $("q-image").value = q.image || "";
    $("save-question").dataset.editId = qid; // mark edit mode
    // ensure teacher dashboard visible
    showSection("teacher-dashboard");
  } catch (err) {
    console.error("editQuestion error:", err);
  }
};

window.deleteQuestion = async (cls, subject, week, qid) => {
  if (!confirm("Delete this question?")) return;
  try {
    await remove(ref(db, `questions/${cls}/${subject}/${week}/${qid}`));
    if (currentUser) loadTeacherQuestions(currentUser);
  } catch (err) {
    console.error("deleteQuestion error:", err);
  }
};

/* auto reload teacher list when class/week changes (only if logged in teacher/admin) */
["q-class", "q-week"].forEach(id => {
  const el = $(id);
  if (!el) return;
  el.addEventListener("change", () => {
    if (!currentUser) return;
    const role = users[currentUser].role;
    if (role === "teacher" || role === "admin") {
      loadTeacherQuestions(currentUser).catch(e => console.error(e));
    }
  });
});

/* Also load teacher questions when admin changes a-class/a-week on admin page (optional) */
["a-class", "a-week"].forEach(id => {
  const el = $(id);
  if (!el) return;
  el.addEventListener("change", () => {
    if (!currentUser) return;
    if (users[currentUser].role === "admin") {
      // reuse teacher list rendering but for admin we have separate container 'admin-questions'
      // simple approach: call loadTeacherQuestions(admin) which will read from q-class/q-week, but you may prefer separate admin listing.
      loadTeacherQuestions(currentUser).catch(e => console.error(e));
    }
  });
});
