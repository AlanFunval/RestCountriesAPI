import data from "./data.js";
import dom from "./dom.js";

const URL = 'https://restcountries.com/v3.1/all';


const countriesAPI = await data.getData(URL);

const regions = data.getRegion(countriesAPI);

dom.insertRegions(regions);

const listRegions = [...dom.$('#regions').children];
let activo = 0;

listRegions.forEach( (region, index) => {

    region.addEventListener('click', () => {
    if (region.classList.contains('active')) return;

    region.classList.add('active');
    
    let ah = listRegions[activo];
    ah.classList.remove('active');

    activo = index;

    let filtro = region.textContent;

    const filtered = filtro == 'All' ? countriesAPI : data.filtrar(countriesAPI, filtro);
    dom.muestracards(filtered);
    })
})

const search = dom.$('#searchbycountry');

search.addEventListener('keyup', () => {
    let filtro = searchbycountry.value;

    const filtered = filtro == '' ? countriesAPI : data.filterByName(countriesAPI, filtro);

    dom.muestracards(filtered);
})

dom.muestracards(countriesAPI);



const darkMode = () =>{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#shift").setAttribute("class", "bi bi-sun");
}
const lightMode = () =>{
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#shift").setAttribute("class", "bi bi-moon");
}

const cambiarModo = () =>{
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    darkMode() : lightMode();

}

const buttonshift = document.querySelector('#light-dark-mode');
buttonshift.addEventListener('click', cambiarModo);

const cards = [...countries.children];
cards.forEach((card) => {
  card.addEventListener('click', () => {
    const cardDetails = dom.showCardDetails(countriesAPI.find((obj) => obj.name.common === card.querySelector('h5').textContent));
    countries.innerHTML = '';
    countries.appendChild(cardDetails);
  });
});


const backBtn = document.querySelector('#back-btn');
backBtn.addEventListener('click', () => {
    window.location.reload();
});