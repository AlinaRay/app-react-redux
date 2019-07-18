import React from 'react';
import {connect} from 'react-redux';

// function createStore(reducer, initialState = {}) {
//     let callbacks = [];
//     let state = {...initialState};
//
//     return {
//         getState() {
//             //read state
//             return state;
//         },
//         subscribe(callback) {
//             //sabscribing for changing state
//             //saving funcs to the arr
//             callbacks.push(callback);
//         },
//         dispatch(action) {
//             //setState
//             state = reducer(state , action);
//             // start up of functions from arr
//             callbacks.forEach(f=>f());
//         },
//     }
// }

// store.subscribe(()=> {
//     // getting state
//     // it's like addEventListener
//     // subscription event
//     console.log(store.getState());
// });

class App extends React.Component {
    render() {
        // getting count from state
        const {count, increase, decrease} = this.props;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        )
    };
}

const mapStateToProp = (state) => {
    // return objects which will be added to the props of the component
    return {
        count: state.count
    };
};

const mapDispatchToProp = (dispatch) => {
    // binding callbacks to the component's props
    return {
        increase: () => dispatch({type: 'increase', value: 1}),
        decrease: () => dispatch({type: 'decrease', value: 1})
    };
};
const AppWithRedux = connect(mapStateToProp, mapDispatchToProp)(App);
export default AppWithRedux;
