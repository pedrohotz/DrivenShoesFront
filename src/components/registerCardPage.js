import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from '../contexts/usercontext.js';
import { IoArrowBackOutline } from "react-icons/io5";
import { Header } from "../styles/sharedstyles";
import { useNavigate } from "react-router-dom";
import { postCard } from '../services/api.services.js';
import Swal from "sweetalert2";

export default function RegisterCardPage(){
    
    const [card_number, setCardNumber] = useState('');
    const [security_number, setSecurityNumber] = useState('');
    const [expiration_date, setExpirationDate] = useState('');
    const [name, setName] = useState('');

    const {user} = useContext(UserContext);

    const navigate = useNavigate();

    function registerCard(e){
        e.preventDefault();
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        const body = {
            card_number,
            security_number,
            expiration_date,
            name
        }

        if(card_number.length < 16){
            Swal.fire('O número do cartão deve ter 16 caracteres');
        }else if(security_number.length !== 3){
            Swal.fire('O número de segurança do cartão deve ter 3 caracteres');
        }else if(name.length < 5){
            Swal.fire('O nome do cartão deve ter no mínimo 5 caracteres');
        }else{
            postCard(config, body)
            .then(() => {
                Swal.fire('Cartão cadastrado com sucesso!');
                navigate('/payment');
            })
            .catch((error) => {
                if(error.response.status === 401){
                    Swal.fire('Houve alguma falha de login, por favor, tente logar novamente!')
                }else if(error.response.status === 409){
                    Swal.fire('Cartão já registrado!')
                }else if(error.response.status === 400){
                    Swal.fire('Algum parâmetro não foi digitado corretamente, tente novamente!')
                }
            })
        }
    }

    return(
        <ConteinerPayment>
            <Head>
                <IoArrowBackOutline className='icon' onClick={() => navigate('/payment')}/>
                <h1>Registrar Cartão</h1>
            </Head>
            <form onSubmit={registerCard}>
                <Content>
                    <input type='text' min='16' max='16'placeholder="Número do cartão" onChange={(e) => setCardNumber(e.target.value)} required></input>
                    <input type='password' min='3' max='3' placeholder="Número de segurança" onChange={(e) => setSecurityNumber(e.target.value)} required></input>
                    <input type='date' placeholder="Data de validade" onChange={(e) => setExpirationDate(e.target.value)} required ></input>
                    <input type='text' min='5' placeholder="Nome" onChange={(e) => setName(e.target.value)} required></input>
                </Content>
                <Bottom>
                    <button type='submit'>Registrar cartão</button>
                </Bottom>
            </form>
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
    margin: 120px 0 100px 0;

    display: flex;
    flex-direction: column;

    input{
        margin-top: 10px;
        border-radius: 5px;
        width: 90vw;
        height: 50px;
        color: black;
        font-size: 20px;
        padding-left: 10px;
        font-family: 'Montserrat',sans-serif;

        ::placeholder{
            color: black;
            font-size: 20px;
            padding-left: 10px;
            font-family: 'Montserrat',sans-serif;
        }
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