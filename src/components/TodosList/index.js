import React from 'react';
import './TodosList.css'

import TodoItem from '../TodoItem';

const TodosList = ({ categoryList, categoryId }) => {

    const todosList = categoryList
		.filter(cat => cat.id === categoryId)
        .reduce((currentCategory) => currentCategory).todos;

	return (
		<ul className="TodosList">
			{todosList.map((item) =>
				<TodoItem
					item={item}
					key={item.id}
					title={item.title}
				    isCompleted={item.isCompleted}
				/>
			)}
		</ul>
	);
};

export default TodosList;
