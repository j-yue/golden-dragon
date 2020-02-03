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

        // webp images unsupported on ios, load jpg images instead
        let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        
        if (isIOS) {

            document.querySelector('#home').style.background = '#000 center url('images/placeholder.jpg')';
            document.querySelector ('.about-img').src = 'images/placeholder-front.jpg';

        }

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

            var replaceBg = (isIOS) => {
                let sys = isIOS ? 'replace-placeholder-ios' : 'replace-placeholder';
                home.classList.add(sys);
            }

            var replaceFront = (isIOS) => {
                let format = isIOS ? 'jpg' : 'webp';
                document.querySelector('.about-img').src = `images/front.${format}`;
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

            let menuObs = new IntersectionObserver(loadTarget(renderMenu(isIOS), 2000), options);
            let mapObs = new IntersectionObserver(loadTarget(createMap, 3000), mapOptions);
            let homeObs = new IntersectionObserver(loadTarget(replaceBg(isIOS), 1500), options);
            let aboutObs = new IntersectionObserver(loadTarget(replaceFront(isIOS), 1000), options);

            menuObs.observe(menu);
            mapObs.observe(map);
            homeObs.observe(home);
            aboutObs.observe(about);

        } else {

            setTimeout(() => {
                replaceBg(isIOS);
            }, 2000);

            setTimeout(() => {
                createMap();
                renderMenu(isIOS);
                replaceFront(isIOS);
            }, 3000);

        }

    }
}
