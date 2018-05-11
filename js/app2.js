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
    new Question("How is the chicken game different from the Prisoner's dilemma?", ["It's not", "Different rules","Order is different", "N/A"], "Order is different"),
    new Question("What is the best outcome?", ["Swerving", "Crashing", "Being Chicken", "Not Being Chicken"], "Not Being chicken"),
    new Question("Where is the Chicken Game applicable in real life?", ["Traffic rules", "Nuclear War","School", "Other"], "Nuclear War"),
    new Question("Is there a dominant strategy?", ["Yes", "No", "Depends", "N/A"], "No"),
    new Question("What is a different version of the Chicken Game called?", ["Bird", "Turkey", "Volunteer", "All"], "Volunteer")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();