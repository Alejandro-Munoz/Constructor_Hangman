var inquirer = require("inquirer");
var Word = require("./Word.js");


function startGame(){
	var arrWords = ["cat","dog","horse","bunny","frog","bird",];
	var limitGuesses = 10;
	var numberOfGuesses = 0;

	var randomWord = selectWord();
	var newWord = new Word(randomWord);

	function selectWord(){
		var index = Math.floor(Math.random() * 5)

		return arrWords[index]; 
	}

	askLetter(newWord);

	function askLetter(newWord){
		
		inquirer.prompt([
			{
				type:"input",
				message:"Enter a letter:",
				name:"letter",
				default:"a",
				validate:function(value){
					if(value.length == 1){
						return true;
					}
					else{

						return "Enter just ONE letter!";
					}
				}
			}
		]).then(function(answers){
			// console.log(answers.letter,numberOfGuesses);
			var inputLetter = answers.letter;
			

			if((numberOfGuesses < limitGuesses)){
				numberOfGuesses++;

				newWord.guessLetter(inputLetter);

				// console.log("randomWord: ", randomWord);
				console.log("gueesed letters: ", newWord.getWord());
				console.log("#guesses-remaining: ", limitGuesses - numberOfGuesses)

				if(randomWord.trim() === newWord.getWord().trim()){
					console.log("You Win!!!");
					inquirer.prompt([
						{
							type: "list",
						    name: "play",
						    message: "Play again?",
						    choices: ["Yes", "No"]
						}
					]).then(function(answers){
						// console.log(answers.letter,numberOfGuesses);
						console.log(answers.play);

						if(answers.play === "Yes"){
							startGame();
						}

					})//inquirer play again

				}
				else{
					askLetter(newWord);
				}
			}
			else{
				console.log("You Loose!");
			}

		})//inquirer
	}//askLetter
}



// var randomWord = selectWord();
// console.log("randomword: ",randomWord);

//prompt user for guesses
// askLetter();
startGame();
	


	




// console.log(selectWord());
