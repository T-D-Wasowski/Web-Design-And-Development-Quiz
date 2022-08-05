function main() {
	
	var startButton = document.getElementById("startButton");
	
	startButton.onclick = askQuestion; //This should start sequence rather than ask a single question. Submits name too.
	
	// () causes self-invokation, need to assign without 0
	
}

function askQuestion() {
	
	var userAnswer = prompt("Theoretical question");	
	
	document.getElementById("summary").innerHTML += userAnswer;
	
}

main();
