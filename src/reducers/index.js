import data from '../data/data.json';
import {
    ADD_NEW_CATEGORY,
    ADD_NEW_TASK
} from '../actions'
import { createNewCategory, createNewTask } from '../helpers';

const initialState = {
    categoryList: data,
};

const todoApp = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_NEW_CATEGORY:
            return Object.assign({}, state, {
                categoryList: [createNewCategory(action.newCategoryTitle, true), ...state.categoryList]
            });

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

export default todoApp;