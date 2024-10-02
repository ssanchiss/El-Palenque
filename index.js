function toggleCard() {
    var content = document.getElementById("cardContent");
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Cierra la tarjeta
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Abre la tarjeta
    }
  }
  

  /*cards de veterinarios*/
  function togglePerson1() {
    var content = document.getElementById("personContent1");
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  }

  function togglePerson2() {
    var content = document.getElementById("personContent2");
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  }




