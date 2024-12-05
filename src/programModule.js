function programStart(){
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
    const drumkit = document.querySelector('.drumkit');
    const columnNumber = document.querySelector('.column-input');
    const sequencer = document.querySelector('.sequencer');
    const soundSelector= document.querySelector('.sounds-selector');
    const soundsArray = ['Open-Hi-Hat', 'Closed-Hi-Hat', 'Hi-Hat-Bark', 'Hi-Hat-pedal', 'Crash-Cymbal', 'Ride-Cymbal', 'Snare-Drum', 'High-Tom', 'Mid-Tom', 'Floor-Tom', 'Bass-Drum'];
    const columnValue = () => {return columnNumber.value};
    let shouldStop = false;

    drumkit.addEventListener('click', (e)=> {
      const sound = e.target.querySelector('audio');
      const link = e.target.closest('.logo');
      if (link) {
        window.open(`https://adibast.github.io/portfolio`, '_blank')
      } 
      if (!sound) return;
      sound.currentTime = 0;
      sound.play();
    });
    sequencer.addEventListener('click', (e)=> {
      const target = e.target;
      const noteElement = target.closest('.column');
      const playButton = target.closest('.play-button');
      const stopButton = target.closest('.stop-button');
      const columnSet = target.closest('.column-set');
      if (columnSet) {
        createGrid(11, columnValue());
      };
      if (noteElement) {
        noteElement.classList.toggle('class-toggle');
      };
      if (playButton) {
        const bpm = parseInt(document.querySelector('.speed-input').value);
        iterateColumns(11, columnValue(), bpm);
      };
      if (stopButton) {
        shouldStop = true;
      };
    });
    window.addEventListener('keydown', (e) => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const divAnimation = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio || !divAnimation) return;
      audio.currentTime = 0;
      audio.play();
      divAnimation.classList.toggle('animating');
    });
    function removeGrid() {
      while (soundSelector.firstChild) {
          soundSelector.removeChild(soundSelector.firstChild);
      }
    }
    function createGrid(rows, columns) {
      removeGrid();
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
      const width = isMobile ? '20px' : '30px';
      for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = `row-${i + 1} grid-row ${soundsArray[i]}`;
        rowDiv.setAttribute('style', 'display: flex; flex: 1; background-color: white;');
        soundSelector.appendChild(rowDiv);
        for (let j = 0; j < columns; j++) {
          const columnDiv = document.createElement('div');
          columnDiv.className = 'column';
          columnDiv.setAttribute('style', `display: flex; flex: 1; border: 1px solid black; width: ${width}`);
          rowDiv.appendChild(columnDiv);
        }
      };
    };
    function isBlue(element) {
      const computedColor = window.getComputedStyle(element).getPropertyValue('background-color');
      const rgbColor = computedColor.match(/\d+/g);
      return rgbColor[0] === '0' && rgbColor[1] === '0' && rgbColor[2] === '255';
    };
    function iterateColumns(rows, columns, bpm) {
      let columnIndex = 0; 
      const intervalDuration = 60000 / bpm; 
      const interval = setInterval(() => {
        let columnElements = document.querySelectorAll(`.column:nth-child(${columnIndex + 1})`);
        columnElements.forEach(element => {
          let parentRow = element.parentElement;
          if (isBlue(element)) {
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
        });
        columnIndex++; 
        if (columnIndex >= columns || shouldStop === true) {
          clearInterval(interval);
          shouldStop = false;
        }
      }, intervalDuration);
    };
  };
  export { programStart }