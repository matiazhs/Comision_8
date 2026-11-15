const buscador = document.getElementById("buscador");
const cards = document.querySelectorAll(".card");

if (buscador) {
  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    cards.forEach((card) => {
      const contenido = card.textContent.toLowerCase();
      card.style.display = contenido.includes(texto) ? "" : "none";
    });
  });
}