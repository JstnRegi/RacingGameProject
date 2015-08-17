//keeps count of times play button has been clicked. So enemies dont glitch from pressing it too many times
var play = 0;

//chooses the color movements for the players
var player1Color = 'purple';
var player2Color = 'blue';

//move counters to keep track of player movements
var counter1 = 1;
var counter2 = 1;

//beginning positions of enemies and variable that is used to keep track of their movements
var enemyMove1 = 4;
var enemyMove2 = 7;
var enemyMove3 = 9;
var enemyMove4 = 12;
var enemyMove5 = 15;
var enemyMove6 = 16;
var enemyMove7 = 17;
var enemyMove8 = 20;
var enemyMove = [0, enemyMove1, enemyMove2, enemyMove3, enemyMove4, enemyMove5, enemyMove6, enemyMove7, enemyMove8];

//enemy speed which provided values for the setTimeout function
var slow = 140;
var medium = 100;
var fast = 80;
var fastest = 50;
var blitz = 45;

var speed = [0, slow, medium, fast, fastest];
//makes a number to randomly choose a speed for the enemy
/* can't find a way for a number that's chosen to be random to be called different times. For example,
 if the random num is 7 all functions that ask for the random number would all use 7. Hence multiple variables for now
  */
var rando1 = Math.floor((Math.random() * 4) + 1);
var rando2 = Math.floor((Math.random() * 4) + 1);
var rando3 = Math.floor((Math.random() * 4) + 1);
var rando4 = Math.floor((Math.random() * 4) + 1);
var rando5 = Math.floor((Math.random() * 4) + 1);
var rando6 = Math.floor((Math.random() * 4) + 1);
var rando7 = Math.floor((Math.random() * 4) + 1);
var rando8 = Math.floor((Math.random() * 4) + 1);



//table specific counters
var rows = 20;
var finish = 60;
var lastRow = 80;



    setInterval( function() {
        randoS = Math.floor((Math.random() * 4) + 1);
    }, 50);

//movement for players and their color
//listens for a keypress for player1
    $(window).on('keypress', function handleClick(e) {
        function player1(color) {
            //move right pressing d
            if (e.which === 100 && (counter1 % rows !== 0)) {
                counter1++;
                $('div#player1.gameboard div:nth-child(' + counter1 + ')').css("background-color", "" +  color + "");
                $('div#player1.gameboard div:nth-child(' + (counter1 - 1) + ')').css("background-color", "");

            }
            //move left pressing a
            if (e.which === 97 && (counter1 !== 1)
                && (counter1 !== (1 + (rows))) && (counter1 !== (1 + (rows * 2)))
                && (counter1 !== (1 + (rows * 3))) && (counter1 !== (1 + (rows * 4)))) {
                counter1--;
                $('div#player1.gameboard div:nth-child(' + counter1 + ')').css("background-color", "" +  color + "");
                $('div#player1.gameboard div:nth-child(' + (counter1 + 1) + ')').css("background-color", "");
            }
            //move down pressing s
            if (e.which === 115 && (counter1 < lastRow)) {
                counter1 += rows;
                $('div#player1.gameboard div:nth-child(' + counter1 + ')').css("background-color", "" +  color + "");
                $('div#player1.gameboard div:nth-child(' + (counter1 - rows) + ')').css("background-color", "");
            }
            //move up pressing w
            if (e.which === 119 && (counter1 !== 1) && (counter1 > rows)) {
                counter1 -= rows;
                $('div#player1.gameboard div:nth-child(' + counter1 + ')').css("background-color", "" +  color + "");
                $('div#player1.gameboard div:nth-child(' + (counter1 + rows) + ')').css("background-color", "");
            }
        }
        //chooser color for player movement
        player1(player1Color);
        //finish line
        if ((counter1 === finish) && (play === 1)) {
            window.location.replace("player1Win.html");
        }
    });

