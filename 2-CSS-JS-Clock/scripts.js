const analogRadio = document.getElementById('analog');
const digitalRadio = document.getElementById('digital');
const activeDiv = document.querySelector('.active');

const analogClock = document.querySelector('.analog-clock');
const digitalClock = document.querySelector('.digital-clock');

analogRadio.addEventListener('change', () => {
  if (analogRadio.checked) {
    console.log('Analog Mode Selected');
    digitalClock.style.display = 'none';
    analogClock.style.display = 'block';
  }
});

digitalRadio.addEventListener('change', () => {
  if (digitalRadio.checked) {
    console.log('Digital Mode Selected');
    analogClock.style.display = 'none';
    digitalClock.style.display = 'flex';
  }
});

// FOR ANALOG CLOCK
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTimeAnalog() {
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

setInterval(setTimeAnalog, 1000);

// Digital Clock
const digitalClockHour = document.querySelector('.digital-hour');
const digitalClockMinute = document.querySelector('.digital-minute');
const digitalClockSecond = document.querySelector('.digital-second');
const digitalClockMeridiem = document.querySelector('.digital-meridiem');
const digitalClockDay = document.querySelector('.digital-day');

function setTimeDigital() {
  const now = new Date();
  const seconds = now.getSeconds();
  digitalClockSecond.textContent = seconds < 10 ? `0${seconds}` : seconds;

  const minutes = now.getMinutes();
  digitalClockMinute.textContent = minutes < 10 ? `0${minutes}` : minutes;

  let hours = now.getHours();
  hours = hours % 12 || 12;
  digitalClockHour.textContent = hours < 10 ? `0${hours}` : hours;

  const AmOrPm = hours >= 12 ? 'PM' : 'AM';
  digitalClockMeridiem.textContent = AmOrPm;

  let day = now.getDay();
  if (day == 0) {
    day = 'SUNDAY';
  } else if (day == 1) {
    day = 'MONDAY';
  } else if (day == 2) {
    day = 'TUESDAY';
  } else if (day == 3) {
    day = 'WEDNESDAY';
  } else if (day == 4) {
    day = 'THURSDAY';
  } else if (day == 5) {
    day = 'FRIDAY';
  } else if (day == 6) {
    day = 'SATURDAY';
  }

  digitalClockDay.textContent = day;
}

setInterval(setTimeDigital, 1000);
