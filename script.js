// ====== SELECT ELEMENTS ======
const startBtn = document.querySelector("button"); // Start Quiz button
const infoBox = document.getElementById("infobBox");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");

const continueBtn = infoBox.querySelector("button:last-child");
const exitBtn = infoBox.querySelector("button:first-child");

const questionText = document.getElementById("questionText");
const optionList = document.getElementById("optionList");
const nextBtn = quizBox.querySelector("footer button");

const restartBtn = document.getElementById("restart");
const quitBtn = document.getElementById("quit");

// ====== QUESTIONS ARRAY (ADD UP TO 50) ======
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Transfer Markup Language",
    ],
    answer: 1,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: 1,
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: 3,
  },
];

// ====== VARIABLES ======
let currentQuestion = 0;
let score = 0;
let optionSelected = false;

// ====== START QUIZ ======
startBtn.onclick = () => {
  infoBox.classList.remove("opacity-0", "pointer-events-none", "scale-[0.9]");
};

// ====== EXIT QUIZ ======
exitBtn.onclick = () => {
  infoBox.classList.add("opacity-0", "pointer-events-none", "scale-[0.9]");
};

// ====== CONTINUE QUIZ ======
continueBtn.onclick = () => {
  infoBox.classList.add("opacity-0", "pointer-events-none");
  quizBox.classList.remove("opacity-0", "pointer-events-none", "scale-[0.9]");
  showQuestion(0);
};

// ====== SHOW QUESTION ======
function showQuestion(index) {
  optionSelected = false;
  const q = questions[index];

  questionText.innerHTML = `<span>${q.question}</span>`;

  optionList.innerHTML = "";

  q.options.forEach((option, i) => {
    const optionDiv = document.createElement("div");
    optionDiv.className =
      "option bg-[#b37869] border-2 border-[#602A1D] rounded-[5px] p-[8px_15px] mb-4 flex items-center justify-between cursor-pointer hover:bg-[#602A1D] hover:text-[#F2E9E9] transition-all duration-300 ease-in-out";

    optionDiv.innerHTML = `
      <span>${option}</span>
      <div class="iconTick hidden">
        <i class="fas fa-check"></i>
      </div>
      <div class="iconCross hidden">
        <i class="fas fa-times"></i>
      </div>
    `;

    optionDiv.onclick = () => selectOption(optionDiv, i);
    optionList.appendChild(optionDiv);
  });
}

// ====== SELECT OPTION ======
function selectOption(selectedOption, index) {
  if (optionSelected) return;
  optionSelected = true;

  const correctAnswer = questions[currentQuestion].answer;
  const options = document.querySelectorAll(".option");

  options.forEach((opt, i) => {
    if (i === correctAnswer) {
      opt.classList.add("bg-green-300");
      opt.querySelector(".iconTick").classList.remove("hidden");
    }

    if (i === index && index !== correctAnswer) {
      opt.classList.add("bg-red-300");
      opt.querySelector(".iconCross").classList.remove("hidden");
    }

    opt.style.pointerEvents = "none";
  });

  if (index === correctAnswer) {
    score++;
  }
}

// ====== NEXT BUTTON ======
nextBtn.onclick = () => {
  if (!optionSelected) {
    alert("Please select an answer");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
};

// ====== SHOW RESULT ======
function showResult() {
  quizBox.classList.add("opacity-0", "pointer-events-none");
  resultBox.classList.remove("opacity-0", "pointer-events-none", "scale-[0.9]");

  const textScore = document.getElementById("textScore");
  textScore.innerHTML = `
    <span class="flex justify-center my-[10px] text-[18px] font-medium">
      You got <p class="font-semibold px-[4px]">${score}</p>
      out of <p class="font-semibold px-[4px]">${questions.length}</p>
    </span>
  `;
}

// ====== RESTART QUIZ ======
restartBtn.onclick = () => {
  resultBox.classList.add("opacity-0", "pointer-events-none");
  quizBox.classList.remove("opacity-0", "pointer-events-none");

  currentQuestion = 0;
  score = 0;
  showQuestion(currentQuestion);
};

// ====== QUIT QUIZ ======
quitBtn.onclick = () => {
  window.location.reload();
};
