Sala Koala – Web Oficial


Sala Koala es una sala de fiestas infantiles en Fuenlabrada (Madrid) diseñada para cumpleaños, eventos familiares, baby-showers, talleres y mucho más, con un espacio moderno y lleno de diversión.

✨ Contenido del repositorio

index.html – Página de inicio con presentación de servicios.

css/ – Hojas de estilo (incluyendo navbar.css, styles.css, etc.).

js/ – Scripts del sitio (por ejemplo, para interacción de calendario/reservas).

images/ – Imágenes, logotipo, iconos sociales, portada, galería.

docs/ – Documentación adicional (manual de uso, accesibilidad, SEO).

README.md – Este archivo.

🎯 Objetivo del Proyecto

La web de Sala Koala tiene como propósito:

Mostrar de forma clara y visual los servicios que ofrece: parque infantil, cama elástica, rocódromo, zona de juegos de mesa, zona de descanso, climatización, etc. 
salakoalafuenlabrada.es

Permitir a los usuarios consultar tarifas, disponibilidad y reservar (o solicitar información) de forma ágil. 
salakoalafuenlabrada.es

Tener una estructura optimizada para SEO, accesibilidad (uso de etiquetas semánticas, alt en imágenes, estructura lógica) y que sea responsiva (móvil, tablet, escritorio).

Brindar una experiencia visual agradable y coherente con la imagen de marca de Sala Koala: colores, tipografías, logotipo, interacciones.

🖋️ Stack Tecnológico

HTML5 para estructura semántica.

CSS3 para diseño, layout flex-box, media queries para responsive (seguimos estándares para móvil, tablet, escritorio).

JavaScript (vanilla) para funcionalidad mínima (por ejemplo, menú móvil, calendario/reservas) — opción de ampliación con frameworks según evolución.

Buenas prácticas SEO: meta etiquetas, encabezados apropiados (<h1> correcto), texto alternativo en imágenes, tiempos de carga optimizados.

Optimización de imágenes e iconos para que la web cargue rápido y sea usable en dispositivos móviles.

📐 Diseño Responsivo

Se han considerado los siguientes puntos de corte (“breakpoints”) para asegurar buen comportamiento en distintos dispositivos:

Móvil (≤ 767px) – diseño optimizado, menú tipo “hamburguesa” si aplica.

Tablet (768px–1024px) – navegación cómoda, elementos suficientemente espaciados.

Escritorio (≥ 1025px) – diseño completo con logo a la izquierda, menú a la derecha, iconos sociales visibles.
Ejemplo de media query para tablet usada en el proyecto:

@media (min-width: 768px) and (max-width: 1024px) {
  /* Ajustes para tablet: espacio entre elementos, tamaños moderados, etc. */
}

📌 Ejemplo de Navegación (Navbar)

El menú principal (.navbar) sigue estas reglas de diseño para mantener la coherencia visual y buena usabilidad:

Fondo: #a3c1a8.

Posición: sticky en la parte superior (top: 0) y box-shadow ligero.

Flex layout con contenedor que separa el logo (izquierda) y el menú (derecha).

Logo con altura de 50 px, bordes redondeados, efecto hover.

Menú: lista horizontal con gap, efecto de subrayado en hover (::after que escala).

Iconos sociales: tamaño pequeño, efecto hover de escala.
Estos detalles aseguran que los enlaces estén claros, la navegación sea accesible y el logo destaque sin saturar visualmente.

✅ Mejores Prácticas Aplicadas

Uso de un único <h1> en la página principal que incluye palabras clave relevantes: “Sala Koala – Fiestas infantiles y cumpleaños en Fuenlabrada”.

Texto claramente accesible para buscadores y usuarios, evitando esconder títulos dentro de imágenes sin texto alternativo.

Espaciado adecuado entre logo, menú y contenidos para una experiencia visual armónica en tablet y escritorio.

Respuesta adaptativa para distintos tamaños de pantalla, asegurando legibilidad y usabilidad en móvil, tablet y escritorio.

Menú claro, enlaces bien espaciados, efectos sutiles que mejoran la interacción, manteniendo performance.

🔧 Cómo instalar / desplegar

Clona el repositorio:

git clone https://github.com/tuusuario/sala-koala-web.git


Navega al directorio:

cd sala-koala-web


Abre index.html en tu navegador o sirve el proyecto mediante un servidor local (por ejemplo con live-server o similar) para comprobar la funcionalidad de menús interactivos.

Haz las modificaciones que necesites (contenidos, imágenes, texto) y sube los cambios al repositorio.

📄 Licencia

Este proyecto se distribuye bajo la licencia MIT License – consulta el archivo LICENSE para más información. Puede ser utilizado como plantilla o punto de partida para webs similares de salones de eventos, salas de fiesta infantiles, etc., siempre que se respeten créditos al autor.

🔮 Futuras Mejora

Implementar menú “hamburguesa” y drawer para móviles.

Agregar integración real de calendario/reserva con backend (por ejemplo: Firebase, Node.js + Express).

Optimización de imágenes responsivas (srcset) y lazy-loading.

Añadir tests de accesibilidad (WCAG) y performance (Lighthouse).

Multilenguaje (ES / EN) para ampliar público internacional.

Mejora de SEO local (Google My Business, Schema.org para eventos).

👤 Autor

Tu nombre – Cristian Ortega
 · GitHub: @Cristianortegaa

¡Gracias por echar un vistazo al proyecto de Sala Koala! 🎉
