import styled from "styled-components";

export default function Card({card, selected, setSelected}){
    
    let border = {};

    function selectCard(){
        setSelected(card);
    }
    if(selected.name === card.name){
        border = {
            border: '1px solid green'
        };
    }

    return (
        <ConteinerCard style={border} onClick={selectCard}>
            <h1>Nome: {card.name}</h1>
        </ConteinerCard>
    );
}

const ConteinerCard = styled.div `
    background-color: #262525;
    width: 90vw;
    margin-top: 20px;
    border-radius: 5px;
    position: relative;
    display: flex;
    height: 50px;
    padding: 5px;
    
`