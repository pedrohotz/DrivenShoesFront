import axios from "axios";

const URL = "https://drivenshoes.herokuapp.com/";

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

function submitLogin(body){
    return axios.post(`${URL}sign-in`,body);
}

function getPaymentData(config) {
    return axios.get(`${URL}payment`, config);
}

function postCard(config, body){
    return axios.post(`${URL}payment`, body, config);
}

function postCheckout(config, body){
    return axios.post(`${URL}checkout`, body, config);
}

export{
    getProducts,
    getCategories,
    getCategoryProducts,
    submitRegister,
    submitLogin,
    getPaymentData,
    postCard,
    postCheckout,
}