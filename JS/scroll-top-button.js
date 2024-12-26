// Получаем кнопку
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Показываем кнопку при прокрутке вниз
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Если прокрутили больше 100px
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Прокрутка наверх при нажатии на кнопку
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});