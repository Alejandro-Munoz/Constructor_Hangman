
//constructor function for new letters
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

