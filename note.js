/* notes_advanced_fixed.js — corrected version
   Fixes:
   - Add New Note button reliably opens an inline form (and toggles).
   - Student view now shows subtopic bodies (supports st.html, st.text, st.body).
   - Only one inline form shown at once; forms open close-by the tapped item.
   - Minor robustness improvements.
*/

/////////////////////////////////////////
// Predefined users (admin/teachers/students)
/////////////////////////////////////////
let users = {
  "Ugbechie Rejoice": { password: "Re@608", role: "student", class: "JSS1" },
  "Chima Solomon": { password: "So@231", role: "student", class: "JSS1" },
  "Mr. Anonye": { password: "Ab@12", role: "teacher", subjects: ["Computer", "CRS"] },
  "Miss Deborah": { password: "Deb@12", role: "teacher", subjects: ["HomeEconomics","BusinessStudies"] },
  "Admin": { password: "admin123", role: "admin" }
};

/////////////////////////////////////////
// DOM refs and globals
/////////////////////////////////////////
const $ = id => document.getElementById(id);
const userList = $("user-list");
const loginSection = $("login-section");
const studentDashboard = $("student-dashboard");
const manageDashboard = $("manage-dashboard");
const studentAccordion = $("student-accordion");
const manageNotesDiv = $("manage-notes");
const addNoteBtn = $("add-note-btn");
const refreshNotesBtn = $("refresh-notes");
const loginError = $("login-error");

let currentUser = null;
let currentUserName = null;

/////////////////////////////////////////
// Populate datalist suggestions as user types
/////////////////////////////////////////
function populateUserDatalist() {
  userList.innerHTML = "";
  Object.keys(users).forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    userList.appendChild(opt);
  });
}
populateUserDatalist();

/////////////////////////////////////////
// Firebase helpers (lessonNotes root)
// (uses compat SDK loaded in HTML)
/////////////////////////////////////////
function pushNoteToFirebase(note) {
  return firebase.database().ref("lessonNotes").push(note).then(ref => ref.key);
}
function setNoteToFirebase(key, note) {
  return firebase.database().ref(`lessonNotes/${key}`).set(note);
}
function removeNoteFromFirebase(key) {
  return firebase.database().ref(`lessonNotes/${key}`).remove();
}
function fetchNotesMap() {
  return firebase.database().ref("lessonNotes").once("value").then(snap => snap.val() || {});
}

/////////////////////////////////////////
// Login handling
/////////////////////////////////////////
$("login-btn").addEventListener("click", async () => {
  const uname = document.getElementById("username").value.trim();
  const pwd = document.getElementById("password").value.trim();
  const user = users[uname];
  if (!user || user.password !== pwd) {
    loginError.textContent = "Invalid username or password.";
    return;
  }
  loginError.textContent = "";
  currentUser = user;
  currentUserName = uname;
  loginSection.classList.add("hidden");

  if (user.role === "student") {
    $("student-name").textContent = uname;
    await renderStudentView(user.class);
    studentDashboard.classList.remove("hidden");
    manageDashboard.classList.add("hidden");
  } else {
    $("manage-name").textContent = uname;
    studentDashboard.classList.add("hidden");
    manageDashboard.classList.remove("hidden");
    // show/hide add button according to role
    addNoteBtn.style.display = (user.role === "teacher" || user.role === "admin") ? "inline-block" : "none";
    // attach handler (robust)
    addNoteBtn.onclick = (ev) => {
      ev.preventDefault();
      // open inline form at top of manage area (near the button visually)
      openCreateInlineForm(null);
    };
    await renderManageView();
  }
});

refreshNotesBtn.addEventListener("click", async () => {
  if (currentUser && currentUser.role === "student") await renderStudentView(currentUser.class);
  else await renderManageView();
});

