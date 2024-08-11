let text = document.getElementById('text');
let burger = document.getElementById('burger');
let cake = document.getElementById('cake');
let form = document.getElementById('loginForm');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    text.style.marginTop    = value * 2.5 + 'px';
    form.style.marginTop    = value * -2.7 + 'px';
    burger.style.left       = value * 2.5 + 'px';
    cake.style.left       = value * -2.5 + 'px';
});

// to hide form

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('loginForm');

    loginButton.addEventListener('click', () => {
        if (loginForm.classList.contains('show')) {
            loginForm.classList.remove('show');
        } else {
            loginForm.classList.add('show');
        }
    });
});
