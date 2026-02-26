const startBtn = document.getElementById("startBtn");
const infoBox = document.getElementById("infoBox");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const exitBtn = document.getElementById("exitBtn");
const continueBtn = document.getElementById("continueBtn");
const questionText = document.getElementById("questionText");
const optionList = document.getElementById("optionList");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const quitBtn = document.getElementById("quitBtn");
const textScore = document.getElementById("textScore");

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
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JavaScript", "CSS", "PHP"],
    answer: 2,
  },
  {
    question: "Which language is used to add interactivity to a website?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: 2,
  },
  {
    question: "Which of the following best describes the purpose of an API?",
    options: [
      "A tool used only for designing websites",
      "A way for two applications to communicate and share data",
      "A programming language for building mobile apps",
      "A type of database only for images",
    ],
    answer: 1,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: 3,
  },
  {
    question: "Which data type is NOT in JavaScript?",
    options: ["String", "Boolean", "Float", "Undefined"],
    answer: 2,
  },
  {
    question: "What will type of 'Hello' return?",
    options: ["number", "string", "object", "boolean"],
    answer: 1,
  },
  {
    question: "Which operator is used to assign a value?",
    options: ["==", "===", "=", "!="],
    answer: 2,
  },
  {
    question: "Which method displays a message box in JavaScript?",
    options: ["alert()", "prompt()", "console.log()", "message()"],
    answer: 0,
  },
  {
    question: "Which keyword is used for a function?",
    options: ["function", "define", "method", "fun"],
    answer: 0,
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Digital Ordinance Model",
      "Document Oriented Method",
    ],
    answer: 0,
  },
  {
    question: "Which method selects an element by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElementsByClass()",
      "selectById()",
    ],
    answer: 0,
  },
  {
    question: "Which loop runs at least once?",
    options: ["for loop", "while loop", "do…while loop", "foreach loop"],
    answer: 2,
  },
  {
    question: "Which symbol means 'equal value and equal type'?",
    options: ["==", "=", "===", "!="],
    answer: 2,
  },
  {
    question: "Which function converts string to number?",
    options: ["parseInt()", "toString()", "NumberToString()", "convert()"],
    answer: 0,
  },
  {
    question: "What is NaN?",
    options: [
      "Not a Number",
      "New and Null",
      "Name as Number",
      "Number and Null",
    ],
    answer: 0,
  },
  {
    question: "Which array method adds an item to the end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    question: "Which array method removes last item?",
    options: ["push()", "pop()", "shift()", "slice()"],
    answer: 1,
  },
  {
    question: "Which keyword stops a loop?",
    options: ["stop", "break", "exit", "return"],
    answer: 1,
  },
  {
    question: "Which keyword skips one loop cycle?",
    options: ["skip", "next", "continue", "pass"],
    answer: 2,
  },
  {
    question: "Which symbol is used for OR operator?",
    options: ["&&", "||", "!!", "??"],
    answer: 1,
  },
  {
    question: "Which symbol is used for AND operator?",
    options: ["||", "&&", "!=", "=="],
    answer: 1,
  },
  {
    question: "What will 2 + '2' output?",
    options: ["4", "22", "NaN", "Error"],
    answer: 1,
  },
  {
    question: "Which is a correct function call?",
    options: ["myFunction[]", "myFunction{}", "myFunction()", "myFunction<>"],
    answer: 2,
  },
  {
    question: "Which event occurs when a button is clicked?",
    options: ["onmouseover", "onload", "onclick", "onchange"],
    answer: 2,
  },
  {
    question: "Which keyword creates a constant?",
    options: ["var", "let", "const", "static"],
    answer: 2,
  },
  {
    question: "Which statement checks a condition?",
    options: ["if", "for", "while", "switch"],
    answer: 0,
  },
  {
    question: "Which is NOT a loop?",
    options: ["for", "while", "switch", "do…while"],
    answer: 2,
  },
  {
    question: "Which tool prints to the browser console?",
    options: ["alert()", "console.log()", "print()", "write()"],
    answer: 1,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: 2,
  },
  {
    question: "Which function is used to print output in the browser console?",
    options: ["alert()", "console.log()", "print()", "message()"],
    answer: 1,
  },
  {
    question: "Which is a Boolean value?",
    options: ['"true"', "true", "1", "yes"],
    answer: 1,
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Applied Program Internet",
      "Application Process Input",
      "Advanced Program Interface",
    ],
    answer: 0,
  },
  {
    question: "Which keyword returns a value from a function?",
    options: ["stop", "break", "return", "output"],
    answer: 2,
  },
  {
    question: "Which method removes the first array element?",
    options: ["shift()", "pop()", "slice()", "push()"],
    answer: 0,
  },
  {
    question: "Which is a correct variable name?",
    options: ["2name", "my-name", "myName", "my name"],
    answer: 2,
  },
  {
    question: "Which is NOT a data type?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: 3,
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Source Object Name",
      "Java Standard Output Name",
      "JavaScript Online Network",
    ],
    answer: 0,
  },
  {
    question: "Which method converts an object to JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: 1,
  },
  {
    question: "Which method converts JSON to an object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.read()", "JSON.open()"],
    answer: 0,
  },
  {
    question: "Which symbol is used for NOT operator?",
    options: ["!", "&&", "||", "=="],
    answer: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheet",
      "Creative Style Sheet",
      "Cascading Style Sheet",
      "Colorful Style Sheet",
    ],
    answer: 2,
  },
  {
    question: "Which keyword defines a class?",
    options: ["object", "class", "model", "struct"],
    answer: 1,
  },
  {
    question: "Which keyword creates an object?",
    options: ["make", "new", "create", "object"],
    answer: 1,
  },
  {
    question: "Which function asks the user for input?",
    options: ["alert()", "confirm()", "prompt()", "input()"],
    answer: 2,
  },
  {
    question: "Which is a correct array declaration?",
    options: ["var arr = {}", "var arr = []", "var arr = ()", "var arr = <>"],
    answer: 1,
  },
  {
    question: "Which keyword handles errors?",
    options: ["try", "catch", "finally", "All of the above"],
    answer: 3,
  },
  {
    question: "Which method rounds a number down?",
    options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.random()"],
    answer: 2,
  },
  {
    question: "Which method generates a random number?",
    options: ["Math.floor()", "Math.random()", "Math.max()", "Math.min()"],
    answer: 1,
  },
  {
    question: "Which statement is used for multiple choices?",
    options: ["if", "else", "switch", "loop"],
    answer: 2,
  },
];

