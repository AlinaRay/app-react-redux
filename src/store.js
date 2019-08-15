import {createStore, combineReducers} from "redux";
import loadingReducer from './redux/loading';
import productsReducer from './redux/products';
import basketReducer from './redux/basket';

const reducer = (state = {}, action) => {
    return {
        isLoading: loadingReducer(state.isLoading, action),
        products: productsReducer(state.products, action),
        basketItems: basketReducer(state.basketItems, action)
    };
};

const reducer2 = combineReducers({
    isLoading: loadingReducer,
    products: productsReducer,
    basketItems: basketReducer,
});

const store = createStore(reducer2);
store.subscribe(()=> {
    console.log(store.getState());
});
export default store;