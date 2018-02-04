

function Letter(character){
	this.character = character;
	this.guessed = false;

	this.hasGuessed = function(){
		if(this.guessed === true){
			return this.character;
		}
		else{
			return "_";
		}
		
	}
	//
	this.checkCharacter = function(char){
		
		if(char === this.character){
			this.guessed = true;
		}
		
	}

}//constructor

module.exports = Letter;

// var l = new Letter("h");
// console.log(l.character,l.guessed);
// console.log(l.hasGuessed());
// l.guessed = true;
// console.log(l.hasGuessed());
// l.checkCharacter("o");
// console.log(l.guessed);
