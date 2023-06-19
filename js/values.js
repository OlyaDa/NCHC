var startBtnElement = document.querySelector('#start-btn');

startBtnElement.addEventListener('click', function() {
  startBtnElement.disabled = true;

  setTimeout(function() {
    var loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(function(loadingElement) {
      loadingElement.classList.add('hide');
    });

    var cardListElements = document.querySelectorAll('.card__list');
    cardListElements.forEach(function(cardListElement) {
      cardListElement.classList.remove('hide');
    });

    var downloadBtnElements = document.querySelectorAll('.download-btn');
    downloadBtnElements.forEach(function(downloadBtnElement) {
      downloadBtnElement.classList.remove('hide');
    });

    var cardImgElements = document.querySelectorAll('.speed-test__img');
    cardImgElements.forEach(function(cardImgElement) {
      cardImgElement.classList.remove('hide');
    });

    var cardNumberElements = document.querySelectorAll('.card__number');
    cardNumberElements.forEach(function(cardNumberElement) {
      var randomNumber = Math.floor(Math.random() * 101);
      cardNumberElement.textContent = randomNumber;
      cardNumberElement.classList.remove('hide'); // Remove the "hide" class from card__number elements
    });

    startBtnElement.disabled = false;
  }, 17000);
});
