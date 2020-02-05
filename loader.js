
/**
 * reduce main thread work with lazy load
 * lazy load approach: 
 * hide everything except main nav, home, and container for menu
 * then load the rest of the page as user scrolls away from home
 * ...except when clicking/using main nav - force load the rest of the page to be visible
 */
document.onreadystatechange = () => {

    let state = document.readyState;

    if (state == 'loading') {

    }

    else if (state == 'interactive') {

    }

    else if (state == 'complete') {

        // event listener for contact form
        var formListener = () => {
            let form = document.querySelector('.needs-validation');

            form.addEventListener('submit', (ev) => {
                ev.preventDefault();
                if (form.checkValidity()) {
                    document.querySelector('.message-sent').classList.remove('hide-message');
                }
                form.classList.add('was-validated');
            });
        }

        // webp images unsupported on ios, load jpg images instead
        let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        if (isIOS) {
            document.querySelector('#home').style.background = '#000 center url(images/placeholder.jpg)';
            document.querySelector('.about-img').src = 'images/placeholder-front.jpg';
        }

        
        var replaceBg = (isIOS) => {
            let sys = isIOS ? 'replace-placeholder-ios' : 'replace-placeholder';
            home.classList.add(sys);
        }

        var replaceFront = (isIOS) => {
            let format = isIOS ? 'jpg' : 'webp';
            document.querySelector('.about-img').src = `images/front.${format}`;
        }

        var showSec = () => {
            ['.location', '.about', '.contact', '.footer'].map(sec => document.querySelector(sec).classList.add('show-section'));
        }

        //border case where user uses main nav when some sections not visible
        document.querySelector('#main-nav').addEventListener('click', () => {
            showSec();
        });

        if ("IntersectionObserver" in window) {

            let view = {
                root: null,
                threshold: .5
            };

            const menu = document.querySelector('.menu');
            let loadMenu = entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        renderMenu();
                    }
                });
            }

            const menuObs = new IntersectionObserver(loadMenu, view);
            menuObs.observe(menu);

            const home = document.querySelector('.home');
            let checkHome = entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        replaceBg(isIOS);
                    } else {
                        showSec();
                        createMap();
                        replaceFront(isIOS);
                        formListener();
                    }

                })
            }

            const homeObs = new IntersectionObserver(checkHome, view);
            homeObs.observe(home);

        } else {

            //in case intersection observer unsupported
            setTimeout(() => {
                replaceBg(isIOS);
            }, 2000);

            setTimeout(() => {
                showSec();
                createMap();
                renderMenu(isIOS);
                replaceFront(isIOS);
                formListener();
            }, 3000);

        }

    }
}
