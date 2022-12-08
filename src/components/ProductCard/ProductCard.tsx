import {
    AddButton,
    SubTitle,
    TextContainer,
    Title,
    Wrapper,
  } from './ProductCard.styled';
  
  import { Product } from '../../models';
  import { useState, useEffect, useContext} from 'react';
  import { CartContext } from "../useContext";
  
  export const ProductCard = ({ name, imageUrl, price }: Product) => {


    const {products, addToCart, removeItem} = useContext(CartContext);
    const [inCart, setInCart] = useState(false);

    const handleClick = () =>{
      const item = {name, imageUrl, price};

      if (inCart){

        removeItem(item);
        setInCart(false);
      }else{
      
        addToCart(item);
        setInCart(true);
      }

    };

    useEffect(() => {
      const checkCart = products.find((product: {name: string;})=> product.name === name);

      if(checkCart){
        setInCart(true);
      } else{
        setInCart(false);
      }
    }, [products, name]);

    return (
      <Wrapper background={imageUrl}>
        <AddButton isInCart={inCart} onClick={handleClick}>
          <p>{inCart? "-" : "+"}</p>
        </AddButton>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>{price}.00$</SubTitle>
        </TextContainer>
      </Wrapper>
    );
  };