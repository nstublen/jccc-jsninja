var quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super heroes can you name?",
    "question": "What is the real name of ",
    "questions": [
        {"question": "Superman", "answer": "Clarke Kent"},
        {"question": "Batman", "answer": "Bruce Wayne"},
        {"question": "Wonder Woman", "answer": "Dianna Prince"}
    ]
}

//// dom references ////

// TODO: We can locate elements on our page using the
// document object's getElementById() function.  We can
// find elements for $question, $score, and $feedback.

/// view functions ///

function update(element, content, klass) {
    // TODO: We can insert content into the HTML document
    // by adding elements to the DOM.

    // We can look for an existing <p> tag or create a
    // new one.

    // Once we have a <p> tag, we can update its text
    // content.

    // We can also change its class attribute if a valid
    // "klass" value was passed to our update function.
}

play(quiz);

//// function definitions ////

function play(quiz) {
    var score = 0 // initialize score
    update($score, score);

    // main game loop
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }
    // end of main game loop
    gameOver();

    // nested functions

    function ask(question) {
        update($question, quiz.question + question);
        return prompt("Enter your answer:");
    }

    function check(answer) {
        if (answer === quiz.questions[i].answer) {
            update($feedback, "Correct!", "right");
            // increase score by 1
            score++;
            update($score, score)
        } else {
            update($feedback, "Wrong!", "wrong");
        }
    }

    function gameOver() {
        // inform the player that the game has finished and tell them how many points they have scored
        update($question, "Game Over, you scored " + score + " points");
    }
}
