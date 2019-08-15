import {createStore} from "redux";

const initialState = {
    isLoading: false,
    products: [],
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
        default:
            return state;
    }
};

const store = createStore(reducer, initialState);
store.subscribe(()=> {
    console.log(store.getState());
});
export default store;