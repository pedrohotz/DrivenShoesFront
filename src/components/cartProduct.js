import styled from "styled-components";

export default function CartProduct(){
    return (
        <Conteiner>
            <Left>
                <img src='https://fieroshop.vteximg.com.br/arquivos/ids/161238-1400-1400/sapato-masculino-forrado.jpg?v=636670954190130000' alt=''/>
            </Left>
            <Right>
                <p>Sapato show de bola</p>
                <p>QTD: <button>5</button></p>
                <p>Total</p>
            </Right>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    background-color: #262525;
    width: 90vw;
    margin-top: 20px;
    border-radius: 5px;
    position: relative;
    display: flex;
    height: 150px;
    padding: 5px;

    
`;

const Left = styled.div`
    width: 45vw;
    
    img {
        width: 40vw;
        height: 140px;
        border-radius: 5px;
    }
`;

const Right = styled.div`
    width: 45vw;
    
    p{
        color: #fff;
    }
`;