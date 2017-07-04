import React from 'react';
import AppBar from 'material-ui/AppBar';
import './MainHeader.css';

import ShowFilter from '../ShowFilter';
import PageSearch from '../PageSearch';

const MainHeader = () =>
	<div className="MainHeader">
		<AppBar title="To-Do List" />
		<div className="NavWrapper">
			<ShowFilter/>
			<PageSearch/>
		</div>
	</div>;

export default MainHeader;
