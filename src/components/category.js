import styled from "styled-components";
import { useContext } from "react";
import FilterContext from "../contexts/filterContext";

export default function Category({element}){
    const { setFilter, filter } = useContext(FilterContext);
    return(
       <Container onClick={() => setFilter(`${element.name}`)} filter={filter} element={element} >
            <p>{element.name}</p>
       </Container>
    );
}

const Container = styled.div`
    margin-left: 10px;
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: ${({filter, element}) => filter === element.name ? 'bold' : '400'};
`
