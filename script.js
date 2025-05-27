const htmlQuiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    answer: "<a>",
  },
  {
    question: "Which tag is used to define an image in HTML?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>",
  },
  {
    question: "How do you insert a line break in HTML?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    answer: "<br>",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h1>", "<h6>", "<head>"],
    answer: "<h1>",
  },
  {
    question:
      "Which attribute is used in HTML to provide an alternate text for an image?",
    options: ["title", "alt", "src", "longdesc"],
    answer: "alt",
  },
  {
    question: "Which element is used to create a table row in HTML?",
    options: ["<tr>", "<td>", "<th>", "<table>"],
    answer: "<tr>",
  },
  {
    question: "Which of the following is not a semantic HTML tag?",
    options: ["<article>", "<footer>", "<div>", "<section>"],
    answer: "<div>",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    options: [
      "To link external CSS",
      "To embed images",
      "To provide metadata about the document",
      "To create clickable links",
    ],
    answer: "To provide metadata about the document",
  },
]; // questions

//variable declaration
const question_show = document.getElementById("quest_name");
const next_quest = document.getElementById("next");
const all_option = document.getElementById("All_option");

let questionNumber = 0; //question index num
let correctAnswer = 0; //score

let select = false; //for blocking user for next button selection until the user the select one option

next_quest.style.display = "none"; //if user click an option this next button will appear

show();
//show the question
function show() {
  select = false; // restart the selection to no click
  next_quest.style.display = "none";
  all_option.style.pointerEvents = "auto"; //enable hover an mouse-pointer
  all_option.innerHTML = "";
  let currentQuestion = htmlQuiz[questionNumber];
  question_show.innerText = currentQuestion.question;

  currentQuestion.options.forEach((opt) => {
    let li = document.createElement("li");
    li.innerText = opt;
    li.classList.add("option");

    li.onclick = () => {
      all_option.style.pointerEvents = "none"; //disable mouse pointer and hover effect
      checkAns(li, currentQuestion.answer); //check the answer
    };

    all_option.appendChild(li); // append li to the dom
  });
}

//check the answer wrong and right
function checkAns(selected, answer) {
  select = true; // enable for option selection
  next_quest.style.display = "block"; // enable the next button
  const option = document.querySelectorAll(".option");

  option.forEach((option) => (option.onclick = null)); // preventing selecting multiple option

  if (selected.innerText === answer) {
    selected.classList.add("right");

    correctAnswer++;
  } else {
    selected.classList.add("wrong");
  }
  option.forEach((opt) => {
    if (opt.innerText === answer) {
      opt.classList.add("right");
    }
  });
}

//next question button
next_quest.addEventListener("click", () => {
  if (select == true) {
    questionNumber++;
    if (htmlQuiz.length >= questionNumber + 1) {
      show();
    } else {
      showResult();
    }
  }
});

//show the result
function showResult() {
  question_show.innerText = "You have finished ";
  all_option.innerHTML = `Your score is ${correctAnswer} out of ${htmlQuiz.length}`;
  document.getElementById("nxt").style.display = "none";
}
