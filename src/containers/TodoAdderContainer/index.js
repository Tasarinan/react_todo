import React from 'react';
import { connect } from 'react-redux';
import ItemAdder from '../../components/ItemAdder';
import {addNewTask} from '../../actions';

const TodoAdder = (props) => {
    return (
        <ItemAdder placeholder={"Enter to add new task"} {...props}/>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: (newTaskTitle, categoryToAddTask) => {
            dispatch(addNewTask(newTaskTitle, categoryToAddTask))
        }
    }
};

const TodoAdderContainer = connect(
    null,
    mapDispatchToProps
)(TodoAdder);

export default TodoAdderContainer;