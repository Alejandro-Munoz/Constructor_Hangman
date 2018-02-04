var Letter = require("./Letter.js");

//constructor function for new words
function Word(inputWord){
	this.letters = [];
	debugger;
	for(var i = 0; i < inputWord.length; i++){
		this.letters.push(new Letter(inputWord[i].toLowerCase()));
	}

	this.getWord = function(){
		var word = "";
		for(var j = 0; j < this.letters.length; j++){
			word += this.letters[j].hasGuessed();
		}
		return word;
	}

	this.guessLetter = function(char){
		for(var x = 0; x < this.letters.length; x++){
			this.letters[x].checkCharacter(char);
		}
	}

}//Word constructor

module.exports = Word;