window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');

    preloader.setAttribute('style', 'opacity: 1');
    setTimeout(() => {
        document.querySelector('main').setAttribute('style', 'opacity: 1');
        
    }, 500);

    setTimeout(() => {
        preloader.setAttribute('style', 'opacity: 0;');
        document.querySelector('body').setAttribute('style', 'overflow-y: visible');
    }, 1700);

    setTimeout(() => {
        preloader.setAttribute('style', 'display: none;');
    }, 2000);
});