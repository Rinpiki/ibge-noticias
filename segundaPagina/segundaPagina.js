const tagTodas = document.querySelector('[data-todas="todas"]');
const tagsEconomia = document.querySelector('[data-economia="economia"]');
const tagsSocial = document.querySelector('[data-social="social"]');

async function ibgeApi() {
  const dados = await fetch(
    'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=20'
  );
  const ibge = await dados.json();
  const items = ibge.items;
  console.log(items);

  items.forEach((i) => {
    const titulo = i.titulo.slice(0, 85) + '..';
    const editorias = i.editorias;
    const data = i.data_publicacao.slice(0, 10);
    const link = i.link;
    const card = document.createElement('div');

    if (editorias == 'economicas') {
      card.innerHTML = `<div class="card">
          <div class="card-cc">
            <span>Economia</span>
            <a href="${link}">
              ${titulo}
            </a>
            <p>${data}</p>
          </div>
        </div>`;
      document.querySelector('.container-cards').appendChild(card);
    } else {
      card.innerHTML = `<div class="card">
          <div class="card-cc">
            <span class="social">Social</span>
            <a href="${link}">
              ${titulo}
            </a>
            <p>${data}</p>
          </div>
        </div>`;
      document.querySelector('.container-cards').appendChild(card);
    }
  });
}

ibgeApi();

const onClick = () => {
  console.log('oiii');
  const containerCard = document.querySelector('.container-cards');
  containerCard.remove();
};
tagsEconomia.addEventListener('click', onClick);
