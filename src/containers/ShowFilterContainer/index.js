import { connect } from 'react-redux';
import ShowFilter from '../../components/ShowFilter';
import {checkCompleted} from '../../actions';

const ShowFilterContainer = connect(
    null,
    {checkCompleted}
)(ShowFilter);

export default ShowFilterContainer;
