import React from 'react';
import AppBar from 'material-ui/AppBar';
import CategoryTile from '../CategoryTile';

const Todo = ({match, categoryList, ...restProps}) => {
    const categoryId = Number(match.params.categoryId),
          todoId = Number(match.params.todoId);

    const todoItem = categoryList
        .filter(cat => cat.id === categoryId)
        .reduce((currentCategory) => currentCategory)
        .todos.filter(todo => todo.id === todoId)
              .reduce((currentTodo) => currentTodo);

    return (
        <div>
            <AppBar title={`Task: ${todoItem.title}`} />
            <CategoryTile
                categoryList={categoryList}
                shouldRenderCRUD={false}
                {...restProps}
            />
        </div>
    );
};

export default Todo;
