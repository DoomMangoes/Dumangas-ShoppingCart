import { CartAction, CartActionType } from "./cartActions";
import { CartState } from "./cartState";

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

    case CartActionType.ADDWISH:
      return {
        ...state,
        wishItems: action.payload,
      };

    case CartActionType.REMOVEWISH:
      return {
        ...state,
        wishItems: action.payload,
      };

      case CartActionType.UPDATEQTY:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};