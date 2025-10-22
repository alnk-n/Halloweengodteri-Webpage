const deadline = new Date("2025-10-30T00:00:00Z");

function getTimeRemaining(endtime){
    const total = endtime - Date.now(); 
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return{
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function updateCount(){
    const countdownTime = document.getElementById("changeJS");
    const total = getTimeRemaining(deadline);

    if (total.total <= 0) {
    clearInterval(timer);
    return;
  }
    countdownTime.innerHTML = total.days + " Days | "
    + total.hours + " Hours | " + total.minutes + " Minutes";
}

const timer = setInterval(updateCount, 10000000);
updateCount();