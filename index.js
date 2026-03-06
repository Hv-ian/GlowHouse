// Enhanced JavaScript with smoother animations and firework effects

// GLOBAL VARIABLES
let currentLang = localStorage.getItem('selectedLang') || 'en';
const translations = {
    en: {
        home: "Home",
        services: "Our Services",
        booking: "Book Appointment",
        calendar: "Opening Hours",
        contact: "Contact",
        address: "Russia Street 14/4/2, Abovyan",
        subtitle: "Armenian Beauty & Skincare Studio",
        servicesTitle: "Our Services",
        makeup: "Makeup",
        makeupDesc: "Professional makeup for every occasion — weddings, events, parties, or natural everyday beauty. Our artists enhance your glow with precision and creativity.",
        makeupFeatures: ["Bridal Makeup", "Evening Glam", "Natural Look"],
        hairdresser: "Hair",
        hairdresserDesc: "From modern cuts to vibrant colouring, blowouts, styling, and full transformations. Your hair is treated with premium products and expert care.",
        hairdresserFeatures: ["Hair Coloring", "Styling", "Extensions"],
        nails: "Nails",
        nailsDesc: "Gel nails, nail art, manicures, and flawless designs. Choose from soft natural looks or bold creative patterns — always done with precision.",
        nailsFeatures: ["Gel Manicure", "Nail Art", "Spa Treatment"],
        skincare: "Skincare",
        skincareDesc: "Luxurious skincare treatments that hydrate, smooth, and brighten. Perfect for stress relief and lasting radiance.",
        skincareFeatures: ["Facials", "Anti-Aging", "Hydration"],
        bookingTitle: "Book Your Appointment",
        bookingSubtitle: "Select your service and procedure to see available times",
        bookMakeup: "Book Makeup",
        bookHair: "Book Hair",
        bookNails: "Book Nails",
        bookSkincare: "Book Skincare",
        otherServices: "Other Services",
        otherSubtitle: "Professional body treatment services",
        instagramBtn: "See All Our Work on Instagram",

        selectServiceCategory: "Select a service category",
        selectProcedure: "Select a procedure",
        noProcedureSelected: "No procedure selected",
        selectProcedureDetails: "Select a procedure to see details",

        // CALENDAR TRANSLATIONS
        calendarTitle: "Our Beauty Hours",
        calendarSubtitle: "Tuesday to Sunday: 08:00 - 19:00 (Monday only with appointment) ✨",
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

        // NEW BOOKING TRANSLATIONS
        chooseService: "Choose Service Category",
        chooseProcedure: "Choose Procedure",
        selectServiceCategory: "Select a service category",
        selectProcedure: "Select a procedure",
        selectServiceFirst: "Please select a service category first",
        selectServiceProcedure: "Select Service & Procedure",
        selectToViewTimes: "Choose from our services and procedures to view available booking times",
        makeupSubtitle: "Professional makeup services",
        hairSubtitle: "Styling & haircare",
        nailsSubtitle: "Manicure & pedicure",
        skincareSubtitle: "Cosmetology treatments",
        bookNow: "Book Now",
        noProcedures: "No procedures available for this service",
        duration: "Duration"
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
        makeupDesc: "Պրոֆեսիոնալ դիմահարդարում ցանկացած առիթի համար — հարսանյաց, միջոցառումների, երեկույթների կամ առօրյա գեղեցկության համար: Մեր մասնագետները ձեզ կապահովեն գերազանց արդյունքով՝ յուրաքանչյուր ցանկություն դարձնելով իրական և ձեր ոճին համապատասխան:",
        makeupFeatures: ["Հարսանյաց Դիմահարդարում", "Երեկոյան Դիմահարդարում", "Առօրյա Դիմահարդարում"],
        hairdresser: "Վարսահարդարում",
        hairdresserDesc: "Ժամանակակից վարսահարդարում, ոճաորում և ցանկության դեպքում ամբողջական փոխակերպում: Ձեր մազերը մշակվում և հարդարվում են բարձրորակ նյութերով և փորձառու աշխատանքով:",
        hairdresserFeatures: ["Մազերի Գունավորում", "Ոճաորում", "Երկարացում"],
        nails: "Մատնահարդարում",
        nailsDesc: "Gellac, SHELLAC և եղունգների խնամք: Ընտրեք բնական տեսքից մինչև համարձակ ստեղծագործական նախշեր: Ամեն ինչ կատարվում է ամենայն ճշգրտությամբ ✨",
        nailsFeatures: ["Gellac", 'SHELLAC', "Եղունգների խնամք", "Spa Բուժում"],
        skincare: "Մաշկի խնամք",
        skincareDesc: "Պրոֆեսիոնալ Մաշկի խնամքի պրոցեդուրաներ, որոնք խոնավեցնում, հարթեցնում և փայլեցնում են ձեր մաշկը: Իդեալական է սթրեսից ազատվելու և երկարատև խնամված տեսք ունենալու համար:",
        skincareFeatures: ["Դիմակներ", "Հակա-Տարիքային դեմքի մերսումներ", "Խոնավեցում"],
        bookingTitle: "Ամրագրել",
        bookingSubtitle: "Ընտրեք ծառայությունը և Ձեզ նախընտրելի ժամը",
        bookMakeup: "Դիմահարդարում",
        bookHair: "Վարսահարդարում",
        bookNails: "Մատնահարդարում",
        bookSkincare: "Մաշկի խնամք",
        bookSession: "Ամրագրել հիմա",
        instagramBtn: "Տեսեք մեր բոլոր աշխատանքները Ինստագրամում",

        otherServices: "Այլ ծառայություններ",
        otherSubtitle: "Մասնագիտական մարմնի խնամքի ծառայություններ",

        selectServiceCategory: "Ընտրեք ծառայության կատեգորիա",
        selectProcedure: "Ընտրեք ծառայությունը",
        noProcedureSelected: "Ծառայություն չի ընտրվել",
        selectProcedureDetails: "Ընտրեք ծառայությունը, մանրամասները տեսնելու համար",

        // CALENDAR TRANSLATIONS - ARMENIAN
        calendarTitle: "Մեր Աշխատանքային Ժամերը",
        calendarSubtitle: "Երեքշաբթի - Կիրակի: 08:00 - 19:00 (Երկուշաբթի միայն ամրագրումով)",
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

        // NEW BOOKING TRANSLATIONS - ARMENIAN
        chooseService: "Ընտրեք Ծառայության Կատեգորիան",
        chooseProcedure: "Ընտրեք Ծառայությունը",
        selectServiceCategory: "Ընտրեք ծառայության կատեգորիա",
        selectProcedure: "Ընտրեք ծառայությունը",
        selectServiceFirst: "Խնդրում ենք նախ ընտրել ծառայության կատեգորիա",
        selectServiceProcedure: "Ընտրեք Ծառայություն և Ծառայություն",
        selectToViewTimes: "Ընտրեք մեր ծառայություններից և ծառայություններից ժամանակներ դիտելու համար",
        makeupSubtitle: "Պրոֆեսիոնալ դիմահարդարման ծառայություններ",
        hairSubtitle: "Ոճավորում և մազերի խնամք",
        nailsSubtitle: "Մատնահարդարում և ոտնահարդարում",
        skincareSubtitle: "Կոսմետոլոգիական ծառայություններ",
        bookNow: "Ամրագրել Հիմա",
        noProcedures: "Այս ծառայության համար ծառայություններ չկան",
        duration: "Տևողություն"
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
        calendarSubtitle: "Вторник - Воскресенье: 08:00 - 19:00 (Понедельник только по записи)",
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
        otherServices: "Другие Услуги",
        otherSubtitle: "Профессиональные услуги по уходу за телом",
        instagramBtn: "Посмотрите все наши работы в Instagram",

        selectServiceCategory: "Выберите категорию услуги",
        selectProcedure: "Выберите процедуру",
        noProcedureSelected: "Процедура не выбрана",
        selectProcedureDetails: "Выберите процедуру, чтобы увидеть детали",

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
        cookies: "Политика Cookie",

        // NEW BOOKING TRANSLATIONS - RUSSIAN
        chooseService: "Выберите Категорию Услуги",
        chooseProcedure: "Выберите Процедуру",
        selectServiceCategory: "Выберите категорию услуги",
        selectProcedure: "Выберите процедуру",
        selectServiceFirst: "Пожалуйста, сначала выберите категорию услуги",
        selectServiceProcedure: "Выберите Услугу и Процедуру",
        selectToViewTimes: "Выберите из наших услуг и процедур для просмотра доступного времени",
        makeupSubtitle: "Профессиональные услуги макияжа",
        hairSubtitle: "Укладка и уход за волосами",
        nailsSubtitle: "Маникюр и педикюр",
        skincareSubtitle: "Косметологические процедуры",
        bookNow: "Забронировать Сейчас",
        noProcedures: "Для этой услуги нет доступных процедур",
        duration: "Продолжительность"
    }
};

