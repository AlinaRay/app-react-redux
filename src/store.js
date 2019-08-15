import {createStore} from "redux";

const initialState = {
    isLoading: false,
    products: [],
    basketItems: [],
};

const basketReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            const items = [...state];
            const index = items.findIndex(item =>
                item.product.id === action.product.id);

            if (index > -1) {
                items[index] = {
                    ...items[index],
                    count: items[index].count + 1,
                };
            } else {
                items.push({
                    id: Date.now(),
                    product: action.product,
                    count: 1,
                });
            }
            return items;
        default:
            return state;
    }
} ;

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return true;
        case 'FINISH_LOADING':
            return false;
        default:
            return state;
    }
};

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return action.products;
        default:
            return state;
    }
};

const reducer = (state = {}, action) => {
    return {
        isLoading: loadingReducer(state.isLoading, action),
        products: productsReducer(state.products, action),
        basketItems: basketReducer(state.basketItems, action)
    };
};

const store = createStore(reducer, initialState);
store.subscribe(()=> {
    console.log(store.getState());
});
export default store;