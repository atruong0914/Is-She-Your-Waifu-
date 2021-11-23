// home page
// **jquery**
// --how to play btn - select id - click - toggle display
$('#btn-rules').click(function(){
    $('.how-to-play').toggle();
});
// --play btn - select id - click - go to waifu.html
$('#btn-play').click(function(){
    window.location.href = 'waifu.html';
});


// waifu page
// **jquery**
// --good btn - click - change image & text - toggle yes btn - hide good & bad btn
$('#btn-good').click(function(){
    $('#rem').attr('src','/img/rem-good.png');
    $('#rem').effect('bounce', { times: 1}, 500);
    $('#text').text('I love that response! Lets play a game!');
    $('#btn-cont').toggle();
    $('#btn-bad').hide();
    $('#btn-good').hide();
});

// --continue btn - click - go to game.html
$('#btn-cont').click(function(){
    window.location.href = 'game.html'
});

// --bad btn - click - rem shake - toggle home btn - hide good & bad btns
$('#btn-bad').click(function(){
    $('#rem').attr('src','/img/rem-anger.png');
    $('#rem').effect('shake', {times: 20}, 900);
    $('p').text('W-What?! You\'re dead now!');
    $('#btn-home').toggle(400);
    $('#btn-bad').hide();
    $('#btn-good').hide();
    $('.loser').fadeIn(1000);
    $('body').css('background-image', 'url(/img/bg-lose.jpg)');
});

// --go back to home
$('#btn-home').click(function(){
    window.location.href = 'index.html';
});


// game page
// **variables**
// --holds the underscores
let word = [];
// --the letters guessed
let guessedLetters = [];
// --guesses
let totalGuesses = 5;
$('#guess-amount').text(totalGuesses);
// --lets make the words - array 
const wordRandom = ["rem", "ram", "rezero", "anime", "waifu"];

// --select the word randomly - multiply word length by a random #, round to lowest integer
let wordSelected = wordRandom[Math.floor(Math.random()*wordRandom.length)];

// --click, get input
$('#btn-enter').click(function(){
    let letter = $('#input-guess').val();
    // run this to do stuff with input
    guessLetter(letter);
    // --display
    $('#guess-word').html(word);
    // --make the winning word - word array to string
    let winWord = word.join("");
    // --if it equals eachother
    if (wordSelected === winWord){
        $('.winner-word').fadeIn(1000);
        $('#rem').attr('src','/img/rem-word.png');
        $('#rem').effect('bounce', { times: 1}, 500);
        $('#text').text('W-Wow! I\'m impressed... I have one last question for you.');
        $('#input-guess').toggle(1000);
        $('#btn-enter').toggle(1000);
        // --continue
        $('#btn-what').click(function(){
            $('#rem').attr('src', '/img/rem-quiz.png');
            $('#rem').effect('bounce', { times: 1}, 500);
            $('#text').text('Since we\'ve gotten this far... What is my favorite color?');
            // -- toggle btns
            $('#btn-play-again').toggle(1000);
            $('#btn-what').toggle(1000);
            // --new btns answer question
            $('.winner-word').append('<button id="btn-purple">Purple</button>',
             '<button id="btn-pink">Pink</button>', '<button id="btn-idk">I have no idea.</button>');
             // --outcomes based on player choice
             $('#btn-purple').click(function(){
                 $('#rem').attr('src','/img/rem-anger.png');
                 $('#rem').effect('shake', {times: 20}, 700);
                 $('#text').text('W-What?! You\'re dead now!');
                 $('.loser').fadeIn(1000);
                 $('body').css('background-image', 'url(/img/bg-lose.jpg)');
                 // --toggle off buttons and display new
                 $('#btn-idk').toggle(1000);
                 $('#btn-pink').toggle(1000);
                 $('#btn-purple').toggle(1000);
                 $('#btn-home').click(function(){
                     window.location.href = 'index.html';
                 });
                });

            $('#btn-idk').click(function(){
                $('#rem').attr('src','/img/rem-idk.png');
                $('#rem').effect('bounce', { times: 1}, 500);
                $('#text').text('Well, I love honest people... You make me so happy. You have my heart!');
                $('body').css('background-image', 'url(/img/bg-win.jpg)');
                // --toggle off other buttons and display new
                $('#btn-idk').toggle(1000);
                $('#btn-pink').toggle(1000);
                $('#btn-purple').toggle(1000);
                $('#btn-home').click(function(){
                    window.location.href = 'index.html';
                });
                });

            $('#btn-pink').click(function(){
                $('#rem').attr('src', '/img/rem-pink.png');
                $('#text').text('Why do you think you know everything about me?!');
                $('.loser').fadeIn(1000);
                $('body').css('background-image', 'url(/img/bg-lose.jpg)');
                $('#rem').effect('shake', {times: 20}, 700);
                // --toggle off other buttons and display new
                $('#btn-idk').toggle(1000);
                $('#btn-pink').toggle(1000);
                $('#btn-purple').toggle(1000);
                $('#btn-home').click(function(){
                    window.location.href = 'index.html';
                });
                });
        });
        // --play again
        $('#btn-play-again').click(function(){
            window.location.href = "";
        });
    };
});

