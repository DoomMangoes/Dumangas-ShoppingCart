import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { CartContext} from '../useContext';
import { useReducer } from 'react';
import { cartReducer, add, remove, update, cartInitialState, addWishItem,removeWishItem} from '../useReducer';
import { Product } from '../../models';
import { Wishlist } from '../Wishlist';


export const App = () => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
 
  const addToCart = (product: Product) => {
    const cart = cartState.products.concat(product);

    updateTotal(cart);

    cartDispatch( add(cart));
  };

  const addToWishlist = (product: Product) => {
    const wishlist = cartState.wishItems.concat(product);

  
    cartDispatch( addWishItem(wishlist));
  };


  const removeFromWishlist = (product: Product) => {
    const wishlist = cartState.wishItems.filter(
      (selectedProduct: Product) => selectedProduct.name !== product.name
    );
    updateTotal(wishlist);

    cartDispatch(removeWishItem(wishlist));
  };

  const removeItem = (product: Product) => {
    const cart = cartState.products.filter(
      (selectedProduct: Product) => selectedProduct.name !== product.name
    );
    updateTotal(cart);

    cartDispatch(remove(cart));
  };

  const updateTotal = (products: [] = []) => {
    let total = 0;
    products.forEach((product: { price: number; }) => (total = total + product.price));

    cartDispatch(update(total));
  };


  const cartValue = {
    total: cartState.total,
    products: cartState.products,
    wishItems: cartState.wishItems,
    addToCart,
    removeItem,
    addToWishlist,
    removeFromWishlist
    
  }

 

 
  return (
    <CartContext.Provider value ={cartValue}>

 
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
          <Link to ='/Wishlist'>Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Wishlist' element={<Wishlist />} />
        </Routes>
      </Wrapper>

    
    </CartContext.Provider>
  );
};