// ====== VARIABLES ======
let currentQuestion = 0;
let score = 0;
let optionSelected = false;
let timerInterval = null;
let timeLeft = 15;

// ====== START QUIZ ======
startBtn.addEventListener("click", () => {
  infoBox.classList.remove("opacity-0", "pointer-events-none", "scale-[0.9]");
});

// ====== EXIT QUIZ ======
exitBtn.addEventListener("click", () => {
  infoBox.classList.add("opacity-0", "pointer-events-none", "scale-[0.9]");
});

// ====== CONTINUE QUIZ ======
continueBtn.addEventListener("click", () => {
  infoBox.classList.add("opacity-0", "pointer-events-none", "scale-[0.9]");
  quizBox.classList.remove("opacity-0", "pointer-events-none", "scale-[0.9]");
  currentQuestion = 0;
  score = 0;
  showQuestion(currentQuestion);
});

// ====== TIMER ======
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;

  const timerDisplay = document.getElementById("timerDisplay");
  timerDisplay.textContent = timeLeft;
  timerDisplay.classList.remove("bg-red-600");
  timerDisplay.classList.add("bg-[#602A1D]");

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 5) {
      timerDisplay.classList.remove("bg-[#602A1D]");
      timerDisplay.classList.add("bg-red-600");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      optionSelected = true;

      const allOptions = document.querySelectorAll(".option");
      allOptions.forEach((opt) => {
        opt.style.pointerEvents = "none";
      });

      const correct = questions[currentQuestion].answer;
      allOptions[correct].classList.remove("bg-[#b37869]");
      allOptions[correct].classList.add("bg-green-300");
      allOptions[correct].querySelector(".iconTick").classList.remove("hidden");
    }
  }, 1000);
}

