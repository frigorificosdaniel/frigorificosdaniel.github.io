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
      item4_text: "Oferim servicii de testare și eliberare certificat FRC, valabil timp de 3 ani.",
      item4_link: "Detalii certificare FRC aici →",
      item5_title: "Service Autorizat Carrier Transicold",
      item5_text: "Centru autorizat în Bistrița pentru mentenanță, diagnoză computerizată și reparații echipamente frigorifice auto Carrier Transicold. Asigurăm piese originale și intervenții rapide pentru distribuție urbană și transport internațional.",
      item5_link: "Descoperă gama completă Carrier →"
    },
    carrier_page: {
      title: "Service Autorizat Carrier Transicold – Bistrița",
      subtitle: "Soluții profesionale de refrigerare auto, mentenanță preventivă și reparații cu piese originale.",
      menu1: "Sisteme Direct Drive",
      menu2: "Agregate Camion Diesel",
      menu3: "Echipamente Semiremorcă",
      menu4: "Înregistratoare Temperatură",
      s1_title: "Sisteme Frigorifice cu Acționare Directă (Gama Utilitare)",
      s1_text: "Soluții de răcire eficiente pentru vehicule comerciale ușoare și vanuri de distribuție. Compresorul este acționat direct de motorul autovehiculului sau de sistemul electric.",
      s1_m1: "Agregat 100% electric pentru distribuție urbană fără emisii suplimentare.",
      s1_m2_name: "Seria Viento (200 / 300 / 350)",
      s1_m2: "Echipamente ultra-ușoare, fiabile și optimizate pentru livrări zilnice.",
      s1_m3_name: "Seria Xarios (150 / 200 / 300 / 350 / 500 / 600)",
      s1_m3: "Gamă versatilă cu control electronic precis al temperaturii pentru mărfuri proaspete și congelate.",
      s2_title: "Agregate Frigorifice Autonome pentru Camioane (Gama Monobloc Diesel)",
      s2_text: "Echipamente monobloc independente prevăzute cu motor diesel propriu, ideale pentru camioane de tonaj mediu și mare.",
      s2_m1_name: "Seria Supra (450 / 550 / 750 / 850 / 950)",
      s2_m1: "Capacitate mare de răcire, timp scurt de atingere a temperaturii setate și opțiuni multi-temperatură pentru compartimente separate.",
      s3_title: "Echipamente de Mare Capacitate pentru Semiremorci",
      s3_text: "Agregate de înaltă performanță proiectate pentru transportul internațional de lungă durată și menținerea strictă a lanțului frigorific.",
      s3_m1_name: "Tehnologia Vector (Vector 1550 / 1850 / 1950)",
      s3_m1: "Tehnologie electrică hibridă E-Drive pentru eficiență energetică maximă, emisii reduse și control termic de precizie (+/- 0.3°C).",
      s3_m2_name: "Seria Maxima (1300)",
      s3_m2: "Soluție mecanică robustă, recunoscută pentru fiabilitate și costuri reduse de întreținere.",
      s4_title: "Dispozitive de Monitorizare & Înregistrare Temperatură",
      s4_text: "Echipamente certificate EN 12830 pentru monitorizarea continuă a temperaturii și respectarea normelor de siguranță alimentară.",
      s4_m1: "Înregistrator compact cu imprimantă termică integrată pentru eliberarea bonurilor la livrare.",
      s4_m2: "Modul avansat cu senzori multipli și integrare cu sisteme telematică/GPS.",
      gallery_title: "Galerie Carrier Transicold",
      alt1: "Atelier service Carrier Transicold - autoutilitară frigorifică",
      alt2: "Camion frigorific în fața service-ului autorizat Carrier Transicold",
      alt3: "Service autorizat Carrier Transicold Bistrița",
      cta_title: "Programează-te la Service Autorizat Carrier Transicold în Bistrița",
      cta_desc: "Suntem pregătiți să menținem flota ta frigorifică în parametri optimi, cu piese originale și intervenții rapide. Contactează echipa Frigorificos Daniel SRL:"
    },
    frc_page: {
      title: "Prelungire și Reînnoire Certificat FRC / ATP în Bistrița – Frigorificos Daniel",
      subtitle: "Ai nevoie de prelungire pentru certificatul FRC sau retestare ATP pentru vehiculul tău frigorific? La Frigorificos Daniel SRL din Viișoara, Bistrița-Năsăud, oferim servicii profesionale de testare și eliberare/reînnoire certificat FRC, valabil timp de 3 ani.",
      what_title: "Ce este certificatul FRC / ATP și de ce ai nevoie de el?",
      what_desc1: "Certificatul FRC (Frigorific Renforcé Classé) face parte din acordul internațional ATP și atestă că suprastructura frigorifică (duba, semiremorca sau caroseria izotermă) îndeplinește standardele de izolare termică și capacitate de răcire de la +20°C la -20°C.",
      what_desc2: "Deținerea unui certificat FRC valabil este obligatorie pentru transportul de mărfuri perisabile (congelate, refrigerate, carne, lactate, produse farmaceutice) atât în transportul internațional, cât și pe teritoriul României.",
      services_title: "Servicii oferite de Frigorificos Daniel SRL",
      srv1_name: "Testare FRC / ATP:",
      srv1_desc: "Verificarea tehnică a capacității de izolare și a sistemului de răcire.",
      srv2_name: "Prelungire Certificat FRC:",
      srv2_desc: "Reînnoirea certificatului existent pentru o perioadă suplimentară de 3 ani.",
      srv3_name: "Consultanță tehnică:",
      srv3_desc: "Verificarea funcționării optime a termodiagramei și instalației frigorifice.",
      why_title: "De ce să alegi centrul nostru din Viișoara, Bistrița?",
      why1_name: "Experiență în domeniul frigorific:",
      why1_desc: "Cunoaștem cerințele stricte din industria transporturilor refrigerate.",
      why2_name: "Locație accesibilă:",
      why2_desc: "Ne găsești rapid în Bistrița (Cartier Viișoara, Calea Dejului nr. 1).",
      why3_name: "Rapiditate și eficiență:",
      why3_desc: "Reducem timpii de staționare ai flotei tale auto.",
      faq_title: "Întrebări frecvente despre Reînnoirea FRC (FAQ)",
      faq1_q: "Cât timp este valabilă prelungirea certificatului FRC?",
      faq1_a: "Prelungirea obținută în urma retestării tehnice este valabilă timp de 3 ani.",
      faq2_q: "Când trebuie făcută retestarea FRC?",
      faq2_a: "Se recomandă programarea retestării înainte de expirarea certificatului inițial (de regulă eliberat pe 6 ani de producător), pentru a evita amenzile la transportul internațional și intern.",
      cta_title: "Programează-te pentru Testare / Prelungire FRC în Bistrița",
      cta_desc: "Suntem pregătiți să îți ajutăm flota să rămână conformă normelor ATP. Contactează echipa Frigorificos Daniel SRL:",
      address_label: "Adresă: Calea Dejului nr. 1, Viișoara, jud. Bistrița-Năsăud",
      phone_label: "Telefon: ",
      web_label: "Site web: "
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
    },
    promo: {
      frc_badge: "Centru Autorizat Viișoara",
      frc_title: "Testare și Prelungire Certificat FRC / ATP în Bistrița",
      frc_desc: "Efectuăm retestări rapide și reînnoirea certificatului FRC pentru caroserii și semiremorci frigorifice. Eliberare certificat oficial valabil 3 ani.",
      frc_cta: "Detalii Prelungire FRC →",
      carrier_badge: "Service Autorizat Carrier Transicold",
      carrier_title: "Mentenanță și Reparații Agregate Carrier în Bistrița",
      carrier_desc: "Centru autorizat în Bistrița pentru mentenanță, diagnoză computerizată și reparații echipamente frigorifice auto Carrier Transicold. Asigurăm piese originale și intervenții rapide pentru distribuție urbană și transport internațional.",
      carrier_cta: "Descoperă gama completă Carrier →"
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
      item4_text: "We offer FRC testing and certificate issuance services, valid for 3 years.",
      item4_link: "Details for certificate issuance at this link here →",
      item5_title: "Authorized Carrier Transicold Service",
      item5_text: "Authorized center in Bistrița for maintenance, diagnostic testing, and repairs of Carrier Transicold transport refrigeration units. We provide original spare parts and fast service for urban distribution and long-haul transport.",
      item5_link: "Explore Carrier Range →"
    },
    carrier_page: {
      title: "Authorized Carrier Transicold Service – Bistrița",
      subtitle: "Professional transport refrigeration solutions, preventive maintenance, and repairs with genuine spare parts.",
      menu1: "Direct Drive Systems",
      menu2: "Diesel Truck Units",
      menu3: "Trailer Equipment",
      menu4: "Temperature Recorders",
      s1_title: "Direct Drive Refrigeration Units (Utility Range)",
      s1_text: "Efficient cooling solutions designed for light commercial vehicles and delivery vans. Compressor driven directly by the vehicle engine or electrical system.",
      s1_m1: "100% electric unit designed for zero-emission urban distribution.",
      s1_m2_name: "Viento Series (200 / 300 / 350)",
      s1_m2: "Ultra-lightweight and reliable equipment tailored for daily deliveries.",
      s1_m3_name: "Xarios Series (150 / 200 / 300 / 350 / 500 / 600)",
      s1_m3: "Versatile range featuring precise electronic temperature management for fresh and frozen goods.",
      s2_title: "Independent Truck Units (Monoblock Diesel Range)",
      s2_text: "Autonomous monoblock systems equipped with their own diesel engine, built for medium and heavy-duty trucks.",
      s2_m1_name: "Supra Series (450 / 550 / 750 / 850 / 950)",
      s2_m1: "High cooling capacity, fast pull-down performance, and multi-temperature options for split compartments.",
      s3_title: "Heavy-Duty Trailer Refrigeration Units",
      s3_text: "High-output refrigeration systems built for long-distance international transport and strict cold chain preservation.",
      s3_m1_name: "Vector Technology (Vector 1550 / 1850 / 1950)",
      s3_m1: "E-Drive hybrid technology offering maximum energy efficiency, reduced emissions, and precise thermal control (+/- 0.3°C).",
      s3_m2_name: "Maxima Series (1300)",
      s3_m2: "Robust mechanical unit known for high reliability and low operational costs.",
      s4_title: "Temperature Recording & Monitoring Devices",
      s4_text: "EN 12830 certified devices for continuous thermal tracking and compliance with food safety regulations.",
      s4_m1: "Compact recorder with integrated thermal printer for immediate receipt printing upon delivery.",
      s4_m2: "Advanced logger featuring multi-sensor input and telematics/GPS integration support.",
      gallery_title: "Carrier Transicold Gallery",
      alt1: "Carrier Transicold service workshop - refrigerated van",
      alt2: "Refrigerated truck in front of the authorized Carrier Transicold service",
      alt3: "Authorized Carrier Transicold service in Bistrița",
      cta_title: "Book Your Authorized Carrier Transicold Service in Bistrița",
      cta_desc: "We are ready to keep your refrigerated fleet in top condition, with genuine parts and fast service. Contact the Frigorificos Daniel SRL team:"
    },
    frc_page: {
      title: "FRC / ATP Certificate Renewal and Extension in Bistrița – Frigorificos Daniel",
      subtitle: "Do you need an extension for your FRC certificate or ATP re-testing for your refrigerated vehicle? At Frigorificos Daniel SRL in Viișoara, Bistrița-Năsăud, we offer professional testing and FRC certificate issuance/renewal services, valid for 3 years.",
      what_title: "What is the FRC / ATP certificate and why do you need it?",
      what_desc1: "The FRC certificate (Frigorific Renforcé Classé) is part of the international ATP agreement and certifies that the refrigerated body (van, semi-trailer, or insulated container) meets thermal insulation and cooling capacity standards from +20°C down to -20°C.",
      what_desc2: "Holding a valid FRC certificate is mandatory for transporting perishable goods (frozen, chilled, meat, dairy, pharmaceuticals) both internationally and domestically within Romania.",
      services_title: "Services Provided by Frigorificos Daniel SRL",
      srv1_name: "FRC / ATP Testing:",
      srv1_desc: "Technical verification of insulation efficiency and cooling unit performance.",
      srv2_name: "FRC Certificate Extension:",
      srv2_desc: "Renewal of the existing certificate for an additional 3-year period.",
      srv3_name: "Technical Consultation:",
      srv3_desc: "Complete operational inspection of the temperature recorder (thermograph) and refrigeration system.",
      why_title: "Why Choose Our Service Center in Viișoara, Bistrița?",
      why1_name: "Refrigeration Expertise:",
      why1_desc: "We understand the strict requirements of the temperature-controlled transport industry.",
      why2_name: "Accessible Location:",
      why2_desc: "Easy to reach in Bistrița (Cartier Viișoara, Calea Dejului No. 1).",
      why3_name: "Fast and Efficient:",
      why3_desc: "Minimizing downtime for your commercial vehicle fleet.",
      faq_title: "Frequently Asked Questions About FRC Renewal (FAQ)",
      faq1_q: "How long is the FRC certificate extension valid?",
      faq1_a: "The extension granted following successful technical re-testing is valid for 3 years.",
      faq2_q: "When should FRC re-testing be scheduled?",
      faq2_a: "Re-testing should be scheduled prior to the expiration of the initial certificate (typically issued for 6 years by the manufacturer) to prevent compliance penalties during domestic and international transit.",
      cta_title: "Schedule an FRC Testing / Extension in Bistrița",
      cta_desc: "We are ready to help your fleet remain fully ATP compliant. Contact the Frigorificos Daniel SRL team:",
      address_label: "Address: Calea Dejului No. 1, Viișoara, Bistrița-Năsăud County",
      phone_label: "Phone: ",
      web_label: "Website: "
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
    },
    promo: {
      frc_badge: "Authorized Center Viișoara",
      frc_title: "FRC / ATP Certificate Testing and Renewal in Bistrița",
      frc_desc: "We perform fast re-testing and FRC certificate renewal for refrigerated bodies and semi-trailers. Official certificate issued, valid for 3 years.",
      frc_cta: "FRC Renewal Details →",
      carrier_badge: "Authorized Carrier Transicold Service",
      carrier_title: "Carrier Unit Maintenance and Repairs in Bistrița",
      carrier_desc: "Authorized center in Bistrița for maintenance, computer diagnostics and repairs of Carrier Transicold vehicle refrigeration units. We provide original parts and fast interventions for urban distribution and international transport.",
      carrier_cta: "Discover the Full Carrier Range →"
    }
  }
};

