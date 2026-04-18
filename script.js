// 1. تشغيل الأنميشن
AOS.init({ duration: 1000, once: true });

// 2. إدارة اللغة
let currentLang = 'ar';
const langBtn = document.getElementById('langSwitcher');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langBtn.innerText = currentLang === 'ar' ? 'EN' : 'AR';
    
    // تغيير اتجاه الصفحة والنصوص
    const htmlTag = document.documentElement;
    const translatableElements = document.querySelectorAll('[data-ar]');

    if (currentLang === 'en') {
        htmlTag.dir = "ltr";
        htmlTag.lang = "en";
        translatableElements.forEach(el => {
            el.innerText = el.getAttribute('data-en');
        });
    } else {
        htmlTag.dir = "rtl";
        htmlTag.lang = "ar";
        translatableElements.forEach(el => {
            el.innerText = el.getAttribute('data-ar');
        });
    }
});

// 3. إدارة الدارك مود
const themeBtn = document.getElementById('themeSwitcher');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.innerText = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});
