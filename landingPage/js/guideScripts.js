window.addEventListener('DOMContentLoaded', event => {

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach(function (item) {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.remove('hide');
            nav.classList.add('scrolled');
        } else {
            nav.classList.add('hide');
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

    document.querySelectorAll('img').forEach(function (img) {
        img.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    });

    const yearEl = document.querySelector('#siteFooter .mb-2');
    if (yearEl) {
        yearEl.textContent = yearEl.textContent.replace(/\d{4}/, new Date().getFullYear());
    }

});
