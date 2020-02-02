



// window.addEventListener('load', () => {
//     const preloader = document.querySelector('.preloader');

//     preloader.setAttribute('style', 'opacity: 1');
//     setTimeout(() => {
//         document.querySelector('main').setAttribute('style', 'opacity: 1');

//     }, 500);

//     setTimeout(() => {
//         preloader.setAttribute('style', 'opacity: 0;');
//         document.querySelector('body').setAttribute('style', 'overflow-y: visible');
//     }, 1700);

//     setTimeout(() => {
//         preloader.setAttribute('style', 'display: none;');
//     }, 2000);
// });

document.onreadystatechange = () => {
    let state = document.readyState;
    //     let loader = document.querySelector('.preloader');
    //     let main = document.querySelector('main');

    if (state == 'loading') {

    }

    else if (state == 'interactive') {
        
    }

    else if (state == 'complete') {

        if ("IntersectionObserver" in window) {

                const menu = document.querySelector('#menu');
                const map = document.querySelector('#map');
                const home = document.querySelector('#home');
                const about = document.querySelector('#about');

                let loadTarget = callback => entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) callback();
                    });
                }

                var replaceBg = () => {
                    setTimeout(() => home.classList.add('replace-placeholder'), 1500);
                }

                var replaceFront = () => {
                    document.querySelector('.about-img').src = 'images/front.webp';
                }

                let options = {
                    root: null,
                    threshold: .5
                };

                let menuObs = new IntersectionObserver(loadTarget(renderMenu), options);
                let mapObs = new IntersectionObserver(loadTarget(createMap), options);
                let homeObs = new IntersectionObserver(loadTarget(replaceBg), options);
                let aboutObs = new IntersectionObserver(loadTarget(replaceFront), options);

                menuObs.observe(menu);
                mapObs.observe(map);
                homeObs.observe(home);
                aboutObs.observe(about);

        } else {
            setTimeout(() => {
                createMap();
                renderMenu();
                replaceFront();
            }, 3000);
            replaceBg();
        }

    }
}
