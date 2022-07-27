const titulo = document.querySelector('.titulo-card');
const texto = document.querySelector('.texto-card');
const data = document.querySelector('.data-card');

export default async function ibgeApi() {
  const dados = await fetch(
    'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release'
  );
  const ibge = await dados.json();
  console.log(ibge);
  const notA = ibge.items[0];
  const notB = ibge.items[1];
  const notC = ibge.items[2];
  const todasNot = [notA, notB, notC];

  todasNot.forEach((items) => {
    const notfeitas = items.titulo;
    const introducao = items.introducao;
    const data_publicacao = items.data_publicacao.slice(0, 10);
    const card = document.createElement('div');
    card.innerHTML = `<div class="cards">
          <div class="img-card">
            <img src="img/CENSO_CAC_home.jpg" alt="" />
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
    console.log(card);
    document.querySelector('.section-segundaria').appendChild(card);
  });
}
