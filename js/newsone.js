export default async function ibgeApi() {
  const dados = await fetch(
    'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release'
  );
  const link = 'http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release';
  const ibge = await dados.json();
  console.log(ibge);
  const notA = ibge.items[0];
  const notB = ibge.items[1];
  const notC = ibge.items[2];
  const todasNot = [notA, notB, notC];
  const imgg = JSON.parse(notA.imagens);
  const img = imgg.image_intro;
  const imagemFinal = await `${link}/${img}.443`;
  console.log(imagemFinal);
  console.log(img);

  todasNot.forEach((items) => {
    const notfeitas = items.titulo;
    const introducao = items.introducao.slice(0, 110) + '...';
    const data_publicacao = items.data_publicacao.slice(0, 10);
    const card = document.createElement('div');
    card.innerHTML = `<div class="cards">
          <div class="img-card">
            <img src="img/pessoa.png" alt="" />
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