/**
 * Homepage promo carousel: auto-rotate every 3s, cross-fade + slight slide,
 * swipe (Pointer Events), hover-pause for real mice only.
 */
function initPromoCarousel() {
  const root = document.getElementById('promo-carousel');
  if (!root) return;
  const slides = root.querySelectorAll('[data-slide]');
  const dots = root.querySelectorAll('[data-dot]');
  const INTERVAL = 3000;
  const SWIPE_THRESHOLD = 40;
  let index = 0;
  let timer = null;
  let hovering = false;
  let startX = 0, startY = 0, tracking = false, swiped = false;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      const active = n === index;
      s.classList.toggle('opacity-100', active);
      s.classList.toggle('opacity-0', !active);
      s.classList.toggle('translate-x-0', active);
      s.classList.toggle('-translate-x-6', !active && n < index);
      s.classList.toggle('translate-x-6', !active && n > index);
      s.classList.toggle('pointer-events-none', !active);
      s.setAttribute('aria-hidden', active ? 'false' : 'true');
      s.querySelectorAll('a').forEach(a => { a.tabIndex = active ? 0 : -1; });
    });
    dots.forEach((d, n) => {
      d.classList.toggle('bg-[var(--accent-blue)]', n === index);
      d.classList.toggle('w-8', n === index);
      d.classList.toggle('bg-[var(--border-color)]', n !== index);
      d.classList.toggle('w-4', n !== index);
      d.setAttribute('aria-current', n === index ? 'true' : 'false');
    });
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function start() {
    stop();
    if (hovering) return;
    timer = setInterval(() => show(index + 1), INTERVAL);
  }

  dots.forEach((d, n) => d.addEventListener('click', () => { show(n); start(); }));

  // Hover pause: mouse only (touch emulates mouseenter and never fires mouseleave)
  root.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hovering = true; stop(); } });
  root.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { hovering = false; start(); } });

  // Swipe
  root.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    tracking = true; swiped = false;
    startX = e.clientX; startY = e.clientY;
    if (e.pointerType !== 'mouse') stop();
  });
  root.addEventListener('pointerup', e => {
    if (!tracking) return;
    tracking = false;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      swiped = true;
      show(index + (dx < 0 ? 1 : -1));
    }
    if (e.pointerType !== 'mouse') start();
  });
  root.addEventListener('pointercancel', () => { tracking = false; start(); });
  // Don't follow a link when the gesture was a swipe
  root.addEventListener('click', e => {
    if (swiped) { e.preventDefault(); e.stopPropagation(); swiped = false; }
  }, true);

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });

  show(0);
  start();
}
document.addEventListener('DOMContentLoaded', initPromoCarousel);

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
  
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const t = el.getAttribute('data-i18n-alt').split('.').reduce((o, k) => (o ? o[k] : null), translations[lang]);
    if (t) el.alt = t;
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


/**
 * GA4 custom event tracking (delegated; no-op if gtag is blocked)
 */
document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('a[href]');
  if (!a || typeof window.gtag !== 'function') return;
  const href = a.getAttribute('href') || '';
  if (href.startsWith('tel:')) {
    gtag('event', 'click_phone', { event_category: 'Contact' });
  } else if (href.includes('/frigo-carrier')) {
    gtag('event', 'view_carrier_services');
  } else if (href.includes('/certificat-FRC')) {
    gtag('event', 'view_frc_services');
  }
});
