import {createStore} from "redux";
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

const store = createStore(reducer);
store.subscribe(()=> {
    console.log(store.getState());
});
export default store;