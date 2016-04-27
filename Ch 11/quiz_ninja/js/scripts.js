(function() {
"use strict";
  var quiz = {
  "name":"Super Hero Name Quiz",
  "description":"How many super heroes can you name?",
  "question":"What is the real name of ",
  "questions": [
  { "question": "Superman", "answer": "Clarke Kent" },
  { "question": "Batman", "answer": "Bruce Wayne" },
  { "question": "Wonder Woman", "answer": "Dianna Prince" }
  ]
  }

  //// views ////
  var $question = document.getElementById("question");
  var $score = document.getElementById("score");
  var $feedback = document.getElementById("feedback");
  var $start = document.getElementById("start");
  var $form = document.getElementById("answer");
  var $timer = document.getElementById("timer");

  /// view functions ///

  function update(element,content,klass) {
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if(klass) {
      p.className = klass;
    }
  }

  function hide(element) {
    element.style.display = "none";
  }

  function show(element) {
    element.style.display = "block";
  }

  // Event listeners
  $start.addEventListener('click', function() { play(quiz) } , false);

  // hide the form at the start of the game
  hide($form);
    
  //// function definitions ////
  
  // TODO: Create a function that will generate a random number
  // between two values and send it to a callback function.

  function play(quiz){
    var score = 0; // initialize score
    update($score,score);
    // initialize time and set up an interval that counts down every second
    var time = 20;
    update($timer,time);
    var interval = window.setInterval( countDown , 1000 );
    // hide button and show form
    hide($start);
    show($form);
    // add event listener to form for when it's submitted
    $form.addEventListener('click', function(event) { 
      event.preventDefault();
      check(event.target.value);
      }, false);
    var question; // current question
    chooseQuestion();

    // nested functions
    
    function chooseQuestion() {
      console.log("chooseQuestion() invoked");

      // TODO: Filter the quiz.questions array into a new array
      // that only contains unasked questions.

      // TODO: Pick a random question from the filtered list.

      ask(question);
    }
    
    function ask(question) {
      console.log("ask() invoked");

      // TODO: Remember the question so we don't ask it again.

      update($question,quiz.question + question.question + "?");

      // clear the previous options
      $form.innerHTML = "";

      // TODO: Generate a randomly ordered list of answers from the
      // correct answer and two incorrect answers.
      var options = [];
    }

    function check(answer) {
      console.log("check() invoked");
      if(answer === question.answer){
        update($feedback,"Correct!","correct");
        // increase score by 1
        score++;
        update($score,score)
      } else {
        update($feedback,"Wrong!","wrong");
      }
      chooseQuestion();
    }
    
    // this is called every second and decreases the time
    function countDown() {
      // decrease time by 1
      time--;
      // update the time displayed
      update($timer,time);
      // the game is over if the timer has reached 0
      if(time <= 0) {
        gameOver();
      }
    }

    function gameOver(){
      console.log("gameOver() invoked");
      // inform the player that the game has finished and tell them how many points they have scored
      update($question,"Game Over, you scored " + score + " points");
      // stop the countdown interval
      window.clearInterval(interval);
      hide($form);
      show($start);
    }
  }
}())
