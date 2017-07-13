import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom'

import './Category.css'

import MainHeader from '../MainHeader'
import ProgressBar from "../ProgressBar";
import CategoryTile from '../CategoryTile';
import TodoTile from '../TodoTile';

const Category = ({categoryList, addNewTask, editTask, ...restProps}) => (
    <div>
        <MainHeader/>
        <ProgressBar/>
        <div className="Category">
            <CategoryTile categoryList={categoryList} {...restProps} />
            <Switch>
                <Route path="/:categoryId"
                       render={routeProps => <TodoTile categoryList={categoryList} addNewTask={addNewTask} editTask={editTask}{...routeProps} />}
                />
                <Route render={() => (
                    <p>Please select an todo item to see it subtasks</p>
                )}/>
            </Switch>
        </div>
    </div>
);

export default Category;