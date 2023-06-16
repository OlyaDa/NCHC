//choices select
const selects = document.querySelectorAll('.select');
selects.forEach(el => {
    new Choices(el, {
        shouldSort: false,
        position: 'bottom',
        searchEnabled: false,
    });
});