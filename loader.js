document.onreadystatechange = () => {

    let state = document.readyState;

    if (state == 'loading') {

    }

    else if (state == 'interactive') {

    }

    else if (state == 'complete') {

        //event listener for contact form
        let form = document.querySelector('.needs-validation');

        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            if (form.checkValidity()) {
                document.querySelector('.message-sent').classList.remove('hide-message');
            }
            form.classList.add('was-validated');
        });

        if ("IntersectionObserver" in window) {

            const menu = document.querySelector('#menu');
            const map = document.querySelector('#map');
            const home = document.querySelector('#home');
            const about = document.querySelector('#about');

            let loadTarget = (callback, time) => entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            callback();
                        }, time);
                    }
                });
            }

            var replaceBg = () => {
                home.classList.add('replace-placeholder');
            }

            var replaceFront = () => {
                document.querySelector('.about-img').src = 'images/front.webp';
            }

            let options = {
                root: null,
                threshold: .5
            };

            let mapOptions = {
                root: document.querySelector('#location'),
                rootMargin: '10%',
                threshold: .5
            }

            let menuObs = new IntersectionObserver(loadTarget(renderMenu, 2000), options);
            let mapObs = new IntersectionObserver(loadTarget(createMap, 3000), mapOptions);
            let homeObs = new IntersectionObserver(loadTarget(replaceBg, 1500), options);
            let aboutObs = new IntersectionObserver(loadTarget(replaceFront, 1000), options);

            menuObs.observe(menu);
            mapObs.observe(map);
            homeObs.observe(home);
            aboutObs.observe(about);

        } else {

            setTimeout(() => {
                replaceBg();
            }, 2000);

            setTimeout(() => {
                createMap();
                renderMenu();
                replaceFront();
            }, 3000);

        }

    }
}
