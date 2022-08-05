/*var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
*/ 
//Use above if form needed...

function main() {
	
	var startBtn = document.getElementById("startBtn");
	var nextBtn = document.getElementById("nextBtn");
	
	
	startBtn.onclick = askQuestion; //This should start sequence rather than ask a single question. Submits name too.
	nextBtn.onclick = changeQuestion;
	
	document.getElementById("answerBtn1").onclick = checkAnswer;
	
	
	// () causes self-invokation, need to assign without 0
	
}

function askQuestion() {
	
	document.getElementById("introDiv").style.display = "none";
	document.getElementById("questionDiv").style.display = "block";
	document.getElementById("statDiv").style.display = "block";
	//call change question with initial set of parameters???
	//run loop to loop through different sets of question parameters???
	//start timer...
	
}

function changeQuestion() {
	
	//use wrapper functions as necessary
	document.getElementById("question").innerHTML = "New question lol what is 5 when 7 is 7?";
	document.getElementById("answerBtn1").innerHTML = "New Answer 1";
	document.getElementById("answerBtn2").innerHTML = "New Answer 2";
	document.getElementById("answerBtn3").innerHTML = "New Answer 3";
	document.getElementById("answerBtn4").innerHTML = "New Answer 4";
	
	document.getElementById("nextBtn").style.display = "none";
	//TODO
	//	Change Q! 
	// 	Change Answers & even handlers if necessary... if they don't call parameters it will be okay, but might need counter and so a REPLACEMENT of parameters...!!
	// 	Change Q Counter (2/10 --> 3/10)
	
}

function checkAnswer() {
	
	document.getElementById("nextBtn").style.display = "inline";
	//TODO 
	//	highlights green or red
	//	right answer displayed if user answer hilighted red
	//	next button appears & REPLACE addEventHandler to call change question with NEW PARAMETERS! (Where will these come from?)
	//  Invalidates all functions conected to tother buttons! Can't change answer once set already!
	

}

function hide() {
	//TODO Saves time
}

function show() {
		//TODO saves time
}
main();
