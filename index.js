var Word = require("./Word.js");

var arrWords = ["cat","dog","horse","bunny","frog"];

function selectWord(){
	var index = Math.floor(Math.random() * 5)

	return arrWords[index]; 
}

console.log(selectWord());
