const $ = (selector) => document.querySelector(selector);

const countries = $('#countries');

const newElement = tag => document.createElement(tag);

const Card = (obj) => {
    const div = newElement('div');
    div.className = 'card col-12 col-sm-4 col-md-3';

    div.innerHTML = `
    <div class="img">
    <img src="${obj.flags.png}" class="img-fluid" alt="${obj.alt}">
    </div>
    <div class="text">
      <h5 class="fw-bold p-3">${obj.name.common}</h5>
    <div class="ps-3">
        <p><span class="fw-bold">Population: </span>${obj.population}</p>
        <p><span class="fw-bold">Region: </span>${obj.region}</p>
        <p><span class="fw-bold">Capital: </span>${obj.capital}</p>
    </div>
    </div>
    `;

    div.addEventListener('click', () => {
      let [moneda] = Object.keys(obj.currencies);
      let [lengua] = Object.keys(obj.languages);
      const offcanvas = newElement('div');
      offcanvas.className = 'card offcanvas offcanvas-top h-100';
      offcanvas.innerHTML = `
      <button type="button" class="btn btn-transparent border" data-bs-toggle="offcanvas" data-bs-dismiss="offcanvas"><i class="bi bi-arrow-left"></i>Back</button>
      <div class="">
      <div class="">
      <img src="${obj.flags.png}" class="w-25" alt="${obj.alt}">
      </div>
    <div class="">
      <h5 class="">${obj.name.common}</h5>
      </div>
      <div class="">
        <p><span class="fw-bold">Population: </span>${obj.population}</p>
        <p><span class="fw-bold">Region: </span>${obj.region}</p>
        <p><span class="fw-bold">Capital: </span>${obj.capital}</p>
        <p><span class="fw-bold">Top Level Domain: </span>${obj.tld}</p>
        <p><span class="fw-bold">Currencies: </span>${obj.currencies[moneda].name}</p>
        <p><span class="fw-bold">Languages: </span>${obj.languages[lengua]}</p>
        <p>Border Countries: <button type="button" class="btn btn-transparent border">${obj.borders}</button></p>
      </div>
    </div>
      `;

      document.body.appendChild(offcanvas);
      const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
      offcanvasInstance.show();
    });

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

export default {
    Card,
    $,
    muestracards,
    insertRegions,
}