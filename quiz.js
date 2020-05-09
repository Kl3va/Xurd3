//targeted Dom elements
const beginButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
let showScore = document.getElementById("show-score");
let currentQuestion = document.getElementById("current-question");
let off = document.getElementById("of");
let finalScore = document.getElementById("final-score");
let shuffledQuestion, currentQuestionIndex;
//quiz commences on clicking the begin button
beginButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
// the > button takes us to the next array of questions
nextButton.addEventListener("click", () => {
  currentQuestion.innerText++;
});
//displays score on click
answerButtonElement.addEventListener("click", displayScore);
//function starting the quiz
function startGame() {
  console.log("game started");
  beginButton.classList.add("hide");
  currentQuestion.classList.remove("hide");
  showScore.classList.remove("hide");
  off.classList.remove("hide");
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showScore.innerText = 0;
  currentQuestion.innerText = 1;
  finalScore.classList.add("hide");
  questionContainer.classList.remove("hide");
  setNextQuestion();
}
// function declared for random question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}
function resetState() {
  clearStatusclass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
function selectAnswer(e) {
  selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    beginButton.innerText = "RESTART";
    beginButton.classList.remove("hide");
    finalScore.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusclass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusclass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
function displayScore(e) {
  selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    console.log("right answer");
    showScore.innerText++;
  }
}
const questions = [
  {
    question:"What's my favorite sports",
    answers: [
      { text: "Football", correct: true },
      { text: "Basket ball", correct: false },
      { text: "Boxing", correct: false },
      { text: "Wrestling", correct: false },
    ],
  },
  {
    question: "Who' my favorite sportsman?",
    answers: [
      { text: "C.Ronaldo", correct: false },
      { text: "A.Martial", correct: false },
      { text: "Steph Curry", correct: false },
      { text: "Kevin Durant", correct: true },
    ],
  },
  {
    question: "What club do i support?",
    answers: [
      { text: "Fc Barcelona", correct: false },
      { text: "Chelsea", correct: false },
      { text: "Manchester United", correct: true },
      { text: "Juventus", correct: false },
    ],
  },
  {
    question: "What's my middle name?",
    answers: [
      { text: "Chukwuebuka", correct: false },
      { text: "Chiemeka", correct: true },
      { text: "Nnaemeka", correct: false },
      { text: "Chinedum", correct: false },
    ],
  },
  {
    question: "Who is my Favorite Artist?",
    answers: [
      { text: "NF", correct: true },
      { text: "LOGIC", correct: false },
      { text: "SIA", correct: false },
      { text: "J.COLE", correct: false },
    ],
  },
];