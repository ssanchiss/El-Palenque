  /*CARDS SERVICXIOS*/
  function toggleCard(cardId) {
    var content = document.getElementById(cardId);
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Cierra la tarjeta
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Abre la tarjeta
    }
  }
  