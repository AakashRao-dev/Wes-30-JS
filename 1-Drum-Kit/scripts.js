// Step-1: Get the user keyboard input & compare it with array value
// Step-2: If true play the audio
// const keyCodeValues = [65, 83, 68, 70, 71, 72, 74, 75, 76];
/*
window.addEventListener('keydown', e => {
  keyCodeValues.forEach(val => {
    if (e.keyCode === val) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`[data-key="${e.keyCode}"]`);

      key.classList.add('play');
      audio.play();

      setTimeout(() => {
        key.classList.remove('play');
      }, 300);
    }
  });
});
*/

window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add('play');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not a transform event
  this.classList.remove('play');
}
