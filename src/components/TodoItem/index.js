import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditIcon from 'material-ui/svg-icons/content/create';

import TextField from 'material-ui/TextField';

import './TodoItem.css'

const TodoItem = ({title}) =>  (
	<li className="TodoItem">
		<div className="TodoItemName">
			<input type="checkbox" name="" id=""/>
			<TextField
				className="TodoItemTitle"
				id="text-field-default"
				defaultValue={title}
			/>
		</div>
		<FloatingActionButton className="CategoryItemButton" backgroundColor={"#78909C"} mini>
			<EditIcon />
		</FloatingActionButton>
	</li>
);

export default TodoItem;
