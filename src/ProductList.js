import React from "react";
import {connect} from 'react-redux';

const ProductList = ({products = []}) => (
    <ul>
        {products.map(good => (
            <li key={good.id}>
                {good.name}
            </li>
        ))}
    </ul>
);
const mapState = (state) => {
    return {
        products: state.products,
    }
};

export default connect(mapState)(ProductList);