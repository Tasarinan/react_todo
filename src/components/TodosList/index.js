import React from 'react';
import './TodosList.css'

import TodoItemContainer from '../../containers/TodoItemContainer';

const TodosList = ({ todosList, ...props }) => (
	<ul className="TodosList">
		{todosList.map((item) =>
			<TodoItemContainer
				key={item.id}
				id={item.id}
				title={item.title}
				isCompleted={item.isCompleted}
				{...props }
			/>
		)}
	</ul>
);

export default TodosList;
