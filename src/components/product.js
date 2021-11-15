import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../contexts/cartContext.js";

export default function Product({element}){

    const {cartProducts, setCartProducts} = useContext(CartContext);

    return(
        <Container>
                <PicContainer>
                    <img src={element.url_image} alt=''/> 
                </PicContainer>
                <InfoContainer>
                    <p>{element.name.substr(0,20)}...</p>
                    <p>R$ {element.price}</p>
                <Button onClick={() => setCartProducts([...cartProducts, element])}>Adicionar ao carrinho</Button>
            </InfoContainer>
        </Container>
    );
}

const Container = styled.div`
    color: white;
    width: 90%;
    height: 30vh;
    border: 5px solid #8D898A;
    margin-bottom: 35px;
    display: flex;
`

const PicContainer = styled.div`
    width: 58%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 90%;
        max-height: 100%
    }
`

const InfoContainer = styled.div`
    width: 42%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Button = styled.div`
    width: 95%;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 2px;
    background-color: #FA4098;
    font-size: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`