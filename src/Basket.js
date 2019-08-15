import React from "react";
import {connect} from "react-redux";

const Basket = ({items, addToBasket}) => (
    <div>
        <h2>Basket: </h2>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.product.name} -
                    <button>-</button>
                    {item.count}
                    <button onClick={()=> addToBasket(item.product)}>+</button>
                </li>
            ))}
        </ul>
    </div>
);

const mapState = (state) => ({
    items: state.basketItems,
});

const mapDispatch = (dispatch) => {
    return {
        addToBasket: (product) => dispatch({type: 'ADD_TO_BASKET', product:product }),
    }
};

export default connect(mapState, mapDispatch)(Basket);