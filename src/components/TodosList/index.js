import React from 'react';
import './TodosList.css';

import TodoItem from '../TodoItem';

const TodosList = ({ todosList, ...props }) => (
	<ul className="TodosList">
		{todosList.map((item) =>
			<TodoItem
				todoItem={item}
				key={item.id}
				{...props }
			/>
		)}
	</ul>
);

export default TodosList;
