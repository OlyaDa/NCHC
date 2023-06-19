document.addEventListener("DOMContentLoaded", function() {
  var startBtn = document.querySelector("#start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", function() {
      var svgTicks = document.querySelectorAll(".svg-tick");
      svgTicks.forEach(function(tick) {
        tick.setAttribute("stroke", "#eeeeef");
      });

      setTimeout(function() {
        svgTicks.forEach(function(tick) {
          tick.setAttribute("stroke", "#2E7F98");
        });
      }, 20000); // 20 секунд (20 000 мілісекунд)
    });
  }
});
