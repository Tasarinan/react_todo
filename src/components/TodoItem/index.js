import React from 'react';
import { NavLink } from 'react-router-dom';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditIcon from 'material-ui/svg-icons/content/create';

import './TodoItem.css';

const TodoItem = ({editTask, url, todoItem: {id, title, isCompleted, description}}) =>  {

	const editedTask = {
		newTitle: null,
		newIsCompleted: null
	};

	const handleSubmit = () => {
		const {newTitle, newIsCompleted} = editedTask;

		editTask(id, newTitle.value, newIsCompleted.checked, description);
	};

	return (
	<li className="TodoItem">
		<div className="TodoItemName">
			<input
				className="TodoEditCheckbox"
				type="checkbox"
				style={{width: 'auto'}}
				name="isCompleted"
				id="isCompleted"
				defaultChecked={isCompleted}
				ref={(isCompleted) => editedTask.newIsCompleted = isCompleted}
				onBlur={handleSubmit}
			/>
			<input
				type="text"
				className="TodoEditTitleInput"
				id="text-field-default"
				defaultValue={title}
				ref={(title) => editedTask.newTitle = title}
			    onBlur={handleSubmit}
			/>
		</div>
		<NavLink to={`${url}/${id}/edit`} activeClassName="selected">
			<FloatingActionButton className="CategoryItemButton" backgroundColor={'#78909C'} mini>
				<EditIcon />
			</FloatingActionButton>
		</NavLink>
	</li>
)};

export default TodoItem;
