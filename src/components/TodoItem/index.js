import React from 'react';
import { NavLink } from 'react-router-dom';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditIcon from 'material-ui/svg-icons/content/create';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import './TodoItem.css';

const TodoItem = ({id, title, isCompleted, url, handleTitleChange, handleSubmit}) =>  (
	<li className="TodoItem">
		<div className="TodoItemName">
			<Checkbox
				style={{width: 'auto'}}
				name="isCompleted"
				checked={isCompleted}
				disabled
			/>
			<TextField
				className="TodoItemTitle"
				id="text-field-default"
				defaultValue={title}
				onChange={handleTitleChange}
				onBlur={handleSubmit}
			/>
		</div>
		<NavLink to={`${url}/${id}/edit`} activeClassName="selected">
			<FloatingActionButton className="CategoryItemButton" backgroundColor={"#78909C"} mini>
				<EditIcon />
			</FloatingActionButton>
		</NavLink>
	</li>
);

export default TodoItem;
