import styled from "styled-components";
import { IoCheckbox, IoPerson } from "react-icons/io5";
import { getCategories } from "../services/api.services";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Category from "./category";
import FilterContext from "../contexts/filterContext";

export default function Menu({state}){
    const [categories, setCategories] = useState([]);
    const {setFilter, filter} = useContext(FilterContext);
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then((resp) => {
            setCategories([...resp.data])
        })
    }, [])

    return(
        <Container state={state}>
            <LoginButton onClick={() => navigate('/sign-in')}>
                <IoPerson />
                <div>
                    <p className='login'>Faça seu login</p>
                    <p className='cadastro'>ou cadastre-se</p>
                </div>
            </LoginButton>
            <Options>
                <MyContainer>
                    <IoCheckbox />
                    <p>Meus Pedidos</p>
                </MyContainer>
                <CategoriesContainer >
                    <p className='title'>Categorias:</p>
                    <Todos onClick={() => setFilter('all')} filter={filter}>todos</Todos>
                    {categories.map((element) => <Category element={element} key={element.id} />)}
                </CategoriesContainer>
            </Options>
        </Container>
    );
}

const Container = styled.div`
    width: 75vw;
    height: 100vh;
    position: fixed;
    left: ${({state}) => state === 'open' ? 0 : '-80vw' };
    top: 0;
    z-index: 2;
    box-shadow: 3px 0 10px black;
    
`

const LoginButton = styled.div`
    width: 100%;
    height: 90px;
    background-color: #FA4098;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;

    p{
        margin-left: 15px;
    }

    .login{
        font-size: 22px;
    }

    .cadastro{
        font-size: 18px;
    }
`

const Options = styled.div`
    width: 100%;
    height: calc(100% - 90px);
    background-color: white;
`

const MyContainer = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
    padding: 18px;
    margin-bottom: 10px;

    p{
        font-size: 18px;
        margin-left: 10px;
    }
`

const CategoriesContainer = styled.div`
    margin-left: 15px;

    .title{
        margin-bottom: 10px;
        font-size: 18px;
    }
`

const Todos = styled.p`
    margin-left: 10px;
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: ${({filter}) => filter === 'all' ? 'bold' : '400'};
`