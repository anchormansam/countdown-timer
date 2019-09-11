var deadline = 'December 6, 2019 17:00:00';
var milliseconds = 1000;
var clock = document.getElementById('clocktimer');
initializeClock(clock, deadline);
var milliseconds = 1000;
var clock = document.getElementById('clocktimer');
initializeClock(clock, deadline);

// update ui//
function getTimeRemaining(endtime){
    var total = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (total/1000) % 60 );
        if (seconds < 10){
            seconds = "0"+seconds;
        }
    var minutes = Math.floor( (total/1000/60) % 60 );
        if (minutes < 10){
        minutes = "0"+minutes;
         }
    var hours = Math.floor( (total/(1000*60*60)) % 24 );
        if (hours < 10){
        hours = "0"+hours;
         }
    var days = Math.floor( total/(1000*60*60*24) );
        if (days < 10){
        days = "0"+days;
         }
    return  {
        't': total,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}
//setinterval//
//var myVar = setInterval (tick, milliseconds);

function tick(){
    var json = getTimeremaining(deadline);
    console.log(json);
}


    //clearInterval(myVar);
function initializeClock(clock, endtime){
       
        var timeinterval = setInterval(function(){
            var total = getTimeRemaining(endtime);
            clock.innerHTML = '' + total.days +
                                ':'+ total.hours +
                                ':' + total.minutes +
                                ':' + total.seconds;
            if(total.t<=0){
                clearInterval(timeinterval); clock.innerHTML = 'Congratulations, YOU DID IT!!'
            }
        },1000)
}