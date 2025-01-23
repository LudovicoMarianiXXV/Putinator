function goHome() {
    window.location.href = "index.html";
}

function goHome2() {
  window.location.href = "../index.html";
}
  
function openGame() {
    window.location.href = "game.html";
}
  
function openCharacters() {
    window.open("pag/characters.html", "_blank"); 
}
  
  // Mostra la scheda laterale al caricamento della pagina
window.addEventListener("load", () => {
    const sideCard = document.querySelector(".side-card");
    setTimeout(() => {
      sideCard.classList.add("open");
    }, 500); // Ritardo di 500ms per un effetto visivo piacevole
});