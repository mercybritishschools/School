/******** FIREBASE CONFIG ********/
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

/******** AUTH ********/
function signup() {
  const email = signupEmail.value;
  const phone = signupPhone.value;
  const password = signupPassword.value;

  auth.createUserWithEmailAndPassword(email || `${phone}@school.com`, password)
    .then(cred => {
      return db.collection("users").doc(cred.user.uid).set({
        email,
        phone,
        designation: signupRole.value,
        class: signupClass.value,
        subjects: signupSubjects.value.split(","),
        approved: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .alert("Signup successful. Await admin approval.");
}

function login() {
  auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value);
}

auth.onAuthStateChanged(user => {
  if (!user) return;

  db.collection("users").doc(user.uid).get().then(doc => {
    const data = doc.data();
    if (!data.approved) return alert("Awaiting admin approval");

    authSection.classList.add("hidden");

    if (data.designation === "admin") showAdmin();
    if (data.designation === "teacher") teacherDashboard.classList.remove("hidden");
    if (data.designation === "student") studentDashboard.classList.remove("hidden");
  });
});

/******** ADMIN ********/
function showAdmin() {
  adminDashboard.classList.remove("hidden");

  db.collection("users").where("approved", "==", false).onSnapshot(snap => {
    pendingUsers.innerHTML = "";
    snap.forEach(doc => {
      const u = doc.data();
      pendingUsers.innerHTML += `
        <p>${u.email || u.phone} (${u.designation})
        <button onclick="approve('${doc.id}')">Approve</button></p>`;
    });
  });
}

function approve(uid) {
  db.collection("users").doc(uid).update({ approved: true });
}

/******** TEACHER ********/
function saveLesson() {
  db.collection("lessons").add({
    subject: lessonSubject.value,
    class: lessonClass.value,
    week: lessonWeek.value,
    note: lessonNote.value,
    videoUrl: videoUrl.value,
    objectives: JSON.parse(objectiveQuestions.value),
    theory: theoryQuestions.value.split("\n"),
    teacherId: auth.currentUser.uid
  });
}

/******** STUDENT ********/
let currentLesson;

function loadLesson() {
  db.collection("lessons")
    .where("subject", "==", studentSubject.value)
    .where("week", "==", studentWeek.value)
    .get()
    .then(snap => {
      snap.forEach(doc => {
        currentLesson = doc;
        const d = doc.data();

        lessonContent.innerHTML = `
          ${d.note}
          <iframe src="${d.videoUrl}" allow="autoplay"></iframe>
        `;
      });
    });
}

function submitCBT() {
  // Objective scoring omitted for brevity
  const theoryScore = aiScoreTheory(); // placeholder

  db.collection("results").add({
    studentId: auth.currentUser.uid,
    lessonId: currentLesson.id,
    theoryScore,
    submittedAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  studentResult.innerHTML = "Result submitted successfully.";
}

/******** AI THEORY SCORING (PLACEHOLDER) ********/
function aiScoreTheory() {
  // Connect OpenAI / Gemini here later
  return Math.floor(Math.random() * 10) + 1;
}

function logout() {
  auth.signOut();
  location.reload();
}
