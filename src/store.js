import {createStore} from "redux";

const initialState = {count: 0};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

const store = createStore(reducer, initialState);

export default store;

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
