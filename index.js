// Enhanced JavaScript with smoother animations and firework effects

// GLOBAL VARIABLES
let currentLang = localStorage.getItem('selectedLang') || 'en';
const translations = {
    en: {
        home: "Home",
        services: "Our Services",
        booking: "Book Appointment",
        calendar: "Calendar",
        contact: "Contact",
        address: "Russia Street 14/4/2, Abovyan",
        subtitle: "Armenian Beauty & Skincare Studio",
        servicesTitle: "Our Services",
        makeup: "Makeup",
        makeupDesc: "Professional makeup for every occasion — weddings, events, parties, or natural everyday beauty. Our artists enhance your glow with precision and creativity.",
        makeupFeatures: ["Bridal Makeup", "Evening Glam", "Natural Look"],
        hairdresser: "Hairdresser",
        hairdresserDesc: "From modern cuts to vibrant colouring, blowouts, styling, and full transformations. Your hair is treated with premium products and expert care.",
        hairdresserFeatures: ["Hair Coloring", "Styling", "Extensions"],
        nails: "Nails",
        nailsDesc: "Gel nails, nail art, manicures, and flawless designs. Choose from soft natural looks or bold creative patterns — always done with precision.",
        nailsFeatures: ["Gel Manicure", "Nail Art", "Spa Treatment"],
        skincare: "Skincare",
        skincareDesc: "Luxurious skincare treatments that hydrate, smooth, and brighten. Perfect for stress relief and lasting radiance.",
        skincareFeatures: ["Facials", "Anti-Aging", "Hydration"],
        bookingTitle: "Book Your Appointment",
        bookingSubtitle: "Choose a service and select your preferred time",
        bookMakeup: "Book Makeup",
        bookHair: "Book Hair",
        bookNails: "Book Nails",
        bookSkincare: "Book Skincare",
        
        // CALENDAR TRANSLATIONS
        calendarTitle: "Our Beauty Hours",
        calendarSubtitle: "When we're here to make you glow",
        monday: "Monday",
        tuesday: "Tuesday", 
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        mondayStatus: "Beauty Rest Day",
        tuesdayStatus: "Ready to Glow",
        wednesdayStatus: "Midweek Magic", 
        thursdayStatus: "Transformation Day",
        fridayStatus: "Weekend Ready",
        saturdayStatus: "Pampering Day",
        sundayStatus: "Self Care Sunday",
        closed: "Closed",
        openingHours: "Opening Hours:",
        hoursDetail: "Tuesday - Sunday: 10:00 - 19:00",
        bookSession: "Book Your Session",
        // CONTACT TRANSLATIONS
        contactTitle: "Contact us",
        email: "Email",
        phone: "Phone", 
        hoursTitle: "Hours",
        hours: "Tue-Sun: 10:00 - 19:00",
        instagram: "Instagram",
        
        // FOOTER TRANSLATIONS
        footerTagline: "Armenian Beauty & Skincare Studio",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        followUs: "Follow Us",
        address: "Russia Street 14/4/2, Abovyan City",
        copyright: "© 2024 Glow House. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
        bookingConfirmed: "Booking Confirmed ✅",
        thankYouMessage: "Thank you for booking with Glow House. We can't wait to make you glow!",
    },
    hy: {
        home: "Գլխավոր",
        services: "Ծառայություններ",
        booking: "Ամրագրում",
        calendar: "Աշխատանքային Ժամերը",
        contact: "Կապ",
        address: "Ռուսաստանի փողոց 14/4/2, Քաղաք Աբովյան",
        subtitle: "Գեղեցկության և մաշկի խնամքի սրահ",
        servicesTitle: "Մեր Ծառայությունները",
        makeup: "Դիմահարդարում",
        makeupDesc: "Պրոֆեսիոնալ դիմահարդարում ցանկացած առիթի համար — հարսանյաց, միջոցառումների, երեկույթների կամ առօրյա գեղեցկության համար: Մեր մասնագետները ձեզ կապահովեն գերազանց արդյունքով՝ յուրաքանչյուր ցանկությոն դարձնելով ձեր ոճին համապատասխան:",
        makeupFeatures: ["Հարսանյաց Դիմահարդարում", "Երեկոյան Դիմահարդարում", "Առօրյա Դիմահարդարում"],
        hairdresser: "վարսահարդարում",
        hairdresserDesc: "Ժամանակակից Վարսահարդարում, ոճավորում և ցանկության դեպքում ամբողջական փոխակերպում: Ձեր մազերը մշակվում են բարձրորակ նյութերով և փորձառու խնամքով:",
        hairdresserFeatures: ["Մազերի Գունավորում", "Ոճավորում", "Երկարացում"],
        nails: "Մատնահարդարում",
        nailsDesc: "Gellac, SHELLAC և եղունգների խնամք: Ընտրեք բնական տեսքից մինչև համարձակ ստեղծագործական նախշեր: —— Ամեն ինչ կատարվում է ամենայն ճշգրտությամբ ✨",
        nailsFeatures: ["Gellac", 'SHELLAC', "Եղունգների խնամք", "Spa Բուժում"],
        skincare: "Մաշկի խնամք",
        skincareDesc: "Պրոֆեսիոնալ Մաշկի խնամքի պրոցեդուրաներ, որոնք խոնավեցնում, հարթեցնում և փայլեցնում են ձեր մաշկը: Իդեալական է սթրեսից ազատվելու և երկարատև խնամված տեսք ունենալու համար:",
        skincareFeatures: ["Դիմակներ", "Հակա-Տարիքային դեմքի մերսումներ", "Խոնավեցում"],
        bookingTitle: "Ամրագրել",
        bookingSubtitle: "Ընտրեք ծառայությունը և Ձեզ նախընտրելի ժամը",
        bookMakeup: "Դիմահարդարում",
        bookHair: "վարսահարդարում",
        bookNails: "Մատնահարդարում",
        bookSkincare: "Մաշկի խնամք",
        
        // CALENDAR TRANSLATIONS - ARMENIAN
        calendarTitle: "Մեր Աշխատանքային Ժամերը",
        calendarSubtitle: "Մենք այստեղ ենք ձեզ սիրով սպասարկելու համար ✨",
        monday: "Երկուշաբթի",
        tuesday: "Երեքշաբթի",
        wednesday: "Չորեքշաբթի", 
        thursday: "Հինգշաբթի",
        friday: "Ուրբաթ",
        saturday: "Շաբաթ",
        sunday: "Կիրակի",
        mondayStatus: "Հանգստյան Օր",
        tuesdayStatus: "Պատրաստ Փայլելու",
        wednesdayStatus: "Շաբաթվա Կեսի Կախարդանք",
        thursdayStatus: "Փոխակերպման Օր", 
        fridayStatus: "Շաբաթվա ավարտին պատրաստ",
        saturdayStatus: "Առիթներին պատրաստ",
        sundayStatus: "Ինքնախնամքի Կիրակի",
        closed: "Փակ է",
        openingHours: "Աշխատանքային Ժամեր:",
        hoursDetail: "Երեքշաբթի - Կիրակի: 10:00 - 19:00",

        // CONTACT TRANSLATIONS - ARMENIAN
        contactTitle: "Կապի Միջոցներ",
        email: "Էլ․ Փոստ",
        phone: "Հեռախոս",
        hoursTitle: "Աշխատանքային Ժամեր",
        hours: "Երեք-Կիր: 10:00 - 19:00",
        instagram: "Ինստագրամ",
        
        // FOOTER TRANSLATIONS - ARMENIAN
        footerTagline: "Գեղեցկության և մաշկի խնամքի սրահ",
        quickLinks: "Արագ Հղումներ",
        contactInfo: "Կոնտակտային Տվյալներ", 
        followUs: "Հետևեք Մեզ",
        address: "Ռուսաստանի փողոց 14/4/2, Քաղաք Աբովյան ",
        copyright: "© 2024 Glow House. Բոլոր իրավունքները պաշտպանված են։",
        privacy: "Գաղտնիության Քաղաքականություն",
        terms: "Ծառայության Պայմաններ",
        cookies: "Cookie-ների Քաղաքականություն",
        // BOOKING CONFIRMED
        bookingConfirmed: "Ամրագրումը Հաստատված է ✅",
        thankYouMessage: "Շնորհակալություն Glow House-ի հետ ամրագրելու համար:",
    },
    ru: {
        home: "Главная",
        services: "Услуги",
        booking: "Запись",
        calendar: "Календарь",
        contact: "Контакты",
        address: "Ул. Россия 14/4/2, Абовян",
        subtitle: "Студи красоты и ухода за кожей",
        servicesTitle: "Наши Услуги",
        makeup: "Макияж",
        makeupDesc: "Профессиональный макияж для любого случая — свадьбы, мероприятия, вечеринки или естественной повседневной красоты. Наши художники подчеркнут ваше сияние с точностью и креативностью.",
        makeupFeatures: ["Свадебный Макияж", "Вечерний Глэм", "Естественный Вид"],
        hairdresser: "Парикмахер",
        hairdresserDesc: "От современных стрижек до яркого окрашивания, укладки, стайлинга и полных преображений. Ваши волосы обрабатываются премиальными продуктами и экспертным уходом.",
        hairdresserFeatures: ["Окрашивание Волос", "Укладка", "Наращивание"],
        nails: "Ногти",
        nailsDesc: "Гелевые ногти, нейл-арт, маникюр и безупречный дизайн. Выбирайте из мягких естественных образов или смелых творческих узоров — всегда выполнено с точностью.",
        nailsFeatures: ["Гелевый Маникюр", "Нейл-Арт", "СПА Уход"],
        skincare: "Уход за кожей",
        skincareDesc: "Роскошные процедуры по уходу за кожей, которые увлажняют, разглаживают и осветляют. Идеально для снятия стресса и длительного сияния.",
        skincareFeatures: ["Фейслифтинг", "Антивозрастной Уход", "Увлажнение"],
        bookingTitle: "Записаться на Прием",
        bookingSubtitle: "Выберите услугу и удобное время",
        bookMakeup: "Записаться на Макияж",
        bookHair: "Записаться к Парикмахеру",
        bookNails: "Записаться на Ногти",
        bookSkincare: "Записаться на Уход за кожей",
        
        // CALENDAR TRANSLATIONS - RUSSIAN
        calendarTitle: "Наши Часы Работы",
        calendarSubtitle: "Когда мы здесь, чтобы сделать вас сияющими",
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг", 
        friday: "Пятница",
        saturday: "Суббота",
        sunday: "Воскресенье",
        mondayStatus: "День Отдыха",
        tuesdayStatus: "Готовы Сиять",
        wednesdayStatus: "Магия Середины Недели",
        thursdayStatus: "День Преображения",
        fridayStatus: "Готовы к Выходным", 
        saturdayStatus: "День Ухода",
        sundayStatus: "Воскресенье Самоухода",
        closed: "Закрыто",
        openingHours: "Часы Работы:",
        hoursDetail: "Вторник - Воскресенье: 10:00 - 19:00",
        bookSession: "Забронировать Сеанс",
        // CONTACT TRANSLATIONS - RUSSIAN
        contactTitle: "Контакты",
        email: "Эл. Почта",
        phone: "Телефон",
        hoursTitle: "Часы",
        hours: "Вт-Вс: 10:00 - 19:00", 
        instagram: "Инстаграм",

        bookingConfirmed: "Бронирование Подтверждено ✅",
        thankYouMessage: "Спасибо за бронирование в Glow House. Мы не можем дождаться, чтобы сделать вас сияющими!",
        
        // FOOTER TRANSLATIONS - RUSSIAN
        footerTagline: "Студи красоты и ухода за кожей",
        quickLinks: "Быстрые Ссылки",
        contactInfo: "Контактная Информация",
        followUs: "Подпишитесь на Нас",
        address: "Ул. Россия 14/4/2, Город Абовян ",
        copyright: "© 2024 Glow House. Все права защищены.",
        privacy: "Политика Конфиденциальности",
        terms: "Условия Обслуживания",
        cookies: "Политика Cookie"
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing with smoother animations...');
    initializeAnimations();
    initializeNavBehavior();
    initializeImageCollage();
    initializeLanguageSwitcher();
    initializeServiceOptions();
    initializeCalendarInteractions();
    initializeHamburgerMenu();
    initializeContactCards();
    
    // Add smooth scroll to all internal links
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
});