// --iterate over array for length of word selected
for (let i = 0; i < wordSelected.length; i++){
    // --get underscores for the word length, filling array
    word.push("_ "); 
    // --display
    $('#guess-word').html(word);
};
// --function for what happens when you guess letters, this is so i can do something with letter
const guessLetter = (letter)=>{
    // --iterate over array the length of guessed letters
    for (let i = 0; i < guessedLetters.length; i++){
        // --if they guess same letter 
        if (guessedLetters[i] === letter){
            // --then do this
        $('#rem').attr('src', '/img/rem-no.png');
        $('#rem').effect('bounce', { times: 1}, 500);
        $('#guess-letters').html((guessedLetters) + " ");
        $('#text').text('You already guessed that letter!');
        $('#input-guess').effect('shake', {times: 3}, 400);
        // --end and return value
        return
        }
    }
    // --push to guessed letters array, add element to end of array and return new one
    guessedLetters.push(letter);
    // --set a flag to 0; no match. otherwise my code registers incorrect and correct. output once
    flag = 0;
    // --go over each letter in random word and compare to letter guessed
    for (let k = 0; k < wordSelected.length; k++){
        // --they typed correct letter
        if (wordSelected[k] === letter){
            // --in word array replace _ w/ a letter at word[k]
           word[k] = letter;
           $('#guess-word').effect('bounce', {times: 1}, 600);
           // --set flag to one so at least one match can occur/loop is iterating over each letter
           flag = 1;
        // --if they didn't type the correct letter
        }else {
           $('#guess-letters').html((guessedLetters) + " ");
        };
    };
    
    // --if condition is true, display
    if (flag === 1){
        $('#rem').attr('src', '/img/rem-nice.png');
        $('#text').text('I guess you\'re kinda good at this...');
    } 
    // --otherwise, display these for incorrect
    else {
        $('#rem').attr('src', '/img/rem-guess.png');
        $('#text').text('You are... A bit dumb I\'d say..?');
    // minus guess amount 
        totalGuesses -=1
        $('#guess-amount').text(totalGuesses);
    };
    gameOver();
    
};

// --end the game
function gameOver(){
    if (totalGuesses === 0){
        $('.loser').fadeIn(1000);
        $('#rem').attr('src','/img/rem-anger.png');
        // $('#rem').effect('shake', {times: 20}, 700);
        $('#text').text('W-What?! You\'re dead now!');
        $('#input-guess').toggle(1000);
        $('#btn-enter').toggle(1000);
        $('#btn-home').click(function(){
            window.location.href = 'index.html';
        });
        $('body').css('background-image', 'url(/img/bg-lose.jpg)');
    }
    
};




