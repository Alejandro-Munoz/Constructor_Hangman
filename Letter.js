

function Letter(character){
	this.character = character;
	this.guessed = false;

	this.hasGuessed = function(){
		if(this.guessed){
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
		else{
			this.guessed = false;
		}
	}

}//constructor

module.exports = Letter;