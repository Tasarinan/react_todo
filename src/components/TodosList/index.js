import React from 'react';
import './TodosList.css'

import TodoItem from '../TodoItem';

const TodosList = ({ todosList, ...props }) => {

	return (
		<ul className="TodosList">
			{todosList.map((item) =>
				<TodoItem
					key={item.id}
					id={item.id}
					title={item.title}
				    isCompleted={item.isCompleted}
					{...props }
				/>
			)}
		</ul>
	);
};

export default TodosList;
