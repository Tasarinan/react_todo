import React from 'react';
import AppBar from 'material-ui/AppBar';
import './MainHeader.css';

import ShowFilterContainer from '../../containers/ShowFilterContainer';

const MainHeader = (props) =>
	<div className="MainHeader">
		<AppBar title="To-Do List" />
		<div className="NavWrapper">
			<ShowFilterContainer {...props}/>
		</div>
	</div>;

export default MainHeader;
