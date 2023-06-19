// Get references to the elements by their ids
var startButton = document.getElementById('start-btn');
var numberElements = document.querySelectorAll('[id^="number-"]');
var tickElements = document.querySelectorAll('[id^="tick-"]');

var originalFillValues = []; // Array to store the original fill values

// Function to update classes based on tick elements
function updateClasses() {
  for (var i = 0; i < numberElements.length; i++) {
    var numberElement = numberElements[i];
    var tickElement = tickElements[i];

    if (tickElement.classList.contains('color')) {
      numberElement.classList.add('color-fill');
    } else {
      numberElement.classList.remove('color-fill');
    }
  }
}

// Function to set the fill attribute to #eeeeef
function setFillAttribute() {
  for (var i = 0; i < numberElements.length; i++) {
    var numberElement = numberElements[i];
    originalFillValues[i] = numberElement.getAttribute('fill'); // Store the original fill value
    numberElement.setAttribute('fill', '#eeeeef');
  }
}

// Function to restore the original fill values
function restoreFillAttribute() {
  for (var i = 0; i < numberElements.length; i++) {
    var numberElement = numberElements[i];
    numberElement.setAttribute('fill', originalFillValues[i]); // Restore the original fill value
  }
}

// Add a "click" event listener to the start-btn element
startButton.addEventListener('click', function() {
  // Set the fill attribute to #eeeeef for numberElements
  setFillAttribute();

  // Run the updateClasses function immediately
  updateClasses();

  // Continuously monitor and update classes every 10 milliseconds
  var intervalId = setInterval(updateClasses, 10);

  // Stop the script after 20 seconds
  setTimeout(function() {
    clearInterval(intervalId);
    restoreFillAttribute(); // Restore the original fill values
  }, 20000);
});
