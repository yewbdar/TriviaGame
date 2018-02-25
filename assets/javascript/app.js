$(document).ready(function () {
  
    $("#form").hide();
    $("#result").hide();

    var trivia = {

        second:15,
        intervalId: null,
        Answer: ["1", "2", "4", "3", "1", "2", "3", "1", "4", "4"],
        questions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        inCorrectAnswer: 0,
        correctAnswer: 0,
        notAnswered: 0,
        submit: true,
        // displaySecond: function () {
        //     localVal--;
        //     console.log(localVal);
        //     $("#time").text(this.second);
        
        //     if(this.second<=0){
        //         this.result();
        //     }
        // },
        getInterval: function () {
            debugger;
            var localVal = this.second;
            clearInterval(this.intervalId);
            
            this.intervalId=setInterval(function(){
                localVal--;
                $("#time").text(localVal);
                console.log(localVal);
                if(localVal===0)
                {
                    debugger;
                    clearInterval(this.intervalId);
                    this.result(); 
                    
                }
            }, 1000);
        },
        result: function () {
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

            $('#correct-answert').text(this.correctAnswer);
            $('#inCorrect-answer').text(this.inCorrectAnswer);
            $('#not-answer').text(this.notAnswered);

            $("#result").show();
            $("#form").hide();
            this.submit=false;
        },
    }
    // $('#time').html(this.second);

    $('#start').on('click', function () {
        
        trivia.getInterval();
        $('form').show();
    })
    $('#submit').on('click', function () {
        
        if (trivia.submit) {
            trivia.result();

            
        }
    });


})



