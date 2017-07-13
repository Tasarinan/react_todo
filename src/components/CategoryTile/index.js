import React from 'react';
import './CategoryTile.css';

import ItemAdderContainer from '../../containers/ItemAdderContainer';
import CategoryList from '../CategoryList';
import ModalDialogContainer from '../../containers/ModalDialogContainer';

const CategoryTile = ({categoryList, itemsToRender, addNewCategory, editCategory, deleteCategory, addNewSubcategory,
     modalConfig, getModalConfig, isModalOpen, handleModalOpen, shouldRenderCRUD}) => {

    return (
		<div className="CategoryTile">
			{shouldRenderCRUD && <ItemAdderContainer
				addNewItem={addNewCategory}
				placeholder={"Enter Category Title"}
			/>}
			<CategoryList
				categoryList={categoryList}
				itemsToRender={itemsToRender}
				editCategory={editCategory}
				deleteCategory={deleteCategory}
				addNewSubcategory={addNewSubcategory}
				getModalConfig={getModalConfig}
				handleModalOpen={handleModalOpen}
				shouldRenderCRUD={shouldRenderCRUD}
			/>
            {shouldRenderCRUD && <ModalDialogContainer
				deleteCategory={deleteCategory}
				editCategory={editCategory}
				addNewSubcategory={addNewSubcategory}
				modalConfig={modalConfig}
				isModalOpen={isModalOpen}
				handleModalOpen={handleModalOpen}
			/>}
		</div>
    );
};

export default CategoryTile;
