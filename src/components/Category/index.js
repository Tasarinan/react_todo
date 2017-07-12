import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom'

import './Category.css'

import CategoryTile from '../CategoryTile';
import TodoTile from '../TodoTile';


const Category = ({categoryList, addNewTask, ...restProps}) => (

    <div className="Category">
        <CategoryTile categoryList={categoryList} {...restProps} />
        <Switch>
            <Route path="/:categoryId"
                   render={routeProps => <TodoTile categoryList={categoryList} addNewTask={addNewTask} {...routeProps} />}
            />
            <Route render={() => (
                <p>Please select an todo item to see it subtasks</p>
            )}/>
        </Switch>
    </div>
);

export default Category;