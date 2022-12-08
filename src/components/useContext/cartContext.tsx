import { createContext } from "react";
import { CartState, initialState } from '../useReducer';

export const CartContext = createContext<CartState>(initialState);