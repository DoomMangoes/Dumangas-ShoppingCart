import { ProductsWrapper, Title } from './Wishlist.styled';

import { ProductCard } from '../ProductCard';
import { useContext } from 'react';
import { CartContext } from '../useContext/cartContext';

export const Wishlist = () => {
  const {wishItems} = useContext(CartContext);

  return (
    <>
      <Title>Your Wishlist Items:</Title>
      <ProductsWrapper>
      {wishItems.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsWrapper>
    </>
  );
};