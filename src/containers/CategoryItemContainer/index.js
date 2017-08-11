import { connect } from 'react-redux';
import CategoryItem from '../../components/CategoryItem';
import {
    addNewSubcategory,
    editCategory,
    deleteCategory,
    openModal,
    getModalConfig
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
        getModalConfig: (modalConfig) => dispatch(getModalConfig(modalConfig)),
        handleModalOpen: (isModalOpen) => dispatch(openModal(isModalOpen))
    }
};

const CategoryItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryItem);

export default CategoryItemContainer;