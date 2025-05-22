const questions = [
  {
    question: "What was the real reason Itachi killed the Uchiha clan?",
    options: [
      "He hated them",
      "To join the Akatsuki",
      "To prevent a coup",
      "To protect Sasuke",
    ],
    answer: "To prevent a coup",
  },
  {
    question:
      "What is the name of the sword Zoro received from Kuina’s family?",
    options: ["Wado Ichimonji", "Sandai Kitetsu", "Shusui", "Enma"],
    answer: "Wado Ichimonji",
  },
  {
    question: "What is Aizen’s Zanpakuto ability?",
    options: [
      "Control over shadows",
      "Illusions through scent",
      "Complete hypnosis",
      "Lightning manipulation",
    ],
    answer: "Complete hypnosis",
  },
  {
    question: "What technique did Luffy first use Gear Second in?",
    options: ["Vs Blueno", "Vs Crocodile", "Vs Rob Lucci", "Vs Enel"],
    answer: "Vs Blueno",
  },
  {
    question: "What does Tobi (Obito) use to phase through objects?",
    options: ["Flying Raijin", "Mangekyo Kamui", "Izanagi", "Rinnegan"],
    answer: "Mangekyo Kamui",
  },
  {
    question: "What is Ichigo’s Hollow form called when he loses control?",
    options: ["Vasto Lorde", "Full Hollow", "Zangetsu", "Bankai Beast"],
    answer: "Vasto Lorde",
  },
  {
    question: "Who gave Luffy his hat?",
    options: ["Shanks", "Roger", "Garp", "Ace"],
    answer: "Shanks",
  },
  {
    question: "What is the true identity of Pain in Naruto?",
    options: ["Yahiko", "Nagato", "Konan", "Obito"],
    answer: "Nagato",
  },
  {
    question: "What was the purpose of the Ryoka invasion in Bleach?",
    options: [
      "To steal the Hōgyoku",
      "To kill Aizen",
      "To rescue Rukia",
      "To become Soul Reapers",
    ],
    answer: "To rescue Rukia",
  },
  {
    question: "What is the final ability of Naruto’s Six Paths Sage Mode?",
    options: [
      "Truth-Seeking Balls",
      "Tailed Beast Mode",
      "Infinite Tsukuyomi",
      "Asura Path",
    ],
    answer: "Truth-Seeking Balls",
  },
];

let currentQuestion = 0;
let score = 0;

const welcome = document.getElementById("welcome");
const quizBox = document.getElementById("quiz");
const questionTag = document.getElementById("question");
const optionsBox = document.getElementById("options");
const resultBox = document.getElementById("result");
const scoreText = document.getElementById("scoreText");

function startQuiz() {
  welcome.style.display = "none";
  quizBox.style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionTag.textContent = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selectedBtn, correctAnswer) {
  const allButtons = optionsBox.querySelectorAll("button");

  allButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  if (selectedBtn.textContent !== correctAnswer) {
    selectedBtn.classList.add("wrong");
  } else {
    score++;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }, 1500);
}

function endQuiz() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  scoreText.textContent = `You scored ${score} out of ${questions.length}! 🎉`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.style.display = "none";
  startQuiz();
}
