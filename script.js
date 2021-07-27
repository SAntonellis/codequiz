const quizContainer = document.getElementById('quiz');

const submitButton = document.getElementById('submit')

const resultsContainer = document.getElementById('results');



// functions

function myQuiz(){}

function quizResults(){}


// running myQuiz function first to display the quiz on page immediately
myQuiz();

// show results after pressing submit button:
submitButton.addEventListener('click', quizResults);


// quiz questions (SOURCED FROM W3schools.com):

const quizQuestions = [ 

//Q1
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: {
       1: "<script>",
       2: "<javascript>",
       3: "<js>",
       4: "<scripting>"
    },
    // answer section
    correctAnswer: "1"
  },

//Q2
  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?", "<p id="demo">This is a demonstration.</p>",
    answer: {
       1: "document.getElementByName("p").innerHTML = "Hello World!";",
       2: "document.getElementById("demo").innerHTML = "Hello World!";  ",
       3: "#demo.innerHTML = "Hello World!";",
       4: "document.getElement("p").innerHTML = "Hello World!";"
    },
    // answer section
    correctAnswer: "2"
  },  
  
//Q3  
  {
    question: "Where is the correct place to insert a JavaScript?",
    answer: {
      1: "",
      2: "",
      3: "",
      4: ""
    },
    // answer section
    correctAnswer: "1"
  },  
//Q4  
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: {
      1: "",
      2: "",
      3: "",
      4: ""
    },
    // answer section
    correctAnswer: "1"
  },

//Q5  
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: {
      1: "",
      2: "",
      3: "",
      4: ""
    },
    // answer section
    correctAnswer: "1"
  },

//Q6  
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: {
      1: "",
      2: "",
      3: "",
      4: ""
    },
    // answer section
    correctAnswer: "1"
  },

//Q7 
{
  question: "Inside which HTML element do we put the JavaScript?",
  answer: {
    1: "",
    2: "",
    3: "",
    4: ""
  },
  // answer section
  correctAnswer: "1"
},  

//Q8
{
  question: "Inside which HTML element do we put the JavaScript?",
  answer: {
    1: "",
    2: "",
    3: "",
    4: ""
  },
  // answer section
  correctAnswer: "1"
},

//Q9  
{
  question: "Inside which HTML element do we put the JavaScript?",
  answer: {
    1: "",
    2: "",
    3: "",
    4: ""
  },
  // answer section
  correctAnswer: "1"
},

//Q10
{
  question: "Inside which HTML element do we put the JavaScript?",
  answer: {
    1: "",
    2: "",
    3: "",
    4: ""
  },
  // answer section
  correctAnswer: "1"
}
];