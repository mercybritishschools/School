// Predefined users
const users = {
  "Ugbechie Rejoice": { password: "Re@608", role: "student", class: "JSS1" },
  "Chima Solomon": { password: "So@231", role: "student", class: "JSS1" },

  "Victor Abel": { password: "Vic@869", role: "student", class: "JSS2" },
  "Favour Memeh": { password: "Fav@981", role: "student", class: "JSS2" },
  "Ifechukwude Miracle": { password: "Mi@052", role: "student", class: "JSS2" },
  "Benard Gift": { password: "Gif@518", role: "student", class: "JSS2" },
  "Okoro Ebube": { password: "Eb@008", role: "student", class: "JSS2" },
  "Ogolo Success": { password: "Su@272", role: "student", class: "JSS2" },
  "Dennis Ozioma": { password: "Oz@184", role: "student", class: "JSS2" },
  "Effium Winifred": { password: "Win@678", role: "student", class: "JSS2" },
  "Okafor Lucky": { password: "Lu@220", role: "student", class: "JSS2" },

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

  "Effium Emmanuel": { password: "Em@678", role: "student", class: "SS3" },
  
  "Mr. Anonye": { password: "Ab@12", role: "teacher", subjects: ["Computer", "CRS"] },
  "Miss Deborah": { password: "Deb@12", role: "teacher", subjects: ["HomeEconomics", "BusinessStudies"] },
  "Mr. Ken": { password: "Ke#28", role: "teacher", subjects: ["Geography", "Marketing", "CCA"] },
  "Mr. Stanley": { password: "St+50", role: "teacher", subjects: ["Agric", "Biology"] },
  "Mr. Emmanuel": { password: "Em?77", role: "teacher", subjects: [""] },
  "Mr. Chimezie": { password: "Me!98", role: "teacher", subjects: ["Mathematics", "Physics"] },
  "Miss Favour": { password: "Fa$73", role: "teacher", subjects: ["Chemistry", "BasicScience"] },
  "Miss Irene": { password: "Ir+99", role: "teacher", subjects: ["CivicEducation"] },
  "Miss Chinenye": { password: "Ch?89", role: "teacher", subjects: ["SocialStudies"] },
  "Miss Chidimma": { password: "Ch&99", role: "teacher", subjects: ["English", "Literature"] },
  "Mr. Paul": { password: "Pa@20", role: "teacher", subjects: [""] },
  "Miss Ifenyinwa": { password: "If$78", role: "teacher", subjects: ["Economics"] },
  "Admin": { password: "admin123", role: "admin" }
};

  // Load saved notes
  let lessonNotes = JSON.parse(localStorage.getItem("lessonNotes")) || [];
  
  // Track editing
  let editingIndex = null;
  
  // DOM elements
  const loginSection = document.getElementById("login-section");
  const studentDashboard = document.getElementById("student-dashboard");
  const manageDashboard = document.getElementById("manage-dashboard");
  const noteForm = document.getElementById("note-form");
  const manageNotesDiv = document.getElementById("manage-notes");
  const studentNotesDiv = document.getElementById("student-notes");
  
  // Populate username datalist
  const userList = document.getElementById("user-list");
  Object.keys(users).forEach(u => {
    let opt = document.createElement("option");
    opt.value = u;
    userList.appendChild(opt);
  });
  
  // Login
  document.getElementById("login-btn").onclick = () => {
    const uname = document.getElementById("username").value.trim();
    const pwd = document.getElementById("password").value.trim();
    const user = users[uname];
    if (user && user.password === pwd) {
      loginSection.classList.add("hidden");
      if (user.role === "student") {
        document.getElementById("student-name").textContent = uname;
        showStudentNotes(user.class);
        studentDashboard.classList.remove("hidden");
      } else {
        document.getElementById("manage-name").textContent = uname;
        showManageNotes(user);
        manageDashboard.classList.remove("hidden");
      }
    } else {
      document.getElementById("login-error").textContent = "Invalid login.";
    }
  };
  
  // Show student notes
  function showStudentNotes(cls) {
    studentNotesDiv.innerHTML = "";
    const notes = lessonNotes.filter(n => n.class === cls);
    notes.forEach(note => {
      studentNotesDiv.innerHTML += renderNote(note);
    });
  }
  
  // Show manage (teacher/admin) notes
  function showManageNotes(user) {
    manageNotesDiv.innerHTML = "";
    let notes = [];
    if (user.role === "teacher") {
      notes = lessonNotes.filter(n => user.subjects.includes(n.subject));
    } else if (user.role === "admin") {
      notes = lessonNotes;
    }
    notes.forEach((note, index) => {
      manageNotesDiv.innerHTML += renderNote(note, index, user);
    });
  }
  
  // Render note
  function renderNote(note, index = null, user = null) {
    let html = `
      <div class="note">
        <h4>${note.class} - ${note.subject} (Week ${note.week})</h4>
        <h5>${note.topic}</h5>
        <p><strong>Objectives:</strong> ${note.objectives}</p>
    `;
    note.subtopics.forEach(st => {
      html += `<h5>${st.title}</h5>`;
      html += `<p>${st.text}</p>`;
      if (st.img) {
        html += `<img src="${st.img}" alt="illustration" style="max-width:100%;">`;
      }
    });
    if (user && (user.role === "admin" || (user.role === "teacher" && user.subjects.includes(note.subject)))) {
      html += `
        <button onclick="editNote(${index})">Edit</button>
        <button onclick="deleteNote(${index}, '${user.role}', ${JSON.stringify(user.subjects)})">Delete</button>
      `;
    }
    html += `</div>`;
    return html;
  }
  
  // Add new note
  document.getElementById("add-note-btn").onclick = () => {
    editingIndex = null;
    document.getElementById("lesson-form").reset();
    document.getElementById("subtopics-container").innerHTML = "";
    noteForm.classList.remove("hidden");
    manageDashboard.classList.add("hidden");
  };
  
  // Cancel note form
  document.getElementById("cancel-note").onclick = () => {
    noteForm.classList.add("hidden");
    manageDashboard.classList.remove("hidden");
  };
  
  // Add subtopic
  document.getElementById("add-subtopic").onclick = () => {
    addSubtopicBlock();
  };
  
  function addSubtopicBlock(title = "", text = "", img = "") {
    const div = document.createElement("div");
    div.className = "subtopic-block";
    div.innerHTML = `
      <label>Subtopic Title:<input type="text" value="${title}"></label>
      <label>Paragraph:<textarea>${text}</textarea></label>
      <label>Image URL:<input type="text" value="${img}"></label>
      <button type="button" onclick="this.parentElement.remove()">Remove Subtopic</button>
    `;
    document.getElementById("subtopics-container").appendChild(div);
  }
  
  // Save note
  document.getElementById("lesson-form").onsubmit = (e) => {
    e.preventDefault();
    const note = {
      class: document.getElementById("note-class").value,
      subject: document.getElementById("note-subject").value,
      week: document.getElementById("note-week").value,
      topic: document.getElementById("note-topic").value,
      objectives: document.getElementById("note-objectives").value,
      subtopics: []
    };
    document.querySelectorAll(".subtopic-block").forEach(block => {
      const inputs = block.querySelectorAll("input, textarea");
      note.subtopics.push({
        title: inputs[0].value,
        text: inputs[1].value,
        img: inputs[2].value
      });
    });
  
    if (editingIndex !== null) {
      lessonNotes[editingIndex] = note;
    } else {
      lessonNotes.push(note);
    }
    localStorage.setItem("lessonNotes", JSON.stringify(lessonNotes));
    noteForm.classList.add("hidden");
    manageDashboard.classList.remove("hidden");
    showManageNotes(users[document.getElementById("manage-name").textContent]);
  };
  
  // Edit note
  function editNote(index) {
    editingIndex = index;
    const note = lessonNotes[index];
    document.getElementById("note-class").value = note.class;
    document.getElementById("note-subject").value = note.subject;
    document.getElementById("note-week").value = note.week;
    document.getElementById("note-topic").value = note.topic;
    document.getElementById("note-objectives").value = note.objectives;
    document.getElementById("subtopics-container").innerHTML = "";
    note.subtopics.forEach(st => addSubtopicBlock(st.title, st.text, st.img));
    noteForm.classList.remove("hidden");
    manageDashboard.classList.add("hidden");
  }
  
  // Delete note
  function deleteNote(index, role, subjects) {
    const note = lessonNotes[index];
    if (role === "teacher" && !subjects.includes(note.subject)) {
      alert("You can only delete your own subject notes.");
      return;
    }
    if (confirm("Delete this note?")) {
      lessonNotes.splice(index, 1);
      localStorage.setItem("lessonNotes", JSON.stringify(lessonNotes));
      showManageNotes(users[document.getElementById("manage-name").textContent]);
    }
  }

  

