// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const body = document.body;

// Check localStorage for dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if it was enabled
if (isDarkMode) {
    body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️'; // Sun symbol for dark mode
} else {
    toggleIcon.textContent = '🌙'; // Moon symbol for light mode
}

// Toggle dark mode and save preference to localStorage
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkModeNow = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeNow); // Save preference

    // Update the icon
    toggleIcon.textContent = isDarkModeNow ? '☀️' : '🌙';
});

// Secciones de informacion
const infoSections = document.getElementsByClassName('info-section');
// Cada sección tiene su propio botón que controla el añadir y remover la clase "show"
for (let section of infoSections) {
    const toggleButton = section.querySelector('.info-section-toggle-button');
    toggleButton.addEventListener('click', () => {
        section.classList.toggle('show');
        
        if (section.classList.contains('show')) {
            toggleButton.textContent = "Ocultar";
        } else {
            toggleButton.textContent = "Mostrar";
        }
    });

}

// Dynamic Year in Footer
const currentYear = document.getElementById('current-year');
currentYear.textContent = new Date().getFullYear();

