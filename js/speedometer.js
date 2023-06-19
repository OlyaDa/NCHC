let delay = 2000;
let value = 0;
let valueStore = 0;
let tick = 1;
let tickStore = 1;
let tickDiff = 0;
let tickDiffValue = 0;
let startTime = 0;
let isRunning = false;

function valBetween(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function loop() {
  value = Math.random() * 160;
  tick = valBetween(Math.ceil((value / 160) * 49), 1, 49);
  tickDiff = Math.abs(tick - tickStore);
  tickDiffValue = Math.abs(value - valueStore) / tickDiff;
  console.log("value: " + value);
  console.log("tick: " + tick);
  console.log("tickDiff: " + tickDiffValue + " * " + tickDiff + " = " + (tickDiffValue * tickDiff));

  let counter = 0;
  const valueStoreTemp = valueStore;
  const tickStoreTemp = tickStore;

  if (value > valueStore) {
    for (let i = tickStoreTemp; i <= tick; i++) {
      setTimeout(() => {
        document.querySelector('#speedometer path:nth-child(' + i + ')').classList.add("color");
        const labelValue = Math.abs(valueStoreTemp + (tickDiffValue * Math.abs(tickStoreTemp - i)));
        document.querySelector('#speedometer-label').textContent = labelValue.toFixed(2);
        if (i === tick) {
          document.querySelector('#speedometer-label').textContent = value.toFixed(2);
        }
      }, 35 * counter);
      counter++;
    }
  } else if (value < valueStore) {
    for (let i = tickStoreTemp; i >= tick; i--) {
      setTimeout(() => {
        document.querySelector('#speedometer path:nth-child(' + i + ')').classList.remove("color");
        const labelValue = Math.abs(valueStoreTemp - (tickDiffValue * Math.abs(tickStoreTemp - i)));
        document.querySelector('#speedometer-label').textContent = labelValue.toFixed(2);
        if (i === tick) {
          document.querySelector('#speedometer-label').textContent = value.toFixed(2);
        }
      }, 35 * counter);
      counter++;
    }
  }

  // Update value and tick store
  valueStore = value;
  tickStore = tick;

  // Check if the loop should continue
  const currentTime = Date.now();
  if (isRunning && currentTime - startTime < 10000) {
    setTimeout(loop, delay);
  } else {
    isRunning = false;
  }
}

// Click event listener for the start button
document.querySelector('#start-btn').addEventListener('click', () => {
  if (!isRunning) {
    // Reset the variables
    value = 0;
    valueStore = 0;
    tick = 1;
    tickStore = 1;
    startTime = Date.now();
    isRunning = true;
    loop();

    // Stop the script after 10 seconds
    setTimeout(() => {
      isRunning = false;
    }, 10000);
  }
});
