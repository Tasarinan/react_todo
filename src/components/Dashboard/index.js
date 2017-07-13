import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import Category from '../Category';

const Dashboard = (props) =>  (
	<BrowserRouter>
		<Switch>
			<Route path="/:todoId/edit" render={() => (
				<h2>Edit page</h2>
			)}/>
			<Route render={ () => <Category {...props}/> }/>
		</Switch>
	</BrowserRouter>
);

export default Dashboard;
