import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import UndoRedo from '../../components/UndoRedo';

const mapStateToProps = state => {
    return {
        canUndo: state.category.past.length > 0,
        canRedo: state.category.future.length > 0
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
};

const UndoRedoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo);

export default UndoRedoContainer;