import React from 'react';
import AppBar from 'material-ui/AppBar';
import CategoryTile from '../CategoryTile';
import TodoEditContainer from '../../containers/TodoEditContainer';
import { findCurrentItem } from '../../helpers'
import './Todo.css';

const Todo = ({match, categoryList, editTask, ...restProps}) => {
    const itemsToRender = categoryList
        .filter(cat => cat.root)
        .map(cat => cat.id);

    const categoryId = Number(match.params.categoryId),
        todoId = Number(match.params.todoId);

    const currentCategory = findCurrentItem(categoryList, categoryId);
    const todoItem = findCurrentItem(currentCategory.todos, todoId);

    return (
        <div>
            <AppBar title={`Task: ${todoItem.title}`} />
            <div className="TodoEditTile">
                <CategoryTile
                    categoryList={categoryList}
                    itemsToRender={itemsToRender}
                    shouldRenderCRUD={false}
                    todoId={todoId}
                    {...restProps}
                />
                <TodoEditContainer
                    categoryId={categoryId}
                    todoItem={todoItem}
                />
            </div>

        </div>
    );
};

export default Todo;
