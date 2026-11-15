const buscador = document.getElementById("buscador");
const cards = document.querySelectorAll(".card");

// Saca tildes: rio = río, cajon = cajón
function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

if (buscador) {
  buscador.addEventListener("input", () => {
    const texto = normalizar(buscador.value);

    cards.forEach((card) => {
      // Solo busca en el TÍTULO, no en la descripción ni en el "Ver más"
      const titulo = card.querySelector(".card-title")?.textContent || "";
      const contenido = normalizar(titulo);

      card.style.display = contenido.includes(texto) ? "" : "none";
    });
  });
}