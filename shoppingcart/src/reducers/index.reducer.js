import {combineReducers} from'redux';
import Products from './products.reducer';
const myReducer=combineReducers({
    Products,
});
export default myReducer;