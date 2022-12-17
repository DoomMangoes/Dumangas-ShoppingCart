import { ProductsWrapper, Title, CheckoutButton } from './Cart.styled';

import { ProductCard } from '../ProductCard';
import { useContext } from 'react';
import { CartContext } from '../useContext/cartContext';

export const Cart = () => {
  const {products, total} = useContext(CartContext);

  return (
    <>
      <Title>Your cart total is ${total}</Title>
      <ProductsWrapper>
      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsWrapper>

      </ProductsWrapper>


         
      <CheckoutButton onClick={() => console.log("Derp")}>
          <p>Checkout Items</p>
        </CheckoutButton>
    </>
  );
};