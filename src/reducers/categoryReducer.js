import data from '../data/index';

import { createNewCategory } from '../helpers';
import {
    ADD_NEW_CATEGORY,
    ADD_NEW_SUBCATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY
} from '../actions';


const initialState = {
    categoryList: data,
};

const categoryReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_NEW_CATEGORY:
            return Object.assign({}, state, {
                categoryList: [createNewCategory(action.newCategoryTitle, true), ...state.categoryList]
            });
        case ADD_NEW_SUBCATEGORY:
            return Object.assign({}, state, {
                categoryList: [createNewCategory(action.newCategoryTitle, true), ...state.categoryList]
            });
        case EDIT_CATEGORY:
            return Object.assign({}, state, {
                categoryList: [createNewCategory(action.newCategoryTitle, true), ...state.categoryList]
            });
        case DELETE_CATEGORY:
            return Object.assign({}, state, {
                categoryList: [createNewCategory(action.newCategoryTitle, true), ...state.categoryList]
            });

        default:
            return state;
    }
};

export default categoryReducer;