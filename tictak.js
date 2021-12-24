flag = 1;

function check(){
    var q1 = document.getElementById("cell1").innerHTML;
    var q2 = document.getElementById("cell2").innerHTML;
    var q3 = document.getElementById("cell3").innerHTML;
    var q4 = document.getElementById("cell4").innerHTML;
    var q5 = document.getElementById("cell5").innerHTML;
    var q6 = document.getElementById("cell6").innerHTML;
    var q7 = document.getElementById("cell7").innerHTML;
    var q8 = document.getElementById("cell8").innerHTML;
    var q9 = document.getElementById("cell9").innerHTML;

    if((q1=='X' && q2=='X' && q3=='X') ||
       (q4=='X' && q5=='X' && q6=='X') || 
       (q7=='X' && q8=='X' && q9=='X') ||
       (q1=='X' && q4=='X' && q7=='X') ||
       (q2=='X' && q5=='X' && q8=='X') || 
       (q3=='X' && q6=='X' && q9=='X') ||
       (q1=='X' && q5=='X' && q9=='X') ||
       (q3=='X' && q5=='X' && q7=='X')
     ){
        window.alert('Player X won');
        reset();

    }
    else if((q1=='O' && q2=='O' && q3=='O') ||
       (q4=='O' && q5=='O' && q6=='O') || 
       (q7=='O' && q8=='O' && q9=='O') ||
       (q1=='O' && q4=='O' && q7=='O') ||
       (q2=='O' && q5=='O' && q8=='O') || 
       (q3=='O' && q6=='O' && q9=='O') ||
       (q1=='O' && q5=='O' && q9=='O') ||
       (q3=='O' && q5=='O' && q7=='O')
     ){
        window.alert('Player O won');
        reset();
    }
    else if((q1=='X' || q1=='O') 
    && (q2=='X' || q2=='O') && (q3=='X' || q3=='O')
    && (q4=='X' || q4=='O') && (q5=='X' || q5=='O')
    && (q6=='X' || q6=='O') && (q7=='X' || q7=='O')
    && (q8=='X' || q8=='O') && (q9=='X' || q9=='O')
    ){
        window.alert('DRAW');
        reset();
    }
}
function reset() {
    location.reload();
        document.getElementById('q1').value = '';
        document.getElementById("q2").value = '';
        document.getElementById("q3").value = '';
        document.getElementById("q4").value = '';
        document.getElementById("q5").value = '';
        document.getElementById("q6").value = '';
        document.getElementById("q7").value = '';
        document.getElementById("q8").value = '';
        document.getElementById("q9").value = '';
}


function f1() {
    if(flag == 1){
        document.getElementById("cell1").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell1").innerHTML = "O";
        flag = 1;
    }
}
function f2() {
    if(flag == 1){
        document.getElementById("cell2").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell2").innerHTML = "O";
        flag = 1;
    }
}
function f3() {
    if(flag == 1){
        document.getElementById("cell3").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell3").innerHTML = "O";
        flag = 1;
    }
}
function f4() {
    if(flag == 1){
        document.getElementById("cell4").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell4").innerHTML = "O";
        flag = 1;
    }
}
function f5() {
    if(flag == 1){
        document.getElementById("cell5").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell5").innerHTML = "O";
        flag = 1;
    }
}
function f6() {
    if(flag == 1){
        document.getElementById("cell6").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell6").innerHTML = "O";
        flag = 1;
    }
}
function f7() {
    if(flag == 1){
        document.getElementById("cell7").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell7").innerHTML = "O";
        flag = 1;
    }
}
function f8() {
    if(flag == 1){
        document.getElementById("cell8").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell8").innerHTML = "O";
        flag = 1;
    }
}
function f9() {
    if(flag == 1){
        document.getElementById("cell9").innerHTML = "X";
        flag = 0;
    }
    else{
        document.getElementById("cell9").innerHTML = "O";
        flag = 1;
    }
}