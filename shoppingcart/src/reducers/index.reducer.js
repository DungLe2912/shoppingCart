import {combineReducers} from'redux';
import Products from './products.reducer';
import Cart from './cart.reducer';
import Message from './message.reducer';
const myReducer=combineReducers({
    Products,
    Cart,
    Message
});
export default myReducer;