// ====== SHOW QUESTION ======
function showQuestion(index) {
  optionSelected = false;
  const q = questions[index];

  questionText.innerHTML = `<span>${q.question}</span>`;

  const footerSpan = quizBox.querySelector("footer span");
  if (footerSpan) {
    footerSpan.innerHTML = `<p class="font-medium pr-[5px]">${index + 1}</p> of <p class="font-medium px-[5px]">${questions.length}</p> Questions`;
  }

  optionList.innerHTML = "";

  q.options.forEach((option, i) => {
    const optionDiv = document.createElement("div");
    optionDiv.className =
      "option bg-[#b37869] border-2 border-[#602A1D] rounded-[5px] p-[8px_15px] mb-4 flex items-center justify-between cursor-pointer hover:bg-[#602A1D] hover:text-[#F2E9E9] transition-all duration-300 ease-in-out";

    optionDiv.innerHTML = `
      <span>${option}</span>
      <div class="iconTick hidden h-6 w-6 bg-green-300 text-green-800 rounded-full border-2 border-green-800 flex items-center justify-center text-[13px] pointer-events-none">
        <i class="fas fa-check"></i>
      </div>
      <div class="iconCross hidden h-6 w-6 bg-red-300 text-red-800 rounded-full border-2 border-red-800 flex items-center justify-center text-[13px] pointer-events-none">
        <i class="fas fa-times"></i>
      </div>
    `;

    optionDiv.addEventListener("click", () => selectOption(optionDiv, i));
    optionList.appendChild(optionDiv);
  });

  startTimer();
}

// ====== SELECT OPTION ======
function selectOption(selectedOption, index) {
  if (optionSelected) return;
  optionSelected = true;
  clearInterval(timerInterval);

  const correctAnswer = questions[currentQuestion].answer;
  const options = document.querySelectorAll(".option");

  options.forEach((opt, i) => {
    opt.style.pointerEvents = "none";

    if (i === correctAnswer) {
      opt.classList.remove("bg-[#b37869]");
      opt.classList.add("bg-green-300");
      opt.querySelector(".iconTick").classList.remove("hidden");
    }

    if (i === index && index !== correctAnswer) {
      opt.classList.remove("bg-[#b37869]");
      opt.classList.add("bg-red-300");
      opt.querySelector(".iconCross").classList.remove("hidden");
    }
  });

  if (index === correctAnswer) score++;
}

// ====== NEXT BUTTON ======
nextBtn.addEventListener("click", () => {
  if (!optionSelected) {
    alert("Please select an answer first!");
    return;
  }

  clearInterval(timerInterval);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
});

// ====== SHOW RESULT ======
function showResult() {
  quizBox.classList.add("opacity-0", "pointer-events-none", "scale-[0.9]");
  resultBox.classList.remove("opacity-0", "pointer-events-none", "scale-[0.9]");

  const message =
    score >= questions.length / 2
      ? "Great job! You got"
      : "Sorry, you got only";

  textScore.innerHTML = `
    <span class="flex justify-center my-[10px] text-[18px] font-medium">
      ${message} <p class="font-semibold px-[4px]">${score}</p> out of <p class="font-semibold px-[4px]">${questions.length}</p>
    </span>
  `;
}

// ====== RESTART QUIZ ======
restartBtn.addEventListener("click", () => {
  resultBox.classList.add("opacity-0", "pointer-events-none", "scale-[0.9]");
  quizBox.classList.remove("opacity-0", "pointer-events-none", "scale-[0.9]");
  currentQuestion = 0;
  score = 0;
  showQuestion(currentQuestion);
});

// ====== QUIT QUIZ ======
quitBtn.addEventListener("click", () => {
  window.location.reload();
});
