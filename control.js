// Función para alternar visibilidad
function toggleVisibility(id) {
    const element = document.getElementById(id);
    const button = event.target;

    const state = button.innerText === 'ON' ? 'OFF' : 'ON';
    button.innerText = state;
    button.classList.toggle('off', state === 'OFF');

    if (element) {
        element.style.display = state === 'OFF' ? 'none' : 'block';
    }

    saveVisibilityState(id, state === 'ON');
}

// Guardar el estado de visibilidad en localStorage
function saveVisibilityState(id, isVisible) {
    const visibilityData = JSON.parse(localStorage.getItem('visibilityData')) || {};
    visibilityData[id] = isVisible;
    localStorage.setItem('visibilityData', JSON.stringify(visibilityData));
}

// Cargar el estado de visibilidad al inicio
function loadVisibilityState() {
    const visibilityData = JSON.parse(localStorage.getItem('visibilityData')) || {};

    Object.keys(visibilityData).forEach((id) => {
        const element = document.getElementById(id);
        const isVisible = visibilityData[id];

        if (element) {
            element.style.display = isVisible ? 'block' : 'none';
        }

        const button = document.querySelector(`button[onclick="toggleVisibility('${id}')"]`);
        if (button) {
            button.innerText = isVisible ? 'ON' : 'OFF';
            button.classList.toggle('off', !isVisible);
        }
    });
}

// Llamar a la función para cargar estados al cargar la página
document.addEventListener('DOMContentLoaded', loadVisibilityState);
