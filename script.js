// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Language and Theme Management
let currentLang = localStorage.getItem('language') || 'ar';
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize language and theme
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    setTheme(currentTheme);
    updateLanguageDisplay();
    updateThemeDisplay();
});

// Language Switcher
document.getElementById('langSwitcher').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(currentLang);
    localStorage.setItem('language', currentLang);
    updateLanguageDisplay();
});

// Theme Switcher
document.getElementById('themeSwitcher').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeDisplay();
});

function setLanguage(lang) {
    const html = document.documentElement;
    const elements = document.querySelectorAll('[data-ar][data-en]');
    
    if (lang === 'en') {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        elements.forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });
    } else {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        elements.forEach(el => {
            el.textContent = el.getAttribute('data-ar');
        });
    }
}

function setTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

function updateLanguageDisplay() {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    }
}

function updateThemeDisplay() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    }
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 44, 44, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#2c2c2c';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate menu items on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
    observer.observe(item);
});

// Add hover effect to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f9cb15';
        this.querySelector('.item-name').style.color = '#fff';
        this.querySelector('.item-price').style.color = '#2c2c2c';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#fff';
        this.querySelector('.item-name').style.color = '#2c2c2c';
        this.querySelector('.item-price').style.color = '#f9cb15';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
