import React from "react";
import {connect} from 'react-redux';
import {addToBasket} from './redux/basket';

class ProductList extends React.Component {
    state = {
        currentProductId: null,
    };
    selectProduct = (productId) => {
        this.setState({
            currentProductId: productId,
        })
    };
    render() {
        const {products, addToBasket} = this.props;
        const {currentProductId} =this.state;
        return(
           <div>
               <h2>Products: </h2>
               <ul>
                   {products.map(good => (
                       <React.Fragment key={good.id}>
                           <li>
                               <span onClick={()=> this.selectProduct(good.id)}>{good.name}</span>
                               <button
                                   type="button"
                                   onClick={()=> addToBasket(good)}
                               >
                                   Add
                               </button>
                           </li>
                           {currentProductId === good.id && (
                               <li  style={{color: 'blue'}}>
                               {good.id} : {good.snippet}
                               </li>
                               )}
                       </React.Fragment>
                   ))}
               </ul>
           </div>
        )
    };
};

const mapState = (state) => {
    return {
        products: state.products,
    }
};

const mapDispatch = (dispatch) => {
    return {
        addToBasket: (product) => {
            dispatch(addToBasket(product));
        },
    };
};

export default connect(mapState, mapDispatch)(ProductList);