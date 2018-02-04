var inquirer = require("inquirer");
var Word = require("./Word.js");
var animals = require("./animals.js");

function startGame(){
	var arrWords = animals;
	var limitGuesses = 0;
	var numberOfGuesses = 0;

	var randomWord = selectWord();

	//update limit of guesses base on word length
	limitGuesses = randomWord.length + 5;

	var newWord = new Word(randomWord);

	function selectWord(){
		var index = Math.floor(Math.random() * 224)

		return arrWords[index]; 
	}

	askLetter(newWord);

	function askLetter(newWord){
		
		inquirer.prompt([
			{
				type:"input",
				message:"Enter a letter:",
				name:"letter",
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
			//var that stores user input
			var inputLetter = answers.letter;
			//check if user has remaining gueses
			if((numberOfGuesses < limitGuesses)){
				//increase number of guesses
				numberOfGuesses++;
				//check if letter is in word
				newWord.guessLetter(inputLetter);
				//display guessed letters and guesses remaining
				console.log("gueesed letters: ", newWord.getWord());
				console.log("#guesses-remaining: ", limitGuesses - numberOfGuesses)
				//check if complete word has been guessed
				if(randomWord.toLowerCase().trim() === newWord.getWord().toLowerCase().trim()){
					console.log("YOU WIN!!!");
					//User Won and is prompt if he/she wants to play again
					inquirer.prompt([
						{
							type: "list",
						    name: "play",
						    message: "Play again?",
						    choices: ["Yes", "No"]
						}
					]).then(function(answers){
						//start game
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
				console.log("YOU LOSE!");
				console.log("Hidden Word: ", randomWord);
				//User Lose and is prompt if he/she wants to play again
				inquirer.prompt([
						{
							type: "list",
						    name: "play",
						    message: "Play again?",
						    choices: ["Yes", "No"]
						}
					]).then(function(answers){
						//start game
						if(answers.play === "Yes"){
							startGame();
						}

					})//inquirer play again
			}

		})//inquirer
	}//askLetter
}

startGame();
	