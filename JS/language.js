document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('language-toggle');
    const translatableElements = document.querySelectorAll('[data-translate]');

    const translations = {
        en: {
            /*Main.html*/
            burgerMain: 'Main Page',
            burgerProducts: 'Products',
            burgerInterior: 'Interior',
            burgerAboutUs: 'About Us',

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

            /*About-us.html*/
            aboutUsTitle: 'About Us',
            aboutUsText: 'For more than 10 years, our customers have been receiving all the best and perfect.\n' +
                '                For many years, you have trusted us when choosing cakes and sweets\n' +
                '                and other products as a gift for meaningful and important events in your life.\n' +
                '                RaR Coffee is synonymous with high quality and special taste.',

            stat1: 'Years on Market',
            stat2: 'Production workshops',
            stat3: 'Trade Brands',
            stat4: 'Shops',

            specialistTitle: 'TOP-CLASS SPECIALISTS',
            specialistText: 'Our institution is proud of a team of top-class professionals who are true masters of their craft.\n' +
                '                        Each specialist has unique experience, high qualifications and deep knowledge in his field.',
            specialistButton: 'Join Us',

            assortmentTitle: 'ASSORTMENT',
            assortmentText: 'We are proud of our diverse range, which is designed to meet the highest quality standards and the needs of our customers.\n' +
                '                        In our establishment, everyone will find exactly what they need, whether it is unique products or top-level services.',
            assortmentButton: 'View catalog',

            aboutUsInteriorTitle: 'INTERIOR',
            aboutUsInteriorText: 'The interior of our establishment is created with care for each guest in order to provide comfort, coziness and aesthetic pleasure.\n' +
                '                        We sought to combine modern design solutions with functionality so that each visit to us leaves only pleasant impressions.',
            aboutUsInteriorButton: 'View catalog',
        },
        ru: {
            /*Main.html*/
            burgerMain: 'Основная Страница',
            burgerProducts: 'Позиции',
            burgerInterior: 'Интерьер',
            burgerAboutUs: 'О Нас',

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

            /*About-us.html*/
            aboutUsTitle: 'О Нас',
            aboutUsText: 'Уже более 10 лет наши клиенты получают все самое лучшее и совершенное. \n' +
                '                На протяжении многих лет вы доверяете нам при выборе\n' +
                '                тортов и конфет и других изделий в подарок к значимым и важным событиям в вашей жизни. \n' +
                '                RaR Coffee является синонимом высокого качества и особого вкуса.',

            stat1: 'Лет на Рынке',
            stat2: 'Производственные цеха',
            stat3: 'Торговых брендов',
            stat4: 'Магазинов',

            specialistTitle: 'СПЕЦИАЛИСТЫ ВЫСШЕГО КЛАССА',
            specialistText: 'Наше заведение гордится командой профессионалов высшего класса, которые являются настоящими мастерами своего дела.\n' +
                '                        Каждый специалист обладает уникальным опытом, высокой квалификацией и глубокими знаниями в своей области.',
            specialistButton: 'Присоединиться',

            assortmentTitle: 'АССОРТИМЕНТ',
            assortmentText: 'Мы гордимся нашим разнообразным ассортиментом, который разработан в соответствии с высочайшими стандартами качества и потребностями наших клиентов.\n' +
                '                        В нашем заведении каждый найдет именно то, что ему нужно, будь то уникальные товары или услуги высшего уровня.',
            assortmentButton: 'Посмотреть меню',

            aboutUsInteriorTitle: 'ИНТЕРЬЕР',
            aboutUsInteriorText: 'Интерьер нашего заведения создан с заботой о каждом госте, чтобы обеспечить комфорт, уют и эстетическое удовольствие.\n' +
                '                        Мы стремились совместить современные дизайнерские решения с функциональностью, чтобы каждый визит к нам оставлял только приятные впечатления.',
            aboutUsInteriorButton: 'Посмотреть каталог',
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
