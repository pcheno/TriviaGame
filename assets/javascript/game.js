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
  }];

  // Creating variables to hold the number of wins, losses, and un-answered.
  var game = {
    "wins": 0,
    "losses": 0,
    "noAns": 0
  };


  $('#done').hide()
  $('#questions').hide()

  $('#start').on('click', function (e) {
    // console.log(this)
    // $(this).hide()
    // $('#questions').show()
    $(this).hide()
    $('#questAns').append(`<div class="row question"></div>`)
    var answers = []
    questions.forEach(function (q, index) {
      // console.log(q)
      $('#questAns').append(`<div class="row question"><div class="btn-group" data-toggle="buttons"><p>${q.question}</p><ul class="options-${index}"></ul></div></div>`)
      q.answer.forEach(function (answer, i) {
        // console.log(answer)
        $(`.options-${index}`).append(`<li><input type="radio" name="answer-${index}" class="answered option-${i}"data-answer=${answer.correct}>${answer.guess}</li>`)
      })
    })
    $('#done').show()
  })

  $('#done').on('click', function (e) {
    $('.answered:checked').each(function (a) {
      if ($(this).data('answer') == true) {
        ++game.wins
      } else {
        ++game.losses
      }
      game.noAns = questions.length - game.wins - game.losses

    }) //.each
  })


}); //$(document).ready(function ()