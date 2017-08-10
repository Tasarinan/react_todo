export const CHECK_COMPLETED_TODOS = 'CHECK_COMPLETED_TODOS';
export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const ADD_NEW_SUBCATEGORY = 'ADD_NEW_SUBCATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const MOVE_TASK_TO_NEW_CATEGORY = 'MOVE_TASK_TO_NEW_CATEGORY';
export const GET_MODAL_CONFIG = 'GET_MODAL_CONFIG';
export const OPEN_MODAL = 'OPEN_MODAL';
export const EXPAND_CATEGORY = 'EXPAND_CATEGORY';

export function checkCompleted(newIsShowDoneChecked) {
    return { type: CHECK_COMPLETED_TODOS, newIsShowDoneChecked }
}
export const addNewCategory = (newCategoryTitle) => {
    return { type: ADD_NEW_CATEGORY, newCategoryTitle }
};
export const addNewTask = (newTaskTitle, categoryToAddTask) => {
    return { type: ADD_NEW_TASK, newTaskTitle, categoryToAddTask }
};
