function updateClock() {

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourHand = document.getElementById("h");
  const minuteHand = document.getElementById("min");
  const secondHand = document.getElementById("sec");
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const secondDeg = (seconds / 60) * 360;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

//call the updateClock function every second, so that the clock updates in real-time.
setInterval(updateClock, 1000);
