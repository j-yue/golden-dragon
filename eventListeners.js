document.addEventListener('DOMContentLoaded', () => {
    createMap();
    renderMenu();
})


let form = document.querySelector('.needs-validation');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (form.checkValidity()) {
        document.querySelector('.message-sent').classList.remove('hide-message');
    }
    form.classList.add('was-validated');
});

