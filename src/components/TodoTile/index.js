import React from 'react';
import './TodoTile.css';

import ItemAdder from '../ItemAdder';
import TodosList from '../TodosList'

const TodoTile = ({match, categoryList, addNewTask}) => {
	const categoryId = +match.params.categoryId;

	return (
		<div className="TodoTile">
			<ItemAdder placeholder={"Enter to add new task"} addNewItem={addNewTask} categoryId={categoryId}/>
			<TodosList categoryList={categoryList} categoryId={categoryId}/>
		</div>
	);
};

export default TodoTile;


// addNewTask(,)