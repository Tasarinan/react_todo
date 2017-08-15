import { connect } from 'react-redux';
import CRUDModal from '../../components/CRUDModal';
import {
    addNewSubcategory,
    editCategory,
    deleteCategory,
    openModal
} from '../../actions';

const mapStateToProps = (state) => {
    return {
        modalConfig: state.modalConfig,
        isModalOpen: state.isModalOpen,
    }
};

const ModalDialogContainer = connect(
    mapStateToProps,
    {
        addNewSubcategory,
        editCategory,
        deleteCategory,
        handleModalOpen: openModal,
    }
)(CRUDModal);

export default ModalDialogContainer;