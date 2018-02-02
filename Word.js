var Letter = require("./Letter.js");


function Word(inputWord){
	this.letters = [];

	for(var i = 0; i < inputWord.length; i++){
		this.letters.push(new Letter(inputWord[i]));
	}

	this.getWord = function(){
		var word = "";
		// console.log(this.letters.length);
		for(var j = 0; j < this.letters.length; j++){
			word += this.letters[j].character;
		}
		return word;
	}

	this.guessLetter = function(char){
		for(var x = 0; x < letters.length; x++){
			Letter.checkCharacter(letters[x]);
		}
	}


}//Word constructor

 // var l = new Word("hola");

// console.log(l.getWord());

module.exports = Word;