$(document).ready(function () {

    $("#form").hide();
    $("#result").hide();

    var trivia = {

        second: 10,
        intervalId: null,
        Answer: ["1", "1", "3", "4", "1", "3", "2", "1", "4", "4"],
        questions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        inCorrectAnswer: 0,
        correctAnswer: 0,
        notAnswered: 0,
        submit: true,
        
        getResult: function () {
            debugger;
            clearInterval(this.intervalId);
            for (var i = 0; i < this.questions.length; i++) {
                var selectedVal = "";
                var selected = $("input[type='radio'][name='" + this.questions[i] + "']:checked");
                if (selected.length > 0) {
                    selectedVal = selected.val();
                    if (selectedVal === this.Answer[i]) {
                        this.correctAnswer++;
                    }
                    else {
                        this.inCorrectAnswer++;
                    }
                }
                else {
                    this.notAnswered++;
                }
            }
            $('#correct-answer').text(this.correctAnswer);
            $('#inCorrect-answer').text(this.inCorrectAnswer);
            $('#not-answer').text(this.notAnswered);
            $("#result").show();
            $("#form").hide();
            this.submit = false;
        },
    }
    function startInteral() {
        clearInterval(trivia.intervalId);
        trivia.intervalId = setInterval(displaySecond, 1000);
    }
    function displaySecond() {
        debugger;
        trivia.second--;
        // console.log(localVal);
        $("#time").text("0:"+trivia.second);

        if (trivia.second === 0) {
            trivia.getResult();
        }
    }
    $('#start').on('click', function () {
         startInteral();
        $('form').show();
    })
    $('#submit').on('click', function () {
        if (trivia.submit) {
            trivia.getResult();
        }
    })
})


