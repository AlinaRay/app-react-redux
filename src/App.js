import React from 'react';
import {getProducts} from './api';
import {connect} from 'react-redux';
import ProductList from './ProductList';
import Basket from './Basket';
import {setProducts} from './redux/products';
import {startLoading, finishLoading} from './redux/loading';


class App extends React.Component {
    async componentDidMount(){
        const {startLoading, finishLoading, setProducts} = this.props;
        startLoading();
        const products = await getProducts();
        finishLoading();
        setProducts(products);
    }
    render(){
        const {isLoading} = this.props;
        console.log('render');
        return (
            <div>
                <Header />
                <Basket />
                {isLoading ? <h2> Loading...</h2> : <ProductList />}
            </div>
        )
    }
};
const mapState = (state) => ({
    isLoading: state.isLoading,
});

const mapDispatch = (dispatch) => {
    return {
        startLoading: () => dispatch(startLoading()),
        finishLoading: () => dispatch(finishLoading()),
        setProducts: (products) => dispatch(setProducts(products)),
    }
};

export default connect(mapState, mapDispatch)(App);

const Header = ({ count }) => (
    <h1>Items count: {count}</h1>
);
