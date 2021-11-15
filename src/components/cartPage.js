import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { Header } from "../styles/sharedstyles";
import { useNavigate } from "react-router-dom";
import CartProduct from "./cartProduct.js";
import { useContext } from "react";
import CartContext from "../contexts/cartContext.js";
import Swal from 'sweetalert2';

export default function CartPage(){
    
    const {cartProducts, setCartProducts} = useContext(CartContext);
    const navigate = useNavigate();
    
    function updateQtd(selectedProduct, qtd){
        let newCartProduct = {};
        for(let i = 0; i < cartProducts.length; i++){
            if(cartProducts[i].id === selectedProduct.id){
                newCartProduct = cartProducts[i]
            }
        }
        newCartProduct.qtd = qtd;
        let filteredProducts = cartProducts.filter((restProduct) => {
            return (restProduct.id !== selectedProduct.id);
        })
        if(qtd === 0){
            setCartProducts([...filteredProducts]);
        }else if(qtd < 0){
            Swal.fire('Não é possível adicionar valores negativos, produto removido do carrinho!');
            setCartProducts([...filteredProducts]);
        }else{
            setCartProducts([...filteredProducts, newCartProduct]);
        }
    }

    function deleteProductFromCart(deletedProduct){
        let filteredProducts = cartProducts.filter((restProduct) => {
            return (restProduct.id !== deletedProduct.id);
        })
        setCartProducts([...filteredProducts]);
    }

    let parcialValue = 0;

    for(let i = 0; i < cartProducts.length; i++){
        parcialValue = parcialValue + Number(cartProducts[i].qtd) * Number(cartProducts[i].price);
    }

    function finishOrder(){
        Swal.fire('Compra finalizada com sucesso!');
        setCartProducts({});
        navigate('/');
    }

    return (
        <ConteinerCart>
            <Head>
                <IoArrowBackOutline className='icon' onClick={() => navigate('/')}/>
                <h1>Carrinho</h1>
            </Head>
            <Content>
                { cartProducts.length === 0 ?
                    <h1>Você ainda não adicionou nenhum produto ao carrinho, volte para a página inicial!</h1>
                    :
                    cartProducts.map((product, index) => <CartProduct key={index} product={product} updateQtd={updateQtd} deleteProduct={deleteProductFromCart}/>)
                }
                
            </Content>
            <Bottom>
                <div>
                    <h1>Total</h1>
                    <h1>{parcialValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                </div>
                <button onClick={finishOrder}>Finalizar Compra</button>
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