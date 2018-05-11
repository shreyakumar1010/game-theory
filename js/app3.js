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
    new Question("What should be the strategy in the first round?", ["Cheat", "Co-operate","Quit", "Other"], "Co-operate"),
    new Question("What is the lowest possible outcome in 3 rounds?", ["0", "-1", "-3", "1"], "-3"),
    new Question("What should be the strategy in the last round?", ["Cheat", "Co-operate","Quit", "Other"], "Cheat"),
    new Question("What is another name for the game of trust?", ["Iterated Prisoner", "Chicken", "Trust Me", "Prisoner"], "Iterated Prisoner"),
    new Question("What is the highest possible outcome in 3 rounds?", ["4", "6", "7", "8"], "7")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();