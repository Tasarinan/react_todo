import React from 'react';
import './CategoryTile.css';

import CategoryAdderContainer from '../../containers/CategoryAdderContainer';
import CategoryList from '../CategoryList';
import ModalDialogContainer from '../../containers/ModalDialogContainer';

const CategoryTile = ({categoryList, itemsToRender, addNewCategory, editCategory, deleteCategory, addNewSubcategory,
     modalConfig, getModalConfig, isModalOpen, handleModalOpen, shouldRenderCRUD, todoId, moveTaskToNewCategory}) => {

    return (
		<div className="CategoryTile">
			{shouldRenderCRUD && <CategoryAdderContainer/>}
			<CategoryList
				categoryList={categoryList}
				itemsToRender={itemsToRender}
				editCategory={editCategory}
				deleteCategory={deleteCategory}
				addNewSubcategory={addNewSubcategory}
				getModalConfig={getModalConfig}
				handleModalOpen={handleModalOpen}
				shouldRenderCRUD={shouldRenderCRUD}
				todoId={todoId}
				moveTaskToNewCategory={moveTaskToNewCategory}
			/>
            {/*{shouldRenderCRUD && <ModalDialogContainer*/}
				{/*deleteCategory={deleteCategory}*/}
				{/*editCategory={editCategory}*/}
				{/*addNewSubcategory={addNewSubcategory}*/}
				{/*modalConfig={modalConfig}*/}
				{/*isModalOpen={isModalOpen}*/}
				{/*handleModalOpen={handleModalOpen}*/}
			{/*/>}*/}
		</div>
    );
};

export default CategoryTile;
