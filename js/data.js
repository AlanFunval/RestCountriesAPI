const getData = async (URL) => {
    return fetch(URL)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};


const getRegion = (data) => {
    let regions = data.map( elem => elem.region);

    regions = new Set(regions);
    regions = ['All',...regions];
    
    return regions
};

const filtrar = (arr, filtro) => {
    let filtered = arr.filter( elem => elem.region === filtro)

    return filtered
} 

const filterByName = (arr, filtro) => {
    let filtered = arr.filter(elem => elem.name.common.toLowerCase().includes(filtro.toLowerCase()))

    return filtered
}

export default {
    getData,
    getRegion,
    filtrar,
    filterByName,
}