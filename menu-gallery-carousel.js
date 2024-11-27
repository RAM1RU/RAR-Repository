document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelector('.menu-items');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const totalItems = menuItems.children.length;
    const itemWidth = 320; // Width of each item including margin
    let currentIndex = 0;

    // Clone first and last items for seamless looping
    const firstClone = menuItems.children[0].cloneNode(true);
    const lastClone = menuItems.children[totalItems - 1].cloneNode(true);
    menuItems.appendChild(firstClone);
    menuItems.insertBefore(lastClone, menuItems.children[0]);

    // Update currentIndex to reflect the position after adding clones
    currentIndex = 1;
    menuItems.style.transition = 'none';
    menuItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    function updateCarousel() {
        menuItems.style.transition = 'transform 0.5s ease-in-out';
        menuItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function slideMenuItems(direction) {
        if (direction === 'next') {
            currentIndex++;
            updateCarousel();
            if (currentIndex === totalItems + 1) {
                setTimeout(() => {
                    menuItems.style.transition = 'none';
                    currentIndex = 1;
                    menuItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                }, 500);
            }
        } else {
            currentIndex--;
            updateCarousel();
            if (currentIndex === 0) {
                setTimeout(() => {
                    menuItems.style.transition = 'none';
                    currentIndex = totalItems;
                    menuItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                }, 500);
            }
        }
    }

    nextButton.addEventListener('click', () => {
        slideMenuItems('next');
    });

    prevButton.addEventListener('click', () => {
        slideMenuItems('prev');
    });

    // Image scaling effect on hover
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
