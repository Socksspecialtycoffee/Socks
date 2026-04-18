AOS.init({ duration: 800, once: true });

let currentLang = 'ar';
let currentTheme = 'light';

// التبديل بين اللغات
const langSwitcher = document.getElementById('langSwitcher');
langSwitcher.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langSwitcher.querySelector('.lang-text').textContent = currentLang === 'ar' ? 'EN' : 'AR';
    
    const elements = document.querySelectorAll('[data-ar]');
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
});

// التبديل بين الثيمات
const themeSwitcher = document.getElementById('themeSwitcher');
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeSwitcher.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
