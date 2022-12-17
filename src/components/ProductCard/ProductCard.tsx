import {
    AddButton,
    SubTitle,
    TextContainer,
    Title,
    WishlistButton,
    Wrapper,
  } from './ProductCard.styled';
  
  import { Product } from '../../models';
  import { useState, useEffect, useContext} from 'react';
  import { CartContext} from "../useContext";
  import {FaGift} from 'react-icons/fa';
  
  export const ProductCard = ({ name, imageUrl, price, quantity }: Product) => {

    
    const {products, wishItems, addToCart, removeItem,addToWishlist,removeFromWishlist} = useContext(CartContext);
    const [inCart, setInCart] = useState(false);
    const [inWishlist, setInWishlist] = useState(false);

    const handleCartClick = () =>{
      const item = {name, imageUrl, price, quantity};

      if (inCart){
        item.quantity = 0;
        removeItem(item);
        setInCart(false);
      }else{
        item.quantity = 1;
        addToCart(item);
        setInCart(true);
      }

    };

    const handleWishlistClick = () =>{
      const item = {name, imageUrl, price, quantity};

      if (inWishlist){

        removeFromWishlist(item);
        setInWishlist(false);
      }else{
      
        addToWishlist(item);
        setInWishlist(true);
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

    useEffect(() => {
      const checkWishlist = wishItems.find((product: {name: string;})=> product.name === name);

      if(checkWishlist){
        setInWishlist(true);
      } else{
        setInWishlist(false);
      }
    }, [wishItems, name]);

   
    return (
      <Wrapper background={imageUrl}>
        <AddButton isInCart={inCart} onClick={handleCartClick}>
          <p>{inCart? "-" : "+"}</p>
        </AddButton>
        <WishlistButton isInWishlist={inWishlist} onClick={handleWishlistClick}>
          <p><FaGift /></p>
        </WishlistButton>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>{price}.00$</SubTitle>
        </TextContainer>
      </Wrapper>
    );
  };