let letters = {};
let blanks = {};
let answers = {
    1 : "BROWSER",
    2 : "ZOMBIE",
    3 : "CROWN"
}
let currentLevel = 1;
let finalLevel = 4;
let answer = answers[currentLevel];

let options = {1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true};

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var end =setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes; //03:43
        seconds = seconds < 10 ? "0" + seconds : seconds; // 10:01

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            window.location = "gameover.html";
            clearInterval(end);
        }
    }, 1000);
}

window.onload = function main() {
    // var fiveMinutes = 60,
    //     display = document.querySelector('#time');
    // startTimer(fiveMinutes, display);
    addString();
    addBlanks();


};
//check answer
function getSubmission(){
    var x = "";
    $(".blank").each(function(item, element){
        x+=element.innerHTML;
    });
    console.log(x);
    return x;
}
function checkAnswer(){
    var s = getSubmission();
    console.log(s);
    if(s===answer){
        return true;
    }
    return false;
}
//
function addBlanks(){
    var n = answer.length;
    $("#blanks").empty();
    for(var i = 0; i<n; i++){
		$("#blanks").append("<span class='blank' onclick='deselect(\"" + i + "\")'>_</span>");
        blanks[i] = null;
    }
}
function deselect(i){
    if($(".blank")[i].innerHTML=="_"){
        return;
    }
    var lettertoremove = $(".blank")[i].innerHTML;
    $(".blank")[i].innerHTML="_";
    var index = blanks[i];
    options[index] = true;
    $(".letter")[index].onclick = function(){
        addletter(letters[index],index);
    }
    $(".letter")[index].style.cursor= "pointer";
    $(".letter")[index].style.background = "white";
    $(".blank").css("color", "black");
    updateAnswer();

}

function nextPage(){
    console.log("12fucku")
    if(checkAnswer){
        if(currentLevel==currentLevel){
            window.location = "youWin.html";
        }
        console.log("Correct")
        currentLevel++;
        answer =answers[currentLevel];
        let letters = {};
        let blanks = {};
        let options = {1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true};
        main();
    } else{
        incorrectAnswer();
        console.log("inCorrect")
    }
}
function incorrectAnswer(){
    $(".blank").style.color = "red";
}
function haveEmptyBlank(){
    var isEmpty = false;
    $(".blank").each(function(item, element){
        if(element.innerHTML == "_"){
            isEmpty = true;
        }
    });
    return isEmpty;

}

function addString(){
    s = create_random_string();
    for(var i = 0; i<18; i++){
        letters[i] = s[i];
    }
    $("#letters").empty();
    for(var i = 0; i<9; i++){
        $("#letters").append("<span class='letter' onclick='addletter(\"" + s[i] + "\", " + i + ")'>" + s[i] + "</span>");
    }
    $("#letters").append("<br>");
    for (let i = 9; i < 18; i++) {
        $("#letters").append("<span class='letter' onclick='addletter(\"" + s[i] + "\", " + i + ")'>" + s[i] + "</span>");
    }
    
}
function addletter(letterToAdd, i){
    if(options[i]==false){
        return;
    }
    else {
        
        if(!haveEmptyBlank){
            nextPage();
            console.log("koten");
        }
        let feb = firstEmptyBlank();
        let element = feb[0];
        let elindex = feb[1];

        element.innerHTML = letterToAdd;
        options[i] = false;

        $(".letter")[i].onclick = null;
        $(".letter")[i].style.cursor = "not-allowed";
        $(".letter")[i].style.background = "green";

        blanks[elindex] = i; 
        updateAnswer();

        if(!haveEmptyBlank){
            nextPage();
            console.log("koten");
        }

        
    }
}
function updateAnswer(){
    var s = "";
    var temp = answers[currentLevel];
    $(".blank").each(function(item, element){
        var x = element.innerHTML;
        if(x==="_" || x!=temp[item]){
            s+=temp[item];
        }
    });
    answer = s;
}
function firstEmptyBlank(){
    let elementToReturn;
    let index;
    let blanks = document.getElementsByClassName("blank");
    for (let i = 0; i < blanks.length; i++) {
        if(blanks[i].innerHTML == "_") {
            index = i;
            elementToReturn = blanks[i];
            break;
        }       
    }
    return [elementToReturn, index];
}



function create_random_string(){
    var random_string = answer; 
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