import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { CartContext } from '../useContext';
import { useReducer } from 'react';
import { cartReducer, add, remove, update, initialState } from '../useReducer';
import { Product } from '../../models';

export const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product) => {
    const cart = state.products.concat(product);

    updateTotal(cart);

    dispatch( add(cart));
  }

  const removeItem = (product: Product) => {
    const cart = state.products.filter(
      (selectedProduct: Product) => selectedProduct.name !== product.name
    );
    updateTotal(cart);

    dispatch(remove(cart));
  };

  const updateTotal = (products: [] = []) => {
    let total = 0;
    products.forEach((product: { price: number; }) => (total = total + product.price));

    dispatch(update(total));
  };


  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeItem
  }


  return (
    <CartContext.Provider value ={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
        </LinksWrapper>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Wrapper>

    </CartContext.Provider>
  );
};