//listens for a keypress for player2
    $(window).on('keypress', function handleClick(e) {
        function player2 (color) {
            //move right pressing l
            if (e.which === 108 && (counter2 % rows !== 0)) {
                counter2++;
                $('div#player2.gameboard div:nth-child(' + counter2 + ')').css("background-color", "" +  color + "");
                $('div#player2.gameboard div:nth-child(' + (counter2 - 1) + ')').css("background-color", "");

            }
            //move left pressing j
            if (e.which === 106 && (counter2 !== 1)
                && (counter2 !== (1 + (rows))) && (counter2 !== (1 + (rows * 2)))
                && (counter2 !== (1 + (rows * 3))) && (counter2 !== (1 + (rows * 4)))) {
                counter2--;
                $('div#player2.gameboard div:nth-child(' + counter2 + ')').css("background-color", "" +  color + "");
                $('div#player2.gameboard div:nth-child(' + (counter2 + 1) + ')').css("background-color", "");
            }
            //move down pressing k
            if (e.which === 107 && (counter2 < lastRow)) {
                counter2 += rows;
                $('div#player2.gameboard div:nth-child(' + counter2 + ')').css("background-color", "" +  color + "");
                $('div#player2.gameboard div:nth-child(' + (counter2 - rows) + ')').css("background-color", "");
            }
            //move up pressing i
            if (e.which === 105 && (counter2 !== 1) && (counter2 > rows)) {
                counter2 -= rows;
                $('div#player2.gameboard div:nth-child(' + counter2 + ')').css("background-color", "" +  color + "");
                $('div#player2.gameboard div:nth-child(' + (counter2 + rows) + ')').css("background-color", "");
            }
        }
        //chooser color for player movement
        player2(player2Color);
        //finish line
        if ((counter2 === finish) && (play === 1)) {
            window.location.replace("player2Win.html");
        }
    });



//enemy movement for enemies
    function enemy1 (start, end, speed) {
        function enemyDown() {
            setTimeout(function () {
                dead(enemyMove1);
                if (enemyMove1 < end) {
                    enemyMove1 += rows;
                    console.log(enemyMove1);
                    $('div#player1.gameboard div:nth-child(' + enemyMove1 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove1 - rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove1 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove1 - rows) + ')').css("background-color", "");
                    enemyDown();
                }
                else {
                    enemyUp();
                }
            }, speed);
        }

        function enemyUp() {
            setTimeout(function () {
                dead(enemyMove1);
                if (start < enemyMove1) {
                    enemyMove1 -= rows;
                    console.log(enemyMove1);
                    $('div#player1.gameboard div:nth-child(' + enemyMove1 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove1 + rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove1 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove1 + rows) + ')').css("background-color", "");

                    enemyUp();
                }
                else {
                    enemyDown();
                }
            }, speed);
        }
        enemyDown();
    }

    function enemy2 (start, end, speed) {
        function enemyDown() {
            setTimeout(function () {
                dead(enemyMove2);
                if (enemyMove2 < end) {
                    enemyMove2 += rows;
                    console.log(enemyMove2);
                    $('div#player1.gameboard div:nth-child(' + enemyMove2 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove2 - rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove2 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove2 - rows) + ')').css("background-color", "");
                    enemyDown();
                }
                else {
                    enemyUp();
                }
            }, speed);
        }

        function enemyUp() {
            setTimeout(function () {
                dead(enemyMove2);
                if (start < enemyMove2) {
                    enemyMove2 -= rows;
                    console.log(enemyMove2);
                    $('div#player1.gameboard div:nth-child(' + enemyMove2 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove2 + rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove2 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove2 + rows) + ')').css("background-color", "");
                    enemyUp();
                }
                else {
                    enemyDown();
                }
            }, speed);
        }
        enemyDown();
    }

    function enemy3 (start, end, speed) {
        function enemyDown() {
            setTimeout(function () {
                dead(enemyMove3);
                if (enemyMove3 < end) {
                    enemyMove3 += rows;
                    console.log(enemyMove3);
                    $('div#player1.gameboard div:nth-child(' + enemyMove3 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove3 - rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove3 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove3 - rows) + ')').css("background-color", "");
                    enemyDown();
                }
                else {
                    enemyUp();
                }
            }, speed);
        }

        function enemyUp() {
            setTimeout(function () {
                dead(enemyMove3);
                if (start < enemyMove3) {
                    enemyMove3 -= rows;
                    console.log(enemyMove3);
                    $('div#player1.gameboard div:nth-child(' + enemyMove3 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove3 + rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove3 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove3 + rows) + ')').css("background-color", "");
                    enemyUp();
                }
                else {
                    enemyDown();
                }
            }, speed);
        }
        enemyDown();
    }

