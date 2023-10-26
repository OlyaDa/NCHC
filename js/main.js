//choices select
const selects = document.querySelectorAll('.select');
selects.forEach(el => {
    new Choices(el, {
        shouldSort: false,
        position: 'bottom',
        searchEnabled: false,
    });
});

//checkbox
function toggleCheckboxes() {
    var allCheckbox = document.getElementById("all");
    var secondCheckbox = document.getElementById("secondCheck");
    var thirdCheckbox = document.getElementById("thirdCheck");

    if (allCheckbox.checked) {
        secondCheckbox.checked = true;
        thirdCheckbox.checked = true;
    } else {
        secondCheckbox.checked = false;
        thirdCheckbox.checked = false;
    }
}

//progress bar

const progress = document.querySelector(".progress-done");
const progressText = document.querySelector(".progress-text");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".maxInput");
let number = 10;
let maxNumber = 160;

function changeWidth() {
    if (number > maxNumber) {
        number = maxNumber;
    }
    const percentage = (number / maxNumber) * 100;
    progress.style.width = `${percentage}%`;
    progressText.innerText = `${Math.ceil(percentage)}%`;
}

changeWidth();




