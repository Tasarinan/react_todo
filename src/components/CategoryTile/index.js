import React from 'react';
import './CategoryTile.css';

import CategoryAdderContainer from '../../containers/CategoryAdderContainer';
import CategoryList from '../CategoryList';
import ModalDialogContainer from '../../containers/ModalDialogContainer';

const CategoryTile = ({categoryList, itemsToRender, shouldRenderCRUD, todoId, moveTaskToNewCategory}) => {

    return (
		<div className="CategoryTile">
			{shouldRenderCRUD && <CategoryAdderContainer/>}
			<CategoryList
				categoryList={categoryList}
				itemsToRender={itemsToRender}
				shouldRenderCRUD={shouldRenderCRUD}
				todoId={todoId}
				moveTaskToNewCategory={moveTaskToNewCategory}
			/>
            {shouldRenderCRUD && <ModalDialogContainer/>}
		</div>
    );
};

export default CategoryTile;
