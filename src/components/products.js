import { Header } from "../styles/sharedstyles";
import Product from "./product";
import { IoList, IoCart } from "react-icons/io5";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getProducts } from "../services/api.services";

export default function Products(){
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        getProducts().then((resp) => {
            setProductsList([...resp.data])
        })
    }, []);

    return(
        <Container>
            <Head>
                <IoList className='icon'/>
                <h1>DrivenShoes</h1>
                <IoCart className='icon'onClick={() => {console.log(productsList)}} />
            </Head>
            <ProductsContainer>
                {productsList.map((element) =>  <Product element={element} />)}
            </ProductsContainer>
        </Container>
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
`

const ProductsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 115px;
`