// ULTRA SMOOTH FIREWORK EFFECT
function createFirework(x, y, colors = ['#d4a798', '#e8c4b8', '#e8b4b4', '#ffd700', '#ff6b6b', '#a78a7a']) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        const size = 4 + Math.random() * 8;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const delay = Math.random() * 0.3;
        particle.style.animationDelay = delay + 's';
        
        firework.appendChild(particle);
    }
    
    document.body.appendChild(firework);
    
    // Remove firework after animation
    setTimeout(() => {
        if (firework.parentElement) {
            firework.parentElement.removeChild(firework);
        }
    }, 2000);
}

// Enhanced star confetti with smoother animation
function createStarConfetti(container) {
    const starCount = 60;
    const colors = ['#d4a798', '#e8c4b8', '#e8b4b4', '#ffd700', '#ff6b6b', '#a78a7a', '#f8e8e8', '#ffffff'];
    
    // Create multiple bursts with delays for smoother effect
    createBurst(container, starCount, colors, 0);
    setTimeout(() => createBurst(container, starCount/2, colors, 200), 150);
    setTimeout(() => createBurst(container, starCount/3, colors, 400), 300);
}

function createBurst(container, count, colors, delay) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'confetti-star';
        
        const startX = 50 + (Math.random() - 0.5) * 20;
        star.style.left = startX + 'vw';
        star.style.top = '50vh';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.background = color;
        
        const size = 4 + Math.random() * 8;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 80;
        const endX = startX + Math.cos(angle) * distance;
        const endY = 50 + Math.sin(angle) * distance;
        
        const duration = 1.2 + Math.random() * 1.0;
        
        star.style.animation = `confettiExplosion ${duration}s ease-out ${delay}ms forwards`;
        star.style.setProperty('--end-x', endX + 'vw');
        star.style.setProperty('--end-y', endY + 'vh');
        
        container.appendChild(star);
        
        setTimeout(() => {
            if (star.parentElement) {
                star.parentElement.removeChild(star);
            }
        }, duration * 1000 + delay);
    }
}

