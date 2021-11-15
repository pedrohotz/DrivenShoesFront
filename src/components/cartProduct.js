import { useState } from "react";
import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';
import swal from 'sweetalert';

export default function CartProduct({product, updateQtd, deleteProduct}){
    
    const [qtd, setQtd] = useState(product.qtd);
    let value = qtd*product.price;
    
    function changeQtd(e){
        e.preventDefault();
        updateQtd(product, qtd);
    }

    function removeProduct(){
        swal({
            title: "Tem certeza que deseja excluir o produto?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Produto excluído com sucesso", {
                icon: "success",
              });
              deleteProduct(product);
            }
          });
    }

    return (
        <Conteiner>
            <Left>
                <img src={product.url_image} alt=''/>
            </Left>
            <Right>
                <p>{product.name}</p>
                <h1>{product.description}</h1>
                <div>
                    <h2>QTD: </h2>
                    <form onSubmit={changeQtd}>
                        <input type='number' min="1" max='10' step="1" placeholder='qtd' value={qtd} onChange={e => setQtd(e.target.value)}/>
                        <input type='submit'/>
                    </form>
                </div>
                <h2>Total: {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
               
            </Right>
            <Icone>
                <BsTrash onClick={removeProduct} color='#eb4034'/>
            </Icone>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    background-color: #262525;
    width: 90vw;
    margin-top: 20px;
    border-radius: 5px;
    position: relative;
    display: flex;
    height: 150px;
    padding: 5px;

    
`;

const Left = styled.div`
    width: 45vw;
    
    img {
        width: 40vw;
        height: 140px;
        border-radius: 5px;
    }
`;

const Right = styled.div`
    width: 45vw;
    
    p{
        color: #fff;
        white-space: nowrap;
        width: 80%;
        overflow: hidden;
        height: 20px; 
        text-overflow: ellipsis;
    }

    h1{
        color: #fff;
        width: 100%;
        overflow: hidden;
        height: 60px;
        font-size: 15px;
    }
    
    div{
        display: flex;
        margin-top: 5px;
        align-items: center
        justify-content: center;

        input{
            margin-top: 5px;
            width: 50px;
            height: 25px;
            margin-left: 5px;

            ::placeholder{
                font-size: 15px;
                color: #fff;
            }

        }
        h2{
            font-size: 15px;
            color: #fff;
        }
    }

    h2{
        margin-top: 10px;
        font-size: 15px;
        color: #fff;
    }
`;

const Icone = styled.div`
    position: absolute;
    right: 2%;

    ::hover{
        cursor: pointer;
    }
`