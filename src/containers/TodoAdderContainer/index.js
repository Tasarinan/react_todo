import React from 'react';
import { connect } from 'react-redux';
import ItemAdder from '../../components/ItemAdder';
import {addNewTask} from '../../actions';

const TodoAdder = (props) => {
    return (
        <ItemAdder placeholder={"Enter to add new task"} {...props}/>
    );
};

const TodoAdderContainer = connect(
    null,
    {addNewItem: addNewTask}
)(TodoAdder);

export default TodoAdderContainer;