import React from "react";
import {connect} from 'react-redux';

const ProductList = ({products, addToBasket}) => (
    <div>
        <h2>Products: </h2>
        <ul>
            {products.map(good => (
                <li key={good.id}>
                    {good.name}
                    <button
                        type="button"
                        onClick={()=> addToBasket(good)}
                    >
                        Add
                    </button>
                </li>
            ))}
        </ul>
    </div>
);

const mapState = (state) => {
    return {
        products: state.products,
    }
};

const mapDispatch = (dispatch) => {
    return {
        addToBasket: (product) => dispatch({type: 'ADD_TO_BASKET', product:product }),
    }
};

export default connect(mapState, mapDispatch)(ProductList);