function enemy4 (start, end, speed) {
    function enemyDown() {
        setTimeout(function () {
            dead(enemyMove4);
            if (enemyMove4 < end) {
                enemyMove4 += rows;
                console.log(enemyMove4);
                $('div#player1.gameboard div:nth-child(' + enemyMove4 + ')').css("background-color", "red");
                $('div#player1.gameboard div:nth-child(' + (enemyMove4 - rows) + ')').css("background-color", "");
                $('div#player2.gameboard div:nth-child(' + enemyMove4 + ')').css("background-color", "red");
                $('div#player2.gameboard div:nth-child(' + (enemyMove4 - rows) + ')').css("background-color", "");
                enemyDown();
            }
            else {
                enemyUp();
            }
        }, speed);
    }

    function enemyUp() {
        setTimeout(function () {
            dead(enemyMove4);
            if (start < enemyMove4) {
                enemyMove4 -= rows;
                console.log(enemyMove4);
                $('div#player1.gameboard div:nth-child(' + enemyMove4 + ')').css("background-color", "red");
                $('div#player1.gameboard div:nth-child(' + (enemyMove4 + rows) + ')').css("background-color", "");
                $('div#player2.gameboard div:nth-child(' + enemyMove4 + ')').css("background-color", "red");
                $('div#player2.gameboard div:nth-child(' + (enemyMove4 + rows) + ')').css("background-color", "");
                enemyUp();
            }
            else {
                enemyDown();
            }
        }, speed);
    }
    enemyDown();
}

    function enemy5 (start, end, speed) {
        function enemyDown() {
            setTimeout(function () {
                dead(enemyMove5);
                if (enemyMove5 < end) {
                    enemyMove5 += rows;
                    console.log(enemyMove5);
                    $('div#player1.gameboard div:nth-child(' + enemyMove5 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove5 - rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove5 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove5 - rows) + ')').css("background-color", "");
                    enemyDown();
                }
                else {
                    enemyUp();
                }
            }, speed);
        }

        function enemyUp() {
            setTimeout(function () {
                dead(enemyMove5);
                if (start < enemyMove5) {
                    enemyMove5 -= rows;
                    console.log(enemyMove5);
                    $('div#player1.gameboard div:nth-child(' + enemyMove5 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove5 + rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove5 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove5 + rows) + ')').css("background-color", "");
                    enemyUp();
                }
                else {
                    enemyDown();
                }
            }, speed);
        }
        enemyDown();
    }

    function enemy6 (start, end, speed) {
        function enemyDown() {
            setTimeout(function () {
                dead(enemyMove6);
                if (enemyMove6 < end) {
                    enemyMove6 += rows;
                    console.log(enemyMove6);
                    $('div#player1.gameboard div:nth-child(' + enemyMove6 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove6 - rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove6 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove6 - rows) + ')').css("background-color", "");
                    enemyDown();
                }
                else {
                    enemyUp();
                }
            }, speed);
        }

        function enemyUp() {
            setTimeout(function () {
                dead(enemyMove6);
                if (start < enemyMove6) {
                    enemyMove6 -= rows;
                    console.log(enemyMove6);
                    $('div#player1.gameboard div:nth-child(' + enemyMove6 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove6 + rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove6 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove6 + rows) + ')').css("background-color", "");
                    enemyUp();
                }
                else {
                    enemyDown();
                }
            }, speed);
        }
        enemyDown();
    }

    function enemy7 (start, end, speed) {
        function enemyDown() {
            setTimeout(function () {
                dead(enemyMove7);
                if (enemyMove7 < end) {
                    enemyMove7 += rows;
                    console.log(enemyMove7);
                    $('div#player1.gameboard div:nth-child(' + enemyMove7 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove7 - rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove7 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove7 - rows) + ')').css("background-color", "");
                    enemyDown();
                }
                else {
                    enemyUp();
                }
            }, speed);
        }

        function enemyUp() {
            setTimeout(function () {
                dead(enemyMove7);
                if (start < enemyMove7) {
                    enemyMove7 -= rows;
                    console.log(enemyMove7);
                    $('div#player1.gameboard div:nth-child(' + enemyMove7 + ')').css("background-color", "red");
                    $('div#player1.gameboard div:nth-child(' + (enemyMove7 + rows) + ')').css("background-color", "");
                    $('div#player2.gameboard div:nth-child(' + enemyMove7 + ')').css("background-color", "red");
                    $('div#player2.gameboard div:nth-child(' + (enemyMove7 + rows) + ')').css("background-color", "");
                    enemyUp();
                }
                else {
                    enemyDown();
                }
            }, speed);
        }
        enemyDown();
    }

