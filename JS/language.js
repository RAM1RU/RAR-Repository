document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('language-toggle');
    const translatableElements = document.querySelectorAll('[data-translate]');

    const translations = {
        en: {
            menuTitle: 'Menu & Positions',
            menuText: 'Discover the variety of menu items that we offer',
            menuOverview: 'ー Recommendations from our visitors ー',

            interiorTitle: 'Interior',
            interiorText: 'Elegant interior for a comfortable stay and a wonderful time',
            interiorOverview: 'ー Interior Review ー',

            interior1Descript: 'Cozy Space',
            interior1DescriptText: 'Relax in our warm and inviting space.',
            interior2Descript: 'Modern Design',
            interior2DescriptText: 'Experience our modern and stylish decor.',
            interior3Descript: 'Comfort Zone',
            interior3DescriptText: 'A perfect spot for coffee and relaxation.',
            interior4Descript: 'Ambient Atmosphere',
            interior4DescriptText: 'Enjoy the perfect blend of light and ambiance.',

            footerTitle: 'Crafted with Love, Served with Care',
            footerContact: 'Contacts',
            footerLocation: 'Azerbaijan, Baku',
            footerWorkHour: 'Working Hours',
            footerWorkTime: 'Stores: 08:00 - 22:00',
            footerAddress: 'Address: 123 Coffee St, Coffee City',
        },
        ru: {
            menuTitle: 'Меню & Позиции',
            menuText: 'Откройте для себя разнообразие блюд, которые мы предлагаем',
            menuOverview: 'ー Рекомендации наших посетителей ー',

            interiorTitle: 'Интерьер',
            interiorText: 'Элегантный интерьер для комфортного отдыха и прекрасного времяпрепровождения',
            interiorOverview: 'ー Обзор интерьера ー',

            interior1Descript: 'Уютное пространство',
            interior1DescriptText: 'Отдохните в нашем теплом и уютном месте.',
            interior2Descript: 'Современный дизайн',
            interior2DescriptText: 'Оцените наш современный и стильный декор.',
            interior3Descript: 'Зона комфорта',
            interior3DescriptText: 'Идеальное место для кофе и отдыха.',
            interior4Descript: 'Окружающая атмосфера',
            interior4DescriptText: 'Наслаждайтесь идеальным сочетанием света и атмосферы.',

            footerTitle: 'Сделано с любовью, подано с заботой',
            footerContact: 'Контакты',
            footerLocation: 'Азербайджан, Баку',
            footerWorkHour: 'Рабочие часы',
            footerWorkTime: 'Заведения: 08:00 - 22:00',
            footerAddress: 'Адрес: 123 Coffee St, Coffee City',
        }
    };

    let currentLanguage = 'en';

    // Функция для обновления всех элементов с data-translate
    function updateTranslations() {
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
    }

    // Обработчик клика для переключения языка
    languageButton.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        languageButton.textContent = currentLanguage.toUpperCase();

        // Обновляем текст
        updateTranslations();
    });

    // Обновляем текст при загрузке страницы
    updateTranslations();
});
