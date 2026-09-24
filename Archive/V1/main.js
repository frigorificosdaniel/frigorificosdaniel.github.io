/**
 * main.js - Frigorificos Daniel
 * Core logic for theme switching, language translations, and navigation.
 */

const translations = {
  ro: {
    nav: {
      home: "Acasă",
      routes: "Rute",
      transport: "Transport",
      logistics: "Logistică",
      services: "Servicii",
      gallery: "Galerie",
      contact: "Contact"
    },
    hero: {
      title: "LOGISTICĂ FĂRĂ FRONTIERE",
      subtitle: "Experți în transport frigorific de înaltă calitate. Conectăm Spania și România prin rute strategice în întreaga Europă.",
      ifs_text: "Standardul IFS Logistics evaluează calitatea și siguranța activităților logistice (transport, depozitare, distribuție etc.) și ajută companiile să răspundă cerințelor de transparență și trasabilitate ale clienților. Se aplică tuturor tipurilor de transport și produse, iar auditurile sunt realizate de organisme acreditate, fiind recunoscut de organizații oficiale și private.",
      cta_primary: "Solicită Ofertă",
      cta_secondary: "Serviciile Noastre"
    },
    routes: {
      title: "Rutele Noastre",
      route1_title: "LOGISTICĂ SPANIA-ROMÂNIA",
      route1_text: "Ruta noastră principală conectează eficient centrele logistice cheie din Spania cu România, garantând livrări punctuale și sigure în ambele direcții.",
      route2_title: "REȚEAUA EUROPEANĂ CENTRALĂ",
      route2_text: "Ne extindem acoperirea către piețe strategice precum Germania și Franța, oferind soluții de transport frigorific de înaltă calitate. Transport intern în Spania și transport intern în România.",
      route3_title: "CORIDORUL MEDITERANEAN",
      route3_text: "Servicii specializate către Italia și sudul Europei, optimizând timpii de tranzit și menținând integritatea lanțului frigorific la fiecare kilometru al călătoriei."
    },
    transport: {
      title: "Servicii de Transport",
      card1_title: "Transport Frigorific",
      card1_text: "Specialiști în logistică cu temperatură controlată pentru produse perisabile, garantând prospețimea de la origine până la destinație.",
      card2_title: "Rute Internaționale",
      card2_text: "Conectăm Spania și România prin servicii regulate, extinzându-ne rețeaua în Franța, Germania și Italia cu eficiență maximă.",
      card3_title: "Gestiune Logistică",
      card3_text: "Suport tehnic și monitorizare profesională pentru a asigura că fiecare încărcătură respectă standardele tehnice și termenele de livrare.",
      service_title: "Service auto specializat",
      service_text: "Service auto specializat pentru camioane, semiremorci și autoturisme. Efectuăm reparații, mentenanță și verificări tehnice pentru întreaga ta flotă, dar și pentru mașini personale. Suntem autorizați pentru reparații, revizii și întreținere pentru agregate frigorifice instalate pe vehicule rutiere.",
      carrier_text: "Partener autorizat Carrier"
    },
    logistics: {
      title: "EXCELENȚĂ IN LOGISTICĂ FRIGORIFICĂ INTERNAȚIONALĂ",
      text: "La Frigoríficos Daniel, conectăm Spania și România cu restul Europei printr-o flotă modernă și specializată. Misiunea noastră este să garantăm că produsele dumneavoastră ajung la destinație în condiții optime, menținând lanțul frigorific și respectând cele mai înalte standarde de calitate din sectorul logistic internațional."
    },
    services_page: {
      title: "Nu ezitați să ne contactați dacă aveți nevoie de următoarele servicii:",
      subtitle: "Flota noastră de transport la temperatură controlată operează pe rutele cheie între Spania, România și întreaga Europă.",
      item1_title: "Închirieri semiremorci frigorifice",
      item1_text: "Soluții flexibile de închiriere pentru transporturi sezoniere sau nevoi logistice punctuale.",
      item2_title: "Casă de expediție",
      item2_text: "Compania noastră acționează ca un intermediar între clienții care au nevoie să transporte marfă (expeditori) și firmele care dețin vehiculele de transport (transportatori).",
      item3_title: "Transport Mărfuri",
      item3_text: "Oferim servicii profesionale de transport de mărfuri generale, cu flota proprie care conține peste 30 de semiremorci dotate cu termodiagramă și urmărire GPS prin platforma WebEye.",
      item4_title: "Certificare FRC",
      item4_text: "Oferim servicii de testare și eliberare certificat FRC, valabil timp de 3 ani."
    },
    contact: {
      title: "Contactați-ne",
      subtitle: "Aveți nevoie de o ofertă personalizată pentru transportul dumneavoastră internațional? Echipa noastră de logistică este disponibilă pentru a vă răspunde la întrebări și pentru a vă coordona expedierile în toată Europa.",
      address: "Adresă: Calea Dejului 1, Viișoara, Bistrița-Năsăud",
      phone: "Telefon: +40 740 559 553",
      email: "Email: contact@frigorificosdaniel.com",
      form_title: "Solicită o cotație pentru transport sau o programare service",
      fname: "Prenume *",
      lname: "Nume *",
      email_label: "Adresa de email *",
      phone_label: "Număr de telefon *",
      message: "Mesaj *",
      message_placeholder: "Descrieți transportul sau detaliile pentru programarea din service.",
      captcha_label: "Securitate: Cât este ",
      captcha_error: "Răspuns incorect la verificarea de securitate.",
      submit: "Trimite"
    },
    gallery_page: {
      title: "Galeria Noastră",
      subtitle: "O privire asupra flotei noastre și a facilităților de service."
    },
    success: {
      title: "Mulțumim!",
      message: "Mesajul dumneavoastră a fost trimis cu succes. Vă vom contacta în cel mai scurt timp posibil.",
      return_home: "Înapoi la Acasă"
    }
  },
  en: {
    nav: {
      home: "Home",
      routes: "Routes",
      transport: "Transport",
      logistics: "Logistics",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      title: "LOGISTICS WITHOUT BORDERS",
      subtitle: "Experts in high-quality refrigerated transport. We connect Spain and Romania through strategic routes across Europe.",
      ifs_text: "The IFS Logistics standard evaluates the quality and safety of logistics activities (transport, storage, distribution, etc.) and helps companies meet customer requirements for transparency and traceability. It applies to all types of transport and products, and audits are conducted by accredited bodies, being recognized by official and private organizations.",
      cta_primary: "Request Quote",
      cta_secondary: "Our Services"
    },
    routes: {
      title: "Our Routes",
      route1_title: "SPAIN-ROMANIA LOGISTICS",
      route1_text: "Our main route efficiently connects key logistics centers in Spain with Romania, guaranteeing punctual and safe deliveries in both directions.",
      route2_title: "CENTRAL EUROPEAN NETWORK",
      route2_text: "We extend our coverage to strategic markets such as Germany and France, offering high-quality refrigerated transport solutions. Internal transport in Spain and internal transport in Romania.",
      route3_title: "MEDITERRANEAN CORRIDOR",
      route3_text: "Specialized services to Italy and southern Europe, optimizing transit times and maintaining the integrity of the cold chain at every kilometer of the journey."
    },
    transport: {
      title: "Transport Services",
      card1_title: "Refrigerated Transport",
      card1_text: "Specialists in temperature-controlled logistics for perishable products, guaranteeing freshness from origin to destination.",
      card2_title: "International Routes",
      card2_text: "We connect Spain and Romania through regular services, expanding our network in France, Germany and Italy with maximum efficiency.",
      card3_title: "Logistics Management",
      card3_text: "Technical support and professional monitoring to ensure that each load meets technical standards and delivery deadlines.",
      service_title: "Specialized auto service",
      service_text: "Specialized auto service for trucks, trailers and cars. We perform repairs, maintenance and technical checks for your entire fleet, but also for personal cars. We are authorized for repairs, overhauls and maintenance for refrigeration units installed on road vehicles.",
      carrier_text: "Authorized Carrier Partner"
    },
    logistics: {
      title: "EXCELLENCE IN INTERNATIONAL REFRIGERATED LOGISTICS",
      text: "At Frigoríficos Daniel, we connect Spain and Romania with the rest of Europe through a modern and specialized fleet. Our mission is to guarantee that your products reach their destination in optimal conditions, maintaining the cold chain and respecting the highest quality standards in the international logistics sector."
    },
    services_page: {
      title: "Do not hesitate to contact us if you need the following services:",
      subtitle: "Our temperature-controlled transport fleet operates on key routes between Spain, Romania and all of Europe.",
      item1_title: "Refrigerated semi-trailer rentals",
      item1_text: "Flexible rental solutions for seasonal transport or specific logistics needs.",
      item2_title: "Forwarding house",
      item2_text: "Our company acts as an intermediary between clients who need to transport cargo (shippers) and the companies that own the transport vehicles (carriers).",
      item3_title: "Goods Transport",
      item3_text: "We offer professional general goods transport services, with our own fleet containing over 30 semi-trailers equipped with thermodiagram and GPS tracking through the WebEye platform.",
      item4_title: "FRC Certification",
      item4_text: "We offer FRC testing and certificate issuance services, valid for 3 years."
    },
    contact: {
      title: "Contact Us",
      subtitle: "Need a custom quote for your international transport? Our logistics team is available to answer your questions and coordinate your shipments across Europe.",
      address: "Address: Calea Dejului 1, Viisoara, Bistrita-Nasaud",
      phone: "Phone: +40 740 559 553",
      email: "Email: contact@frigorificosdaniel.com",
      form_title: "Request a transport quote or service appointment",
      fname: "First name *",
      lname: "Last name *",
      email_label: "Email address *",
      phone_label: "Phone number *",
      message: "Message *",
      message_placeholder: "Describe your transport or service appointment details.",
      captcha_label: "Security: What is ",
      captcha_error: "Incorrect security answer.",
      submit: "Submit"
    },
    gallery_page: {
      title: "Our Gallery",
      subtitle: "A look at our fleet and service facilities."
    },
    success: {
      title: "Thank you!",
      message: "Your message has been sent successfully. We will get back to you shortly.",
      return_home: "Return to Home"
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'ro';
let currentTheme = localStorage.getItem('theme') || 'light';
let captchaAnswer = 0;

/**
 * Initialize Theme
 */
function initTheme() {
  if (currentTheme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * Toggle Theme
 */
function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

/**
 * Update UI Text based on language
 */
function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let translation = translations[lang];
    
    keys.forEach(k => {
      translation = translation ? translation[k] : null;
    });
    
    if (translation) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
  
  // Update lang attribute
  document.documentElement.lang = lang;
  
  // Update UI indicators if any
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('font-bold', 'underline');
    } else {
      btn.classList.remove('font-bold', 'underline');
    }
  });

  // Refresh CAPTCHA if on contact page
  if (document.getElementById('captcha-question')) {
    initCaptcha();
  }
}

/**
 * Toggle Mobile Menu
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

/**
 * Initialize CAPTCHA
 */
function initCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  captchaAnswer = num1 + num2;
  
  const questionEl = document.getElementById('captcha-question');
  if (questionEl) {
    const label = translations[currentLang].contact.captcha_label;
    questionEl.textContent = `${label} ${num1} + ${num2}?`;
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateLanguage(currentLang);
  
  // Theme Toggle listener
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Language Switcher listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });
  
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Contact Form Logic
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    // CAPTCHA is already initialized by updateLanguage(currentLang) called above
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Stop native submission to handle it via Fetch

      const captchaInput = document.getElementById('captcha-input');
      const userAnswer = parseInt(captchaInput.value);

      // 1. Validate CAPTCHA
      if (userAnswer !== captchaAnswer) {
        alert(translations[currentLang].contact.captcha_error);
        captchaInput.focus();
        return;
      }

      // 2. Prepare Data
      const formData = new FormData(contactForm);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      // 3. UI Feedback (Disable button)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'ro' ? 'Se trimite...' : 'Sending...';

      // 4. Submit via Fetch
      fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: json
      })
      .then(async (response) => {
          if (response.status === 200) {
              // SUCCESS: Manual redirect to our success page
              window.location.href = '../success/';
          } else {
              // ERROR from Web3Forms
              const result = await response.json();
              alert(result.message || "Error!");
              submitBtn.disabled = false;
              submitBtn.textContent = originalText;
          }
      })
      .catch(error => {
          // NETWORK ERROR
          console.error(error);
          alert("Network error. Please try again.");
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
      });
    });
  }
});
