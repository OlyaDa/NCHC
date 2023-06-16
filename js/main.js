//choices select
const selects = document.querySelectorAll('.select');
selects.forEach(el => {
    new Choices(el, {
        shouldSort: false,
        position: 'bottom',
        searchEnabled: false,
    });
});

//go to top button
const scrollBtn = document.querySelector('.go-to-top');
const coords = document.documentElement.clientHeight;
window.onscroll = () => {
    if (window.scrollY > coords) {
        scrollBtn.classList.add('go-to-top--show');
    } else {
        scrollBtn.classList.remove('go-to-top--show');
    }
}
scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}


//Applications
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}
