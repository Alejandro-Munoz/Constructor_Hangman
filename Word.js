var Letter = require("./Letter.js");



function Word(inputWord){
	this.letters = [];
	debugger;
	for(var i = 0; i < inputWord.length; i++){
		this.letters.push(new Letter(inputWord[i].toLowerCase()));
	}

	this.getWord = function(){
		var word = "";
		// console.log(this.letters.length);
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

// var w = new Word("hola");
// console.log(w.letters);
// console.log("this is the word",w.getWord());
// console.log(w.guessLetter("o"));
// console.log("this is the word",w.getWord());
// console.log(w.letters);
// console.log(w.guessLetter("a"));
// console.log("this is the word",w.getWord());
// console.log(w.letters);

// // console.log(w.getWord());

module.exports = Word;