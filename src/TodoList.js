import React from 'react';
import {connect} from 'react-redux';

const TodoList = ({count, test}) => (
    <div>
        <h2> Todo list {count}</h2>
        <h3> {test}</h3>
    </div>
);

const mapState = (state) => ({
    count: state.count
});

export default connect(mapState)(TodoList);