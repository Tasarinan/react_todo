import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import CategoryTile from '../../components/CategoryTile';
import TodoTile from '../../components/TodoTile';

const Dashboard = (props) => {

	const {categoryList, addNewTask, ...restProps} = props;

	return (
		<BrowserRouter>
			<div className="Dashboard">
				<CategoryTile categoryList={categoryList} {...restProps} />
				<Switch>
					<Route exact path="/:categoryId"
						   render={routeProps => <TodoTile categoryList={categoryList} addNewTask={addNewTask} {...routeProps} />}
					/>
					<Route path="/:todoId/edit" render={() => (
						<h2>Edit page</h2>
                    )}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default Dashboard;
