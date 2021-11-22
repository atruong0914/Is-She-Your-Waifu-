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
    $('p').text('I love that response! Lets play a game!');
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
    $('#rem').effect('shake', {times: 20}, 700);
    $('p').text('W-What?! You\'re dead now!');
    $('#btn-home').toggle(1000);
    $('#btn-bad').hide();
    $('#btn-good').hide();
    $('.loser').fadeIn(1000);
    $('body').css('background-image', 'url(/img/bg-lose.jpg)');
});

// --go back to home
$('#btn-home').click(function(){
    window.location.href = 'home.html';
});


// game page
// **jquery**


// **variables**
// --lets make the words - array - grab
const wordRandom = ["rem", "ram", "rezero", "anime", "waifu"];
// -- the word, lines, and guess
let word = "";
let wordLines = [];
let wordGuess = "";

// --select the words randomly
let wordSelected = wordRandom[Math.floor(Math.random()*wordRandom.length)];
// is it selecting the words?
console.log(wordSelected);

// **functions**
// -- start the game and implement the lines based on length of word

