import styled from "styled-components";



const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
background-color: white;
    .inputs{
        height: 80vh;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h2{
            margin-top: 30px;
            font-size: 20px;
            font-family: 'Montserrat',sans-serif;
            color: #3969B2;
        }
    }
`

const Header = styled.div`
width: 100vw;
height: 90px;
background-color: #FA4098;
display: flex;
align-items: center;

    .register{
        font-size: 30px;
        font-family: 'Montserrat',sans-serif;
        margin-left: 10px;
    }
`

const StyledInput = styled.input`
    margin-bottom: 30px;
    width: 80vw;
    height: 40px;
    border-radius: 30px;
    background-color: #C4C4C4;
    font-size: 20px;
    color: #000000;
    font-family: 'Montserrat',sans-serif;
    border: none;
    ::placeholder{
        font-size: 20px;
        color: #000000;
        font-family: 'Montserrat',sans-serif;
        padding: 10px;
    
    }
` 

const StyledButton = styled.button`
    width: 200px;
    height: 50px;
    background-color:#FA4098 ;
    color: #000000;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    font-family: 'Montserrat',sans-serif;
`




export {
    Container,
    Header,
    StyledInput,
    StyledButton,
}