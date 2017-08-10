import React from 'react';
import './CategoryList.css'

import CategoryItemContainer from '../../containers/CategoryItemContainer';

const CategoryList = (props) => {

	const {categoryList} = props;
    const itemsToRender = categoryList
        .filter(cat => cat.root)
        .map(cat => cat.id);

	const listToRender = [];

    itemsToRender.map(item => categoryList.forEach(cat => {
		if(cat.id === item) listToRender.push(cat);
	}));

	return (
		<ul className="CategoryList">
			{listToRender.map(category =>
				<CategoryItemContainer
					key={category.id}
					categoryTitle={category.title}
					categoryId={category.id}
					subcategories={category.subcategories}
					{...props}
				/>
			)}
		</ul>
	);
};

export default CategoryList;
