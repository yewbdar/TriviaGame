$(document).ready(function () {

    $("#form").hide();
    $(".result-box").hide();
    $('#submit').hide();
    $("#time").hide();
    $("#tittle").hide();
    var trivia = {

        second: 16,
        intervalId: null,
        Answer: ["1", "1", "3", "4", "1", "3", "2", "1", "3", "2"],
        questions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        inCorrectAnswer: 0,
        correctAnswer: 0,
        notAnswered: 0,
        submit: false,
        

        getResult: function () {
            $('#submit').hide();
            $("#time").hide();
            $("#tittle").hide();
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
                if(!this.submit){
                    $("#info").text("Times Up");
                }
            }
            $('#correct-answer').text(this.correctAnswer);
            $('#inCorrect-answer').text(this.inCorrectAnswer);
            $('#not-answer').text(this.notAnswered);
            $(".result-box").show();
            $("#form").hide();
            this.submit = false;
        },
    }
    function startInteral() {
        $('#start').hide();
        $("#time").show();
        $("#tittle").show();
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
        $('#submit').show();
    })
    $('#submit').on('click', function () {
        trivia.submit=true;
            trivia.getResult();
        
    })
})


