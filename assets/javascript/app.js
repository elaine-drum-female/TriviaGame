$(document).ready(function () {
    //variables
    var correctAnswers = ["Toy Story", "Fred Spice", "Chicago Bulls", "Nirvana", "the Lion King", "Dice", "Skeeter", "Mr. Belding"];
    var correctCount = 0;
    var incorrectCount = 0;
    var count = 30;
    var timerInterval;
    var totalQuestions = 8;
    var completeTotal = totalQuestions.toFixed();

    $('#start-button').click(function () {
        $('#hidden-content').hide();
        $('#start-content').hide();
        $('#start-button').hide();
        $('h1').hide();
        $("#hidden-content").show();
        startTimer();
    });

    $('.center').click(function () {
        event.preventDefault();
        clearInterval(timerInterval);
        endGame();
    });

    function startTimer() {
        timerInterval = setInterval(function () {
            count--;
            if (count === 0) {
                clearInterval(timerInterval);
                $('.allDone').text("All done!");
                endGame();
            }
            $('.time-start').text(count);
        }, 1000)
    }

    function endGame() {
        $('#triviaForm input[type=radio]:checked').each(function () {
            console.log(this.value);
            if (correctAnswers.indexOf(this.value) >= 0) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        })

        $('#start-content').show();
        $('#results').show();
        $('#hidden-content').hide();
        $('.itsCorrect').text(correctCount);
        $('.wrong').text(incorrectCount);
        $('.notAnswered').text(completeTotal - (correctCount + incorrectCount));
    }


































});