// Enhanced success popup with fireworks
function showBookingSuccessPopup() {
    console.log('Showing booking success popup with fireworks in language:', currentLang);
    const t = translations[currentLang] || translations.en;
    
    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'booking-success-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-icon">✨</div>
            <h3>${t.bookingConfirmed}</h3>
            <p>${t.thankYouMessage}</p>
            <div class="popup-progress"></div>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(confettiContainer);
    document.body.appendChild(popup);
    
    // Create multiple firework bursts around the popup
    setTimeout(() => {
        createFirework(window.innerWidth / 2 - 100, window.innerHeight / 2 - 100);
    }, 100);
    
    setTimeout(() => {
        createFirework(window.innerWidth / 2 + 100, window.innerHeight / 2 - 150);
    }, 300);
    
    setTimeout(() => {
        createFirework(window.innerWidth / 2 - 150, window.innerHeight / 2 + 100);
    }, 500);
    
    // Also add star confetti
    createStarConfetti(confettiContainer);
    
    setTimeout(() => {
        popup.classList.add('active');
        
        const progressBar = popup.querySelector('.popup-progress');
        progressBar.style.animation = 'progressCountdown 3s linear forwards';
        
        setTimeout(() => {
            popup.classList.remove('active');
            setTimeout(() => {
                if (popup.parentElement) {
                    popup.parentElement.removeChild(popup);
                }
                if (confettiContainer.parentElement) {
                    confettiContainer.parentElement.removeChild(confettiContainer);
                }
            }, 500);
        }, 4000);
    }, 200);
}

