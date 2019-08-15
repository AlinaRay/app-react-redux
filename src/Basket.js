import React from "react";
import {connect} from "react-redux";

const Basket = ({items}) => (
    <div>
        <h2>Basket: </h2>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.product.name}</li>
            ))}
        </ul>
    </div>
);

const mapState = (state) => ({
    items: state.basketItems,
});

export default connect(mapState)(Basket);