import {createStore} from "redux";

const initialState = {
    isLoading: false,
    products: [],
    basketItems: [
        {id: 1, product: {name: 'test'}, count: 2},
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
            const items = [...state.basketItems];
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
            return {
                ...state,
                basketItems: items,
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