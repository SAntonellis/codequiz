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