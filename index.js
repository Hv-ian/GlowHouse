// Enhanced JavaScript with animations and interactions

// Add to your existing DOMContentLoaded function
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing...');
    initializeAnimations();
    initializeNavBehavior();
    initializeImageCollage();
    initializeLanguageSwitcher();
    initializeServiceOptions();
    initializeCalendarInteractions();
    // Removed initializeBookingTabs() - no longer needed
});

// Booking Tabs Functionality
function initializeBookingTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
            
            // Add a subtle animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add hover effects for tabs
    tabButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// Simple calendar interactions
function initializeCalendarInteractions() {
    const calendarDays = document.querySelectorAll('.calendar-day.open');
    
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Add a quick pulse animation when clicked
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You could add a booking modal here if needed
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
        img.style.animationDelay = `${index * 0.2}s`;
    });
}

// Update your initializeAnimations function to include booking section
// Update your initializeAnimations function to include footer
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
                        }, index * 200);
                    });
                }
                
                // Add calendar day animations
                if (entry.target.id === 'calendar') {
                    const calendarDays = entry.target.querySelectorAll('.calendar-day');
                    calendarDays.forEach((day, index) => {
                        setTimeout(() => {
                            day.style.opacity = '0';
                            day.style.transform = 'translateY(30px)';
                            day.style.transition = 'all 0.6s ease';
                            
                            setTimeout(() => {
                                day.style.opacity = '1';
                                day.style.transform = 'translateY(0)';
                            }, 50);
                        }, index * 100);
                    });
                }
                
                // Add compact booking card animations
                if (entry.target.id === 'booking') {
                    const bookingCards = entry.target.querySelectorAll('.booking-card-compact');
                    bookingCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px) scale(0.95)';
                            card.style.transition = 'all 0.5s ease';
                            
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0) scale(1)';
                            }, 50);
                        }, index * 100);
                    });
                }
                
                // Add footer animation
                if (entry.target.classList.contains('copyright-footer')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);

    // Observe all sections including footer
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
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#a78a7a' : '#d4a798'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        z-index: 100000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideInRight 0.3s ease;
        border: 1px solid #e8c4b8;
        font-family: "Poppins", sans-serif;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add service option hover effects and click functionality
