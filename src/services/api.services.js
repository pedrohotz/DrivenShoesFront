import axios from "axios";

const URL = "http://localhost:4000/";

function getProducts() {
    return axios.get(`${URL}products`);
}

export{
    getProducts,
}