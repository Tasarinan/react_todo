import { connect } from 'react-redux';
import CategoryItem from '../../components/CategoryItem';
import {
    addNewSubcategory,
    editCategory,
    deleteCategory,
    openModal,
    getModalConfig,
    moveTaskToNewCategory
} from '../../actions';

const mapStateToProps = (state) => {
    return {
        modalConfig: state.modal.modalConfig,
        isModalOpen: state.modal.isModalOpen,
    }
};
const CategoryItemContainer = connect(
    mapStateToProps,
    {
        addNewSubcategory,
        editCategory,
        deleteCategory,
        getModalConfig,
        handleModalOpen: openModal,
        moveTaskToNewCategory
    }
)(CategoryItem);

export default CategoryItemContainer;