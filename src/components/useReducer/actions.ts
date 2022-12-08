import { Product } from "../../models/Product";

export enum CartActionType {
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update',
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