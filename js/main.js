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

