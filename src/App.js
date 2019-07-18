import React from 'react';

class App extends React.Component {
    state = {
        count: 0,
    };
    increase = () => {
       this.setState(prevState => ({
           count: prevState.count + 1
       }));
    };
    decrease = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    };
}
export default App;
