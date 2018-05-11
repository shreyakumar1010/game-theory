function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> You got " + quiz.score + " out of " + quiz.questions.length + " questions right!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is a Game?", ["Two players interacting", "A fun activity", "A competition", "Nothing"], "Two players interacting"),
    new Question("Which outcome has the best reward?", ["Both confess", "Both silent","There are no rewards", "Neither"], "Both Confess"),
    new Question("What do the numbers in the matrix stand for?", ["Random values", "Risk and reward","Nothing", "Graph values"], "Risk and reward"),
    new Question("For the Prisoner's Dilemma, what should Player 1 do?", ["Confess", "Be Silent", "Wait", "N/A"], "Confess"),
    new Question("Is there a dominant strategy to this game?", ["No", "Yes", "Don't know", "Not Applicable"], "No")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();