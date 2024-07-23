const keys = document.querySelectorAll('.key');
const audioContext = new AudioContext();
const notes = {
  Sa: 261.63, // C4
  Re: 293.66, // D4
  Ga: 329.63, // E4
  Ma: 349.23, // F4
  Pa: 392.00, // G4
  Dha: 440.00, // A4
  Ni: 493.88 // B4
};

keys.forEach((key) => {
  key.addEventListener('click', () => {
    playNote(key.dataset.key);
  });
});

function playNote(note) {
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(notes[note], audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, 500); // play for 500ms
}