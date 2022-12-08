import { CartAction, CartActionType } from "./actions";
import { CartState } from "./state";

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD:
      return {
        ...state,
        products: action.payload,
      };

    case CartActionType.REMOVE:
      return {
        ...state,
        products: action.payload,
      };

    case CartActionType.UPDATE:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};