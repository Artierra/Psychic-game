alert("Hey, Lets play a game, type a letter and see if you can guess the letter I am thinking of ");
//create an array with all avaiable letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var win = 0;
var loss = 0;
var guessLeft = 10;
var GuessSoFar = [];
var computerGuess = '';
//reset everything to default and start a new game!


function reset() {
    guessLeft = 9;
    computerGuess = computerChoice[Math.round(Math.random() * computerChoice.length)];
    loss = 0;
    win = 0;
    GuessSoFar = [];
}
reset();




//document.onkeyup is a prescribed/method/function that records the letter 
//convert  key value to a string with from CharCode- and also change to lower case.
//

document.onkeyup = function(event) {
    var userGuess = [String.fromCharCode(event.keyCode).toLowerCase()];
    console.log(userGuess);
    //if a letter is not typed yet, then log it in the guessSoFar array
    // if user already type a letter then alert user choose another letter.
    if (GuessSoFar.indexOf(userGuess) === -1) {
        GuessSoFar.push(userGuess);
        console.log(GuessSoFar);
        //if userGuess is the same with computerGuess, then record win (#)
        // } else if (userGuess !== " ") {
        //     alert("that is not a letter");

        if (userGuess === computerGuess) {
            win++;
            console.log("win");

        } else if (userGuess !== computerGuess) {
            loss++
            //if userGuess is not the same as computerGuess then guessLeft decrease 
            guessLeft--;
            console.log("lose");
        }
    }
    //if guestLeft is 0 the the game reset
    if (guessLeft === 0) {
        loss++;
        reset();


        // } else {
        //      alert("chose another letter");
    } // }
    document.getElementById("win").innerHTML = win;
    document.getElementById("loss").innerHTML = loss;
    document.getElementById("guessleft").innerHTML = guessLeft;
    document.getElementById("guessosfar").innerHTML = GuessSoFar;

}