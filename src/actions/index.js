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

export function checkCompleted(newIsShowDoneChecked) {
    return { type: CHECK_COMPLETED_TODOS, newIsShowDoneChecked }
}
export const addNewCategory = (newCategoryTitle) => {
    return { type: ADD_NEW_CATEGORY, newCategoryTitle }
};
export const addNewSubcategory = (newSubcategoryTitle, categoryToAddSub) => {
    return { type: ADD_NEW_SUBCATEGORY, newSubcategoryTitle, categoryToAddSub }
};
export const editCategory = (newCategoryTitle, categoryToEdit) => {
    return { type: EDIT_CATEGORY, newCategoryTitle, categoryToEdit }
};
export const deleteCategory = (categoryToDelete) => {
    return { type: DELETE_CATEGORY, categoryToDelete }
};
export const addNewTask = (newTaskTitle, categoryToAddTask) => {
    return { type: ADD_NEW_TASK, newTaskTitle, categoryToAddTask }
};
export const editTask = (taskToEdit, newTaskTitle, isCompleted, description) => {
    return { type: EDIT_TASK, taskToEdit, newTaskTitle, isCompleted, description }
};
export const moveTaskToNewCategory = (categoryToAddNewTask, currentTask) => {
    return { type: MOVE_TASK_TO_NEW_CATEGORY, categoryToAddNewTask, currentTask }
};
export const getModalConfig = (modalConfig) => {
    return { type: GET_MODAL_CONFIG, modalConfig }
};
export const openModal = () => {
    return { type: OPEN_MODAL }
};
