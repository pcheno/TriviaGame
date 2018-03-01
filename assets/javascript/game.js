$(document).ready(function () {
  // Creates an array containing objects with questions and answers

  var questions = [{
    question: "What pop star was known as The man of a thousand glasses?",
    answer: [{
      guess: "Rod Stewart",
      correct: false
    }, {
      guess: "Jim Croce",
      correct: false
    }, {
      guess: "Elton John",
      correct: true
    }, {
      guess: "John Denver",
      correct: false
    }]
  }, {
    question: "Good Times was a spin off from what two TV shows?",
    answer: [{
      guess: "Maude and All In the Family",
      correct: true
    }, {
      guess: "Happy Days and Laverne and Shirley",
      correct: false
    }, {
      guess: "Maude and The Jefferson's",
      correct: false
    }, {
      guess: "The Jefferson's and All in the Family",
      correct: false
    }]
  }, {
    question: "Who won the olympic decathlon in 1976?",
    answer: [{
      guess: "Bruce Boxleitner",
      correct: false
    }, {
      guess: "Bruce Jennings",
      correct: false
    }, {
      guess: "Bruce Lee",
      correct: false
    }, {
      guess: "Bruce Jenner",
      correct: true
    }]
  }, {
    question: "TV show Police Woman starred who?",
    answer: [{
      guess: "Angie Dickinson",
      correct: true
    }, {
      guess: "Lindsay Wagner",
      correct: false
    }, {
      guess: "Farrah Fawcett",
      correct: false
    }, {
      guess: "Angela Lansbury",
      correct: false
    }]
  }, {
    question: "Who was President of the United States in 1971?",
    answer: [{
      guess: "Gerald Ford",
      correct: false
    }, {
      guess: "Lyndon B. Johnson",
      correct: false
    }, {
      guess: "Jimmy Carter",
      correct: false
    }, {
      guess: "Richard Nixon",
      correct: true
    }]
  }];

  // Creating variables to hold the number of wins, losses, and un-answered.
  var game = {
    wins: 0,
    losses: 0,
    noAns: 0
  };
  var counter;
  var time = 30;

  //making countDown function
  function runTimer() {
    //var time = 30;
    counter = setInterval(function () {
      time = time - 1;
      if (time <= 0) {
        clearInterval(counter);
        endGame();
      } else {
        $('#display').text(time);
      }
    }, 1000); //setInterval function
  }  // function runTimer

  function endGame() {
    $('.answered:checked').each(function () {
      if ($(this).data('answer') == true) {
        ++game.wins;
      } else {
        ++game.losses;
      }
    }) //.each
    game.noAns = questions.length - game.wins - game.losses;
   
    $('#done').hide();
    $('#questAns').empty();
    $('#questAns').hide();
    $('#results').show();
    $('#wins').text(game.wins);
    $('#losses').text(game.losses);
    $('#noAns').text(game.noAns);
    $('#restart').show();
    $('#display').hide();
  }  //function endGame

  function restart() {
    $('#restart').hide();
    $('#questAns').hide();
    $('#done').hide();
    $('#results').hide();
    $('#display').hide();
    $('#start').show();
    time = 30;
    game.noAns = 0;
    game.losses = 0;
    game.wins = 0;
  }  // function restart


  restart();

  $('#start').on('click', function (e) {
    //remove start button
    $(this).hide();
    $('#questAns').show();
    $('#questAns').append(`<div class="row question"></div>`);

    questions.forEach(function (q, index) {
      $('#questAns').append(`<div class="row question"><div class="btn-group" data-toggle="buttons"><p>${q.question}</p><ul class="options-${index}"></ul></div></div>`);
      q.answer.forEach(function (answer, i) {
        $(`.options-${index}`).append(`<li><input type="radio" name="answer-${index}" class="answered option-${i}"data-answer=${answer.correct}>${answer.guess}</li>`);
      }); //q.answer for each
    }); //questions for each
    $('#done').show();
    //start count down from 60 seconds
    $('#display').show();
    //time = 30;
    $('#display').text(time);
    runTimer();

  }); // start on click

  $('#done').on('click', function () {
    clearInterval(counter);
    endGame();
  }); //done on click

  $('#restart').on('click', function () {
    restart();
  });  // restart on click


}); //$(document).ready(function ()