import { combineReducers } from 'redux';
import category from './category';
import modal from './modal';

const todoApp = combineReducers({
    category,
    modal
});

export default todoApp;