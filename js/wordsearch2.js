function Game(grid){
  this.newGrid = grid;
  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  this.words = ["SANSA", "VISERYS", "DAENERYS", "CERSEI", "ARYA", "JOFFREY","TYWIN", "SANDOR", "DROGO", "VARYS", "OBERYN", "DOTHRAKI", "TYRION", "BRANDON", "STANIS", "SANDSNAKE", "JONSNOW", "DIREWOLF", "GREYJOY"];
  this.hiddenWords = ["SANSA", "DAENERYS", "CERSEI", "ARYA", "JOFFREY","TYWIN", "SANDOR", "DROGO", "VARYS", "BRANDON"];
  this.wordHide = [];
  this.coordinates = {
              row : 0,
              col : 0,
            };
  this.newHiddenWords = [];
  this.letterPosition = [];
  this.storedLetter = [];
  this.wordToCheck = [];
}

Game.prototype.makeGrid = function(){
  $('td').remove();
  for (var i = 0; i < this.newGrid.length; i++){
    for (var j = 0; j < this.newGrid[i].length; j++){
      fields = $('<td>').attr('id', i + '-' + j).addClass('cell');
      fields.html(this.newGrid[i][j]);
      $('#squares').append(fields);
    }
  }
};

Game.prototype.newMakeList = function() {
  $('li').remove();
  for (var i = 0; i < this.newHiddenWords.length; i++){
    $('#wordList').append('<li>' + this.newHiddenWords[i] + '</li>');
  }
};

Game.prototype.makeList = function (){
  $('li').remove();
  for (var i = 0; i < this.hiddenWords.length; i++){
    this.newHiddenWords.push(this.hiddenWords[i]);
    $('#wordList').append('<li>' + this.hiddenWords[i] + '</li>');
  }
};

Game.prototype._generateRandomLetter = function(){
  var random = parseInt(Math.floor(Math.random() * this.alphabet.length));
  var letter = this.alphabet.charAt(random);
  return letter;
};

Game.prototype.fillGrid = function () {
  for (var i = 0; i < this.newGrid.length; i++){
    var newGrids = this.newGrid[i];
    for (var j = 0; j < newGrids.length; j++){
      var letter = this._generateRandomLetter();
      if (this.newGrid[i][j] === false ) {
        var str = "#"+i+"-"+j;
        $(str).html(letter);
      }
    }
  }
};

Game.prototype.checkWord = function(){
  $('li').remove();
  var wordToCheck = this.wordToCheck.join("");
  if (this.newHiddenWords.includes(wordToCheck) === true){
    var index = this.newHiddenWords.indexOf(wordToCheck);
    this.newHiddenWords.splice(index, 1);
    this.newMakeList();
    if(this.newHiddenWords.length === 0){
      this.gameWon();
    }
  }
    else {
      this.newMakeList();
      swal({
        title: "Not a word!",
        text: "When you play the game of thrones you either win or die",
        confirmButtonText: "Proceed"
      });
    }
};

Game.prototype.gameWon = function (){
  $('#win').remove();
  $('#popBox').toggleClass("hide");
  $('#popBox').append('<div id="win">' + "You have won the game of thrones!" + '</div>');
  $('#container').toggleClass("hide");
  $('#sidelist').toggleClass("hide");
  console.log("win");
};

Game.prototype.cleanWord = function(){
  this.wordToCheck = [];
};
