const popupLinks = document.querySelectorAll('.popup-link');
const body = document.body;
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
    popupLinks.forEach((popupLink) => {
        popupLink.addEventListener('click', (e) => {
            const popupName = popupLink.getAttribute('data-path');
            const currentPopup = document.getElementById(popupName);
            if (currentPopup) {
                popupOpen(currentPopup);
                e.preventDefault();
            }
        });
    });
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
    popupCloseIcon.forEach((el) => {
        el.addEventListener('click', (e) => {
            const popup = el.closest('.popup');
            if (popup) {
                popupClose(popup);
                e.preventDefault();
            }
        });
    });
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        lockPadding.forEach((el) => {
            el.style.paddingRight = lockPaddingValue;
        });
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            lockPadding.forEach((el) => {
                el.style.paddingRight = '0';
            });
        }
        body.style.paddingRight = '0';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive);
        }
    }
});

// Prevent page refresh on form submission
const forms = document.querySelectorAll('.popup__form');
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission logic here
    });
});
