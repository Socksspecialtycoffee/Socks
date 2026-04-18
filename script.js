AOS.init({ duration: 1000, once: true });

        // 2. Language Management
        let currentLang = 'ar';
        const langBtn = document.getElementById('langSwitcher');

        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            langBtn.innerText = currentLang === 'ar' ? 'EN' : 'AR';
            updateLanguage();
        });

        function updateLanguage() {
            const elements = document.querySelectorAll('[data-ar]');
            const htmlTag = document.documentElement;

            if (currentLang === 'en') {
                htmlTag.dir = "ltr";
                htmlTag.lang = "en";
                elements.forEach(el => el.innerText = el.getAttribute('data-en'));
            } else {
                htmlTag.dir = "rtl";
                htmlTag.lang = "ar";
                elements.forEach(el => el.innerText = el.getAttribute('data-ar'));
            }
        }

        // 3. Theme Management (Dark Mode)
        const themeBtn = document.getElementById('themeSwitcher');
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeBtn.innerText = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        });
