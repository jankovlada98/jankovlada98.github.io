document.addEventListener('DOMContentLoaded', function() {
    var mobileMenuIcon = document.getElementById('mobileMenu');
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    var body = document.body;
    mobileMenuIcon.addEventListener('click', function() {
        if (!header.classList.contains('mobile-menu')) {
            header.classList.add('mobile-menu');
            footer.classList.add('mobile-menu');
            body.classList.add('overflow');
        } else {
            header.classList.remove('mobile-menu');
            footer.classList.remove('mobile-menu');
            body.classList.remove('overflow');
        }
    });

    var links = document.getElementsByClassName('main-menu-link');
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            header.classList.remove('mobile-menu');
            footer.classList.remove('mobile-menu');
            body.classList.remove('overflow');
        })
    }
});

var widthVersion = 'desktop';

function removeMobileClasses() {
    var windowWidth = window.innerWidth;

    if (windowWidth < 992 && widthVersion === 'desktop') {
        widthVersion = 'mobile';
    } else if (windowWidth >= 992 && widthVersion === 'mobile') {
        widthVersion = 'desktop';
        document.getElementById('header').classList.remove('mobile-menu');
        document.getElementById('footer').classList.remove('mobile-menu');
        document.body.classList.remove('overflow');
    }
}

removeMobileClasses();

window.addEventListener("resize", removeMobileClasses);
