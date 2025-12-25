window.addEventListener('DOMContentLoaded', () => {
    // Nav toggle responsive
    document.getElementById('nav-toggle')?.addEventListener('click', function() {
        document.getElementById('nav-links')?.classList.toggle('active');
    });

    // Parallax effect on header video
    const backgroundVideo = document.getElementById('background-video');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        backgroundVideo.style.transform = `translateY(${scrollY * 0.5}px)`;
    });

    // Scroll a una sección
    document.getElementById('inicio')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-productos')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-nosotros')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-reservacion')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('reservacion')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-contactanos')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contactanos')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || href === '#!') return;
            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            // altura de la barra fija
            const nav = document.getElementById('nav-bar');
            const navHeight = nav ? nav.getBoundingClientRect().height : 0;

            const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8; // pequeño margen

            window.scrollTo({
                top: Math.max(0, top),
                behavior: 'smooth'
            });

            // accesibilidad: mover foco al elemento destino
            const prevTab = target.getAttribute('tabindex');
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            if (prevTab === null) target.removeAttribute('tabindex');
            else target.setAttribute('tabindex', prevTab);

            // si el menú móvil está abierto, ciérralo
            document.getElementById('nav-links')?.classList.remove('active');
        });
    });
});