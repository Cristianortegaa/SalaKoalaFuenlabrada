// ======================
// FULLCALENDAR RESERVAS
// ======================
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    dateClick: function (info) {
      const estado = prompt("Estado del día:\n1 = Libre\n2 = Ocupado medio día\n3 = Ocupado completo");

      let color = '';
      let title = '';
      let className = '';

      switch (estado) {
        case '1':
          color = '#cde3d1'; // verde
          title = 'Libre';
          className = 'libre';
          break;
        case '2':
          color = '#f5d9b0'; // naranja
          title = 'Ocupado medio día';
          className = 'media';
          break;
        case '3':
          color = '#f8bcbc'; // rojo
          title = 'Ocupado completo';
          className = 'ocupado';
          break;
        default:
          return;
      }

      calendar.addEvent({
        title: title,
        start: info.dateStr,
        allDay: true,
        backgroundColor: color,
        borderColor: color,
        className: className
      });
    }
  });

  calendar.render();
});

// ======================
// ANIMACIÓN AL CARGAR
// ======================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ======================
// ANIMACIONES SCROLL
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(".animado");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elementosAnimados.forEach(el => observer.observe(el));
});

// 🍔 MENÚ HAMBURGUESA
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('.menu a');

  // Toggle menú al hacer clic en el botón
  hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
  });

  // Cierra el menú al hacer clic en cualquier enlace
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      hamburgerBtn.classList.remove('open');
    });
  });
});




// ======================
// JSON-LD PARA SEO
// ======================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SalaKoala",
  "image": "https://tusitio.com/img/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. de Suiza 12",
    "addressLocality": "Fuenlabrada",
    "addressRegion": "Madrid",
    "postalCode": "28943",
    "addressCountry": "ES"
  },
  "telephone": "+34643522826",
  "url": "https://www.salakoala.com",
  "openingHours": "Mo-Fr 10:00-21:00, Sa-Su 10:00-21:00"
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(jsonLd);
document.head.appendChild(script);
