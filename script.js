document.addEventListener('DOMContentLoaded', function() {
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
        <ul style="list-style: none;">
            <li style="margin-bottom: 20px;"><a href="about.html" style="color: #fff; text-decoration: none; font-size: 1.5rem;">About Us</a></li>
            <li style="margin-bottom: 20px;"><a href="#menu-gallery" style="color: #fff; text-decoration: none; font-size: 1.5rem;">Products</a></li>
            <li><a href="#interior-gallery" style="color: #fff; text-decoration: none; font-size: 1.5rem;">Interior</a></li>
        </ul>
    `;
    document.body.appendChild(navMenu);

    burgerMenu.addEventListener('click', function() {
        if (navMenu.style.left === '0px') {
            navMenu.style.left = '-300px';
            menuIcon.classList.remove('open');
            menuIcon.innerHTML = '';
            menuIcon.appendChild(document.createElement('div')).classList.add('line');
            menuIcon.appendChild(document.createElement('div')).classList.add('line');
            menuIcon.appendChild(document.createElement('div')).classList.add('line');
        } else {
            navMenu.style.left = '0';
            menuIcon.classList.add('open');
            menuIcon.innerHTML = '✖';
        }
    });

    document.addEventListener('click', function(event) {
        if (!burgerMenu.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.style.left = '-300px';
            menuIcon.classList.remove('open');
            menuIcon.innerHTML = '';
            menuIcon.appendChild(document.createElement('div')).classList.add('line');
            menuIcon.appendChild(document.createElement('div')).classList.add('line');
            menuIcon.appendChild(document.createElement('div')).classList.add('line');
        }
    });
});
