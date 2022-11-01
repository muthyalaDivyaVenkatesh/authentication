import { Button } from '@mui/material';
import styled from 'styled-components';

export function Card({imageUrl, name , description}){
    console.log("we are seeing the ImageUrl",imageUrl)
    return (
        <Div>
            <ImageTag src={imageUrl}/>
             <h4>{name}</h4>   
             <p>{description}</p> 
        </Div>
    )
}

export function ShoppingCard ({ imageUrl , name ,description, width, height, showButtons , price, cartHandler}){
    
    function addToCartHandler(event){
        cartHandler(event.target.value)
    }

    return(
        <div>
            <img src={imageUrl}  style={{width:width, height:height}}/>
            <h4>{name}</h4>
            <p>{description}</p>
            <h3>{price}</h3>
            {showButtons  && (<section style={{ flexDirection: 'column'}}>
               <Button  varient="contained" color="primary" onClick={addToCartHandler}>ADD to Cart</Button>
               <Button  varient="contained" color="secondary">Buy Now</Button>
               </section>)}
        </div>
    )
}

export default Card

const Div = styled.div`
  borderRadius: 10px;
  backgroundColor:#dbd8d0
`;

const ImageTag = styled.img`
 display: block;
 height:250px;
 width:250px

`