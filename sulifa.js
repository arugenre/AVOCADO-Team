
// 1 - rock
// 2 = scissors
// 3 = paper
/**
 * 
 * 1 wins 2 lose 3 
 * 2 wins 3 lose 1 
 * 3 wins 1 lose 2
 * 
 * Scissors cuts paper
 * Paper covers rock
 * Rock crushes scissors
 */

function choice(a) {
    var comp = Math.ceil(Math.random()*3) ;
    if(a == 1){
        if(comp==2){
            document.getElementById("speak").innerHTML = "Rock crushes scissors. You Win!";
            var  userPoint = parseInt(document.getElementById("userPoint").innerHTML);
            document.getElementById("userPoint").innerHTML = userPoint+1;
        }
        else if(comp==3){
            document.getElementById("speak").innerHTML = "Paper covers rock. You Lose!";
            var  compPoint = parseInt(document.getElementById("compPoint").innerHTML);
            document.getElementById("compPoint").innerHTML = compPoint+1;
        }
        else{
            document.getElementById("speak").innerHTML = "Draw"
        }
    }
    else if(a == 2){
        if(comp==3){
            document.getElementById("speak").innerHTML = "Scissors cuts paper. You Win!";
            var  userPoint = parseInt(document.getElementById("userPoint").innerHTML);
            document.getElementById("userPoint").innerHTML = userPoint+1;
        }
        else if(comp==1){
            document.getElementById("speak").innerHTML = "Rock crushes scissors. You Lose!";
            var  compPoint = parseInt(document.getElementById("compPoint").innerHTML);
            document.getElementById("compPoint").innerHTML = compPoint+1;
            
        }
        else{
            document.getElementById("speak").innerHTML = "Draw"
        }
    }
    else{
        if(comp==1){
            document.getElementById("speak").innerHTML = "Paper covers rock. You Win!";
            var  userPoint = parseInt(document.getElementById("userPoint").innerHTML);
            document.getElementById("userPoint").innerHTML = userPoint+1;
        }
        else if(comp==2){
            document.getElementById("speak").innerHTML = "Scissors cuts paper. You Lose!";
            var  compPoint = parseInt(document.getElementById("compPoint").innerHTML);
            document.getElementById("compPoint").innerHTML = compPoint+1;
        }
        else{
            document.getElementById("speak").innerHTML = "Draw"
        }
    }
    var movesLeft = parseInt(document.getElementById("movesLeft").innerHTML[12] + document.getElementById("movesLeft").innerHTML[13]);
    document.getElementById("movesLeft").innerHTML = "Moves Left: " + (movesLeft-1);
    if(movesLeft == 0){
        var  userPoint = parseInt(document.getElementById("userPoint").innerHTML);
        var  compPoint = parseInt(document.getElementById("compPoint").innerHTML);
        if(userPoint > compPoint){
            alert("YOU WIN!!! CONGRATS")
        }
        else if(userPoint < compPoint){
            alert("YOU LOSE")        
        }
        else {
            alert("DRAW")      
        }
        restart();
    }
}
function mainPage() {
    window.location = "main.html";   
}
function restart() {
    location.reload();
}