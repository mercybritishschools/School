/**********************************
 * USERS (predefined)
 **********************************/
const users = {
  "Ugbechie Rejoice": { password: "Re@608", role: "student", class: "JSS1" },
  "Chima Solomon": { password: "So@231", role: "student", class: "JSS1" },
  "Nwafechukwu-Cyril Victory": { password: "Vic@77", role: "student", class: "JSS1" },
  "Oweazim Emmanuel Kosiso": { password: "Ko@73", role: "student", class: "JSS1" },
  "Esther Elechukwu": { password: "Es@24", role: "student", class: "JSS1" },
  "Uche Chidimma Marvelous": { password: "Ma@73", role: "student", class: "JSS1" },
    
  "Victor Abel": { password: "Vic@869", role: "student", class: "JSS2" },
  "Favour Memeh": { password: "Fav@981", role: "student", class: "JSS2" },
  "Ifechukwude Miracle": { password: "Mi@052", role: "student", class: "JSS2" },
  "Benard Gift": { password: "Gif@98", role: "student", class: "JSS2" },
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
  "Chukwuemeka Michael": { password: "Mic@606", role: "student", class: "JSS3" },
  "Chukwuemeka Michaella": { password: "Ela@66", role: "student", class: "JSS3" },
  "Uti Chinedu David": { password: "Ut@506", role: "student", class: "JSS3" },
  "Johnson Mmesomma Favour": { password: "Me@31", role: "student", class: "JSS3" },
  "Nnanna Chikamso Rita": { password: "Rit@99", role: "student", class: "JSS3" },
      
  "Ginika Maryann": { password: "Gin@34", role: "student", class: "SS1" },
  "Albert Anabel": { password: "Ana@98", role: "student", class: "SS1" },
  "Nwafechukwu-Cyril Flourish": { password: "Flo@23", role: "student", class: "SS1" },
  
  "Effium Emmanuel": { password: "Em@678", role: "student", class: "SS3" },
  "Chinedu Obiakor": { password: "Chi@98", role: "student", class: "SS3" },
    
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

/**********************************
 * DATA (persisted in localStorage)
 **********************************/
let questionBank = JSON.parse(localStorage.getItem("questionBank")) || {
  JSS1: {
    Mathematics: {
      "1": [
        { q: "2 + 2 = ?", options: ["3","4","5","6"], answer: 1, img: "" },
        { q: "5 - 3 = ?", options: ["1","2","3","5"], answer: 1, img: "" }
      ],
      "2": [
        { q: "3 × 3 = ?", options: ["6","7","8","9"], answer: 3, img: "" }
      ]
    },
    English: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    BasicScience: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    BasicTech: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    Computer: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    CCA: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    CRS: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    Agric: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    PHE: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    HlmeEconomics: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    CivicEducation: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    BusinessStudies: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    SocialStudies: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    }
  },
  JSS2: {
    Mathematics: {
      "1": [
        { q: "2 + 2 = ?", options: ["3","4","5","6"], answer: 1, img: "" },
        { q: "5 - 3 = ?", options: ["1","2","3","5"], answer: 1, img: "" }
      ],
      "2": [
        { q: "3 × 3 = ?", options: ["6","7","8","9"], answer: 3, img: "" }
      ]
    },
    English: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    BasicScience: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    BasicTech: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    Computer: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    CCA: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    CRS: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    Agric: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    PHE: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    HlmeEconomics: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    CivicEducation: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    BusinessStudies: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    },
    SocialStudies: {
      "1": [
        { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
      ]
    }
  },
    JSS3: {
      Mathematics: {
        "1": [
          { q: "2 + 2 = ?", options: ["3","4","5","6"], answer: 1, img: "" },
          { q: "5 - 3 = ?", options: ["1","2","3","5"], answer: 1, img: "" }
        ],
        "2": [
          { q: "3 × 3 = ?", options: ["6","7","8","9"], answer: 3, img: "" }
        ]
      },
      English: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      BasicScience: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      BasicTech: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Computer: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      CCA: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      CRS: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Agric: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      PHE: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      HlmeEconomics: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      CivicEducation: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      BusinessStudies: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      SocialStudies: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      }
    },
    SS1: {
      Mathematics: {
        "1": [
          { q: "2 + 2 = ?", options: ["3","4","5","6"], answer: 1, img: "" },
          { q: "5 - 3 = ?", options: ["1","2","3","5"], answer: 1, img: "" }
        ],
        "2": [
          { q: "3 × 3 = ?", options: ["6","7","8","9"], answer: 3, img: "" }
        ]
      },
      English: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Biology: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Economics: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Computer: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Chemistry: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      CRS: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Agric: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Physics: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Geography: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      CivicEducation: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Marketing: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      },
      Government: {
        "1": [
          { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
        ]
      }
    },
