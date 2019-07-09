// Responsive Navigation
(function() {
    let burger = document.querySelector('.burger'),
    nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    })
})()