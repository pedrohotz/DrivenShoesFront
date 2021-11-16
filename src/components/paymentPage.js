import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { Header } from "../styles/sharedstyles";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from '../contexts/usercontext.js';
import { getPaymentData } from '../services/api.services.js';
import CartContext from "../contexts/cartContext.js";
import Card from "./card.js";
import { postCheckout } from "../services/api.services.js";
import Swal from "sweetalert2";

export default function PaymentPage(){
    
    const {user} = useContext(UserContext);
    const {cartProducts, setCartProducts} = useContext(CartContext);
    const navigate = useNavigate();
    const [text, setText] = useState('Carregando...');
    const [cards, setCards] = useState([]);
    const [selected, setSelected] = useState({});

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        getPaymentData(config)
            .then((res) => {
                setCards(res.data);
            })
            .catch(() => setText('Você ainda não possui cartões cadastrados, por favor, cadastre um cartão'));
    }, [user.token]);

    let parcialValue = 0;

    for(let i = 0; i < cartProducts.length; i++){
        parcialValue = parcialValue + Number(cartProducts[i].qtd) * Number(cartProducts[i].price);
    }

    function finishOrder(){
        let products = [];
        let parcialBody = {}
        for(let i = 0; i < cartProducts.length; i++){
            const product_id = cartProducts[i].id;
            const quantity = cartProducts[i].qtd
            parcialBody = {product_id, quantity};
            products.push(parcialBody);
        }
        const body = { products };
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        postCheckout(config, body)
            .then(() => {
                Swal.fire('Compra finalizada com sucesso!');
                navigate('/');
                setCartProducts([]);
            })
            .catch((error) => console.log(error));
    }
    

    return (
        <ConteinerPayment>
            <Head>
                <IoArrowBackOutline className='icon' onClick={() => navigate('/cart')}/>
                <h1>Pagamento</h1>
            </Head>
            <Content>
                {cards.length === 0 ? 
                    (
                        <h1>{text}</h1>
                    )
                    :
                    (
                        cards.map((card, index) => <Card key={index} card={card} selected={selected} setSelected={setSelected}/>)
                    )
                }
                
                <button onClick={() => navigate('/addCard')}>Adicionar cartão</button>
            </Content>
            <Bottom>
                <div>
                    <h1>Total</h1>
                    <h1>{parcialValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                </div>
                <button onClick={finishOrder}>Finalizar Compra</button>
            </Bottom>
        </ConteinerPayment>
    );
}

const ConteinerPayment = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Head = styled(Header)`
    font-size: 20px;
    font-weight: bold;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    color: black;

    .icon{
        margin: 0 15px;
        font-size: 32px;
    }

`;

const Content = styled.div`
    margin: 90px 0 110px 0;

    h1{
        color: #fff;
        font-size: 20px;
        margin-top: 15px;
        margin-left: 10px;
    }
    
    button{
        background-color: #fff;
        border: none;
        font-family: 'Montserrat',sans-serif;
        height: 30px;
        width: 40%;
        border-radius: 5px;
        margin-left: 30%;
        margin-top: 20px;
    }
`

const Bottom = styled.div`
    position: fixed;
    height: 90px;
    z-index: 1;
    bottom: 0;
    left: 0;
    background-color: #fa4098;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        width: 100%;
        display: flex;
        justify-content: space-around;
        h1{
            font-size: 20px;
            font-weight: bold;
        }

    }
    
    button{
        background-color: #fff;
        width: 70%;
        font-size: 20px;
        color: #000;
        border: none;
        border-radius: 5px;
    }
`