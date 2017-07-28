import React from 'react';
import AppBar from 'material-ui/AppBar';
import CategoryTile from '../CategoryTile';
import TodoEdit from '../TodoEdit';
import { findCurrentItem } from '../../helpers'
import './Todo.css';

const Todo = ({match, categoryList, editTask, ...restProps}) => {
    const categoryId = Number(match.params.categoryId),
        todoId = Number(match.params.todoId);

    const todoItem = findCurrentItem(findCurrentItem(categoryList, categoryId).todos, todoId);

    return (
        <div>
            <AppBar title={`Task: ${todoItem.title}`} />
            <div className="TodoEditTile">
                <CategoryTile
                    categoryList={categoryList}
                    shouldRenderCRUD={false}
                    todoId={todoId}
                    {...restProps}
                />
                <TodoEdit
                    categoryId={categoryId}
                    todoItem={todoItem}
                    editTask={editTask}
                />
            </div>

        </div>
    );
};

export default Todo;
