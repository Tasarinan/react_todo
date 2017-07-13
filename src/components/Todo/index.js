import React from 'react';
import AppBar from 'material-ui/AppBar';

const Todo = ({match, categoryList}) => {
    const categoryId = Number(match.params.categoryId),
          todoId = Number(match.params.todoId);

    const todoItem = categoryList
        .filter(cat => cat.id === categoryId)
        .reduce((currentCategory) => currentCategory)
        .todos
        .filter(todo => todo.id === todoId)
        .reduce((currentTodo) => currentTodo);

    return (
        <div>
            <AppBar title={todoItem.title} />
        </div>
    );
};

export default Todo;
