// time constants in miliseconds
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const countDown = () => {
    // get date and a difference
    const arrivalDate = new Date("December 12, 2021 22:00:00").getTime();
    const today = new Date().getTime();
    const remaining = arrivalDate - today;

    // convert from miliseconds to days, hours, minutes and seconds
    const timeDays =  Math.floor(remaining / days);
    const timeHours =  Math.floor((remaining % days) / hours);
    const timeMinutes =  Math.floor((remaining % hours) / minutes);
    const timeSeconds =  Math.floor((remaining % minutes) / seconds);

    // display
    document.querySelector("#day").innerText = timeDays;
    document.querySelector("#hour").innerText = timeHours;
    document.querySelector("#minute").innerText = timeMinutes;
    document.querySelector("#second").innerText = timeSeconds;
};

countDown();
setInterval(countDown, 1000);