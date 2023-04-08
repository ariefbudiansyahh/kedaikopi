//togle active
const navbarNav = document.querySelector('.navbar-nav');

//ketika diklik
document.querySelector('#list-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

//diluar menu
const list = document.querySelector ('#list-menu');

document.addEventListener('click', function(e){
    if(!list.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
