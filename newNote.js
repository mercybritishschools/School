// ----------------------------
// Global Variables
// ----------------------------
let currentUser = null;
let lessonNotes = [];  // Holds all notes in memory
let editIndex = null;  // Track index when editing

// Reference to Firebase DB
const dbRef = firebase.database().ref("lessonNotes");

// ----------------------------
// Login Users (you can expand this later or store in Firebase)
// ----------------------------
const users = {
  "teacher1": { password: "pass123", role: "teacher" },
  "teacher2": { password: "pass456", role: "teacher" },
  "admin": { password: "admin123", role: "admin" },
  "student1": { password: "stud123", role: "student" },
  "student2": { password: "stud456", role: "student" }
};

// ----------------------------
// Elements
// ----------------------------
const loginSection = document.getElementById("login-section");
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");

const studentDashboard = document.getElementById("student-dashboard");
const studentName = document.getElementById("student-name");
const studentNotes = document.getElementById("student-notes");

const manageDashboard = document.getElementById("manage-dashboard");
const manageName = document.getElementById("manage-name");
const manageNotes = document.getElementById("manage-notes");
const addNoteBtn = document.getElementById("add-note-btn");

const noteFormSection = document.getElementById("note-form");
const lessonForm = document.getElementById("lesson-form");
const formTitle = document.getElementById("form-title");

const noteClass = document.getElementById("note-class");
const noteSubject = document.getElementById("note-subject");
const noteWeek = document.getElementById("note-week");
const noteTopic = document.getElementById("note-topic");
const noteObjectives = document.getElementById("note-objectives");
const subtopicsContainer = document.getElementById("subtopics-container");
const addSubtopicBtn = document.getElementById("add-subtopic");
const cancelNoteBtn = document.getElementById("cancel-note");

// ----------------------------
// Firebase Listener (Realtime sync)
// ----------------------------
dbRef.on("value", snapshot => {
  lessonNotes = snapshot.val() || [];
  renderNotes();
});

// ----------------------------
// Login Functionality
// ----------------------------
loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (users[username] && users[username].password === password) {
    currentUser = { username, role: users[username].role };
    loginError.textContent = "";
    loginSection.classList.add("hidden");

    if (currentUser.role === "student") {
      studentDashboard.classList.remove("hidden");
      studentName.textContent = username;
      renderStudentNotes();
    } else {
      manageDashboard.classList.remove("hidden");
      manageName.textContent = username;
      renderManageNotes();
    }
  } else {
    loginError.textContent = "Invalid username or password.";
  }
});

// ----------------------------
// Add Subtopic Input
// ----------------------------
addSubtopicBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerHTML = `
    <label>Subtopic: <input type="text" class="subtopic-title"></label>
    <label>Body: <textarea class="subtopic-body"></textarea></label>
  `;
  subtopicsContainer.appendChild(div);
});

// ----------------------------
// Save Lesson Note
// ----------------------------
lessonForm.addEventListener("submit", e => {
  e.preventDefault();

  const newNote = {
    class: noteClass.value,
    subject: noteSubject.value,
    week: noteWeek.value,
    topic: noteTopic.value,
    objectives: noteObjectives.value,
    subtopics: []
  };

  document.querySelectorAll("#subtopics-container div").forEach(div => {
    const title = div.querySelector(".subtopic-title").value;
    const body = div.querySelector(".subtopic-body").value;
    newNote.subtopics.push({ title, body });
  });

  if (editIndex !== null) {
    // Update existing note
    lessonNotes[editIndex] = newNote;
    editIndex = null;
  } else {
    // Add new note
    lessonNotes.push(newNote);
  }

  // Save to Firebase
  dbRef.set(lessonNotes);

  noteFormSection.classList.add("hidden");
  lessonForm.reset();
  subtopicsContainer.innerHTML = "";
});

// ----------------------------
// Cancel Note Editing
// ----------------------------
cancelNoteBtn.addEventListener("click", () => {
  lessonForm.reset();
  subtopicsContainer.innerHTML = "";
  editIndex = null;
  noteFormSection.classList.add("hidden");
});

// ----------------------------
// Render Notes for Students
// ----------------------------
function renderStudentNotes() {
  studentNotes.innerHTML = "";
  lessonNotes.forEach(note => {
    const div = document.createElement("div");
    div.classList.add("note-card");
    div.innerHTML = `
      <h4>${note.class} - ${note.subject} (Week ${note.week})</h4>
      <p><strong>Topic:</strong> ${note.topic}</p>
      <p><strong>Objectives:</strong> ${note.objectives}</p>
      <div>${note.subtopics.map(st => `<p><b>${st.title}:</b> ${st.body}</p>`).join("")}</div>
    `;
    studentNotes.appendChild(div);
  });
}

// ----------------------------
// Render Notes for Teachers/Admin
// ----------------------------
function renderManageNotes() {
  manageNotes.innerHTML = "";
  lessonNotes.forEach((note, index) => {
    const div = document.createElement("div");
    div.classList.add("note-card");
    div.innerHTML = `
      <h4>${note.class} - ${note.subject} (Week ${note.week})</h4>
      <p><strong>Topic:</strong> ${note.topic}</p>
      <button onclick="editNote(${index})">✏️ Edit</button>
      <button onclick="deleteNote(${index})">🗑️ Delete</button>
    `;
    manageNotes.appendChild(div);
  });
}

// ----------------------------
// Edit Note
// ----------------------------
window.editNote = function(index) {
  const note = lessonNotes[index];
  editIndex = index;

  noteClass.value = note.class;
  noteSubject.value = note.subject;
  noteWeek.value = note.week;
  noteTopic.value = note.topic;
  noteObjectives.value = note.objectives;

  subtopicsContainer.innerHTML = "";
  note.subtopics.forEach(st => {
    const div = document.createElement("div");
    div.innerHTML = `
      <label>Subtopic: <input type="text" class="subtopic-title" value="${st.title}"></label>
      <label>Body: <textarea class="subtopic-body">${st.body}</textarea></label>
    `;
    subtopicsContainer.appendChild(div);
  });

  formTitle.textContent = "Edit Note";
  noteFormSection.classList.remove("hidden");
};

// ----------------------------
// Delete Note
// ----------------------------
window.deleteNote = function(index) {
  if (confirm("Delete this note?")) {
    lessonNotes.splice(index, 1);
    dbRef.set(lessonNotes);
  }
};

// ----------------------------
// Add New Note
// ----------------------------
addNoteBtn.addEventListener("click", () => {
  editIndex = null;
  lessonForm.reset();
  subtopicsContainer.innerHTML = "";
  formTitle.textContent = "Add Note";
  noteFormSection.classList.remove("hidden");
});

// ----------------------------
// Render Notes After Sync
// ----------------------------
function renderNotes() {
  if (!currentUser) return;
  if (currentUser.role === "student") {
    renderStudentNotes();
  } else {
    renderManageNotes();
  }
}
