import React from 'react';
import './CategoryList.css'

import CategoryItemContainer from '../../containers/CategoryItemContainer';

const CategoryList = (props) => {
	const {categoryList, itemsToRender} = props;
	const listToRender = [];

    itemsToRender.map(item => categoryList.forEach(cat => {
		if(cat.id === item) listToRender.push(cat);
	}));

	return (
		<ul className="CategoryList">
			{listToRender.map(category =>
				<CategoryItemContainer
					key={category.id}
					title={category.title}
					id={category.id}
					subcategories={category.subcategories}
					{...props}
				/>
			)}
		</ul>
	);
};

CategoryList.propTypes = {

};

export default CategoryList;
