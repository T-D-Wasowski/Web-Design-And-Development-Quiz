function main() {
	
	var startButton = document.getElementById("startButton");
	
	startButton.addEventListener("click", askQuestion("Hello lol")); //This should start sequence rather than ask a single question. Submits name too.
	// Use addEventListener when more than one function... might work with parameters too???
	// Do I even need the questions linked t events??? Perhaps loop...
	
	// () causes self-invokation, need to assign without 0... can't pass parameter... Can't return parameter either...
	
	
}

function askQuestion(question) {
	
	var userAnswer = prompt(question);	

	document.getElementById("summary").innerHTML += userAnswer;
	
}

main();
