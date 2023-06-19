var delay = 2000,
    value = 0,
    valueStore = 0,
    tick = 1,
    tickStore = 1,
    tickDiff = 0,
    tickDiffValue = 0,
    startTime = Date.now();

function valBetween(v, min, max) {
    return Math.min(max, Math.max(min, v));
}

function loop() {
    value = Math.ceil(Math.random() * 160);
    tick = valBetween(Math.ceil((value / 160) * 49), 1, 49);
    tickDiff = Math.abs(tick - tickStore);
    tickDiffValue = Math.abs(value - valueStore) / tickDiff;
    console.log("tickDiff: " + tickDiffValue + " * " + tickDiff + " = " + (tickDiffValue * tickDiff));

    var counter = 0,
        valueStoreTemp = valueStore,
        tickStoreTemp = tickStore;

    if (value > valueStore) {
        for (var i = tickStoreTemp; i <= tick; i++) {
            (function (i) {
                setTimeout(function () {
                    document.querySelector('#speedometer .path:nth-child(' + i + ')').classList.add("color");
                    document.querySelector('#speedometer-label').style.color = document.querySelector('#speedometer path:nth-child(' + i + ')').style.fill;
                    document.querySelector('#speedometer-label').textContent = Math.ceil(valueStoreTemp + (tickDiffValue * Math.abs(tickStoreTemp - i)));
                    if (i == tick) {
                        document.querySelector('#speedometer-label').textContent = value;
                    }
                    // console.log(i);
                }, 50 * counter);
                counter++;
            })(i);
        }
    } else if (value < valueStore) {
        for (var i = tickStoreTemp; i >= tick; i--) {
            (function (i) {
                setTimeout(function () {
                    document.querySelector('#speedometer .path:nth-child(' + i + ')').classList.remove("color");
                    document.querySelector('#speedometer-label').style.color = document.querySelector('#speedometer path:nth-child(' + i + ')').style.fill;
                    document.querySelector('#speedometer-label').textContent = Math.floor(valueStoreTemp - (tickDiffValue * Math.abs(tickStoreTemp - i)));
                    if (i == tick) {
                        document.querySelector('#speedometer-label').textContent = value;
                    }
                    // console.log(i);
                }, 50 * counter);
                counter++;
            })(i);
        }
    }

    valueStore = value;
    tickStore = tick;

    var currentTime = Date.now();
    if (currentTime - startTime < 20000) {
        setTimeout(loop, delay);
    }
}

document.querySelector('.start-btn').addEventListener('click', function () {
    startTime = Date.now(); // Reset the start time
    loop(); // Start the loop
});
