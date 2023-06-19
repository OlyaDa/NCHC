document.addEventListener("DOMContentLoaded", function() {
  var startBtn = document.querySelector("#start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", function() {
      setTimeout(function() {
        var speedometerLabel = document.getElementById("speedometer-label");
        if (speedometerLabel) {
          speedometerLabel.innerText = "0.00";
        }
        
        var svgTicks = document.querySelectorAll(".svg-tick");
        svgTicks.forEach(function(path) {
          path.classList.remove("color");
        });
      }, 19000); // 19 seconds delay (19,000 milliseconds)
    });
  }
});
