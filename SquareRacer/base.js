var counter1 = 0;
var counter2 = 0;
$(document).ready(function(){

    //listens for a keypress specifically for the "d" key
    $(window).on('keypress', function handleClick(e) {
        if (e.which === 100) {
            counter1++;
            $('div#player1.gameboard div:nth-child(' + counter1 + ')').css("background-color", "red");
            $('div#player1.gameboard div:nth-child(' + (counter1 - 1) + ')').css("background-color", "");
            if (counter1 === 20) {
                window.location.replace("player1Win.html");
            }

        }
    });


    $(window).on('keypress', function handleClick(e) {
        if (e.which === 108) {
            counter2++;
            $('div#player2.gameboard div:nth-child(' + counter2 + ')').css("background-color", "blue");
            $('div#player2.gameboard div:nth-child(' + (counter2 - 1) + ')').css("background-color", "");
            if (counter2 === 20) {
                window.location.replace("player2Win.html");
            }
        }
    });

});