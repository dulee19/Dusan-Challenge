// Responsive Navigation
(function () {
    let burger = document.querySelector('.burger'),
        nav = document.querySelector('#' + burger.dataset.target);

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    })
})()


// Get DOM Elements
const modal = document.querySelector('#my-modal'),
    modalBtn = document.querySelector('#modal-btn'),
    closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.visibility = 'visible';
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
    modal.style.visibility = 'hidden';
}

// Close if outside click
function outsideclick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
    }
}