function enemy8 (start, end, speed) {
    function enemyDown() {
        setTimeout(function () {
            dead(enemyMove8);
            if (enemyMove8 < end) {
                enemyMove8 += rows;
                console.log(enemyMove8);
                $('div#player1.gameboard div:nth-child(' + enemyMove8 + ')').css("background-color", "red");
                $('div#player1.gameboard div:nth-child(' + (enemyMove8 - rows) + ')').css("background-color", "");
                $('div#player2.gameboard div:nth-child(' + enemyMove8 + ')').css("background-color", "red");
                $('div#player2.gameboard div:nth-child(' + (enemyMove8 - rows) + ')').css("background-color", "");
                enemyDown();
            }
            else {
                enemyUp();
            }
        }, speed);
    }

    function enemyUp() {
        setTimeout(function () {
            dead(enemyMove8);
            if (start < enemyMove8) {
                enemyMove8 -= rows;
                console.log(enemyMove8);
                $('div#player1.gameboard div:nth-child(' + enemyMove8 + ')').css("background-color", "red");
                $('div#player1.gameboard div:nth-child(' + (enemyMove8 + rows) + ')').css("background-color", "");
                $('div#player2.gameboard div:nth-child(' + enemyMove8 + ')').css("background-color", "red");
                $('div#player2.gameboard div:nth-child(' + (enemyMove8 + rows) + ')').css("background-color", "");
                enemyUp();
            }
            else {
                enemyDown();
            }
        }, speed);
    }
    enemyDown();
}

//sends the player back to the start if their move counter matches the enemy's move counter
    function dead(enemy) {
        if (counter1 === enemy) {
            counter1 = 1;
            $('div#player1.gameboard div:nth-child(' + counter1 + ')').css("background-color", "" + player1Color + "");
        }
        if (counter2 === enemy) {
            counter2 = 1;
            $('div#player2.gameboard div:nth-child(' + counter2 + ')').css("background-color", "" + player2Color + "");
        }
    }

//enemy initiates
    function enemies() {
        if(play < 1) {
            $('div#player1.gameboard div:nth-child(' + (counter1) + ')').css("background-color", "");
            $('div#player2.gameboard div:nth-child(' + (counter2) + ')').css("background-color", "");
            counter1 = 1;
            counter2 = 1;
        enemy1(enemyMove1, (enemyMove1 + lastRow), (speed[rando1] + rando1));
        enemy2(enemyMove2, (enemyMove2 + lastRow), (speed[rando2] + rando2));
        enemy3(enemyMove3, (enemyMove3 + lastRow), (speed[rando3] + rando3));
        enemy4(enemyMove4, (enemyMove4 + lastRow), (speed[rando4] + rando4));
        enemy5(enemyMove5, (enemyMove5 + lastRow), (medium + rando5));
        enemy6(enemyMove6, (enemyMove6 + lastRow), (speed[rando6] + rando6));
        enemy7(enemyMove7, (enemyMove7 + lastRow), (slow + rando7));
        enemy8(enemyMove8, (enemyMove8 + lastRow), (medium + rando8));
        play++;
        }
    }

$(document).ready(function(){
});


/* function enemyHorizontal() {
    if (test < 30) {
        setInterval(function () {
            test++;
            $('div#player2.gameboard div:nth-child(' + test + ')').css("background-color", "red");
            $('div#player2.gameboard div:nth-child(' + (test - 1) + ')').css("background-color", "");
            if(test === 30) {
                clearInterval(intervalStop);
                enemyHorizontal();
            }
        }, 500);
    }
    if (test > 29) {
        setInterval(function () {
            test--;
            $('div#player2.gameboard div:nth-child(' + test + ')').css("background-color", "red");
            $('div#player2.gameboard div:nth-child(' + (test + 1) + ')').css("background-color", "");
            if(test === 30) {
                clearInterval(intervalStop);
                enemyHorizontal();
            }
        }, 500);
    }



}
    */