SS2: {
  Mathematics: {
    "1": [
      { q: "2 + 2 = ?", options: ["3","4","5","6"], answer: 1, img: "" },
      { q: "5 - 3 = ?", options: ["1","2","3","5"], answer: 1, img: "" }
    ],
    "2": [
      { q: "3 × 3 = ?", options: ["6","7","8","9"], answer: 3, img: "" }
    ]
  },
  English: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Biology: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Economics: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Computer: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Chemistry: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  CRS: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Agric: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Physics: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Geography: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  CivicEducation: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Marketing: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Government: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  }
},

SS3: {
  Mathematics: {
    "1": [
      { q: "2 + 2 = ?", options: ["3","4","5","6"], answer: 1, img: "" },
      { q: "5 - 3 = ?", options: ["1","2","3","5"], answer: 1, img: "" }
    ],
    "2": [
      { q: "3 × 3 = ?", options: ["6","7","8","9"], answer: 3, img: "" }
    ]
  },
  English: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Biology: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Economics: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Computer: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Chemistry: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  CRS: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Agric: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Physics: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Geography: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  CivicEducation: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Marketing: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  },
  Government: {
    "1": [
      { q: "Choose the noun: The cat runs.", options: ["cat","runs","the","."], answer: 0, img: "" }
    ]
  }
}
};

let studentResults = JSON.parse(localStorage.getItem("studentResults")) || {};
// Structure: studentResults[class][subject][week][student] = { score, total, timestamp }

/**********************************
 * HELPERS
 **********************************/
const $ = (id) => document.getElementById(id);

function saveBank() {
  localStorage.setItem("questionBank", JSON.stringify(questionBank));
}
function saveResults() {
  localStorage.setItem("studentResults", JSON.stringify(studentResults));
}

function weeksOptionsFill(selectEl) {
  selectEl.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = `Week ${i}`;
    selectEl.appendChild(opt);
  }
}

function ensurePath(obj, ...keys) {
  let cur = obj;
  for (const k of keys) {
    if (!cur[k]) cur[k] = {};
    cur = cur[k];
  }
  return cur;
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQuestionAndOptions(questions) {
  // Shuffle questions
  const qShuffled = shuffleArray(questions);
  // Shuffle options per question and re-map answer index
  return qShuffled.map(q => {
    const indexed = q.options.map((opt, idx) => ({ opt, idx }));
    const optionsShuffled = shuffleArray(indexed);
    const newAnswerIndex = optionsShuffled.findIndex(o => o.idx === q.answer);
    return {
      q: q.q,
      img: q.img || "",
      options: optionsShuffled.map(o => o.opt),
      answer: newAnswerIndex
    };
  });
}

/**********************************
 * LOGIN INIT
 **********************************/
(function initLogin() {
  // datalist usernames
  const dl = $("user-list");
  Object.keys(users).forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    dl.appendChild(opt);
  });

  $("login-btn").onclick = () => {
    const uname = $("username").value.trim();
    const pwd = $("password").value.trim();
    if (users[uname] && users[uname].password === pwd) {
      $("login-error").textContent = "";
      const role = users[uname].role;
      $("login-section").classList.add("hidden");
      if (role === "student") initStudent(uname);
      else if (role === "teacher") initTeacher(uname);
      else if (role === "admin") initAdmin(uname);
    } else {
      $("login-error").textContent = "Invalid username or password.";
    }
  };
})();

