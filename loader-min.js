document.onreadystatechange=()=>{let e=document.readyState;if("loading"==e);else if("interactive"==e);else if("complete"==e){var t=()=>{let e=document.querySelector(".needs-validation");e.addEventListener("submit",t=>{t.preventDefault(),e.checkValidity()&&document.querySelector(".message-sent").classList.remove("hide-message"),e.classList.add("was-validated")})};let e=/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;e&&(document.querySelector("#home").style.background="#000 center url(images/placeholder.jpg)",document.querySelector(".about-img").src="images/placeholder-front.jpg");var o=e=>{let t=e?"replace-placeholder-ios":"replace-placeholder";home.classList.add(t)},r=e=>{let t=e?"jpg":"webp";document.querySelector(".about-img").src=`images/front.${t}`},a=()=>{[".location",".about",".contact",".footer"].map(e=>document.querySelector(e).classList.add("show-section"))};if(document.querySelector("#main-nav").addEventListener("click",()=>{a()}),"IntersectionObserver"in window){let n={root:null,threshold:.5};const c=document.querySelector(".menu");new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&renderMenu()})},n).observe(c);const s=document.querySelector(".home");new IntersectionObserver(n=>{n.forEach(n=>{n.isIntersecting?o(e):(a(),createMap(),r(e),t())})},n).observe(s)}else setTimeout(()=>{o(e)},2e3),setTimeout(()=>{a(),createMap(),renderMenu(e),r(e),t()},3e3)}};