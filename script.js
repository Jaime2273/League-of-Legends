// Interactividad del botón y del diálogo
const infoButton = document.getElementById('infoButton');
const infoDialog = document.getElementById('infoDialog');
const closeButton = document.getElementById('closeButton');

// Mostrar el diálogo cuando el botón es clicado
infoButton.addEventListener('click', function() {
    infoDialog.showModal();
});

// Cerrar el diálogo cuando se hace clic en el botón de cerrar
closeButton.addEventListener('click', function() {
    infoDialog.close();
});