/**********************************
 * STUDENT DASHBOARD
 **********************************/
let activeExam = null; // track session

function initStudent(name) {
  $("student-dashboard").classList.remove("hidden");
  $("student-name").textContent = name;

  const cls = users[name].class;
  const subjSel = $("student-subject");
  const weekSel = $("student-week");
  subjSel.innerHTML = "";

  if (questionBank[cls]) {
    Object.keys(questionBank[cls]).forEach(sub => {
      const opt = document.createElement("option");
      opt.value = sub;
      opt.textContent = sub;
      subjSel.appendChild(opt);
    });
  }
  weeksOptionsFill(weekSel);

  $("start-exam").onclick = () => {
    const subject = subjSel.value;
    const week = weekSel.value;
    if (!questionBank[cls] || !questionBank[cls][subject] || !questionBank[cls][subject][week] || questionBank[cls][subject][week].length === 0) {
      alert("No questions available for this selection.");
      return;
    }
    startExamSession({
      role: "student",
      user: name,
      class: cls,
      subject,
      week
    });
  };
}

function startExamSession(meta) {
  const qRaw = questionBank[meta.class][meta.subject][meta.week];
  const questions = shuffleQuestionAndOptions(qRaw); // reshuffle each attempt
  let currentIndex = 0;
  const answers = new Array(questions.length).fill(null);

  $("exam-container").classList.remove("hidden");
  $("qtotal").textContent = String(questions.length);

  let timeLeft = Math.max(60, questions.length * 30); // 30s per question, at least 60s
  $("timer").textContent = String(timeLeft);
  const timerId = setInterval(() => {
    timeLeft--;
    $("timer").textContent = String(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerId);
      finalize();
    }
  }, 1000);

  function render() {
    const q = questions[currentIndex];
    $("qpos").textContent = String(currentIndex + 1);
    let html = `<p><strong>Q${currentIndex + 1}:</strong> ${q.q}</p>`;
    if (q.img) html += `<img src="${q.img}" alt="question image">`;
    q.options.forEach((opt, i) => {
      const checked = answers[currentIndex] === i ? "checked" : "";
      html += `<label><input type="radio" name="opt" value="${i}" ${checked}> ${opt}</label>`;
    });
    $("question-box").innerHTML = html;

    document.querySelectorAll("input[name='opt']").forEach(inp => {
      inp.addEventListener("click", () => {
        answers[currentIndex] = parseInt(inp.value, 10);
      });
    });

    $("submit-btn").classList.toggle("hidden", currentIndex !== questions.length - 1);
  }

  $("next-btn").onclick = () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      render();
    }
  };
  $("prev-btn").onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      render();
    }
  };
  $("submit-btn").onclick = finalize;

  function finalize() {
    clearInterval(timerId);
    // score all
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    // persist result (overwrite previous for same class/subject/week/student)
    const stamp = new Date().toLocaleString();
    const cls = meta.class, sub = meta.subject, wk = meta.week, student = meta.user;

    const path = ensurePath(studentResults, cls, sub, wk);
    path[student] = { score, total: questions.length, timestamp: stamp };
    saveResults();

    alert(`Submitted!\n\nSubject: ${sub}\nWeek: ${wk}\nScore: ${score}/${questions.length}`);

    // reset UI
    $("exam-container").classList.add("hidden");
    $("question-box").innerHTML = "";
  }

  render();
  activeExam = { meta };
}

/**********************************
 * TEACHER DASHBOARD
 **********************************/
let editStateTeacher = null; // {cls, sub, wk, index}

