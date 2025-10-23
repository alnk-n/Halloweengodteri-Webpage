const deadline = new Date("2025-10-30T00:00:00Z");

function getTimeRemaining(endtime) {
  const total = endtime - Date.now();
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes };
}

function updateCount() {
  const countdownTime = document.getElementById("changeJS");
  const total = getTimeRemaining(deadline);

  if (total.total <= 0) {
    clearInterval(timer);
    countdownTime.innerHTML = "Tiden er ute!";
    return;
  }

  countdownTime.innerHTML =
    total.days + " Dager | " +
    total.hours + " Timer | " +
    total.minutes + " Minutter";
}

const timer = setInterval(updateCount, 60000);
updateCount();
