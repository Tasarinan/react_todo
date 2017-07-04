import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';

class ShowFilter extends Component {
	render() {
		return (
			<div className="ShowFilter">
				<Checkbox
					label="Show Done"
				/>
			</div>
		);
	}
}

export default ShowFilter;