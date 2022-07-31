export default async function ibgeApi() {
  const dados = await fetch(
    'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release'
  );

  const ibge = await dados.json();
  console.log(ibge);
  const notA = ibge.items[0];
  const notB = ibge.items[1];
  const notC = ibge.items[2];
  const todasNot = [notA, notB, notC];
  const capaEconomicas = [
    'img/economicasBitcoin.svg',
    'img/economicasGod.svg',
    'img/economicasInvestimentos.svg',
    'img/economicasPizza.svg',
    'img/economicasProjeção.svg',
    'img/economicasVisual.svg',
  ];

  const capaSociais = [
    'img/sociaisAmigos.svg',
    'img/sociaisCoração.svg',
    'img/sociaisMulher.svg',
    'img/sociaisMusica.svg',
    'img/sociaisProfessor.svg',
    'img/sociaisProjeto.svg',
  ];

  todasNot.forEach((items) => {
    const notfeitas = items.titulo.slice(0, 70) + '...';
    const introducao = items.introducao.slice(0, 110) + '...';
    const data_publicacao = items.data_publicacao.slice(0, 10);
    if (items.editorias == 'economicas') {
      const numeroAleatorio = (Math.random() * 5).toFixed(0);
      console.log(numeroAleatorio);
      const card = document.createElement('div');
      card.innerHTML = `<div class="cards">
          <div class="img-card">
            <img src="${capaEconomicas[numeroAleatorio]}" alt="" />
          </div>
          <div class="card-texto-container">
            <h3 class="titulo-card">
              ${notfeitas}
            </h3>
            <p class="texto-card">
              ${introducao}
            </p>
          </div>
          <span class="data-card">${data_publicacao}</span>
        </div>`;
      document.querySelector('.section-segundaria').appendChild(card);
    } else {
      const numeroAleatorio = (Math.random() * 5).toFixed(0);
      console.log(numeroAleatorio);
      const card = document.createElement('div');
      card.innerHTML = `<div class="cards">
          <div class="img-card">
            <img src="${capaSociais[numeroAleatorio]}" alt="" />
          </div>
          <div class="card-texto-container">
            <h3 class="titulo-card">
              ${notfeitas}
            </h3>
            <p class="texto-card">
              ${introducao}
            </p>
          </div>
          <span class="data-card">${data_publicacao}</span>
        </div>`;
      document.querySelector('.section-segundaria').appendChild(card);
    }
  });
}
