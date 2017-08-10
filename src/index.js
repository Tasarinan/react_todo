import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App/App';
import './index.css';

const Main = () => (
	<Provider store={store} >
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>

);

ReactDOM.render(
	<Main />,
	document.getElementById('root')
);
