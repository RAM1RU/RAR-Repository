document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.createElement('div');
    navMenu.classList.add('nav-menu');
    navMenu.style.position = 'fixed';
    navMenu.style.top = '0';
    navMenu.style.left = '-300px';
    navMenu.style.width = '300px';
    navMenu.style.height = '100%';
    navMenu.style.backgroundColor = '#048280';
    navMenu.style.color = '#fff';
    navMenu.style.transition = 'left 0.3s ease';
    navMenu.style.padding = '2rem';
    navMenu.innerHTML = `
        <ul style="list-style: none; padding: 0;">
            <li><a href="main.html" class="burger-link" data-translate="burgerMain">Main Page</a> </li>
            <li><a href="#menu-gallery" class="burger-link" data-translate="burgerProducts">Products</a></li>
            <li><a href="#interior-gallery" class="burger-link" data-translate="burgerInterior">Interior</a></li>
            <li><a href="about-us.html" class="burger-link" data-translate="burgerAboutUs">About Us</a></li>
        </ul>
    `;
    document.body.appendChild(navMenu);

    burgerMenu.addEventListener('click', function () {
        if (navMenu.style.left === '0px') {
            navMenu.style.left = '-300px';
            menuIcon.classList.remove('open');
            menuIcon.innerHTML = '☰';
        } else {
            navMenu.style.left = '0';
            menuIcon.classList.add('open');
            menuIcon.innerHTML = '✖';
        }
    });

    document.addEventListener('click', function (event) {
        if (!burgerMenu.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.style.left = '-300px';
            menuIcon.classList.remove('open');
            menuIcon.innerHTML = '☰';
        }
    });
});
