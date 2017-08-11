import data from '../data/index';

import { createNewTask } from '../helpers';
import {
    ADD_NEW_TASK
} from '../actions';


const initialState = {
    categoryList: data,
};

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            const newCategoryList = state.categoryList.map(category => {
                if(category.id === action.categoryToAddTask) {
                    category.todos = [ ...category.todos, createNewTask(action.newTaskTitle)]
                }
                return category;
            });
            return Object.assign({}, state, {categoryList: newCategoryList});

        default:
            return state;
    }
};

export default todoReducer;
