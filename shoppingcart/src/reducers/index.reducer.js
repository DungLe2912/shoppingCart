import {combineReducers} from'redux';
import Products from './products.reducer';
import Cart from './cart.reducer';
const myReducer=combineReducers({
    Products,
    Cart,
});
export default myReducer;