var leveltoanswers = {
	1 : "BROWSER",
	2 : "ZOMBIE",
	3 : "CROWN",
	4 : "PIRATE",
	5 : "SMELL",
}

var nooflevels = 5; 
var currentlevel = 1; 

var tempanswer = leveltoanswers[currentlevel];
var options = {
	0 : true, 1 : true, 2 : true, 3 : true, 4 : true, 5 : true, 6 : true, 7 : true, 8 : true, 
	9 : true, 10 : true, 11 : true, 12 : true, 13 : true, 14 : true, 15 : true, 16 : true, 17 : true,
	18 : true, 19 : true, 20 : true, 21 : true, 22 : true, 23 : true, 24 : true, 25 : true, 26 : true, 
	27 : true, 28 : true}

var blanks = {} 
var letters = {} 

function main(level) {
	if(currentlevel==2){
		window.location="level2.html";
	}
	if(currentlevel==3){
		window.location="level3.html";
	}
	if(currentlevel==4){
		window.location="level4.html";
	}
	if(currentlevel==5){
		window.location="level5.html";
	}
	currentlevel = level;
	tempanswer = leveltoanswers[currentlevel];
	var fiveMinutes = 60,     
		display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
	addblanks(currentlevel); 
	console.log(currentlevel+" "+ tempanswer)
	addoptions(currentlevel); 
}
function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	var end =setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes; //03:43
		seconds = seconds < 10 ? "0" + seconds : seconds; // 10:01

		display.textContent = minutes + ":" + seconds;
		if(timer<11){
			$(".timer").css("color","red");
		}
		if (--timer < 0) {
			window.location = "gameover.html";
			clearInterval(end);
		}

	},1000);
}
function create_random_string(level){
    var random_string = leveltoanswers[level]; 
    var n = random_string.length;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < 18-n; i++ ){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    random_string = shuffleString(random_string);
    return random_string;
}

function shuffleString(s){
    var arr = s.split('');           // Convert String to array
    var n = s.length;
    for(var i = 0; i<n; i++){
        var j = Math.floor(Math.random()*n);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    s = arr.join('');
    return s;
}
function addoptions(level) {
	var s = create_random_string(level);
	for (var i = 0; i < 18; ++i) {
		letters[i] = s[i];
	}
	$("#letters").empty(); 
	for (var i = 0; i < 9; ++i)
		$("#letters").append("<span class='letter' onclick='addletter(\"" + s[i] + "\", " + i + ")'>" + s[i] + "</span>");
	$("#letters").append("<br>");
	for (var i = 9; i < 18; ++i)
		$("#letters").append("<span class='letter' onclick='addletter(\"" + s[i] + "\", " + i + ")'>" + s[i] + "</span>");
}
function addletter(lettertoadd, index) {
	if (options[index] == false) {
		return;
	}
	else {
		var ffv = findfirstemptyblank();
		var element = ffv[0];
		var elindex = ffv[1];
		element.innerHTML = lettertoadd;
		options[index] = false;
		$(".letter")[index].onclick = null;
		$(".letter")[index].style.cursor = "not-allowed";
		$(".letter")[index].style.background = "green";

		blanks[elindex] = index;
		updatetempanswer(); 

		if (allfilled())
			nextmove();
	}
}
function updatetempanswer() {
	var answer = leveltoanswers[currentlevel];
	var s = "";
	$(".blank").each(function(item, element){
		var xxx = element.innerHTML;
		if (xxx === "_" || xxx != answer[item]) {
			s += answer[item];
		}
	});
	tempanswer = s;
}
function allfilled() {
	var isempty = false;
	$(".blank").each(function(item, element) {
		if (element.innerHTML == "_")
			isempty = true;
	});
	return !isempty;
}
function findfirstemptyblank() {
	var elementtoreturn;
	var index;
	var blanks = document.getElementsByClassName("blank");
	for (var i = 0; i < blanks.length; ++i) {
		if (blanks[i].innerHTML == "_") {
			index = i;
			elementtoreturn = blanks[i];
			break;
		}
	}
	return [elementtoreturn, index];
}
function addblanks(level) {
	$("#blanks").empty(); 
	var answer = leveltoanswers[level];
	for (var i = 0; i < answer.length; ++i) {
		$("#blanks").append("<span class='blank' onclick='deselect(\"" + i + "\")'>_</span>");
		blanks[i] = null;
	}
}
function deselect(elindex) {
	if ($(".blank")[elindex].innerHTML == "_") {
		return;
	}
	var lettertoremove = $(".blank")[elindex].innerHTML;
	$(".blank")[elindex].innerHTML = "_"; 
	var index = blanks[elindex];
	options[index] = true; 
	$(".letter")[index].onclick = function() { 
		addletter(letters[index], index);
	};
	$(".letter")[index].style.cursor = "pointer";
	$(".letter")[index].style.background = "white";
	$(".blank").css("color", "black");
	updatetempanswer(); 
}


function getsubmission() {
	var x = "";
	$(".blank").each(function(item, element) {
		x += element.innerHTML; 
	});

	return x;
}

function checkifcorrect(level) {
	var submission = getsubmission();
	if (submission === leveltoanswers[level])
		return true;
	return false;
}


function nextmove() {
	if (checkifcorrect(currentlevel)) {
		if (currentlevel === nooflevels) {
			window.location = "youWin.html";
		}
		currentlevel++;
		tempanswer = leveltoanswers[currentlevel];

		options = {
			0 : true, 1 : true, 2 : true, 3 : true, 4 : true, 5 : true, 6 : true, 7 : true, 8 : true, 
	9 : true, 10 : true, 11 : true, 12 : true, 13 : true, 14 : true, 15 : true, 16 : true, 17 : true,
	18 : true, 19 : true, 20 : true, 21 : true, 22 : true, 23 : true, 24 : true, 25 : true, 26 : true, 
	27 : true, 28 : true}
		blanks = {}
		letters = {}
		main(); 
	}
	else {
		markincorrect();
	}
}
function markincorrect() {
	$(".blank").css("color", "red");
}
