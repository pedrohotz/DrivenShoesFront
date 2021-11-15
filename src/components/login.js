
import { Container,Header,StyledButton,StyledInput } from "../styles/sharedstyles";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { useState } from "react/cjs/react.development";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { submitLogin } from "../services/api.services";
import { useContext } from "react";
import UserContext from "../contexts/usercontext";
export default function Login(){
    const {setUser} = useContext(UserContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    let navigate = useNavigate();
    
    
    function loginSubmit(event){
        event.preventDefault();
        const body = {
            email,
            password,
        }
        submitLogin(body).then((res)=>{
            setUser(res.data)
            navigate("/");
        }).catch(()=>{
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Falha ao fazer login"
            })
        })
    }

    return(
        <Container>
            <Header>
            <AiOutlineArrowLeft style={{fontSize:"40px",marginTop:"4px",marginLeft:"10px"}}/>
            <h1 className="register">fazer login</h1>
            </Header>
            <div className="inputs">
                <form onSubmit={loginSubmit}>
                    <StyledInput placeholder="e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <StyledInput placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <StyledButton type="submit">Fazer Login</StyledButton>
                </form>
                <Link to="/sign-up" style={{textDecoration:"none"}}><h2>ou crie uma conta</h2></Link>
            </div>
        </Container>
    )
}

