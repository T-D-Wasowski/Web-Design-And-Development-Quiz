//Will handle question counting, keeping score, timer, etc


function main() {
	
	var quizArray = [
		["When did Skyrim come out?",
			"2018", "2019", "2005", "2011",
			"2011", "images/skyrim.jpg"],
		["How old is Mario?",
			"68", "39", "33", "11",
			"39", "images/mario.jpg"],
		["Question 3",
			"Answer 1", "Answer 2", "Answer 3", "Answer 4",
			"Correct", "images/test.jpg"],
		["Question 4",
			"Answer 1", "Answer 2", "Answer 3", "Answer 4",
			"Correct", "images/test.jpg"],
		["Question 5",
			"Answer 1", "Answer 2", "Answer 3", "Answer 4",
			"Correct", "images/test.jpg"],
		["Question 6",
			"Answer 1", "Answer 2", "Answer 3", "Answer 4",
			"Correct", "images/test.jpg"],
		["Question 7",
			"Answer 1", "Answer 2", "Answer 3", "Answer 4",
			"Correct", "images/test.jpg"],
		["Question 8",
			"Answer 1", "Answer 2", "Answer 3", "Answer 4",
			"Correct", "images/test.jpg"],
		["Question 9",
			"Answer 1", "Answer 2", "Answer 3", "Answer 4",
			"Correct", "images/test.jpg"],
		["Question 10",
			"Answer 1", "Answer 2", "Answer 3", "Answer 4",
			"Correct", "images/test.jpg"]
	]
		
	var questionCount = 0;	
	
	var score = 0;

	//Using wrapper functions to pass functions which require parameters
	document.getElementById("startBtn").onclick = function(){
		startQuiz(quizArray, questionCount, score);};
	
}

//Initialises event handlers onto buttons
function initialise() {
	
}

//Activated when start button is pressed
function startQuiz(quizArray, questionCount, score) {
	
	document.getElementById("introDiv").style.display = "none";
	document.getElementById("questionWrapper").style.display = "block";

	changeQuestion(quizArray, questionCount);
	
	for(i = 1; i < 5; i++) {
		document.getElementById("answerBtn"+i).onclick = function(){
			checkAnswer(quizArray, questionCount, this, score);};
	}
	
}

function checkAnswer(quizArray, questionCount, answerBtn, score) {
	
	//disabling buttons
	for (i = 1; i < 5; i++) {
		document.getElementById("answerBtn" + i).onclick = null;
		document.getElementById("answerBtn" + i).className = "ansBtnDisabled";
	}
	
	//make function for right answer
	if (answerBtn.innerHTML == quizArray[questionCount][5]) {
		answerBtn.className = "ansBtnCorrect";		
		score += 2;
		
		document.getElementById("summaryAnswers").innerHTML += "<b>" + 
			quizArray[questionCount][0] + "</b> You answered: <b>" + answerBtn.innerHTML + 
			"</b> which is the right answer! <span style='color:green'>&#10004;<span><br>"
	
	//make function for wrok answer	
	} else {
		answerBtn.className = "ansBtnIncorrect";
		score -= 1;
		
		//Below finds the right answer
		for (i = 1; i < 5; i++) {
			if (document.getElementById("answerBtn" + i).innerHTML == quizArray[questionCount][5]) {
				document.getElementById("answerBtn" + i).className = "ansBtnCorrect";
				break;
			}
		}
		
		document.getElementById("summaryAnswers").innerHTML += "<b>" + 
			quizArray[questionCount][0] + "</b> You answered: <b>" + answerBtn.innerHTML + 
			"</b> which is the wrong answer! <span style='color:red'>&#10006;<span><br>"
	}
	

	
	//make function for this
	if(questionCount == 9) {
		finishQuiz();
	} else {
		questionCount++;
	}
	
	//function for this too?
	var nextBtn = document.getElementById("nextBtn")
	
	nextBtn.onclick = function(){nextQuestion(quizArray, questionCount, this, score);};
	nextBtn.className = "appBtn";

}

//Activated when next button is pressed
function nextQuestion(quizArray, questionCount, nextBtn, score) {

	nextBtn.onclick = null;
	nextBtn.className = "appBtnDisabled";
	
	changeQuestion(quizArray, questionCount);
	
	document.getElementById("questionCount").innerHTML = (questionCount+1) + "/10";
	
	for(i = 1; i < 5; i++) {
		document.getElementById("answerBtn"+i).onclick = function(){
			checkAnswer(quizArray, questionCount, this, score);};
		document.getElementById("answerBtn"+i).className = "ansBtn";
	}
	
}

//Activated when the finish button is pressed
function finishQuiz() {
	//loads summary page
}

function changeQuestion(quizArray, questionCount){
	
	document.getElementById("question").innerHTML = quizArray[questionCount][0];
	
	document.getElementById("questionImg").src = quizArray[questionCount][6];
	
	for(i = 1; i < 5; i++) {		
		document.getElementById("answerBtn" + i).innerHTML = quizArray[questionCount][i];	
	}
	
}


main();