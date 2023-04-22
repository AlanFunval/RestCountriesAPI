const $ = (selector) => document.querySelector(selector);

const Card = (obj) => {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
    <div class="tarjeta">
    <img src="${obj.flags.svg}" class="w-100" alt="imagen">
    <div class="text-center">
      <h5>${obj.name.common}</h5>
    </div>
    <div class="ps-3">
        <p>Population:${obj.population}</p>
        <p>Region:${obj.region}</p>
        <p>Capital:${obj.capital}</p>
    </div>
  </div>
    `
    return div;
}

export default {
    Card,
    $,
}