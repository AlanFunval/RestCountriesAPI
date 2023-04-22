import data from "./data.js";
import dom from "./dom.js";

const URL = 'https://restcountries.com/v3.1/all';

const countries = dom.$('#countries');

const countriesAPI = await data.getData(URL);

countriesAPI.forEach(element => {
    const tarjeta = dom.Card(element);

    countries.appendChild(tarjeta);
})

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
