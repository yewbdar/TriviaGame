$(document).ready(function () {

    $("#form").hide();

    var trivia = {

        second: 30,
        intervalId: null,
        Answer: ["1", "2", "4", "3", "1", "2", "3", "1", "4", "4"],
        questions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        inCorrectAnswer: 0,
        correctAnswer: 0,
        notAnswered: 0,
        displaySecond: function () {
            debugger;
            this.second--;
            $('#time').html(second);
        },
        getInterval: function () {
            debugger
            clearInterval(this.intervalId);
            this.intervalId = setInterval(displaySecond, 30 * 1000)
        },
        result: function () {

            for (var i = 0; i < this.questions.length; i++) {

                var selectedVal = "";
                var selected = $("input[type='radio'][name='" + this.questions[i] + "']:checked");
                if (selected.length > 0) {
                    selectedVal = selected.val();
                    if (selectedVal === this.Answer[i]) {
                        this.correctAnswer++;
                        console.log(this.correctAnswer);

                    }
                    else {
                        this.inCorrectAnswer++;
                        console.log(this.inCorrectAnswer);

                    }

                }
                else {
                    this.notAnswered++;
                    console.log(this.notAnswered);

                }

            }
        },


    }
    $('#time').html(this.second);

    $('#start').on('click', function () {
        debugger;
        trivia.getInterval();
        $('form').show();
    })
    $('#submit').on('click', function () {
        debugger;
        this.result });



})



