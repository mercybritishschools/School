  /******************************************
   * NOTES APP — uses Firebase Realtime DB
   ******************************************/

  // ---------- Predefined users (for login & datalist suggestions) ----------
  // (Use your real list. This sample uses the users you provided earlier.)
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

  // ---------- DOM references ----------
  const $ = id => document.getElementById(id);
  const loginSection = $('login-section');
  const usernameInput = $('username');
  const passwordInput = $('password');
  const loginBtn = $('login-btn');
  const clearBtn = $('clear-btn');
  const loginError = $('login-error');
  const userDatalist = $('user-list');

  const studentDashboard = $('student-dashboard');
  const studentNameEl = $('student-name');
  const studentNotesDiv = $('student-notes');

  const manageDashboard = $('manage-dashboard');
  const manageNameEl = $('manage-name');
  const manageNotesDiv = $('manage-notes');
  const addNoteBtn = $('add-note-btn');
  const refreshBtn = $('refresh-btn');
  const logoutBtn = $('logout-btn');

  const noteFormSection = $('note-form');
  const lessonForm = $('lesson-form');
  const formTitle = $('form-title');
  const noteClass = $('note-class');
  const noteSubject = $('note-subject');
  const noteWeek = $('note-week');
  const noteTopic = $('note-topic');
  const noteObjectives = $('note-objectives');
  const subtopicsContainer = $('subtopics-container');
  const addSubtopicBtn = $('add-subtopic');
  const cancelNoteBtn = $('cancel-note');
  const saveNoteBtn = $('save-note');

  // ---------- State ----------
  let currentUser = null;            // { name, role, class?, subjects? }
  let lessonNotesArr = [];          // array of notes with id
  let editingId = null;             // firebase key when editing

  // ---------- Firebase reference ----------
  const notesRef = db.ref('lessonNotes'); // root for notes

  // ---------- Populate username datalist (suggestions as user types) ----------
  function populateUserDatalist() {
    userDatalist.innerHTML = '';
    Object.keys(users).forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      userDatalist.appendChild(opt);
    });
  }
  populateUserDatalist();

  // ---------- Listen for realtime changes in notes ----------
  notesRef.on('value', snapshot => {
    const val = snapshot.val() || {};
    // convert object map into array with id
    lessonNotesArr = Object.keys(val).map(k => ({ id: k, ...val[k] }));
    // keep them sorted by createdAt (if present)
    lessonNotesArr.sort((a,b) => (b.createdAt || 0) - (a.createdAt || 0));
    // refresh UI relevant view
    if (currentUser) renderNotesFor(currentUser);
  });

  // ---------- Login / Clear / Logout ----------
  loginBtn.addEventListener('click', () => {
    const uname = usernameInput.value.trim();
    const pwd = passwordInput.value.trim();
    loginError.textContent = '';

    if (!uname) {
      loginError.textContent = 'Enter username.';
      return;
    }
    const u = users[uname];
    if (!u || u.password !== pwd) {
      loginError.textContent = 'Invalid username or password.';
      return;
    }

    // success
    currentUser = { name: uname, role: u.role };
    if (u.role === 'student') currentUser.class = u.class;
    if (u.role === 'teacher') currentUser.subjects = Array.isArray(u.subjects) ? u.subjects : (u.subjects ? [u.subjects] : []);
    // show dashboard
    loginSection.classList.add('hidden');
    if (currentUser.role === 'student') {
      studentDashboard.classList.remove('hidden');
      studentNameEl.textContent = currentUser.name;
      renderStudentNotes();
    } else {
      manageDashboard.classList.remove('hidden');
      manageNameEl.textContent = currentUser.name;
      renderManageNotes();
    }
  });

  clearBtn.addEventListener('click', () => {
    usernameInput.value = '';
    passwordInput.value = '';
    loginError.textContent = '';
  });

  logoutBtn.addEventListener('click', () => {
    // simple logout UI reset
    currentUser = null;
    editingId = null;
    lessonForm.reset();
    subtopicsContainer.innerHTML = '';
    loginSection.classList.remove('hidden');
    studentDashboard.classList.add('hidden');
    manageDashboard.classList.add('hidden');
    noteFormSection.classList.add('hidden');
    usernameInput.value = ''; passwordInput.value = '';
  });

  // ---------- Render helpers ----------
  function renderNotesFor(user) {
    if (!user) return;
    if (user.role === 'student') renderStudentNotes();
    else renderManageNotes();
  }

  function renderStudentNotes() {
    studentNotesDiv.innerHTML = '';
    if (!currentUser || currentUser.role !== 'student') return;
    const cls = currentUser.class;
    const notes = lessonNotesArr.filter(n => (n.class === cls));
    if (!notes.length) {
      studentNotesDiv.innerHTML = '<p>No notes available for your class yet.</p>';
      return;
    }
    notes.forEach(n => {
      studentNotesDiv.appendChild(createNoteCardForStudent(n));
    });
  }

  function createNoteCardForStudent(note) {
    const div = document.createElement('div');
    div.className = 'note-card';
    div.innerHTML = `
      <h4>${note.class} — ${note.subject} (Week ${note.week})</h4>
      <h5 style="margin:0.25rem 0 0.5rem 0;">${note.topic || ''}</h5>
      <p><strong>Objectives:</strong> ${escapeHtml(note.objectives || '')}</p>
      <div class="subtopics-list"></div>
      <p style="font-size:0.85rem;color:#666;margin-top:0.5rem;">${note.author ? 'By: ' + escapeHtml(note.author) : ''} ${note.createdAt ? ' • ' + new Date(note.createdAt).toLocaleString() : ''}</p>
    `;
    const list = div.querySelector('.subtopics-list');
    (note.subtopics || []).forEach(st => {
      const s = document.createElement('div');
      s.innerHTML = `<h5 style="margin:0.4rem 0 0.1rem 0;">${escapeHtml(st.title || '')}</h5>
                     <p style="margin:0;">${escapeHtml(st.body || '')}</p>`;
      if (st.img) {
        const im = document.createElement('img');
        im.className = 'note-img';
        im.src = st.img;
        im.alt = st.title || 'illustration';
        s.appendChild(im);
      }
      list.appendChild(s);
    });
    return div;
  }

  function renderManageNotes() {
    manageNotesDiv.innerHTML = '';
    if (!currentUser) return;

    const isAdmin = currentUser.role === 'admin';
    const teacherSubjects = currentUser.role === 'teacher' ? currentUser.subjects : [];

    // choose which notes to show
    const notesToShow = lessonNotesArr.filter(n => {
      if (isAdmin) return true;
      if (currentUser.role === 'teacher') return teacherSubjects.includes(n.subject);
      return false;
    });

    if (!notesToShow.length) {
      manageNotesDiv.innerHTML = '<p>No notes to manage (for your subjects / all classes).</p>';
      return;
    }

    notesToShow.forEach(n => {
      const div = document.createElement('div');
      div.className = 'note-card';
      div.innerHTML = `
        <h4>${n.class} — ${n.subject} (Week ${n.week})</h4>
        <h5 style="margin:0.25rem 0 0.5rem 0">${n.topic || ''}</h5>
        <p><strong>Objectives:</strong> ${escapeHtml(n.objectives || '')}</p>
        <div style="display:flex;gap:0.5rem;margin-top:0.5rem;"></div>
        <div style="font-size:0.85rem;color:#666;margin-top:0.5rem;">${n.author ? 'By: ' + escapeHtml(n.author) : ''} ${n.createdAt ? ' • ' + new Date(n.createdAt).toLocaleString() : ''}</div>
      `;
      const ctrlDiv = div.querySelector('div[style^="display:flex"]');
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.onclick = () => attemptEditNote(n.id);
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.onclick = () => attemptDeleteNote(n.id, n.subject);
      ctrlDiv.appendChild(editBtn);
      ctrlDiv.appendChild(delBtn);
      manageNotesDiv.appendChild(div);
    });
  }

  // ---------- Add / Edit / Delete notes (teacher/admin) ----------
  addNoteBtn.addEventListener('click', () => {
    if (!currentUser) return;
    editingId = null;
    lessonForm.reset();
    subtopicsContainer.innerHTML = '';
    formTitle.textContent = 'Add Note';
    noteFormSection.classList.remove('hidden');
    manageDashboard.classList.add('hidden');
  });

  addSubtopicBtn.addEventListener('click', () => addSubtopicBlock());

  function addSubtopicBlock(title = '', body = '', img = '') {
    const wrapper = document.createElement('div');
    wrapper.className = 'subtopic-block';
    wrapper.innerHTML = `
      <label>Title:<input type="text" class="st-title" value="${escapeAttr(title)}"></label>
      <label>Paragraph:<textarea class="st-body">${escapeHtml(body)}</textarea></label>
      <label>Image URL (optional):<input type="text" class="st-img" value="${escapeAttr(img)}"></label>
      <div class="controls"><button type="button" class="remove-st">Remove</button></div>
    `;
    wrapper.querySelector('.remove-st').onclick = () => wrapper.remove();
    subtopicsContainer.appendChild(wrapper);
  }

  // Save (add or update)
  lessonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentUser || !(currentUser.role === 'teacher' || currentUser.role === 'admin')) {
      alert('Only teachers or admin can save notes.');
      return;
    }

    const payload = {
      class: noteClass.value,
      subject: noteSubject.value.trim(),
      week: noteWeek.value,
      topic: noteTopic.value.trim(),
      objectives: noteObjectives.value.trim(),
      subtopics: [],
      author: currentUser.name,
      createdAt: Date.now()
    };

    // collect subtopics
    const blocks = subtopicsContainer.querySelectorAll('.subtopic-block');
    blocks.forEach(b => {
      const title = b.querySelector('.st-title').value.trim();
      const body = b.querySelector('.st-body').value.trim();
      const img = b.querySelector('.st-img').value.trim();
      payload.subtopics.push({ title, body, img });
    });

    // Permission check: teacher can only add notes for his subjects
    if (currentUser.role === 'teacher') {
      const allowed = currentUser.subjects.includes(payload.subject);
      if (!allowed) {
        if (!confirm('Warning: You are adding a note for a subject not in your subject list. Proceed?')) return;
      }
    }

    if (editingId) {
      // update
      notesRef.child(editingId).set(payload).then(() => {
        editingId = null;
        noteFormSection.classList.add('hidden');
        manageDashboard.classList.remove('hidden');
      }).catch(err => alert('Save failed: ' + err.message));
    } else {
      // push new
      notesRef.push(payload).then(() => {
        noteFormSection.classList.add('hidden');
        manageDashboard.classList.remove('hidden');
      }).catch(err => alert('Save failed: ' + err.message));
    }
  });

  cancelNoteBtn.addEventListener('click', () => {
    editingId = null;
    lessonForm.reset();
    subtopicsContainer.innerHTML = '';
    noteFormSection.classList.add('hidden');
    manageDashboard.classList.remove('hidden');
  });

  // Edit attempt — check permission then populate form
  function attemptEditNote(id) {
    if (!currentUser) return;
    const note = lessonNotesArr.find(n => n.id === id);
    if (!note) { alert('Note not found'); return; }
    if (currentUser.role === 'teacher' && !currentUser.subjects.includes(note.subject)) {
      alert('You may only edit notes for your subjects.');
      return;
    }
    // populate form
    editingId = id;
    noteClass.value = note.class || 'JSS1';
    noteSubject.value = note.subject || '';
    noteWeek.value = note.week || '1';
    noteTopic.value = note.topic || '';
    noteObjectives.value = note.objectives || '';
    subtopicsContainer.innerHTML = '';
    (note.subtopics || []).forEach(st => addSubtopicBlock(st.title, st.body, st.img));
    formTitle.textContent = 'Edit Note';
    noteFormSection.classList.remove('hidden');
    manageDashboard.classList.add('hidden');
  }

  // Delete attempt — check permission
  function attemptDeleteNote(id, subject) {
    if (!currentUser) return;
    if (currentUser.role === 'teacher' && !currentUser.subjects.includes(subject)) {
      alert('You may only delete notes for your subjects.');
      return;
    }
    if (!confirm('Delete this note?')) return;
    notesRef.child(id).remove().catch(err => alert('Delete failed: ' + err.message));
  }

  // Refresh button (force re-render)
  refreshBtn.addEventListener('click', () => {
    renderNotesFor(currentUser);
  });

  // ---------- Utilities ----------
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }
  function escapeAttr(s){ return s ? s.replace(/"/g,'&quot;') : ''; }

  // ---------- initial render helper (in case notes already loaded and user logs in) ----------
  function renderManageNotesOnLogin() { renderManageNotes(); }

  // ---------- When page loads already, nothing logged in ----------
  // (notesRef listener already running, will update when someone edits in Firebase)
