import React from 'react';
import './TodosList.css';

import TodoItemContainer from '../../containers/TodoItemContainer';

const TodosList = ({ todosList, ...props }) => (
	<ul className="TodosList">
		{todosList.map((item) =>
			<TodoItemContainer
				todoItem={item}
				key={item.id}
				{...props }
			/>
		)}
	</ul>
);

export default TodosList;
