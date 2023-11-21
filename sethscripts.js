// Navbar Icon Flatten

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

// Multiple Choice

function checkAnswers() {
    var correctAnswers = {
        q1: "c",
        q2: "b",
        q3: "a",
        q4: "a",
    };

    var allQuestions = Object.keys(correctAnswers);
    var allCorrect = true;

    allQuestions.forEach(function(question) {
        var selectedAnswer = document.querySelector('input[name="' + question + '"]:checked');
        
        if (!selectedAnswer) {
            alert("Please answer all questions.");
            allCorrect = false;
            return;
        }

        if (selectedAnswer.value !== correctAnswers[question]) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        alert("All answers are correct!");
    } else {
        alert("Some answers are incorrect.");
    }
}

function checkSecurity() {
    var correctAnswers = {
        q5: "a",
        q6: "b",
        q7: "d",
        q8: "d",
    };

    var allQuestions = Object.keys(correctAnswers);
    var allCorrect = true;

    allQuestions.forEach(function(question) {
        var selectedAnswer = document.querySelector('input[name="' + question + '"]:checked');
        
        if (!selectedAnswer) {
            alert("Please answer all questions.");
            allCorrect = false;
            return;
        }

        if (selectedAnswer.value !== correctAnswers[question]) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        alert("All answers are correct!");
    } else {
        alert("Some answers are incorrect.");
    }
}

function checkNetwork() {
    var correctAnswers = {
        q9: "c",
        q10: "d",
        q11: "b",
        q12: "d",
    };

    var allQuestions = Object.keys(correctAnswers);
    var allCorrect = true;

    allQuestions.forEach(function(question) {
        var selectedAnswer = document.querySelector('input[name="' + question + '"]:checked');
        
        if (!selectedAnswer) {
            alert("Please answer all questions.");
            allCorrect = false;
            return;
        }

        if (selectedAnswer.value !== correctAnswers[question]) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        alert("All answers are correct!");
    } else {
        alert("Some answers are incorrect.");
    }
}
