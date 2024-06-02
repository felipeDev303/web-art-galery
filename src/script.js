// Función para mostrar los detalles de una obra de arte en una modal
function showDetails(artist) {
  const modalId = `modal-${artist}`;
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}

// Función para cerrar la ventana de detalles
function closeModal(artist) {
  const modalId = `modal-${artist}`;
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.hide();
}

// Función para eliminar una imagen de la grilla
function deleteImage(event, button) {
  event.preventDefault();
  button.closest(".col-md-6").remove();
}
