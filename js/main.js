const buscador = document.getElementById("buscador");
const cards = document.querySelectorAll(".card");
const sinResultados = document.getElementById("sin-resultados");
// Saca tildes: rio = río, cajon = cajón
function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

if (buscador) {
  buscador.addEventListener("input", () => {
    const texto = normalizar(buscador.value);
    let visibles = 0;
    cards.forEach((card) => {
      // Solo busca en el TÍTULO, no en la descripción ni en el "Ver más"
      const titulo = card.querySelector(".card-title")?.textContent || "";
      const contenido = normalizar(titulo);

      const coincide = contenido.includes(texto);
      card.style.display = coincide ? "" : "none";
      if (coincide) visibles++;
    });
  if (sinResultados) {
      sinResultados.style.display = visibles === 0 ? "block" : "none";
    }
  });
}

// Botones Ver más / Ver menos de las cards
document.querySelectorAll('.card .btn').forEach(function (boton) {
    boton.addEventListener('click', function () {
        const info = this.nextElementSibling;
        if (!info) return;
        info.classList.toggle('abierto');
        this.textContent = info.classList.contains('abierto') ? 'Ver menos' : 'Ver más';
    });
});

// Modo oscuro
const darkBtn = document.getElementById("btn-dark-mode");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
  });
}