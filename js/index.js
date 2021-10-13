const startingMinutes = 01;
let time = startingMinutes * 60;

const countdownEL = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEL.innerHTML = ` ${minutes}:${seconds} `;
    time--;
}

document.getElementById('string_inner_container').innerHTML = create_random_string(8)

function create_random_string(string_length){
    var random_string = ' ';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < string_length; i++ ){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
return random_string;
}