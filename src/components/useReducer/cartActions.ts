import { Product } from "../../models/Product";

export enum CartActionType {
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update',
    ADDWISH = 'addWishItem',
    REMOVEWISH = 'removeWishItem'
  }
  
  export type CartAction = {
    type: CartActionType;
    payload: any;
  };
  
  export const add = (product: Product): CartAction => ({
    type: CartActionType.ADD,
    payload: product,
  });
  
  export const remove = (product: Product): CartAction => ({
    type: CartActionType.REMOVE,
    payload: product,
  });

  export const update = (total: number): CartAction => ({
    type: CartActionType.UPDATE,
    payload: total,
  });

  export const addWishItem = (product: Product): CartAction => ({
    type: CartActionType.ADDWISH,
    payload: product,
  });
  
  export const removeWishItem = (product: Product): CartAction => ({
    type: CartActionType.REMOVEWISH,
    payload: product,
  });