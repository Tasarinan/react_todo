import React from 'react';
import AppBar from 'material-ui/AppBar';
import './MainHeader.css';

import ShowFilter from '../ShowFilter';

const MainHeader = (props) =>
	<div className="MainHeader">
		<AppBar title="To-Do List" />
		<div className="NavWrapper">
			<ShowFilter {...props}/>
		</div>
	</div>;

export default MainHeader;
