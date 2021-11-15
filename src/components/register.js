
import { Container,Header,StyledButton,StyledInput } from "../styles/sharedstyles";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { useState } from "react";
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";
import { submitRegister } from "../services/api.services";
export default function Register(){
    const [nome,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cPassword, setcPassword] = useState('');

    const navigate = useNavigate();
    function registerSubmit(event){
        event.preventDefault();
        if(password !== cPassword){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Senhas necessitam ser iguais"
            })
            setPassword('')
            return;
        }
        if(email.indexOf('@') < 0){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Digite um email válido"
            })
            return;
        }
        if(nome.length < 3){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Digite um nome de no mínimo 3 caracteres"
            })
            return;
        }
        if(password.length < 5){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Digite uma senha de no mínimo 5 caracteres"
            })
            return;
        }
        const body = {
            nome,
            email,
            password,
        }
        submitRegister(body).then(()=>{
            Swal.fire({
                icon: "success",
                title: "Conta criada com sucesso",
            }) 
            setTimeout(()=>{
                navigate('/sign-in')
            },1000);
        }).catch((error)=>{
            console.log(error.response.status)
            if(error.response.status === 400){
                Swal.fire({
                    icon: "error",
                    title: "ops",
                    text: "Campos inválidos"
                })
            }
            if(error.response.status === 409){
                Swal.fire({
                    icon: "error",
                    title: "ops",
                    text: "Email já em uso"
                })
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "ops",
                    text: "Falha ao criar conta tente novamente mais tarde"
                })
            }
        })
    }

    return(
        <Container>
            <Header>
            <AiOutlineArrowLeft style={{fontSize:"40px",marginTop:"4px",marginLeft:"10px"}} onClick={()=> {navigate("/")}}/>
            <h1 className="register">criar seu cadastro</h1>
            </Header>
            <div className="inputs">
                <form onSubmit={registerSubmit}>
                    <StyledInput placeholder="nome" type="text" value={nome} onChange={(e) => setName(e.target.value)} required/>
                    <StyledInput placeholder="e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <StyledInput placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <StyledInput placeholder="confirme a senha" type="password" value={cPassword} onChange={(e) => setcPassword(e.target.value)} required />
                    <StyledButton type="submit">Fazer Registro</StyledButton>
                </form>
                <Link to="/sign-in" style={{textDecoration:"none"}}><h2>ou fazer login</h2></Link>
            </div>
        </Container>
    )
}