function initTeacher(name) {
  $("teacher-dashboard").classList.remove("hidden");
  $("teacher-name").textContent = name;

  weeksOptionsFill($("q-week"));

  // Save / Edit
  $("save-question").onclick = () => {
    const cls = $("q-class").value;
    const sub = $("q-subject").value.trim();
    const wk = $("q-week").value;
    const img = $("q-image").value.trim();
    const qText = $("q-text").value.trim();
    const opts = [ $("optA").value.trim(), $("optB").value.trim(), $("optC").value.trim(), $("optD").value.trim() ];
    const ans = parseInt($("q-answer").value, 10);

    if (!sub || !qText || opts.some(o => !o) || !(ans >= 0 && ans <= 3)) {
      alert("Please fill all fields correctly.");
      return;
    }

    // subject permission
    const permitted = users[name].subjects.includes(sub);
    if (!permitted) {
      alert("You can only manage your own subjects.");
      return;
    }

    if (!questionBank[cls]) questionBank[cls] = {};
    if (!questionBank[cls][sub]) questionBank[cls][sub] = {};
    if (!questionBank[cls][sub][wk]) questionBank[cls][sub][wk] = [];

    if (editStateTeacher) {
      // replace
      questionBank[editStateTeacher.cls][editStateTeacher.sub][editStateTeacher.wk][editStateTeacher.index] =
        { q: qText, options: opts, answer: ans, img };
      editStateTeacher = null;
      $("cancel-edit").classList.add("hidden");
    } else {
      questionBank[cls][sub][wk].push({ q: qText, options: opts, answer: ans, img });
    }
    saveBank();
    clearTeacherForm();
    renderTeacherQuestions(name);
    renderTeacherResults(name);
  };

  $("cancel-edit").onclick = () => {
    editStateTeacher = null;
    $("cancel-edit").classList.add("hidden");
    clearTeacherForm();
  };

  renderTeacherQuestions(name);
  renderTeacherResults(name);
}

function clearTeacherForm() {
  $("q-image").value = "";
  $("q-text").value = "";
  $("optA").value = "";
  $("optB").value = "";
  $("optC").value = "";
  $("optD").value = "";
  $("q-answer").value = "";
}

