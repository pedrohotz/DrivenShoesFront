
import { Container,Header,StyledButton,StyledInput } from "../styles/sharedstyles"
import {AiOutlineArrowLeft} from 'react-icons/ai';
export default function Register(){
    return(
        <Container>
            <Header>
            <AiOutlineArrowLeft style={{fontSize:"40px",marginTop:"4px",marginLeft:"10px"}}/>
            <h1 className="register">criar seu cadastro</h1>
            </Header>
            <div className="inputs">
                <form>
                    <StyledInput placeholder="nome" type="text" required/>
                    <StyledInput placeholder="e-mail" type="email" required/>
                    <StyledInput placeholder="senha" type="password"  required />
                    <StyledInput placeholder="confirme a senha" type="password" required />
                    <StyledButton type="submit">Fazer Registro</StyledButton>
                </form>
                <h2>ou fazer login</h2>
            </div>
        </Container>
    )
}