import * as types from '../constants/ActionTypes';
import * as messageTypes from '../constants/Messages'
var initialState = messageTypes.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            state=messageTypes.MSG_ADD_TO_CART_SUCCESS;
            return [...state];
        case types.DELETE_CART_ITEM:
            state=messageTypes.MSG_DELETE_PRODUCT_IN_CART_SUCCESS;
            return [...state];
        case types.DECREASE_QUANTITY:
            state=messageTypes.MSG_UPDATE_CART_SUCCESS;
            return [...state];
        case types.INCREASE_QUANTITY:
            state=messageTypes.MSG_UPDATE_CART_SUCCESS;
            return [...state];
        default: return [...state];
    }
}
export default message;