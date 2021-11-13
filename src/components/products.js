import { Header } from "../styles/sharedstyles";
import Product from "./product";
import Menu from "./menu";
import { IoList, IoCart } from "react-icons/io5";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getProducts, getCategoryProducts } from "../services/api.services";
import FilterContext from "../contexts/filterContext";

export default function Products(){
    const [productsList, setProductsList] = useState([]);
    const [menuState, setMenuState] = useState('closed');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        if(filter === 'all'){
            getProducts().then((resp) => {
                setProductsList([...resp.data])
            })
        }else{
            getCategoryProducts(filter).then((resp) => {
                setProductsList([...resp.data])
            })
        }
    }, [filter]);

    return(
        <FilterContext.Provider value={{setFilter, filter}}>
            <Menu state={menuState} />
            <Container>
                <Head>
                    <IoList className='icon' onClick={() => setMenuState('open')} />
                    <h1>DrivenShoes</h1>
                    <IoCart className='icon' />
                </Head>
                <ProductsContainer onClick={() => setMenuState('closed')} >
                    {!!productsList[0] ? productsList.map((element) =>  <Product element={element} key={element.id} />) 
                    : <p>Loading...</p>}
                </ProductsContainer>
            </Container>
        </FilterContext.Provider>
    );
}

const Head = styled(Header)`
    justify-content: space-between;
    font-size: 30px;
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
`

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: white;
`

const ProductsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 115px;
`