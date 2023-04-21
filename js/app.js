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
