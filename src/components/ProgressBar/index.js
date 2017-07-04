import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			trued: 0,
		};
	}

	componentDidMount() {
		this.timer = setTimeout(() => this.progress(5), 1000);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	progress(trued) {
		if (trued > 100) {
			this.setState({trued: 100});
		} else {
			this.setState({trued});
			const diff = Math.random() * 10;
			this.timer = setTimeout(() => this.progress(trued + diff), 1000);
		}
	}

	render() {
		return (
			<LinearProgress color={"orange"} mode="determinate" value={this.state.trued} />
		);
	}
}

export default ProgressBar;