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


window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});


// ======================
// CARRUSEL CALENDARIO
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".calendar-slide");
  const dotsContainer = document.querySelector(".calendar-dots");
  const prevBtn = document.querySelector(".calendar-prev");
  const nextBtn = document.querySelector(".calendar-next");
  const carouselContainer = document.querySelector('.calendar-carousel');

  if (!slides.length || !dotsContainer) return;

  let currentIndex = 0;

  // 1. Generar puntos dinámicamente según la cantidad de imágenes
  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  // 2. Función principal para mostrar slide
  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
      dots[i].classList.toggle("active", i === currentIndex);
    });
  }

  // 3. Event Listeners para flechas
  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

  // 4. Soporte táctil (Swipe) para móviles
  let touchStartX = 0;
  let touchEndX = 0;

  if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    carouselContainer.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, {passive: true});
  }

  function handleSwipe() {
    const threshold = 50; 
    if (touchEndX < touchStartX - threshold) showSlide(currentIndex + 1);
    if (touchEndX > touchStartX + threshold) showSlide(currentIndex - 1);
  }
});
