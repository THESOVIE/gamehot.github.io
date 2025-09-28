const juegos = [
  {
    id: 1,
    nombre: "Fantasy Realm",
    imagen: "https://via.placeholder.com/200x180/333/fff?text=Fantasy+Realm",
    categorias: ["Fantasía", "RPGM", "Protagonista masculino"]
  },
  {
    id: 2,
    nombre: "Dark School",
    imagen: "https://via.placeholder.com/200x180/444/fff?text=Dark+School",
    categorias: ["Escolar", "Corrupción", "2D"]
  },
  {
    id: 3,
    nombre: "Alien Desire",
    imagen: "https://via.placeholder.com/200x180/222/ff66aa?text=Alien+Desire",
    categorias: ["Ciencia ficción", "Interracial", "Furry"]
  },
  {
    id: 4,
    nombre: "Queen's Slave",
    imagen: "https://via.placeholder.com/200x180/111/ffcc00?text=Queen%27s+Slave",
    categorias: ["Dominación femenina", "Esclavo", "Bdsm"]
  }
];

function renderJuegos(lista) {
  const container = document.getElementById('gamesContainer');
  container.innerHTML = '';
  lista.forEach(juego => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <img src="${juego.imagen}" alt="${juego.nombre}">
      <div class="title">${juego.nombre}</div>
    `;
    card.addEventListener('click', () => {
      window.location.href = `juego.html?id=${juego.id}`;
    });
    container.appendChild(card);
  });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtrados = juegos.filter(juego =>
    juego.nombre.toLowerCase().includes(query) ||
    juego.categorias.some(cat => cat.toLowerCase().includes(query))
  );
  renderJuegos(filtrados);
});

renderJuegos(juegos);
