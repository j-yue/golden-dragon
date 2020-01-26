document.addEventListener('DOMContentLoaded', () => {
    createMap();
    renderMenu();
})

document.addEventListener('scroll', () => {

    if (window.scrollY >= 1) {
        // document.querySelector('.fixed-top').style.background = '#ffca05';
        document.querySelector('.fixed-top').style.background = '#415B80';
        // document.querySelectorAll('.nav-link').classList.add('scroll');
        // document.querySelectorAll('.navbar-nav .nav-link').style.color = '#000 !important';
    } 
    else {
        document.querySelector('.fixed-top').style.background = 'rgba(0,0,0,1)';
    }
})

let form = document.querySelector('.needs-validation');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (form.checkValidity()) {
        document.querySelector('.message-sent').classList.remove('hide-message');
    }
    form.classList.add('was-validated');
});

