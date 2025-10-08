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
  "Lovely Osaigbovo": { password: "Osai@888", role: "student", class: "JSS3" },
                                 
  "Ginika Maryann": { password: "Gin@34", role: "student", class: "SS1" },
  "Albert Anabel": { password: "Ana@98", role: "student", class: "SS1" },
  "Nwafechukwu-Cyril Flourish": { password: "Flo@23", role: "student", class: "SS1" },
  "Chidimma Adelani": { password: "Chi@203", role: "student", class: "SS1" },
  "Sebastian Praise": { password: "Prai@419", role: "student", class: "SS1" },
  "Njidoka Chioma": { password: "Chi@504", role: "student", class: "SS1" },
  "Anabel Albert": { password: "Ana@333", role: "student", class: "SS1" },
  "Okorie Ekene": { password: "Eke@222", role: "student", class: "SS1" },
  "Onyekachukwu Rejoice": { password: "Rej@111", role: "student", class: "SS1" },

 
 
  "Ibeabuchi Majesty": { password: "Maj@96", role: "student", class: "SS2" },
  "Ugbala Success": { password: "Suc@906", role: "student", class: "SS2" },
  "Mmuodebe Amarachi Favour": { password: "Ama@666", role: "student", class: "SS2" },
  "Ashioba Nathan": { password: "Nat@98", role: "student", class: "SS2" },
  "Nosike Dominion": { password: "Dom@91", role: "student", class: "SS2" },

  
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