// Hamburger Menu Functionality
function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
}

// Calendar interactions
function initializeCalendarInteractions() {
    const calendarDays = document.querySelectorAll('.calendar-day.open');
    
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        day.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        day.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// Image collage positioning
function initializeImageCollage() {
    const images = document.querySelectorAll('.collage-img');
    images.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.3}s`;
        img.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
}

// Enhanced animations with smoother timing
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.id === 'services') {
                    const serviceRows = entry.target.querySelectorAll('.service-row');
                    serviceRows.forEach((row, index) => {
                        setTimeout(() => {
                            row.classList.add('visible');
                        }, index * 300);
                    });
                }
                
                if (entry.target.id === 'calendar') {
                    const calendarDays = entry.target.querySelectorAll('.calendar-day');
                    calendarDays.forEach((day, index) => {
                        setTimeout(() => {
                            day.style.opacity = '0';
                            day.style.transform = 'translateY(30px)';
                            day.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                            
                            setTimeout(() => {
                                day.style.opacity = '1';
                                day.style.transform = 'translateY(0)';
                            }, 100);
                        }, index * 150);
                    });
                }
                
                if (entry.target.id === 'booking') {
                    const bookingCards = entry.target.querySelectorAll('.booking-card-compact');
                    bookingCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px) scale(0.95)';
                            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                            
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0) scale(1)';
                            }, 100);
                        }, index * 150);
                    });
                }
                
                if (entry.target.classList.contains('copyright-footer')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .copyright-footer').forEach(element => {
        observer.observe(element);
    });
}

// Navigation behavior
function initializeNavBehavior() {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;

        if (window.scrollY > 50) {
            nav.style.background = 'rgba(254, 250, 246, 0.98)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(254, 250, 246, 0.95)';
            nav.style.backdropFilter = 'blur(15px)';
        }
    });
}

// Service options
function initializeServiceOptions() {
    const serviceOptions = document.querySelectorAll('.service-option');
    
    serviceOptions.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        option.addEventListener('click', function(e) {
            if (!e.target.classList.contains('book-btn') && !e.target.closest('.book-btn')) {
                const link = this.querySelector('.book-btn');
                if (link && link.href) {
                    window.open(link.href, '_blank', 'noopener,noreferrer');
                }
            }
        });
    });
}

// Language switching functionality
function initializeLanguageSwitcher() {
    function updateActiveFlag() {
        document.querySelectorAll('.flag').forEach(flag => {
            flag.classList.toggle('active', flag.dataset.lang === currentLang);
        });
    }

    function translatePage(lang) {
        const t = translations[lang];
        if (!t) return;
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        const heroAddress = document.querySelector('.clickable-address span');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroAddress && t.address) heroAddress.textContent = t.address;
        if (heroSubtitle && t.subtitle) heroSubtitle.textContent = t.subtitle;

        const servicesTitle = document.querySelector('#services .section-title');
        if (servicesTitle && t.servicesTitle) servicesTitle.textContent = t.servicesTitle;

        const serviceTitles = document.querySelectorAll('.service-text h3');
        const serviceDescriptions = document.querySelectorAll('.service-text p');
        const serviceFeatures = document.querySelectorAll('.service-features');
        
        if (serviceTitles.length >= 4) {
            serviceTitles[0].textContent = t.makeup;
            serviceTitles[1].textContent = t.hairdresser;
            serviceTitles[2].textContent = t.nails;
            serviceTitles[3].textContent = t.skincare;
        }
        
        if (serviceDescriptions.length >= 4) {
            serviceDescriptions[0].textContent = t.makeupDesc;
            serviceDescriptions[1].textContent = t.hairdresserDesc;
            serviceDescriptions[2].textContent = t.nailsDesc;
            serviceDescriptions[3].textContent = t.skincareDesc;
        }
        
        if (serviceFeatures.length >= 4 && t.makeupFeatures) {
            serviceFeatures[0].innerHTML = t.makeupFeatures.map(feature => `<span>${feature}</span>`).join('');
            serviceFeatures[1].innerHTML = t.hairdresserFeatures.map(feature => `<span>${feature}</span>`).join('');
            serviceFeatures[2].innerHTML = t.nailsFeatures.map(feature => `<span>${feature}</span>`).join('');
            serviceFeatures[3].innerHTML = t.skincareFeatures.map(feature => `<span>${feature}</span>`).join('');
        }

        const bookingTitle = document.querySelector('#booking .section-title');
        const bookingSubtitle = document.querySelector('.booking-subtitle');
        const bookButtons = document.querySelectorAll('.book-btn');
        
        if (bookingTitle && t.bookingTitle) bookingTitle.textContent = t.bookingTitle;
        if (bookingSubtitle && t.bookingSubtitle) bookingSubtitle.textContent = t.bookingSubtitle;
        
        if (bookButtons.length >= 4 && t.bookMakeup) {
            bookButtons[0].textContent = t.bookMakeup;
            bookButtons[1].textContent = t.bookHair;
            bookButtons[2].textContent = t.bookNails;
            bookButtons[3].textContent = t.bookSkincare;
        }

        const contactTitle = document.querySelector('#contact .section-title');
        const contactCards = document.querySelectorAll('.contact-card p');
        if (contactTitle && t.contactTitle) contactTitle.textContent = t.contactTitle;
        if (contactCards.length >= 3) {
            contactCards[0].textContent = t.email;
            contactCards[1].textContent = t.phone;
            contactCards[2].textContent = t.hours;
        }
    }

    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('click', function() {
            const lang = this.dataset.lang;
            currentLang = lang;
            localStorage.setItem('selectedLang', lang);
            updateActiveFlag();
            translatePage(lang);
        });
    });

    updateActiveFlag();
    translatePage(currentLang);
}

// Contact card click functionality
function initializeContactCards() {
    const contactCards = document.querySelectorAll('.clickable-contact');
    
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.dataset.type;
            const value = this.dataset.value;
            
            switch(type) {
                case 'phone':
                    initiatePhoneCall(value);
                    break;
                case 'email':
                    openEmailClient(value);
                    break;
            }
            
            // Add click feedback animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

// Phone call function
function initiatePhoneCall(phoneNumber) {
    // Clean the phone number (remove spaces, dashes, etc.)
    const cleanNumber = phoneNumber.replace(/\s+/g, '');
    
    // Create tel: link
    const telLink = `tel:${cleanNumber}`;
    
    // Try to initiate call
    window.location.href = telLink;
    
    // Fallback for devices that don't support tel: links
    setTimeout(() => {
        if (!document.hidden) {
            // Show a message with the phone number
            showNotification(`Call: ${phoneNumber}`, 'info');
            
            // Optional: Copy to clipboard
            navigator.clipboard.writeText(phoneNumber).then(() => {
                console.log('Phone number copied to clipboard');
            });
        }
    }, 1000);
}

// Email function
function openEmailClient(emailAddress) {
    const subject = "Appointment Inquiry - Glow House";
    const body = "Hello Glow House team,\n\nI would like to book an appointment or get more information about your services.\n\nBest regards,";
    
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Fallback if mailto doesn't work
    setTimeout(() => {
        if (!document.hidden) {
            showNotification(`Email: ${emailAddress}`, 'info');
            
            // Optional: Copy to clipboard
            navigator.clipboard.writeText(emailAddress).then(() => {
                console.log('Email copied to clipboard');
            });
        }
    }, 1000);
}


// Add CSS for new animations
const style = document.createElement('style');
style.textContent =`
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification button {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    
    .notification button:hover {
        background: rgba(255,255,255,0.2);
    }
    
    /* Image collage specific positioning */
    .img-1 { grid-column: 1; grid-row: 1; }
    .img-2 { grid-column: 2; grid-row: 1; }
    .img-3 { grid-column: 3; grid-row: 1; }
`;
document.head.appendChild(style);