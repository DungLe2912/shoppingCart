import * as types from '../constants/ActionTypes';

export const addToCart=(product,quantity)=>{
    type:types.ADD_TO_CART,
    product,
    quantity
}