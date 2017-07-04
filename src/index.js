import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App/App';
import './index.css';

const Main = () => (
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
);

ReactDOM.render(
	<Main />,
	document.getElementById('root')
);