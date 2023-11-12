
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");


// define times
let setDays = 12;
let setHours = 2;
let setMinutes = 4;
let setSeconds = 12;

const timeFunction = setInterval(() => {
    setSeconds--;
    if(setSeconds === 0) {
        setSeconds = 60;
        setMinutes--;
    }

    if(setMinutes === 0) {
        setMinutes = 60;
        setHours--;
    }

    if(setHours === 0) {
        setHours = 24;
        setDays--;
    }

    if(setDays === 0) {
        clearInterval(timeFunction);
    }

    seconds.innerHTML = setSeconds < 10 ? `0${setSeconds}` : setSeconds;
    minutes.innerHTML = setMinutes < 10 ? `0${setMinutes}` : setMinutes;
    hours.innerHTML = setHours < 10 ? `0${setHours}` : setHours;
    days.innerHTML = setDays < 10 ? `0${setDays}` : setDays;

}, 1000);