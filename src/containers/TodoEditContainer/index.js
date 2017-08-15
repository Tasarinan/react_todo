import { connect } from 'react-redux';
import TodoEdit from '../../components/TodoEdit';
import {editTask} from '../../actions';

const TodoEditContainer = connect(
    null,
    {editTask}
)(TodoEdit);

export default TodoEditContainer;