/////////////////////////////////////////
// Rendering student view: accordion by subject -> weeks ascending
// Accepts multiple subtopic body formats (html/text/body)
/////////////////////////////////////////
async function renderStudentView(className) {
  studentAccordion.innerHTML = "";
  const notesMap = await fetchNotesMap();
  const notes = Object.entries(notesMap).map(([k, v]) => ({ key: k, ...v }));
  const classNotes = notes.filter(n => n.class === className);

  // group by subject
  const bySubject = {};
  classNotes.forEach(n => {
    bySubject[n.subject] = bySubject[n.subject] || [];
    bySubject[n.subject].push(n);
  });

  Object.keys(bySubject).sort().forEach(subject => {
    const subjectBtn = document.createElement("button");
    subjectBtn.className = "accordion";
    subjectBtn.textContent = subject;
    const panel = document.createElement("div");
    panel.className = "panel";

    // sort weeks ascending
    bySubject[subject].sort((a, b) => Number(a.week) - Number(b.week));
    bySubject[subject].forEach(note => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      let html = `<h4>Week ${escapeHtml(note.week)}: ${escapeHtml(note.topic)}</h4>
                  <p><strong>Objectives:</strong> ${escapeHtml(note.objectives || "").replace(/\n/g,'<br>')}</p>`;

      // subtopics: handle st.html (preferred), else fallback to st.text/st.body
      if (Array.isArray(note.subtopics)) {
        note.subtopics.forEach(st => {
          html += `<div class="subtopic"><h5>${escapeHtml(st.title || "")}</h5>`;
          // Determine body content:
          let bodyHtml = "";
          if (st.html) {
            // already HTML from rich editor (use as-is)
            bodyHtml = st.html;
          } else if (st.text) {
            // plain text -> escape then preserve line breaks
            bodyHtml = escapeHtml(st.text).replace(/\n/g,'<br>');
          } else if (st.body) {
            bodyHtml = escapeHtml(st.body).replace(/\n/g,'<br>');
          } else {
            bodyHtml = "";
          }
          html += `<div>${bodyHtml}</div>`;
          if (st.img) html += `<img src="${st.img}" alt="illustration">`;
          html += `</div>`;
        });
      }

      // media if present
      if (note.media) {
        if (note.media.image) html += `<img src="${note.media.image}" alt="image">`;
        if (note.media.video) html += `<video controls src="${note.media.video}"></video>`;
        if (note.media.audio) html += `<audio controls src="${note.media.audio}"></audio>`;
      }
      noteDiv.innerHTML = html;
      panel.appendChild(noteDiv);
    });

    subjectBtn.addEventListener("click", () => {
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });

    studentAccordion.appendChild(subjectBtn);
    studentAccordion.appendChild(panel);
  });

  if (!Object.keys(bySubject).length) {
    studentAccordion.innerHTML = "<p>No notes available for your class yet.</p>";
  }
}

/////////////////////////////////////////
// Manage view (teacher/admin): list notes with Edit/Delete
/////////////////////////////////////////
async function renderManageView() {
  manageNotesDiv.innerHTML = "<em>Loading notes...</em>";
  const notesMap = await fetchNotesMap(); // object keyed by firebase key
  const notes = Object.entries(notesMap).map(([key, note]) => ({ key, ...note }));
  manageNotesDiv.innerHTML = "";

  // teacher sees only their subjects; admin sees all
  const visibleNotes = notes.filter(n => {
    if (currentUser.role === "admin") return true;
    if (currentUser.role === "teacher") return (currentUser.subjects || []).includes(n.subject);
    return false;
  });

  if (!visibleNotes.length) {
    manageNotesDiv.innerHTML = "<p>No notes found for your subjects yet.</p>";
    return;
  }

  visibleNotes.sort((a,b)=> (a.class + a.subject + a.week).localeCompare(b.class + b.subject + b.week));

  visibleNotes.forEach(note => {
    const wrapper = document.createElement("div");
    wrapper.className = "note";
    wrapper.style.position = "relative";

    // summary
    const summary = document.createElement("div");
    summary.innerHTML = `<strong>${escapeHtml(note.class)} — ${escapeHtml(note.subject)} — Week ${escapeHtml(String(note.week))}</strong>
                         <div style="margin-top:6px;"><em>${escapeHtml(note.topic || "")}</em></div>`;
    wrapper.appendChild(summary);

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.style.marginRight = "8px";
    btnEdit.addEventListener("click", () => {
      // open inline form next to this wrapper for editing
      // ensure only one inline form open
      closeAllInlineForms();
      toggleInlineForm(wrapper, note);
    });
    wrapper.appendChild(btnEdit);

    const btnDel = document.createElement("button");
    btnDel.className = "secondary";
    btnDel.textContent = "Delete";
    btnDel.style.marginLeft = "8px";
    btnDel.addEventListener("click", async () => {
      if (!confirm("Delete this note?")) return;
      await removeNoteFromFirebase(note.key);
      await renderManageView();
    });
    wrapper.appendChild(btnDel);

    // holder for inline form
    const inlineHolder = document.createElement("div");
    inlineHolder.className = "inline-holder";
    wrapper.appendChild(inlineHolder);

    manageNotesDiv.appendChild(wrapper);
  });
}

/////////////////////////////////////////
// Close any open inline forms
/////////////////////////////////////////
function closeAllInlineForms() {
  document.querySelectorAll(".inline-form-wrapper").forEach(el => el.remove());
}

