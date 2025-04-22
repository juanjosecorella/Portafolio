# Portafolio Juan José Corella 
Este es un sitio estático hecho solamente con html, css y vanilla javacscript.

El sitio pretende informar al lector sobre las habilidades, destrezas y educación del estudiante.

## Archivos
El código se separa en 3 archivos:

- `index.html`
    - Contiene la estructura y contenido del html.
- `styles.css`
    - Provee los estilos de la página.
    - Define los estilos para el modo oscuro y claro de la página.
    - Define los breakpoints para que la página sea responsiva a los dispositivos móviles.
- `script.js`
    - Añade interactividad a la página programáticamente, cumpliendo 3 principales funciones:
        - Toggle para el dark/light mode, el cuál togglea clase de css `.dark-mode` en el componente `body` del documento — además de guardar en `localStorage` la preferencia del usuario.
        - Toggle para mostrar y ocultar el contenido de los elementos `.info-section`, los cuáles han de tener un `.info-section-toggle-button` en el documento.
        - Mostrar el año actual en el footer del página (e.g. "© 2025 Juan José Corella Martínez. Todos los derechos reservados.") y hacer que este se actualice dinámicamente con el año.

Aparte de esto, también está incluído un folder `/images` el cúal incluye las imágenes utilizadas en el documento de html y un folder `/files` el cuál incluye archivos los cuáles pueden ser abiertos por el programa.

## GitHub

El repositorio del proyecto se encuentra en https://github.com/juanjosecorella/Portafolio y todos sus archivos e historial de cambios se encuentran ahí.

## Deployment

Se encuentra el deployment del sitio actualmente en la página https://portafolio-juan-jose-corella.netlify.app/