// Procedure translations with Russian included
const procedureTranslations = {
    hy: {
        makeup: [
            { name: "առօրյա դիմահարդարում առանց թարթիչ", price: "6,000 AMD", duration: "45 րոպե" },
            { name: "երեկոյան դիմահարդարում", price: "8,000 AMD", duration: "60-120 րոպե" },
            { name: "հարսանյաց դիմահարդարում", price: "13,000 AMD", duration: "90 րոպե" },
            { name: "դեկոլտեի մշակում", price: "+1,000 AMD", duration: "15 րոպե" },
            { name: "թարթիչ հատիկավոր և ընդհանուր", price: "3,000 AMD", duration: "20 րոպե" },
            { name: "Հոնքերի շտկում", price: "2,000 AMD", duration: "15 րոպե" },
            { name: "Ասեղային մազահեռացում (1ժամ)", price: "4,000 AMD", duration: "60 րոպե" }
        ],
        hair: [
            { name: "կտրվածք", price: "1,500–3,000 AMD", duration: "30 րոպե" },
            { name: "ֆեն", price: "1,500–5,000 AMD", duration: "45 րոպե" },
            { name: "խառը ֆեն (ստորակետ)", price: "2,000–5,000 AMD", duration: "60 րոպե" },
            { name: "Շիպցիներ", price: "3,000–8,000 AMD", duration: "60 րոպե" },
            { name: "Ներկ", price: "1,500–2,000 AMD", duration: "45 րոպե" },
            { name: "Գունաբացում", price: "15,000 AMD", duration: "90 րոպե" },
            { name: "կերատին", price: "15,000 AMD", duration: "90 րոպե" },
            { name: "սանրվածք(պոչ)", price: "4,000–8,000 AMD", duration: "60 րոպե" },
            { name: "հարսանեկան սանրվածքներ", price: "10,000 AMD", duration: "90 րոպե" }
        ],
        nails: [
            { name: "Գելլաք", price: "5,000 AMD", duration: "60 րոպե" },
            { name: "Մատնահարդարում չիստկա", price: "2,000 AMD", duration: "45 րոպե" },
            { name: "Ճապոնական խնամք (15րոպե)", price: "3,000 AMD", duration: "15 րոպե" },
            { name: "Հեռացում", price: "1,000 AMD", duration: "15 րոպե" },
            { name: "գելով ամրեցում", price: "6,000 AMD", duration: "75 րոպե" },
            { name: "Լիցք (Եղունգի երկարացում)", price: "1,000 AMD", duration: "30 րոպե" },
            { name: "ֆրենչ + դիզայն", price: "+1,000 AMD", duration: "+15 րոպե" },
            { name: "Բազայով հարթեցում + ֆրենչ", price: "6,000 AMD", duration: "75 րոպե" },
            { name: "գելով ամրեցում + ֆրենչ", price: "7,000 AMD", duration: "90 րոպե" },
            { name: "Ոտնահարդարում", price: "7,000 AMD", duration: "60 րոպե" },
            { name: "Կրունկներ + գելլաք", price: "10,000 AMD", duration: "90 րոպե" }
        ],
        skincare: [
            { name: "կոմբինացված մաշկի մաքրում (2ժամ)", price: "15,000 AMD", duration: "120 րոպե" },
            { name: "Յուղոտ մաշկի մաքրում (2ժամ)", price: "15,000 AMD", duration: "120 րոպե" },
            { name: "Չոր մաշկի խնամք (2ժամ)", price: "15,000 AMD", duration: "120 րոպե" },
            { name: "Դասական մերսում+դիմակ (30րոպե)", price: "10,000 AMD", duration: "30 րոպե" },
            { name: "Բուսական պիլինգ + չիստկա (2ժամ)", price: "15,000 AMD", duration: "120 րոպե" }
        ],
        "other-services": [
            { name: "Հոնքերի շտկում", price: "2,000 AMD", duration: "15 րոպե" },
            { name: "Ասեղային մազահեռացում (1 ժամ)", price: "4,000 AMD", duration: "60 րոպե" },
            { name: "(Ոսկով մազահեռացում) Թևատակ", price: "2,000 AMD", duration: "20 րոպե" },
            { name: "(Ոսկով մազահեռացում) Ոտքեր", price: "4,000 AMD", duration: "45 րոպե" },
            { name: "(Ոսկով մազահեռացում) Ձեռքեր", price: "2,000 AMD", duration: "30 րոպե" },
            { name: "(Ոսկով մազահեռացում) Դեմք", price: "2,000 AMD", duration: "20 րոպե" }
        ]
    },
    ru: {
        makeup: [
            { name: "Повседневный макияж без ресниц", price: "6,000 AMD", duration: "45 мин" },
            { name: "Вечерний макияж", price: "8,000 AMD", duration: "60-120 мин" },
            { name: "Свадебный макияж", price: "13,000 AMD", duration: "90 мин" },
            { name: "Обработка зоны декольте", price: "+1,000 AMD", duration: "15 мин" },
            { name: "Грануляция ресниц и общая", price: "3,000 AMD", duration: "20 мин" },
            { name: "Коррекция бровей", price: "2,000 AMD", duration: "15 мин" },
            { name: "Удаление волос иглой (1 час)", price: "4,000 AMD", duration: "60 мин" }
        ],
        hair: [
            { name: "Стрижка", price: "1,500–3,000 AMD", duration: "30 мин" },
            { name: "Укладка феном", price: "1,500–5,000 AMD", duration: "45 мин" },
            { name: "Смешанная укладка феном", price: "2,000–5,000 AMD", duration: "60 мин" },
            { name: "Чипсы", price: "3,000–8,000 AMD", duration: "60 мин" },
            { name: "Окрашивание", price: "1,500–2,000 AMD", duration: "45 мин" },
            { name: "Обесцвечивание цвета", price: "15,000 AMD", duration: "90 мин" },
            { name: "Кератин", price: "15,000 AMD", duration: "90 мин" },
            { name: "Прическа (хвост)", price: "4,000–8,000 AMD", duration: "60 мин" },
            { name: "Свадебные прически", price: "10,000 AMD", duration: "90 мин" }
        ],
        nails: [
            { name: "Геллак", price: "5,000 AMD", duration: "60 мин" },
            { name: "Классический маникюр", price: "2,000 AMD", duration: "45 мин" },
            { name: "Японский уход (15 минут)", price: "3,000 AMD", duration: "15 мин" },
            { name: "Снятие", price: "1,000 AMD", duration: "15 мин" },
            { name: "Укрепление гелем", price: "6,000 AMD", duration: "75 мин" },
            { name: "Зарядка (Наращивание ногтей)", price: "1,000 AMD", duration: "30 мин" },
            { name: "Френч + дизайн", price: "+1,000 AMD", duration: "+15 мин" },
            { name: "Базовое сглаживание + френч", price: "6,000 AMD", duration: "75 мин" },
            { name: "Укрепление гелем + френч", price: "7,000 AMD", duration: "90 мин" },
            { name: "Педикюр", price: "7,000 AMD", duration: "60 мин" },
            { name: "Пятки + геллак", price: "10,000 AMD", duration: "90 мин" }
        ],
        skincare: [
            { name: "Комбинированная чистка кожи (2 часа)", price: "15,000 AMD", duration: "120 мин" },
            { name: "Чистка жирной кожи (2 часа)", price: "15,000 AMD", duration: "120 мин" },
            { name: "Уход за сухой кожей (2 часа)", price: "15,000 AMD", duration: "120 мин" },
            { name: "Классический массаж + маска (30 минут)", price: "10,000 AMD", duration: "30 мин" },
            { name: "Растительный пилинг + чистка (2 часа)", price: "15,000 AMD", duration: "120 мин" }
        ],
        "other-services": [
            { name: "Коррекция бровей", price: "2,000 AMD", duration: "15 мин" },
            { name: "(Восковая эпиляция) Подмышки", price: "2,000 AMD", duration: "20 мин" },
            { name: "(Восковая эпиляция) Ноги", price: "4,000 AMD", duration: "45 мин" },
            { name: "(Восковая эпиляция) Руки", price: "2,000 AMD", duration: "30 мин" },
            { name: "(Восковая эпиляция) Лицо", price: "2,000 AMD", duration: "20 мин" }
        ]
    },
    en: {
        "other-services": [
            { name: "Eyebrow Shaping", price: "2,000 AMD", duration: "15 min" },
            { name: "Needle Hair Removal (1 hour)", price: "4,000 AMD", duration: "60 min" },
            { name: "(Wax Hair Removal) Underarms", price: "2,000 AMD", duration: "20 min" },
            { name: "(Wax Hair Removal) Legs", price: "4,000 AMD", duration: "45 min" },
            { name: "(Wax Hair Removal) Hands", price: "2,000 AMD", duration: "30 min" },
            { name: "(Wax Hair Removal) Face", price: "2,000 AMD", duration: "20 min" }
        ]
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded - initializing with smoother animations...');
    initializeAnimations();
    initializeNavBehavior();
    initializeImageCollage();
    initializeLanguageSwitcher();
    initializeServiceOptions();
    initializeCalendarInteractions();
    initializeHamburgerMenu();
    initializeContactCards();
    initializeElegantBooking();
    initializeMobileCalendly();
    initializeGallery();

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

    // Initialize booking translations
    setTimeout(updateBookingTranslations, 100);
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
    setTimeout(() => createBurst(container, starCount / 2, colors, 200), 150);
    setTimeout(() => createBurst(container, starCount / 3, colors, 400), 300);
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
        day.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });

        day.addEventListener('mouseenter', function () {
            this.style.zIndex = '10';
        });

        day.addEventListener('mouseleave', function () {
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

    const observer = new IntersectionObserver(function (entries) {
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
                    const bookingSection = entry.target;
                    setTimeout(() => {
                        bookingSection.style.opacity = '1';
                        bookingSection.style.transform = 'translateY(0)';
                    }, 100);
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
        option.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px)';
        });

        option.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });

        option.addEventListener('click', function (e) {
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

        // Update booking translations
        updateBookingTranslations();
    }

    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('click', function () {
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
        card.addEventListener('click', function () {
            const type = this.dataset.type;
            const value = this.dataset.value;

            switch (type) {
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
            console.log(`Call: ${phoneNumber}`);

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
            console.log(`Email: ${emailAddress}`);

            // Optional: Copy to clipboard
            navigator.clipboard.writeText(emailAddress).then(() => {
                console.log('Email copied to clipboard');
            });
        }
    }, 1000);
}

// Elegant Booking Functionality
// Elegant Booking Functionality
function initializeElegantBooking() {
    const BOOKING_URL = "https://calendly.com/glowhouseinfo/services";
    const serviceProcedures = {
        makeup: [
            { name: "Everyday makeup without lashes", price: "6,000 AMD", duration: "45 min", url: BOOKING_URL },
            { name: "Evening makeup", price: "8,000 AMD", duration: "60-120 min", url: BOOKING_URL },
            { name: "Bridal makeup", price: "13,000 AMD", duration: "90 min", url: BOOKING_URL },
            { name: "Décolleté treatment", price: "+1,000 AMD", duration: "15 min", url: BOOKING_URL },
            { name: "Lash granulation & general", price: "3,000 AMD", duration: "20 min", url: BOOKING_URL },
            { name: "Eyebrow shaping", price: "2,000 AMD", duration: "15 min", url: BOOKING_URL },
            { name: "Needle hair removal (1 hour)", price: "4,000 AMD", duration: "60 min", url: BOOKING_URL }
        ],
        hair: [
            { name: "Haircut", price: "1,500-3,000 AMD", duration: "30 min", url: BOOKING_URL },
            { name: "Blow-dry", price: "1,500-5,000 AMD", duration: "45 min", url: BOOKING_URL },
            { name: "Mixed blow-dry (comma)", price: "2,000-5,000 AMD", duration: "60 min", url: BOOKING_URL },
            { name: "Chips", price: "3,000-8,000 AMD", duration: "60 min", url: BOOKING_URL },
            { name: "Coloring", price: "1,500-2,000 AMD", duration: "45 min", url: BOOKING_URL },
            { name: "Color bleaching", price: "15,000 AMD", duration: "90 min", url: BOOKING_URL },
            { name: "Keratin", price: "15,000 AMD", duration: "90 min", url: BOOKING_URL },
            { name: "Hairstyle (ponytail)", price: "4,000-8,000 AMD", duration: "60 min", url: BOOKING_URL },
            { name: "Bridal hairstyles", price: "10,000 AMD", duration: "90 min", url: BOOKING_URL }
        ],
        nails: [
            { name: "Gellac", price: "5,000 AMD", duration: "60 min", url: BOOKING_URL },
            { name: "Classic manicure", price: "2,000 AMD", duration: "45 min", url: BOOKING_URL },
            { name: "Japanese care (15 minutes)", price: "3,000 AMD", duration: "15 min", url: BOOKING_URL },
            { name: "Removal", price: "1,000 AMD", duration: "15 min", url: BOOKING_URL },
            { name: "Gel strengthening", price: "6,000 AMD", duration: "75 min", url: BOOKING_URL },
            { name: "Charge (Nail extension)", price: "1,000 AMD", duration: "30 min", url: BOOKING_URL },
            { name: "French + design", price: "+1,000 AMD", duration: "+15 min", url: BOOKING_URL },
            { name: "Base smoothing + French", price: "6,000 AMD", duration: "75 min", url: BOOKING_URL },
            { name: "Gel strengthening + French", price: "7,000 AMD", duration: "90 min", url: BOOKING_URL },
            { name: "Pedicure", price: "7,000 AMD", duration: "60 min", url: BOOKING_URL },
            { name: "Heels + gellac", price: "10,000 AMD", duration: "90 min", url: BOOKING_URL }
        ],
        skincare: [
            { name: "Combined skin cleaning (2 hours)", price: "15,000 AMD", duration: "120 min", url: BOOKING_URL },
            { name: "Oily skin cleaning (2 hours)", price: "15,000 AMD", duration: "120 min", url: BOOKING_URL },
            { name: "Dry skin care (2 hours)", price: "15,000 AMD", duration: "120 min", url: BOOKING_URL },
            { name: "Classic massage + mask (30 minutes)", price: "10,000 AMD", duration: "30 min", url: BOOKING_URL },
            { name: "Plant peeling + cleaning (2 hours)", price: "15,000 AMD", duration: "120 min", url: BOOKING_URL }
        ],
        "other-services": [
            { name: "Eyebrow Shaping", price: "2,000 AMD", duration: "15 min", url: BOOKING_URL },
            { name: "Needle Hair Removal (1 hour)", price: "4,000 AMD", duration: "60 min", url: BOOKING_URL },
            { name: "(Wax Hair Removal) Underarms", price: "1,500 AMD", duration: "20 min", url: BOOKING_URL },
            { name: "(Wax Hair Removal) Legs", price: "4,000 AMD", duration: "45 min", url: BOOKING_URL },
            { name: "(Wax Hair Removal) Hands", price: "2,000 AMD", duration: "30 min", url: BOOKING_URL },
            { name: "(Wax Hair Removal) Face", price: "1,500 AMD", duration: "20 min", url: BOOKING_URL }
        ]
    };

    let selectedCategory = null;
    let selectedProcedure = null;

    // Initialize dropdowns
    const serviceDropdown = document.getElementById('serviceCategoryDropdown');
    const procedureDropdown = document.getElementById('procedureDropdown');
    const procedureOptions = document.getElementById('procedureOptions');
    const selectedProcedureInfo = document.getElementById('selectedProcedureInfo');
    const bookNowBtn = document.getElementById('bookNowBtn');
    const calendarPlaceholder = document.getElementById('calendarPlaceholder');
    const calendlyWidget = document.getElementById('calendlyWidget');

    // Toggle dropdowns
    function toggleDropdown(dropdown) {
        const isActive = dropdown.classList.contains('active');

        // Close all dropdowns first
        document.querySelectorAll('.custom-dropdown').forEach(dd => {
            dd.classList.remove('active');
        });

        // Toggle current dropdown if it wasn't active
        if (!isActive) {
            dropdown.classList.add('active');
        }
    }

    // Service category selection
    serviceDropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleDropdown(this);
    });

    // Procedure selection
    procedureDropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        if (selectedCategory) {
            toggleDropdown(this);
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        document.querySelectorAll('.custom-dropdown').forEach(dd => {
            dd.classList.remove('active');
        });
    });

    // Service category selection
    document.querySelectorAll('#serviceCategoryDropdown .dropdown-option').forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();

            const category = this.dataset.category;
            selectedCategory = category;

            // Update service dropdown display
            const serviceName = this.querySelector('.option-title').textContent;
            serviceDropdown.querySelector('.dropdown-placeholder').textContent = serviceName;

            // Update active state
            document.querySelectorAll('#serviceCategoryDropdown .dropdown-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');

            // Populate procedures
            populateProcedures(category);

            // Reset procedure selection
            selectedProcedure = null;
            procedureDropdown.querySelector('.dropdown-placeholder').textContent = translations[currentLang].selectProcedure;
            selectedProcedureInfo.classList.remove('active');
            selectedProcedureInfo.querySelector('#selectedProcedureName').textContent = 'No procedure selected';
            selectedProcedureInfo.querySelector('#selectedProcedurePrice').textContent = '-';
            selectedProcedureInfo.querySelector('#selectedProcedureDuration').textContent = 'Select a procedure to see details';
            bookNowBtn.disabled = true;

            // Hide calendar
            calendlyWidget.classList.remove('active');

            // Close dropdown
            serviceDropdown.classList.remove('active');
        });
    });

    // Populate procedures based on selected category
    // In the populateProcedures function, update the reset part:
    function populateProcedures(category) {
        const procedures = serviceProcedures[category] || [];
        const translatedProcedures = procedureTranslations[currentLang]?.[category] || procedures;
        const t = translations[currentLang] || translations.en;

        procedureOptions.innerHTML = '';

        if (procedures.length === 0) {
            procedureOptions.innerHTML = `
            <div class="no-procedures">
                <i class="fas fa-exclamation-circle"></i>
                <p>${t.noProcedures || 'No procedures available for this service'}</p>
            </div>
        `;
            return;
        }

        procedures.forEach((procedure, index) => {
            const translatedProcedure = translatedProcedures[index] || procedure;
            const option = document.createElement('div');
            option.className = 'procedure-option';
            option.innerHTML = `
            <span class="procedure-name">${translatedProcedure.name}</span>
            <span class="procedure-price">${translatedProcedure.price}</span>
        `;

            option.addEventListener('click', function (e) {
                e.stopPropagation();

                // Update active state
                document.querySelectorAll('#procedureDropdown .procedure-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');

                // Update procedure selection
                selectedProcedure = procedure;
                procedureDropdown.querySelector('.dropdown-placeholder').textContent = translatedProcedure.name;

                // Update selected procedure info
                selectedProcedureInfo.classList.add('active');
                selectedProcedureInfo.querySelector('#selectedProcedureName').textContent = translatedProcedure.name;
                selectedProcedureInfo.querySelector('#selectedProcedurePrice').textContent = translatedProcedure.price;
                selectedProcedureInfo.querySelector('#selectedProcedureDuration').textContent = `${t.duration || 'Duration'}: ${translatedProcedure.duration}`;

                // Enable book now button
                bookNowBtn.disabled = false;

                // Load calendar
                loadCalendlyWidget(procedure.url);

                // Close dropdown
                procedureDropdown.classList.remove('active');
            });

            procedureOptions.appendChild(option);
        });
    }

    // Book Now button
    bookNowBtn.addEventListener('click', function () {
        if (selectedProcedure && !this.disabled) {
            // The calendar is already loaded, just ensure it's visible
            calendlyWidget.classList.add('active');
            calendarPlaceholder.style.display = 'none';

            // Scroll to calendar
            calendlyWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // Load Calendly widget
    function loadCalendlyWidget(url) {
        calendlyWidget.innerHTML = '';
        calendlyWidget.classList.remove('active');
        calendarPlaceholder.style.display = 'none';

        setTimeout(() => {
            calendlyWidget.innerHTML = `
                    <div class="calendly-inline-widget" 
                         data-url="${url}" 
                         style="min-width:320px;height:600px;">
                    </div>
                `;

            if (window.Calendly) {
                window.Calendly.initInlineWidget({
                    url: url,
                    parentElement: calendlyWidget.querySelector('.calendly-inline-widget')
                });
            }

            setTimeout(() => {
                calendlyWidget.classList.add('active');
                calendarPlaceholder.style.display = 'none';
            }, 300);

        }, 500);
    }
}

// Update booking translations when language changes
function updateBookingTranslations() {
    const t = translations[currentLang] || translations.en;

    // Update all elements with data-key attributes in booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (t[key]) {
                // For dropdown placeholders, only update if no selection is made
                if (element.classList.contains('dropdown-placeholder')) {
                    const dropdown = element.closest('.custom-dropdown');
                    const hasSelection = dropdown.querySelector('.dropdown-option.active') ||
                        dropdown.querySelector('.procedure-option.active');
                    if (!hasSelection) {
                        element.textContent = t[key];
                    }
                } else {
                    element.textContent = t[key];
                }
            }
        });
    }

    // Update service subtitles
    document.querySelectorAll('.option-subtitle').forEach((subtitle, index) => {
        const subtitles = [t.makeupSubtitle, t.hairSubtitle, t.nailsSubtitle, t.skincareSubtitle];
        if (subtitles[index]) {
            subtitle.textContent = subtitles[index];
        }
    });

    // Update book now button
    const bookNowBtn = document.getElementById('bookNowBtn');
    if (bookNowBtn) {
        const buttonText = bookNowBtn.querySelector('span[data-key="bookNow"]');
        if (buttonText && t.bookNow) {
            buttonText.textContent = t.bookNow;
        }
    }
}

