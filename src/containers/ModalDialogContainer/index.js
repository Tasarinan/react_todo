import { connect } from 'react-redux';
import CRUDModal from '../../components/CRUDModal';
import {
    addNewSubcategory,
    editCategory,
    deleteCategory,
    //getModalConfig,
    openModal
} from '../../actions';

const mapStateToProps = (state) => {
    return {
        modalConfig: state.modalConfig,
        isModalOpen: state.isModalOpen,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewSubcategory: (newSubcategoryTitle, categoryToAddSub) => dispatch(addNewSubcategory(newSubcategoryTitle, categoryToAddSub)),
        editCategory: (newCategoryTitle, categoryToEdit) => dispatch(editCategory(newCategoryTitle, categoryToEdit)),
        deleteCategory: (categoryToDelete) => dispatch(deleteCategory(categoryToDelete)),
        // getModalConfig: (modalConfig) => dispatch(getModalConfig(modalConfig)) ,
        handleModalOpen: (isModalOpen) => dispatch(openModal(isModalOpen))
    }
};

const ModalDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CRUDModal);

export default ModalDialogContainer;