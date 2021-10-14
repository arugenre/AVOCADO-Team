<<<<<<< HEAD
function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    var end = setInterval(function(){
        minutes = parseInt(timer/60, 10 )
        seconds = parseInt(timer % 60,10);
=======
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var end =setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
>>>>>>> 5307f24726c39b4640193b411d43b2ee956c9caf

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            window.location = "http://127.0.0.1:5501/gameOver.html";
            clearInterval(end);
        }
<<<<<<< HEAD

    },1000);
}

window.onload = function () {
    var fiveMinutes = 600,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

document.getElementById('string_inner_container').innerHTML = create_random_string1()


function create_random_string1(){
    var random_string = 'BROWSER';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < 12; i++ ){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    random_string = shuffleString(random_string);
=======
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
document.getElementById('string_inner_container').innerHTML = create_random_string1();

function create_random_string1(){
    var random_string = 'BROWSER';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < 12; i++ ){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    random_string = shuffleString(random_string);

>>>>>>> 5307f24726c39b4640193b411d43b2ee956c9caf
return random_string;
}
function create_random_string2(){
    var random_string = 'ZOMBIE';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < 12; i++ ){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    random_string = shuffleString(random_string);

return random_string;
}
function create_random_string3(){
    var random_string = 'CROWN';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < 12; i++ ){
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