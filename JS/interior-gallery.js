document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const overlay = document.querySelector('#background-overlay');
    const itemWidth = items[0].offsetWidth + 80; // Ширина одного элемента + отступ

    let currentIndex = 1;
    let startX = 0;
    let deltaX = 0;
    let isSwiping = false;

    function centerItem(index) {
        const offset = -index * itemWidth + (window.innerWidth - itemWidth) / 2;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function updateBackground(image) {
        overlay.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;
        overlay.style.opacity = '1';
    }

    function resetBackground() {
        overlay.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Images/interior-default.jpeg')";
        overlay.style.backgroundSize = "cover";
        overlay.style.backgroundPosition = "center";
        overlay.style.opacity = '1';
    }

    function handleSwipe() {
        if (deltaX > 50 && currentIndex > 0) {
            currentIndex -= 1; // Свайп вправо (показать предыдущий элемент)
        } else if (deltaX < -50 && currentIndex < items.length - 1) {
            currentIndex += 1; // Свайп влево (показать следующий элемент)
        }
        const bgImage = items[currentIndex].getAttribute('data-bg'); // Получаем фон для текущего элемента
        updateBackground(bgImage); // Обновляем фон
        centerItem(currentIndex); // Центрируем элемент
    }

    // Обработчики для жестов
    carousel.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
        isSwiping = true;
    });

    carousel.addEventListener('touchmove', (event) => {
        if (isSwiping) {
            deltaX = event.touches[0].clientX - startX;
        }
    });

    carousel.addEventListener('touchend', () => {
        if (isSwiping) {
            handleSwipe();
            isSwiping = false;
        }
        deltaX = 0; // Сбрасываем смещение
    });

    // Добавляем события для наведения на элементы
    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            currentIndex = index; // Сохраняем текущий индекс
            const bgImage = item.getAttribute('data-bg'); // Получаем путь к фону
            updateBackground(bgImage); // Обновляем фон
            centerItem(index); // Центрируем элемент
        });

        item.addEventListener('mouseleave', () => {
            resetBackground(); // Устанавливаем дефолтный фон при уходе мыши
        });
    });

    // Устанавливаем начальное положение карусели и дефолтный фон
    centerItem(currentIndex);
    resetBackground();
});