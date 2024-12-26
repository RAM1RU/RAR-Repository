document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Останавливаем стандартный переход по ссылке

        const url = event.target.getAttribute('href'); // Получаем URL из атрибута href

        // Загружаем контент с помощью fetch
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки: ${response.statusText}`);
                }
                return response.text(); // Получаем HTML как текст
            })
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('#content'); // Новый контент

                if (newContent) {
                    document.querySelector('#content').innerHTML = newContent.innerHTML; // Обновляем только контент

                    // Обновляем заголовок
                    document.title = doc.title;

                    // Заменяем метатеги
                    const oldMeta = document.querySelectorAll('head meta[name]');
                    oldMeta.forEach(meta => meta.remove());

                    const newMeta = doc.querySelectorAll('head meta[name]');
                    newMeta.forEach(meta => document.head.appendChild(meta.cloneNode(true)));

                    // Динамическая загрузка скриптов
                    const scripts = doc.querySelectorAll('script');
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        if (script.src) {
                            newScript.src = script.src;
                            newScript.defer = true;
                        } else {
                            newScript.textContent = script.textContent; // Для inline-скриптов
                        }
                        document.body.appendChild(newScript);
                    });
                } else {
                    console.error('Ошибка: контейнер #content не найден.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    });
});
