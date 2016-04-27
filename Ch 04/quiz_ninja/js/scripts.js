// TODO: We can use functions to help organize our code.

// We can start by wrapping the entire game loop into a
// play() function.

// Then we can break down the loop into simpler steps of
// asking a question and checking the answer.

// Finally, we can report when the game is over.

var quiz = [
    ["What is Superman's real name?", "Clarke Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

var score = 0; // initialize score

for (var i = 0, max = quiz.length; i < max; i++) {

    // get answer from user
    var answer = prompt(quiz[i][0]); // quiz[i][0] is the ith questions

    // check if answer is correct
    if (answer === quiz[i][1]) { // quiz[i][1] is the ith answer
        alert("Correct!");
        // increase score by 1
        score++;
    } else {
        alert("Wrong!");
    }
}

// Tell user the score
alert("Game Over, you scored " + score + " points");
