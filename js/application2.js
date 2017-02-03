var T = true, F = false;
var grid = [
            ['S','A','N','D','O','R', F,  F,  F,  F],
            [F  ,  F,'S','Y','R','E','N','E','A','D'],
            [F  ,  F,  F,'S',  F,  F,'A',  F,'N',  F],
            ['N',  F,'C','Y',  F,'S',  F,  F,'I',  F],
            ['O',  F,'E','R','N',  F,  F,  F,'W',  F],
            ['D',  F,'R','A',  F,  F,'D',  F,'Y','A'],
            ['N',  F,'S','V',  F,  F,'R',  F,'T','Y'],
            ['A','Y','E','R','F','F','O','J',  F,'R'],
            ['R',  F,'I',  F,  F,  F,'G',  F,  F,'A'],
            ['B',  F,  F,  F,  F,  F,'O',  F,  F,  F],
];
var game = new Game(grid);

var newGameClick = function () {
    console.log("start");
    renderGame();
    game.makeGrid();
    game.makeList();
    game.fillGrid();
    game.cleanWord();
  };

var renderGame = function() {
  document.getElementById("intro").classList = "hide";
  document.getElementById("popBox").classList = "hide";
  document.getElementById("container").classList = "";
  document.getElementById("sideList").classList = "";
};

var gameCheckWordClick = function (){
  game.checkWord();
  $(".active").removeClass("active");
  game.cleanWord();
  game.newMakeList();
};


document.getElementById("play").addEventListener("click", newGameClick);
document.getElementById("check").addEventListener("click", gameCheckWordClick);
$('body').on('click', 'td', function(){
  $(this).toggleClass('active');
  input = $(this).text();
  if($(this).hasClass('active')){
    game.wordToCheck.push(input);
    console.log(game.wordToCheck);
    return game.wordToCheck;
  }
  else if($(this).hasClass('active') === false){
    var index = game.wordToCheck.indexOf(input);
    game.wordToCheck.splice(index, 1);
    console.log(index, game.wordToCheck);
    return game.wordToCheck;
  }
});
