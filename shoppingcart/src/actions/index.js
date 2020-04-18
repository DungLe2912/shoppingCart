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
export const decreaseQuantity = (product) => {
    return {
        type: types.DECREASE_QUANTITY,
        product
    }
};
export const deleteCartItem = (product) => {
    return {
        type: types.DELETE_CART_ITEM,
        product
    }
};
export const changeMessage = (typeAction) => {
    return {
        type: types.DELETE_CART_ITEM,
        typeAction
    }
};