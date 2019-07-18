import React from 'react';
import {connect} from 'react-redux';
import TodoList from  './TodoList';

const App = ({count, increase, decrease}) => (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <TodoList test={'test'}/>
    </div>
);

const increaseAction = {type: 'increase'};
const decreaseAction = {type: 'decrease'};

const mapState = (state) => ({
    // return objects which will be added to the props of the component
    count: state.count
});
const mapDispatch = (dispatch) => ({
    // binding callbacks to the component's props
    increase: () => dispatch(increaseAction),
    decrease: () => dispatch(decreaseAction)
});

export default connect(mapState, mapDispatch)(App);

// function connect(mapStateToProps, mapDispatchToProps) {
//     return (Component) =>  {
//         const extraProps = {
//             ...mapStateToProps(store.getState()),
//             ...mapDispatchToProps(store.dispatch())
//         };
//         return () => {
//             <Component {...extraProps} />
//         };
//     };
// }

// store.subscribe(()=> {
//     // getting state
//     // it's like addEventListener
//     // subscription event
//     console.log(store.getState());
// });