/////////////////////////////////////////
// Open create form inline (Add New Note)
// If anchorWrapper is null -> insert at top of manage-notes (near Add button)
/////////////////////////////////////////
function openCreateInlineForm(anchorWrapper = null) {
  // toggle: if there's already an inline form, remove and return
  const existing = document.querySelector(".inline-form-wrapper");
  if (existing) {
    existing.remove();
    // if existing belonged to same anchor we toggled it off; otherwise we proceed to open a new one after removing.
    if (!anchorWrapper) return;
  }

  const tpl = document.getElementById("note-form-template").content.cloneNode(true);
  const wrapper = tpl.querySelector(".inline-form-wrapper");

  if (anchorWrapper && anchorWrapper.parentElement) {
    // place right after the anchor wrapper
    anchorWrapper.parentElement.insertBefore(wrapper, anchorWrapper.nextSibling);
  } else {
    // insert at top of manage-notes
    manageNotesDiv.insertBefore(wrapper, manageNotesDiv.firstChild);
  }

  initInlineForm(wrapper, null); // create new note
}

/////////////////////////////////////////
// Toggle inline form for editing a note
/////////////////////////////////////////
function toggleInlineForm(wrapper, note) {
  const inlineHolder = wrapper.querySelector(".inline-holder");
  if (!inlineHolder) return;
  // remove other forms first
  closeAllInlineForms();

  const tpl = document.getElementById("note-form-template").content.cloneNode(true);
  const formWrapper = tpl.querySelector(".inline-form-wrapper");
  inlineHolder.appendChild(formWrapper);
  initInlineForm(formWrapper, note); // pass note object for edit
}

/////////////////////////////////////////
// Initialize an inline form (create or edit)
// formWrapper: the DOM element containing form
// note: null => create new; otherwise note object includes .key
/////////////////////////////////////////
function initInlineForm(formWrapper, note) {
  const form = formWrapper.querySelector(".lesson-form");
  const subtopicsContainer = formWrapper.querySelector(".subtopics-container");
  const addSubBtn = formWrapper.querySelector(".add-subtopic");
  const saveBtn = formWrapper.querySelector(".save-note");
  const cancelBtn = formWrapper.querySelector(".cancel-note");

  // prefill if editing
  if (note) {
    form.querySelector(".note-class").value = note.class || "";
    form.querySelector(".note-subject").value = note.subject || "";
    form.querySelector(".note-week").value = String(note.week || "1");
    form.querySelector(".note-topic").value = note.topic || "";
    form.querySelector(".note-objectives").value = note.objectives || "";
    (note.subtopics || []).forEach(st => {
      // if note used old 'text' key, pass its escaped text
      const initialHtml = st.html ? st.html : (st.text ? escapeHtml(st.text).replace(/\n/g,'<br>') : (st.body ? escapeHtml(st.body).replace(/\n/g,'<br>') : ""));
      addSubtopicBlock(subtopicsContainer, st.title || "", initialHtml);
    });
  } else {
    // fresh form: add one empty subtopic by default
    addSubtopicBlock(subtopicsContainer, "", "");
  }

  // add-subtopic handler
  addSubBtn.onclick = () => addSubtopicBlock(subtopicsContainer, "", "");

  // cancel: remove wrapper
  cancelBtn.onclick = () => formWrapper.remove();

  // save: collect data and push/set to firebase
  form.onsubmit = async (ev) => {
    ev.preventDefault();
    const noteObj = {
      class: form.querySelector(".note-class").value,
      subject: form.querySelector(".note-subject").value.trim(),
      week: form.querySelector(".note-week").value,
      topic: form.querySelector(".note-topic").value.trim(),
      objectives: form.querySelector(".note-objectives").value.trim(),
      subtopics: [],
      media: {}
    };

    // collect subtopics (title + innerHTML)
    form.querySelectorAll(".subtopic-block").forEach(block => {
      const title = block.querySelector(".subtopic-title").value;
      const html = block.querySelector(".subtopic-body").innerHTML; // preserve formatting
      noteObj.subtopics.push({ title, html });
    });

    // note-level media: read files if selected, convert to dataURL
    const imgFile = form.querySelector(".note-image").files[0];
    const vidFile = form.querySelector(".note-video").files[0];
    const audioFile = form.querySelector(".note-audio").files[0];

    // helper to read file as dataURL, returns Promise
    const readFileAsDataURL = (file) => new Promise((res, rej) => {
      if (!file) return res(null);
      const fr = new FileReader();
      fr.onload = () => res(fr.result);
      fr.onerror = rej;
      fr.readAsDataURL(file);
    });

    try {
      const [imgData, vidData, audData] = await Promise.all([
        readFileAsDataURL(imgFile),
        readFileAsDataURL(vidFile),
        readFileAsDataURL(audioFile)
      ]);
      if (imgData) noteObj.media.image = imgData;
      if (vidData) noteObj.media.video = vidData;
      if (audData) noteObj.media.audio = audData;
    } catch (err) {
      console.error("File read failed", err);
    }

    // Save to firebase: update if editing (note && note.key), else push
    if (note && note.key) {
      await setNoteToFirebase(note.key, noteObj);
    } else {
      await pushNoteToFirebase(noteObj);
    }

    // close form and refresh manage view and (if relevant) student view
    formWrapper.remove();
    await renderManageView();
    if (currentUser && currentUser.role === "student") {
      // if student of same class, refresh their view
      await renderStudentView(currentUser.class);
    }
  };
}

