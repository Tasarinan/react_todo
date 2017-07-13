import React from 'react';
import './TodoTile.css';

import ItemAdderContainer from '../../containers/ItemAdderContainer';
import TodosList from '../TodosList'

const TodoTile = ({match, categoryList, addNewTask, editTask}) => {
	const categoryId = Number(match.params.categoryId);
    const todosList = categoryList
        .filter(cat => cat.id === categoryId)
        .reduce((currentCategory) => currentCategory).todos;

	return (
		<div className="TodoTile">
			<ItemAdderContainer placeholder={"Enter to add new task"} addNewItem={addNewTask}  categoryId={categoryId}/>
			<TodosList todosList={todosList} editTask={editTask}/>
		</div>
	);
};

export default TodoTile;
