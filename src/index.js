import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialState = {count: 0};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                count: state.count + action.value
            };
        case 'decrease':
            return {
                ...state,
                count: state.count - action.value
            };
        default:
            return state;
    }
};
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);

