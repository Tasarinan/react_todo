import React from 'react';
import './TodoTile.css';

import TodoAdderContainer from '../../containers/TodoAdderContainer';
import TodosList from '../TodosList'

const TodoTile = ({match, categoryList}) => {
	const categoryId = Number(match.params.categoryId);
    const todosList = categoryList
        .filter(cat => cat.id === categoryId)
        .reduce((currentCategory) => currentCategory).todos;

	return (
		<div className="TodoTile">
			<TodoAdderContainer categoryId={categoryId}/>
			<TodosList todosList={todosList} url={match.url}/>
		</div>
	);
};

export default TodoTile;
