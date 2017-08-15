import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import {editTask} from '../../actions';

const TodoItemContainer = connect(
    null,
    {editTask}
)(TodoItem);

export default TodoItemContainer;