import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import Category from '../Category';
import Todo from '../Todo';

const Dashboard = (props) => {
    return (
		<BrowserRouter>
			<Switch>
				<Route
					path="/:categoryId/:todoId/edit"
					render={ (routeProps) => (<Todo {...props} {...routeProps}/>) }
				/>
				<Route render={ () => <Category {...props}/> }/>
			</Switch>
		</BrowserRouter>
    );
};

export default Dashboard;