function renderTeacherQuestions(teacherName) {
  const container = $("teacher-questions");
  container.innerHTML = "";
  const subjects = users[teacherName].subjects;

  // Iterate all classes & teacher subjects
  for (const cls of Object.keys(questionBank)) {
    for (const sub of Object.keys(questionBank[cls] || {})) {
      if (!subjects.includes(sub)) continue;
      for (const wk of Object.keys(questionBank[cls][sub] || {})) {
        const list = questionBank[cls][sub][wk];
        if (!list || !list.length) continue;

        const title = document.createElement("h4");
        title.className = "section-title";
        title.textContent = `${cls} — ${sub} — Week ${wk}`;
        container.appendChild(title);

        const table = document.createElement("table");
        table.innerHTML = `<thead>
          <tr><th>#</th><th>Question</th><th>Options</th><th>Answer</th><th>Actions</th></tr>
        </thead><tbody></tbody>`;
        const tbody = table.querySelector("tbody");

        list.forEach((q, idx) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${q.q}</td>
            <td>${q.options.join(", ")}</td>
            <td>${["A","B","C","D"][q.answer] || q.answer}</td>
            <td>
              <button data-act="edit" data-cls="${cls}" data-sub="${sub}" data-wk="${wk}" data-idx="${idx}">Edit</button>
              <button class="secondary" data-act="del" data-cls="${cls}" data-sub="${sub}" data-wk="${wk}" data-idx="${idx}">Delete</button>
            </td>`;
          tbody.appendChild(tr);
        });

        container.appendChild(table);
      }
    }
  }

  // table actions
  container.querySelectorAll("button[data-act]").forEach(btn => {
    btn.onclick = () => {
      const cls = btn.getAttribute("data-cls");
      const sub = btn.getAttribute("data-sub");
      const wk = btn.getAttribute("data-wk");
      const idx = parseInt(btn.getAttribute("data-idx"), 10);
      const act = btn.getAttribute("data-act");

      if (act === "edit") {
        const item = questionBank[cls][sub][wk][idx];
        $("q-class").value = cls;
        $("q-subject").value = sub;
        $("q-week").value = wk;
        $("q-image").value = item.img || "";
        $("q-text").value = item.q;
        $("optA").value = item.options[0] || "";
        $("optB").value = item.options[1] || "";
        $("optC").value = item.options[2] || "";
        $("optD").value = item.options[3] || "";
        $("q-answer").value = item.answer;
        editStateTeacher = { cls, sub, wk, index: idx };
        $("cancel-edit").classList.remove("hidden");
      } else if (act === "del") {
        if (confirm("Delete this question?")) {
          questionBank[cls][sub][wk].splice(idx, 1);
          saveBank();
          renderTeacherQuestions(teacherName);
        }
      }
    };
  });
}

function renderTeacherResults(teacherName) {
  const container = $("teacher-results");
  container.innerHTML = "";

  const subjects = users[teacherName].subjects;

  // For each class/subject/week, show only teacher's subjects
  for (const cls of Object.keys(studentResults)) {
    for (const sub of Object.keys(studentResults[cls])) {
      if (!subjects.includes(sub)) continue;

      for (const wk of Object.keys(studentResults[cls][sub])) {
        const results = studentResults[cls][sub][wk];

        const title = document.createElement("h4");
        title.className = "section-title";
        title.textContent = `${cls} — ${sub} — Week ${wk}`;
        container.appendChild(title);

        const table = document.createElement("table");
        table.innerHTML = `<thead>
          <tr><th>#</th><th>Student</th><th>Score</th><th>Total</th><th>Submitted At</th></tr>
        </thead><tbody></tbody>`;
        const tbody = table.querySelector("tbody");

        let i = 1;
        Object.keys(results).sort().forEach(student => {
          const r = results[student];
          const tr = document.createElement("tr");
          tr.innerHTML = `<td>${i++}</td><td>${student}</td><td>${r.score}</td><td>${r.total}</td><td>${r.timestamp}</td>`;
          tbody.appendChild(tr);
        });

        container.appendChild(table);
      }
    }
  }

  if (!container.innerHTML.trim()) {
    container.innerHTML = "<p>No results yet for your subjects.</p>";
  }
}

/**********************************
 * ADMIN DASHBOARD
 **********************************/
let editStateAdmin = null; // {cls, sub, wk, index}

function initAdmin() {
  $("admin-dashboard").classList.remove("hidden");
  weeksOptionsFill($("a-week"));
  renderAdminQuestions();
  renderAdminResults();

  $("a-save-question").onclick = () => {
    const cls = $("a-class").value;
    const sub = $("a-subject").value.trim();
    const wk = $("a-week").value;
    const img = $("a-image").value.trim();
    const qText = $("a-text").value.trim();
    const opts = [ $("a-optA").value.trim(), $("a-optB").value.trim(), $("a-optC").value.trim(), $("a-optD").value.trim() ];
    const ans = parseInt($("a-answer").value, 10);

    if (!sub || !qText || opts.some(o => !o) || !(ans >= 0 && ans <= 3)) {
      alert("Please fill all fields correctly.");
      return;
    }

    if (!questionBank[cls]) questionBank[cls] = {};
    if (!questionBank[cls][sub]) questionBank[cls][sub] = {};
    if (!questionBank[cls][sub][wk]) questionBank[cls][sub][wk] = [];

    if (editStateAdmin) {
      questionBank[editStateAdmin.cls][editStateAdmin.sub][editStateAdmin.wk][editStateAdmin.index] =
        { q: qText, options: opts, answer: ans, img };
      editStateAdmin = null;
      $("a-cancel-edit").classList.add("hidden");
    } else {
      questionBank[cls][sub][wk].push({ q: qText, options: opts, answer: ans, img });
    }
    saveBank();
    clearAdminForm();
    renderAdminQuestions();
  };

  $("a-cancel-edit").onclick = () => {
    editStateAdmin = null;
    $("a-cancel-edit").classList.add("hidden");
    clearAdminForm();
  };
}

function clearAdminForm() {
  $("a-image").value = "";
  $("a-text").value = "";
  $("a-optA").value = "";
  $("a-optB").value = "";
  $("a-optC").value = "";
  $("a-optD").value = "";
  $("a-answer").value = "";
}

function renderAdminQuestions() {
  const container = $("admin-questions");
  container.innerHTML = "";

  for (const cls of Object.keys(questionBank)) {
    for (const sub of Object.keys(questionBank[cls] || {})) {
      for (const wk of Object.keys(questionBank[cls][sub] || {})) {
        const list = questionBank[cls][sub][wk];
        if (!list || !list.length) continue;

        const title = document.createElement("h4");
        title.className = "section-title";
        title.textContent = `${cls} — ${sub} — Week ${wk}`;
        container.appendChild(title);

        const table = document.createElement("table");
        table.innerHTML = `<thead>
          <tr><th>#</th><th>Question</th><th>Options</th><th>Answer</th><th>Actions</th></tr>
        </thead><tbody></tbody>`;
        const tbody = table.querySelector("tbody");

        list.forEach((q, idx) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${q.q}</td>
            <td>${q.options.join(", ")}</td>
            <td>${["A","B","C","D"][q.answer] || q.answer}</td>
            <td>
              <button data-act="edit" data-cls="${cls}" data-sub="${sub}" data-wk="${wk}" data-idx="${idx}">Edit</button>
              <button class="secondary" data-act="del" data-cls="${cls}" data-sub="${sub}" data-wk="${wk}" data-idx="${idx}">Delete</button>
            </td>`;
          tbody.appendChild(tr);
        });

        container.appendChild(table);
      }
    }
  }

  // actions
  container.querySelectorAll("button[data-act]").forEach(btn => {
    btn.onclick = () => {
      const cls = btn.getAttribute("data-cls");
      const sub = btn.getAttribute("data-sub");
      const wk = btn.getAttribute("data-wk");
      const idx = parseInt(btn.getAttribute("data-idx"), 10);
      const act = btn.getAttribute("data-act");

      if (act === "edit") {
        const item = questionBank[cls][sub][wk][idx];
        $("a-class").value = cls;
        $("a-subject").value = sub;
        $("a-week").value = wk;
        $("a-image").value = item.img || "";
        $("a-text").value = item.q;
        $("a-optA").value = item.options[0] || "";
        $("a-optB").value = item.options[1] || "";
        $("a-optC").value = item.options[2] || "";
        $("a-optD").value = item.options[3] || "";
        $("a-answer").value = item.answer;
        editStateAdmin = { cls, sub, wk, index: idx };
        $("a-cancel-edit").classList.remove("hidden");
      } else if (act === "del") {
        if (confirm("Delete this question?")) {
          questionBank[cls][sub][wk].splice(idx, 1);
          saveBank();
          renderAdminQuestions();
        }
      }
    };
  });
}

function renderAdminResults() {
  const container = $("admin-results");
  container.innerHTML = "";

  for (const cls of Object.keys(studentResults)) {
    for (const sub of Object.keys(studentResults[cls])) {
      for (const wk of Object.keys(studentResults[cls][sub])) {
        const results = studentResults[cls][sub][wk];

        const title = document.createElement("h4");
        title.className = "section-title";
        title.textContent = `${cls} — ${sub} — Week ${wk}`;
        container.appendChild(title);

        const table = document.createElement("table");
        table.innerHTML = `<thead>
          <tr><th>#</th><th>Student</th><th>Score</th><th>Total</th><th>Submitted At</th></tr>
        </thead><tbody></tbody>`;
        const tbody = table.querySelector("tbody");

        let i = 1;
        Object.keys(results).sort().forEach(student => {
          const r = results[student];
          const tr = document.createElement("tr");
          tr.innerHTML = `<td>${i++}</td><td>${student}</td><td>${r.score}</td><td>${r.total}</td><td>${r.timestamp}</td>`;
          tbody.appendChild(tr);
        });

        container.appendChild(table);
      }
    }
  }

  if (!container.innerHTML.trim()) {
    container.innerHTML = "<p>No results recorded yet.</p>";
  }
}








