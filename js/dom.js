const $ = (selector) => document.querySelector(selector);

const countries = $('#countries');

const newElement = tag => document.createElement(tag);

const Card = (obj) => {
    const div = newElement('div');
    div.className = 'card col-12 col-sm-4 col-md-3';

    div.innerHTML = `
    <div class="tarjeta">
    <img src="${obj.flags.png}" class="w-100" alt="${obj.alt}">
    </div>
    <div class="">
      <h5 class="fw-bold p-3">${obj.name.common}</h5>
    <div class="ps-3">
        <p><span class="fw-bold">Population: </span>${obj.population}</p>
        <p><span class="fw-bold">Region: </span>${obj.region}</p>
        <p><span class="fw-bold">Capital: </span>${obj.capital}</p>
    </div>
    </div>
    `
    return div;
}

const muestracards = (arr) => {
  countries.innerHTML = '';
  arr.forEach( element =>{
    const tarjeta = Card(element);

    countries.appendChild(tarjeta);
})

}

const insertRegions = (regions) => {
  const list = $('#regions');
  regions.forEach( elem => {
    const li = newElement('li');
    li.className = `p-2 ${elem === 'All' ? 'active' : ''}`;

    li.innerHTML = elem;

    list.appendChild(li);
  })

}

const showCardDetails = (obj) => {
  const div = newElement('div');
  div.className = 'card col-12 col-sm-6 col-md-4 col-lg-3';

  div.innerHTML = `
    <div class="tarjeta">
      <img src="${obj.flags.png}" class="w-100" alt="${obj.alt}">
    </div>
    <div class="">
      <h5 class="fw-bold p-3">${obj.name.common}</h5>
      <div class="ps-3">
        <p><span class="fw-bold">Population: </span>${obj.population}</p>
        <p><span class="fw-bold">Region: </span>${obj.region}</p>
        <p><span class="fw-bold">Capital: </span>${obj.capital}</p>
        <p><span class="fw-bold">Top Level Domain: </span>${obj.tld}</p>
        <p><span class="fw-bold">Currencies: </span>${obj.currencies.name}</p>
        <p><span class="fw-bold">Languages: </span>${obj.languages}</p>
      </div>
    </div>
  `;

  return div;
};

export default {
    Card,
    $,
    muestracards,
    insertRegions,
    showCardDetails,
}