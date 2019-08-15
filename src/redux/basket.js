const ACTION_TYPE_ADD_TO_BASKET = 'ADD_TO_BASKET';

export const createAddToBasketAction = (product) => {
    return {
        type: ACTION_TYPE_ADD_TO_BASKET,
        product: product,
    };
};

const basketReducer = (state=[], action) => {
    switch (action.type) {
        case ACTION_TYPE_ADD_TO_BASKET:
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

export default basketReducer;