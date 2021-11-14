import axios from "axios";

const URL = "http://localhost:4000/";

function getProducts() {
    return axios.get(`${URL}products`);
}

function getCategories() {
    return axios.get(`${URL}categories`);
}

function getCategoryProducts(filter) {
    return axios.post(`${URL}category-products`, {name: filter});
}

function submitRegister(body){
    return axios.post(`${URL}sign-up`,body);
}

export{
    getProducts,
    getCategories,
    getCategoryProducts,
    submitRegister,
}