import * as types from '../constants/ActionTypes';

export const addToCart = (product,quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
};
export const increaseQuantity = (product) => {
    return {
        type: types.INCREASE_QUANTITY,
        product
    }
};