function initializeServiceOptions() {
    const serviceOptions = document.querySelectorAll('.service-option');
    
    serviceOptions.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Click anywhere on the card to book (except the button)
        option.addEventListener('click', function(e) {
            // Don't trigger if clicking the button itself
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
            bookingTitle: "Book Your Appointment",
            bookingSubtitle: "Choose a service and select your preferred time",
            bookMakeup: "Makeup",
            bookHair: "Hair", 
            bookNails: "Nails",
            bookSkincare: "Skincare",
            // CONTACT TRANSLATIONS
            contactTitle: "Contact",
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
            cookies: "Cookie Policy"
        },
        hy: {
            home: "Գլխավոր",
            services: "Ծառայություններ",
            booking: "Ամրագրում",
            calendar: "Աշխատանքային Ժամերը",
            contact: "Կապ",
            address: "Ռուսաստանի փողոց 14/4/2, Աբովյան",
            subtitle: "Գեղեցկության և մաշկի խնամքի սրահ",
            servicesTitle: "Մեր Ծառայությունները",
            makeup: "Դիմահարդարում",
            makeupDesc: "Պրոֆեսիոնալ դիմահարդարում ցանկացած առիթի համար — հարսանյաց, միջոցառումների, երեկույթների կամ բնական առօրյա գեղեցկության համար: Մեր վարպետները կբարձրացնեն ձեր փայլը ճշգրտությամբ և ստեղծագործականությամբ:",
            makeupFeatures: ["Հարսանյաց Դիմահարդարում", "Երեկոյան Գլեմ", "Բնական Տեսք"],
            hairdresser: "վարսահարդարում",
            hairdresserDesc: "Ժամանակակից կտրվածքներից մինչև վառ գունավորում, ս stylingրում, ոճավորում և ամբողջական փոխակերպումներ: Ձեր մազերը մշակվում են բարձրորակ արտադրանքներով և փորձառու խնամքով:",
            hairdresserFeatures: ["Մազերի Գունավորում", "Ոճավորում", "Երկարացում"],
            nails: "Եղունգներ",
            nailsDesc: "Gel եղունգներ, եղունգների արվեստ, մանիկյուր և անթերի դիզայն: Ընտրեք փափուկ բնական տեսքից կամ համարձակ ստեղծագործական նախշերից — միշտ կատարված է ճշգրտությամբ:",
            nailsFeatures: ["Gel Մանիկյուր", "Եղունգների Արվեստ", "Spa Բուժում"],
            skincare: "Մաշկի խնամք",
            skincareDesc: "Շքեղ մաշկի խնամքի պրոցեդուրներ, որոնք խոնավեցնում, հարթեցնում և պայծառացնում են: Կատարելական է սթրեսից ազատվելու և երկարատև ճառագայթման համար:",
            skincareFeatures: ["Դիմադրոշմներ", "Հակա-Տարիքային", "Խոնավացում"],
            sectionTitle:["Ամրագրել"],
            bookingTitle: "Ամրագրել",
            bookingSubtitle: "Ընտրեք ծառայությունը և Ձեր նախընտրելի ժամը",
            bookMakeup: "Դիմահարդարում",
            bookHair: "վարսահարդարում",
            bookNails: "Եղունգներ",
            bookSkincare: "Մաշկի խնամք",
            
            // CALENDAR TRANSLATIONS - ARMENIAN
            calendarTitle: "Մեր Աշխատանքային Ժամերը",
            calendarSubtitle: "Երբ մենք այստեղ ենք՝ ձեզ փայլեցնելու համար",
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
            saturdayStatus: "Հաճույքի Օր",
            sundayStatus: "Ինքնաոճավորման Կիրակի",
            closed: "Փակ է",
            openingHours: "Աշխատանքային Ժամեր:",
            hoursDetail: "Երեքշաբթի - Կիրակի: 10:00 - 19:00",

            // CONTACT TRANSLATIONS - ARMENIAN
            contactTitle: "Կապ",
            email: "Էլ․ Փոստ",
            phone: "Հեռախոս",
            hoursTitle: "Ժամեր",
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
            cookies: "Cookie-ների Քաղաքականություն"
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
            bookingTitle: "Записаться на Прием",
            bookingSubtitle: "Выберите услугу и удобное время", 
            bookMakeup: "Макияж",
            bookHair: "Волосы",
            bookNails: "Ногти",
            bookSkincare: "Уход за кожей",

            // CONTACT TRANSLATIONS - RUSSIAN
            contactTitle: "Контакты",
            email: "Эл. Почта",
            phone: "Телефон",
            hoursTitle: "Часы",
            hours: "Вт-Вс: 10:00 - 19:00", 
            instagram: "Инстаграм",
            
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

    let currentLang = localStorage.getItem('selectedLang') || 'en';

    function updateActiveFlag() {
        document.querySelectorAll('.flag').forEach(flag => {
            flag.classList.toggle('active', flag.dataset.lang === currentLang);
        });
    }

    function translatePage(lang) {
        const t = translations[lang];
        if (!t) return;
        
        // Translate all elements with data-key attribute
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Translate hero section
        const heroAddress = document.querySelector('.clickable-address span');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroAddress && t.address) heroAddress.textContent = t.address;
        if (heroSubtitle && t.subtitle) heroSubtitle.textContent = t.subtitle;

        // Translate services section
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

        // Translate booking section
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

        // Translate contact section
        const contactTitle = document.querySelector('#contact .section-title');
        const contactCards = document.querySelectorAll('.contact-card p');
        if (contactTitle && t.contactTitle) contactTitle.textContent = t.contactTitle;
        if (contactCards.length >= 3) {
            contactCards[0].textContent = t.email;
            contactCards[1].textContent = t.phone;
            contactCards[2].textContent = t.hours;
        }

        // Calendar section is now automatically translated via data-key attributes
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
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
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