function initializeMobileCalendly() {
    // Re-initialize Calendly widgets on mobile for better responsiveness
    if (window.innerWidth <= 768 && window.Calendly) {
        document.querySelectorAll('.calendly-inline-widget').forEach(widget => {
            const url = widget.getAttribute('data-url');
            if (url) {
                // Re-init with mobile-optimized settings
                window.Calendly.initInlineWidget({
                    url: url,
                    parentElement: widget,
                    responsive: true
                });
            }
        });
    }
}

// Add CSS for new animations
const style = document.createElement('style');
style.textContent = `
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

function initializeGallery() {
    const scene = document.getElementById('galleryScene');
    const track = document.getElementById('galleryTrack');
    const cards = Array.from(track ? track.querySelectorAll('.gallery-card') : []);
    const lb = document.getElementById('galleryLightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbClose = document.getElementById('lightboxClose');
    const lbPrev = document.getElementById('lightboxPrev');
    const lbNext = document.getElementById('lightboxNext');

    if (!scene || !track || cards.length === 0) return;

    const CARD_W = 280;
    const GAP = 28;
    const STEP = CARD_W + GAP;
    const TOTAL_W = STEP * cards.length;
    const AUTO_SPEED = 1.5; // px per frame — adjust to taste

    let currentX = STEP * 2;
    let targetX = STEP * 2;
    let isDragging = false;
    let isHovered = false;
    let isPaused = false;
    let startX = 0;
    let lastX = 0;
    let dragDeltaX = 0;
    let lbIndex = 0;
    let inView = false;

    // --- Intersection Observer: only auto-scroll when section is visible ---
    const sectionObserver = new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
    }, { threshold: 0.2 });
    sectionObserver.observe(scene.closest('.gallery-section') || scene);

    // --- Helpers ---
    function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

    function getCenterIndex() {
        return Math.round(currentX / STEP) % cards.length;
    }

    function applyTilt() {
        const ci = Math.round(currentX / STEP) % cards.length;
        cards.forEach((card, i) => {
            if (card.classList.contains('is-hovered')) return;
            card.classList.remove('is-center', 'tilt-left', 'tilt-left2', 'tilt-right', 'tilt-right2');
            // Compute circular distance
            let diff = i - ci;
            // Wrap
            if (diff > cards.length / 2) diff -= cards.length;
            if (diff < -cards.length / 2) diff += cards.length;

            if (diff === 0) card.classList.add('is-center');
            else if (diff === -1) card.classList.add('tilt-left');
            else if (diff <= -2) card.classList.add('tilt-left2');
            else if (diff === 1) card.classList.add('tilt-right');
            else if (diff >= 2) card.classList.add('tilt-right2');
        });
    }

    // --- RAF loop ---
    function tick() {
        // Auto-scroll when in view and not paused
        if (inView && !isPaused && !isDragging) {
            targetX += AUTO_SPEED;
        }

        // Wrap targetX infinitely
        targetX = ((targetX % TOTAL_W) + TOTAL_W) % TOTAL_W;
        currentX += (targetX - currentX) * 0.06;
        if (Math.abs(targetX - currentX) < 0.01) currentX = targetX;

        // Translate: offset so the track wraps visually
        // We duplicate display by shifting the transform
        const offset = currentX % TOTAL_W;
        track.style.transform = `translateX(${-offset}px)`;

        applyTilt();
        requestAnimationFrame(tick);
    }

    // --- Hover pause ---
    cards.forEach((card, i) => {
        card.addEventListener('mouseenter', () => {
            isPaused = true;
            isHovered = true;
            cards.forEach(c => c.classList.remove('is-center', 'tilt-left', 'tilt-left2', 'tilt-right', 'tilt-right2', 'is-hovered'));
            card.classList.add('is-hovered');
        });

        card.addEventListener('mouseleave', () => {
            isPaused = false;
            isHovered = false;
            card.classList.remove('is-hovered');
            applyTilt();
        });

        // Click to open lightbox (only if not dragging)
        card.addEventListener('click', () => {
            if (Math.abs(dragDeltaX) > 8) return;
            lbIndex = i;
            openLightbox(i);
        });
    });

    // --- Drag ---
    scene.addEventListener('pointerdown', e => {
        isDragging = true;
        isPaused = true;
        startX = e.clientX;
        lastX = e.clientX;
        dragDeltaX = 0;
        scene.setPointerCapture(e.pointerId);
        scene.style.cursor = 'grabbing';
    });

    scene.addEventListener('pointermove', e => {
        if (!isDragging) return;
        const dx = e.clientX - lastX;
        dragDeltaX = e.clientX - startX;
        lastX = e.clientX;
        targetX -= dx * 1.4;
    });

    scene.addEventListener('pointerup', () => {
        isDragging = false;
        isPaused = isHovered;
        scene.style.cursor = 'grab';
    });

    // --- Touch ---
    let touchStartX = 0;
    scene.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        isPaused = true;
        dragDeltaX = 0;
    }, { passive: true });

    scene.addEventListener('touchmove', e => {
        const dx = touchStartX - e.touches[0].clientX;
        dragDeltaX = dx;
        targetX += dx * 0.8;
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    scene.addEventListener('touchend', () => {
        isPaused = false;
    });

    // --- Wheel ---
    scene.addEventListener('wheel', e => {
        e.preventDefault();
        targetX += e.deltaY * 0.8;
        isPaused = true;
        clearTimeout(scene._wheelTimer);
        scene._wheelTimer = setTimeout(() => { isPaused = false; }, 1200);
    }, { passive: false });

    // --- Lightbox ---
    function openLightbox(idx) {
        lbIndex = idx;
        lbImg.src = cards[idx].querySelector('img').src;
        lb.classList.add('open');
        // iOS Safari fix: don't hide body overflow, use position fixed instead
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        isPaused = true;
    }

    function closeLightbox() {
        lb.classList.remove('open');
        // Restore scroll position after removing fixed positioning
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        isPaused = false;
    }

    function lightboxNav(dir) {
        lbIndex = ((lbIndex + dir) + cards.length) % cards.length;
        lbImg.style.opacity = '0';
        setTimeout(() => {
            lbImg.src = cards[lbIndex].querySelector('img').src;
            lbImg.style.opacity = '1';
        }, 150);
    }

    lbImg.style.transition = 'opacity 0.15s ease';
    lbClose.addEventListener('click', closeLightbox);
    lb.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => lightboxNav(-1));
    lbNext.addEventListener('click', () => lightboxNav(1));

    document.addEventListener('keydown', e => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxNav(-1);
        if (e.key === 'ArrowRight') lightboxNav(1);
    });

    // --- Start ---
    requestAnimationFrame(tick);
}