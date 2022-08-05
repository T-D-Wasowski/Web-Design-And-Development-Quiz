var student1 = document.getElementById("student1")
var student2 = document.getElementById("student2")
var student3 = document.getElementById("student3")
var student4 = document.getElementById("student4")


student1.onmouseover = function(){ showInfo(1); };
student1.onmouseout = function(){ hideInfo(1); };

student2.onmouseover = function(){ showInfo(2); };
student2.onmouseout = function(){ hideInfo(2); };

student3.onmouseover = function(){ showInfo(3); };
student3.onmouseout = function(){ hideInfo(3); };

student4.onmouseover = function(){ showInfo(4); };
student4.onmouseout = function(){ hideInfo(4); };

function showInfo(i) {
	document.getElementById("stud" + i + "Footer").style.display = "none";
	document.getElementById("stud" + i + "Info").style.display = "inline";
}

function hideInfo(i) {
	document.getElementById("stud" + i + "Info").style.display = "none";
	document.getElementById("stud" + i + "Footer").style.display = "inline";
}
