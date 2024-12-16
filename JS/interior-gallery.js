document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const overlay = document.querySelector('#background-overlay');
    const itemWidth = items[0].offsetWidth + 80; // Ширина одного элемента + отступ

    let currentIndex = 1;

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

    function updateHoverTexts(language) {
        items.forEach((item) => {
            const title = item.querySelector('h2[data-translate]');
            const description = item.querySelector('p[data-translate]');
            if (title && description) {
                title.textContent = translations[language][title.getAttribute('data-translate')];
                description.textContent = translations[language][description.getAttribute('data-translate')];
            }
        });
    }

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

    // Обновляем тексты для текущего языка при загрузке страницы
    document.addEventListener('languageChange', (event) => {
        updateHoverTexts(event.detail.language);
    });
});
