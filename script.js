const nextSessionDate = new Date(2022, 7, 10, 19);

const countdownOverMessage = "The next session has started!";

const inner = document.querySelector(".inner");
const numDays = document.getElementById("numDays");
const numHours = document.getElementById("numHours");
const numMinutes = document.getElementById("numMinutes");
const numSeconds = document.getElementById("numSeconds");

function render() {
  const now = new Date();

  const diff = nextSessionDate - now;

  if (diff <= 0) {
    inner.innerHTML = countdownOverMessage;
  }

  const daysRemaining = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutesRemaining = Math.floor((diff / (1000 * 60)) % 60);
  const secondsRemaining = Math.floor((diff / 1000) % 60);

  numDays.innerHTML = daysRemaining < 10 ? "0" + daysRemaining : daysRemaining;
  numHours.innerHTML =
    hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining;
  numMinutes.innerHTML =
    minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining;
  numSeconds.innerHTML =
    secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining;
}

setInterval(render, 1000);
