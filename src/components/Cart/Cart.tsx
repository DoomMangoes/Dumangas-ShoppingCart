import { ProductsWrapper, Title, CheckoutButton, CartItem, QuantityDiv, QuantityButton } from './Cart.styled';

import { ProductCard } from '../ProductCard';
import { useContext} from 'react';
import { CartContext } from '../useContext/cartContext';
import { Product } from '../../models';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {products, total, updateQuantity} = useContext(CartContext);
  const nav = useNavigate();

  const handleAdd = (product: Product) =>{
    
    product.quantity += 1;
    updateQuantity(product);
  }

  const handleSubtract = (product: Product) =>{
    if(product.quantity > 1){
       product.quantity -= 1;
    updateQuantity(product);

    }
  }

  return (
    <>
      <Title>Your cart total is ${total}</Title>
      <ProductsWrapper>
      <ProductsWrapper>
        {products.map((product, index) => (
          <CartItem key={index}>
          <ProductCard  {...product} />
          <QuantityDiv>
          <QuantityButton onClick={() => handleSubtract(product)}>
          <p>-</p>
          </QuantityButton>
          <p>{product.quantity}</p>
          <QuantityButton onClick={() => handleAdd(product)}>
          <p>+</p>
          </QuantityButton>

          </QuantityDiv>

          </CartItem>
        ))}
      </ProductsWrapper>

      </ProductsWrapper>


         
      {total != 0 && <CheckoutButton onClick={() =>nav('/CheckOut')}>
          <p>Checkout Items</p>
        </CheckoutButton>
       }
    </>
  );
};