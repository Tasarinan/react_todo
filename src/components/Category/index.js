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

const Category = ({categoryList, isShowDoneChecked, checkCompleted, addNewTask, editTask, ...restProps}) => {
    const itemsToRender = categoryList
        .filter(cat => cat.root)
        .map(cat => cat.id);

    return (
        <div>
            <MainHeader
                categoryList={categoryList}
                isShowDoneChecked={isShowDoneChecked}
                checkCompleted={checkCompleted}
            />
            {/*<ProgressBar categoryList={categoryList}/>*/}
            <div className="Category">
                <CategoryTile
                    categoryList={categoryList}
                    shouldRenderCRUD
                    itemsToRender={itemsToRender}
                    {...restProps}
                />
                <Switch>
                    <Route path="/:categoryId"
                           render={routeProps => <TodoTile categoryList={categoryList} addNewTask={addNewTask} editTask={editTask} {...routeProps} />}
                    />
                    <Route render={() => (
                        <p>Please select an todo item to see it subtasks</p>
                    )}/>
                </Switch>
            </div>
        </div>
    )
};

export default Category;