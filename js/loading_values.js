(function() {
  // Find all elements with the classes .card__trait, .card__number, .loading, and .card__list
  const cardTraits = document.querySelectorAll('.card__trait');
  const cardNumbers = document.querySelectorAll('.card__number');
  const loadings = document.querySelectorAll('.loading');
  const cardLists = document.querySelectorAll('.card__list');

  // Function to hide .card__trait, .card__number, and .card__list elements and show .loading elements
  function hideTraitsNumbersListAndShowLoadings() {
    // Hide all .card__trait elements
    cardTraits.forEach((cardTrait) => {
      cardTrait.classList.add('hide');
    });

    // Hide all .card__number elements
    cardNumbers.forEach((cardNumber) => {
      cardNumber.classList.add('hide');
    });

    // Hide all .card__list elements
    cardLists.forEach((cardList) => {
      cardList.classList.add('hide');
    });

    // Show all .loading elements
    loadings.forEach((loading) => {
      loading.classList.remove('hide');
    });
  }

  // Find the first element with the class .start-btn
  const startBtn = document.querySelector('#start-btn');

  // Launch the script when .start-btn is clicked
  startBtn.onclick = function() {
    hideTraitsNumbersListAndShowLoadings();
  };
})();
