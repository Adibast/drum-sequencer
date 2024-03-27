const openHiHat = document.querySelector('.Open-Hi-Hat');
const closedHiHat = document.querySelector('.Closed-Hi-Hat');
const hiHatBark = document.querySelector('.Hi-Hat-Bark');
const hiHatPedal = document.querySelector('.Hi-Hat-pedal');
const crashSymbal = document.querySelector('.Crash-Cymbal');
const rideSymbal = document.querySelector('.Ride-Cymbal');
const snareDrum = document.querySelector('.Snare-Drum');
const hightTom = document.querySelector('.High-Tom');
const midTom = document.querySelector('.Mid-Tom');
const floorTom = document.querySelector('.Floor-Tom');
const bassDrum = document.querySelector('.Bass-Drum');
const playButton = document.querySelector('.play-button');
const stopButton = document.querySelector('.stop-button');

const columnNumber = document.querySelector('.column-input');
const columnValue = () => {return columnNumber.value};

window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});
window.addEventListener('keydown', (e) => {
  const divAnimation = document.querySelector(`div[data-key="${e.keyCode}"]`);
  divAnimation.classList.toggle('animating');
});
window.addEventListener('click', (e) => {
  const sound = e.target.querySelector('audio');
  if (!sound) return;
  sound.currentTime = 0;
  sound.play()
});

const soundsArray = ['Open-Hi-Hat', 'Closed-Hi-Hat', 'Hi-Hat-Bark', 'Hi-Hat-pedal', 'Crash-Cymbal', 'Ride-Cymbal', 'Snare-Drum', 'High-Tom', 'Mid-Tom', 'Floor-Tom', 'Bass-Drum'];

const gridContainer = document.querySelector('.sounds-selector');
function removeGrid() {
  while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
  }
}
function createGrid(rows, columns) {
  removeGrid();
  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = `row-${i + 1} grid-row ${soundsArray[i]}`;
    rowDiv.setAttribute('style', 'display: flex; flex: 1; background-color: white;');
    gridContainer.appendChild(rowDiv);
    for (let j = 0; j < columns; j++) {
      const columnDiv = document.createElement('div');
      columnDiv.className = 'column';
      columnDiv.setAttribute('style', 'display: flex; flex: 1; border: 1px solid black');
      rowDiv.appendChild(columnDiv);
    }
  }
  document.querySelectorAll('.column').forEach(div => {
    div.addEventListener('click', function() {
      this.classList.toggle('class-toggle');
    });
  });
};

document.querySelector('.column-set').addEventListener('click', () => createGrid(11, columnValue()))
shouldStop = false;
function isBlue(element) {
  const computedColor = window.getComputedStyle(element).getPropertyValue('background-color');
  const rgbColor = computedColor.match(/\d+/g);
  return rgbColor[0] === '0' && rgbColor[1] === '0' && rgbColor[2] === '255';
}
function iterateColumns(rows, columns, bpm) {
  let columnIndex = 0; 
  const intervalDuration = 60000 / bpm; 
  const interval = setInterval(() => {
    let columnElements = document.querySelectorAll(`.column:nth-child(${columnIndex + 1})`);
    columnElements.forEach(element => {
      let parentRow = element.parentElement;
      if (isBlue(element)) {
        // console.log('Found element with blue background:', element);
        if (parentRow.classList.contains('Open-Hi-Hat')) {
          openHiHat.currentTime = 0;
          openHiHat.play();
        };
        if (parentRow.classList.contains('Closed-Hi-Hat')) {
          closedHiHat.currentTime = 0;
          closedHiHat.play();
        };
        if (parentRow.classList.contains('Hi-Hat-Bark')) {
          hiHatBark.currentTime = 0;
          hiHatBark.play();
        };
        if (parentRow.classList.contains('Hi-Hat-pedal')) {
          hiHatPedal.currentTime = 0;
          hiHatPedal.play();
        };
        if (parentRow.classList.contains('Crash-Cymbal')) {
          crashSymbal.currentTime = 0;
          crashSymbal.play();
        };
        if (parentRow.classList.contains('Ride-Cymbal')) {
          rideSymbal.currentTime = 0;
          rideSymbal.play();
        };
        if (parentRow.classList.contains('Snare-Drum')) {
          snareDrum.currentTime = 0;
          snareDrum.play();
        };
        if (parentRow.classList.contains('High-Tom')) {
          hightTom.currentTime = 0;
          hightTom.play();
        };
        if (parentRow.classList.contains('Mid-Tom')) {
          midTom.currentTime = 0;
          midTom.play();
        };
        if (parentRow.classList.contains('Floor-Tom')) {
          floorTom.currentTime = 0;
          floorTom.play();
        };
        if (parentRow.classList.contains('Bass-Drum')) {
          bassDrum.currentTime = 0;
          bassDrum.play();
        };
      } 
      // else {
      //   console.log('Element does not have blue background:', element);
      // }
    });
    columnIndex++; 
    if (columnIndex >= columns || shouldStop === true) {
      clearInterval(interval);
      shouldStop = false;
    }
  }, intervalDuration);
};

playButton.addEventListener('click', function() {
  const bpm = parseInt(document.querySelector('.speed-input').value);
  iterateColumns(11, columnValue(), bpm);
});

stopButton.addEventListener('click', function() {
  shouldStop = true;
});

document.querySelector('.logo').addEventListener('click', () => window.open(`https://github.com/Adibast`));