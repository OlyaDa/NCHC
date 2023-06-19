function showSpeedometerValues() {
  var valueElements = document.getElementsByClassName('speedometer-holder');
  var arrowElements = document.getElementsByClassName('speedometer-arrow');

  for (var i = 0; i < valueElements.length; i++) {
    valueElements[i].classList.remove('hide');
  }

  for (var j = 0; j < arrowElements.length; j++) {
    arrowElements[j].classList.add('hide');
  }
}

function revertSpeedometerValues() {
  var valueElements = document.getElementsByClassName('speedometer-holder');
  var arrowElements = document.getElementsByClassName('speedometer-arrow');

  for (var i = 0; i < valueElements.length; i++) {
    valueElements[i].classList.add('hide');
  }

  for (var j = 0; j < arrowElements.length; j++) {
    arrowElements[j].classList.remove('hide');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var startBtn = document.querySelector('#start-btn');
  var revertTimeout;

  startBtn.addEventListener('click', function() {
    showSpeedometerValues();

    clearTimeout(revertTimeout);
    revertTimeout = setTimeout(function() {
      revertSpeedometerValues();
    }, 20000); // Revert back after 10 seconds (10000 milliseconds)
  });
});
  