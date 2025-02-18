const analogRadio = document.getElementById('analog');
const digitalRadio = document.getElementById('digital');
const activeDiv = document.querySelector('.active');

const analogClock = document.querySelector('.analog-clock');

analogRadio.addEventListener('change', () => {
  if (analogRadio.checked) {
    console.log('Analog Mode Selected');
    analogClock.style.display = 'block';
  }
});

digitalRadio.addEventListener('change', () => {
  if (digitalRadio.checked) {
    console.log('Digital Mode Selected');
    analogClock.style.display = 'none';
  }
});

// FOR ANALOG CLOCK
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDateAnalog() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 - 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 - 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegress = (hours / 12) * 360 - 90;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;

  secondHandTransitionReset(seconds);
}

function secondHandTransitionReset(seconds) {
  if (seconds == 0) {
    secondHand.style.transitionDuration = '0s';
    minuteHand.style.transitionDuration = '0s';
    hourHand.style.transitionDuration = '0s';
  } else {
    secondHand.style.transitionDuration = '0.5s';
    minuteHand.style.transitionDuration = '0.5s';
    hourHand.style.transitionDuration = '0.5s';
  }
}

setInterval(setDateAnalog, 1000);
