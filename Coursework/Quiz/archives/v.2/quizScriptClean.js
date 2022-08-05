//Will handle question counting, keeping score, timer, etc

//Was local, but because of the timer interval loop I cannot pass this variable continuously
//As a result, had to be made global...
//Doesnt have to be global if I make an html element for this...
var score = 0;

function main() {
	
	var quizArray = [
		["Incredibly accurate science show with an alcoholic grandad?",
			"The Big Bang Theory", "Rick and Morty", "Myth Busters", "Braniac: Science Abuse",
			"Rick and Morty", "images/rick.jpg"],
		["Mario; a plumber through the ages, but how old is he?",
			"68", "39", "33", "11",
			"39", "images/mario.jpg"],
		["Favourites aside, which is the most watched movie of all time?",
			"Titanic", "The Lion King", "Star Wars: Episode IV", "Jurassic Park",
			"Titanic", "images/titanic.jpg"],
		["Incredible physics, though the cake is a lie?",
			"Left 4 Dead", "CounterStrike", "Dota 2", "Portal",
			"Portal", "images/portal.jpg"],
		["Sass, glitter and a whole load of attitude?",
			"RuPaul's Drag Race", "Barbie: The Pearl Princess", "Trolls: The Movie", "Cupcakes",
			"RuPaul's Drag Race", "images/rupaul.jpg"],
		["Skyrim; a game that always returns, but when was it first released?",
			"2005", "2011", "2021", "2018",
			"2011", "images/skyrim.jpg"],
		["Crawl out through the fallout, baby?",
			"Doom Eternal", "Fallout 4", "Elder Scrolls", "Tetris",
			"Fallout 4", "images/fallout.jpg"],
		["Acquiring over 9000 in just under 40 episodes?",
			"Naruto", "Sword Art Online", "One Piece", "Dragon Ball",
			"Dragon Ball", "images/dbz.jpg"],
		["Makes scars look good and hunts monsters for a living?",
			"Spiderman", "The Witcher", "Dora the Explorer", "Peppa Pig",
			"The Witcher", "images/witcher.jpg"],
		["Beach-bod dating on high budget?",
			"Monopoly", "Big Brother", "Love Island", "BBC News",
			"Love Island", "images/loveisland.jpg"]
	];
		
	var questionCount = 0;	

	//Using wrapper functions to pass functions which require parameters
	document.getElementById("startBtn").onclick = function(){
		startQuiz(quizArray, questionCount);};
	
}

//Initialises event handlers onto buttons
function initialise() {
	
}

//Activated when start button is pressed
function startQuiz(quizArray, questionCount) {
	
	document.getElementById("introDiv").style.display = "none";
	document.getElementById("questionWrapper").style.display = "block";

	changeQuestion(quizArray, questionCount);
	
	for(i = 1; i < 5; i++) {
		document.getElementById("answerBtn"+i).onclick = function(){
			checkAnswer(quizArray, questionCount, this);};
	}
	
	timer();
	
}

function checkAnswer(quizArray, questionCount, answerBtn) {
	
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
			"</b> which is the right answer! <span style='color:green'>&#10004;<span><br><br>"
	
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
			"</b> which is the wrong answer! <span style='color:red'>&#10006;<span><br><br>"
	}
	
	var nextBtn = document.getElementById("nextBtn")
	var finishBtn = document.getElementById("finishBtn")
	
	//make function for this
	if(questionCount == 9) {
		finishBtn.onclick = function(){finishQuiz();}; //possible pass playerName too
		finishBtn.className = "appBtn";
	} else {
		questionCount++;
		nextBtn.onclick = function(){nextQuestion(quizArray, questionCount, this);};
		nextBtn.className = "appBtn";
	}
	
}

//Activated when next button is pressed
function nextQuestion(quizArray, questionCount, nextBtn) {
	
	if(questionCount == 9) {
		nextBtn.style.display = "none";
		finishBtn.style.display = "inline";
	} else {
		nextBtn.onclick = null;
		nextBtn.className = "appBtnDisabled";
	}
	
	changeQuestion(quizArray, questionCount);
	
	document.getElementById("questionCount").innerHTML = (questionCount+1) + "/10";
	
	for(i = 1; i < 5; i++) {
		document.getElementById("answerBtn"+i).onclick = function(){
			checkAnswer(quizArray, questionCount, this);};
		document.getElementById("answerBtn"+i).className = "ansBtn";
	}
	
}

//Activated when the finish button is pressed
function finishQuiz() {
	
	//turns off timer
	clearInterval(tick);
	
	document.getElementById("questionWrapper").style.display = "none";
	document.getElementById("summaryDiv").style.display = "block";
	
	//TODO Make if for detemining score message and background colour!!!
	
	//function for below?
	var name = document.getElementById("playerName").value;
	var statistics = document.getElementById("statistics");
	
	if (score > 0) {
		statistics.innerHTML = "Well done" + (name == "" ? "" : " " + name) + 
		"! You've completed the quiz in <b>" + timeTakenCalc() + 
		(timeTakenCalc().substring(0,1) == "0" ? " seconds" : " minutes") +
		"</b> and you've scored <b>" + score + " points</b>. Well played!"; 
		
		//Below changes background colour!
		document.body.style.backgroundColor = "rgb(" + (255-(10*score)) +
			",  255," + (255-(10*score)) + ")";
			
	} else if (score < 0) {
		statistics.innerHTML = "Nice try" + (name == "" ? "" : " " + name) +
		"! You've completed the quiz in <b>" + timeTakenCalc() +
		(timeTakenCalc().substring(0,1) == "0" ? " seconds" : " minutes") +
		"</b> and you've scored <b>" + score + " points</b>. Better luck next time!";
		
		document.body.style.backgroundColor = "rgb(255, " + (255+(20*score)) + ", " +
		(255+(20*score)) + ")";
	}

	
}

function changeQuestion(quizArray, questionCount){
	
	document.getElementById("question").innerHTML = quizArray[questionCount][0];
	
	document.getElementById("questionImg").src = quizArray[questionCount][6];
	
	for(i = 1; i < 5; i++) {		
		document.getElementById("answerBtn" + i).innerHTML = quizArray[questionCount][i];	
	}
	
}

function timer() {
	var questionTimer = document.getElementById("questionTimer");
	var min = 5;
	var sec = 0;
	

	
	tick = setInterval(function() {		
		if(sec == 0) {
			min--;
			sec = 59;
		} else {
			sec--;	
		}

		questionTimer.innerHTML = "0" + min + ":" + (sec > 9 ? sec : "0" + sec);
		
		if(min == 0 && sec == 0) {
			document.getElementById("summaryAnswers").innerHTML += "You ran out of time...";
			finishQuiz()
		}
		
	}, 1000);	
	
}

function timeTakenCalc(){
	var timeRemaining = document.getElementById("questionTimer").innerHTML;
	var minutesRemaining = parseInt(timeRemaining.substring(0,2));
	var secondsRemaining = parseInt(timeRemaining.substring(3,5));
	
	var minutesTaken = 4 - minutesRemaining;
	var secondsTaken = 60 - secondsRemaining;
	var timeTaken = minutesTaken + ":" + (secondsTaken > 0 ? secondsTaken :
		"0" + secondsTaken)
		
	return timeTaken;
}

	
main();