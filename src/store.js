import {createStore} from "redux";

const initialState = {
    isLoading: false,
    products: [],
    basketItems: [
        {id: 1, product: {name: 'test'}},
    ],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'FINISH_LOADING':
            return {
                ...state,
                isLoading: false,
            };
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products,
            };
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basketItems: [
                    ...state.basketItems,
                     {id: Date.now(), product: action.product}
                ],
            };
        default:
            return state;
    }
};

const store = createStore(reducer, initialState);
store.subscribe(()=> {
    console.log(store.getState());
});
export default store;