/////////////////////////////////////////
// Add a subtopic editor block
// container: DOM element where to append
// title: initial title text
// html: initial HTML content for the contenteditable
/////////////////////////////////////////
function addSubtopicBlock(container, title="", html="") {
  const block = document.createElement("div");
  block.className = "subtopic-block";

  block.innerHTML = `
    <label>Subtopic title: <input class="subtopic-title" value="${escapeAttr(title)}"></label>
    <div class="toolbar" style="margin:6px 0;">
      <button type="button" data-cmd="bold"><b>B</b></button>
      <button type="button" data-cmd="italic"><i>I</i></button>
      <button type="button" data-cmd="underline"><u>U</u></button>
      <button type="button" data-cmd="insertUnorderedList">• List</button>
      <button type="button" data-cmd="insertOrderedList">1. List</button>
      <button type="button" data-cmd="insertTable">Insert Table</button>
      <button type="button" data-cmd="insertImageUrl">Insert Image URL</button>
    </div>
    <div class="subtopic-body editor" contenteditable="true">${html || ""}</div>
    <div style="margin-top:8px;">
      <button type="button" class="remove-subtopic secondary">Remove Subtopic</button>
    </div>
  `;

  // hook toolbar commands (use document.execCommand for simplicity)
  const toolbar = block.querySelector(".toolbar");
  const editor = block.querySelector(".subtopic-body");

  toolbar.addEventListener("click", (ev) => {
    const btn = ev.target.closest("button");
    if (!btn) return;
    const cmd = btn.getAttribute("data-cmd");
    editor.focus();
    if (cmd === "insertTable") {
      const rows = parseInt(prompt("Rows", "2"), 10) || 2;
      const cols = parseInt(prompt("Cols", "2"), 10) || 2;
      let t = "<table border='1' style='border-collapse:collapse;width:100%'>";
      for (let r=0;r<rows;r++) {
        t += "<tr>";
        for (let c=0;c<cols;c++) t += "<td>&nbsp;</td>";
        t += "</tr>";
      }
      t += "</table><br/>";
      insertHtmlAtCaret(editor, t);
    } else if (cmd === "insertImageUrl") {
      const url = prompt("Image URL");
      if (url) insertHtmlAtCaret(editor, `<img src="${escapeAttr(url)}" alt="img" />`);
    } else {
      // many browsers still support execCommand for basic formatting
      document.execCommand(cmd, false, null);
    }
  });

  // remove handler
  block.querySelector(".remove-subtopic").addEventListener("click", () => block.remove());

  container.appendChild(block);

  // helper to insert HTML at caret in contenteditable
  function insertHtmlAtCaret(targetEditor, htmlToInsert) {
    targetEditor.focus();
    try {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) {
        targetEditor.innerHTML += htmlToInsert;
        return;
      }
      const range = sel.getRangeAt(0);
      range.deleteContents();
      const frag = range.createContextualFragment(htmlToInsert);
      range.insertNode(frag);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    } catch (err) {
      targetEditor.innerHTML += htmlToInsert;
    }
  }
}

/////////////////////////////////////////
// Utility: escape HTML content when injecting into text nodes
/////////////////////////////////////////
function escapeHtml(s) {
  if (!s && s !== 0) return "";
  return String(s)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}
function escapeAttr(s) {
  if (!s && s !== 0) return "";
  return String(s).replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

/////////////////////////////////////////
// Ensure Add New Note works even before manage view renders
/////////////////////////////////////////
if (addNoteBtn) {
  addNoteBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    // If a form is open, toggle off; otherwise open
    const existing = document.querySelector(".inline-form-wrapper");
    if (existing) {
      existing.remove();
      return;
    }
    // insert new form at top of manage-notes
    openCreateInlineForm(null);
  });
}

/* End of file */
