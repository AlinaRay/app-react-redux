import React from 'react';
import {getProducts} from './api';
import {connect} from 'react-redux';
import ProductList from './ProductList'
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
        startLoading: () => dispatch({type: 'START_LOADING'}),
        finishLoading: () => dispatch({type: 'FINISH_LOADING'}),
        setProducts: (products) => dispatch({type: 'SET_PRODUCTS', products: products}),
    }
}
export default connect(mapState, mapDispatch)(App);

const Header = ({ count }) => (
    <h1>Items count: {count}</h1>
);

const Basket = ({basketItems = []}) => (
    <ul>
        {basketItems.map(item => (
            <li key={item.id}>{item.product.name}</li>
        ))}
    </ul>
);
