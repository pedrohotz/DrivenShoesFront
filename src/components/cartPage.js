import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { Header } from "../styles/sharedstyles";
import { useNavigate } from "react-router-dom";
import CartProduct from "./cartProduct.js";
import { useContext } from "react";
import CartContext from "../contexts/cartContext.js";

export default function CartPage(){
    
    const {cartProducts, setCartProducts} = useContext(CartContext);
    console.log(cartProducts)
    const navigate = useNavigate();
    return (
        <ConteinerCart>
            <Head>
                <IoArrowBackOutline className='icon' onClick={() => navigate('/')}/>
                <h1>Carrinho</h1>
            </Head>
            <Content>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
            </Content>
            <Bottom>
                <div>
                    <h1>Total</h1>
                    <h1>R$24,90</h1>
                </div>
                <button>Finalizar Compra</button>
            </Bottom>
            
        </ConteinerCart>
    );
}

const ConteinerCart = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Head = styled(Header)`
    font-size: 30px;
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
`

const Bottom = styled.div`
    position: fixed;
    height: 90px;
    z-index: 1;
    bottom: 0;
    left: 0;
    background-color: #fa4098;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        width: 100vw;
        display: flex;
        justify-content: space-around;
        h1{
            font-size: 20px;
        }

    }
    
    button{
        background-color: #fff;
        width: 70vw;
        font-size: 20px;
        color: #000;
        border: none;
        border-radius: 5px;
    }
`