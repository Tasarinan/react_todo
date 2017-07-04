import React, {Component} from 'react';

import ItemAdder from '../../components/ItemAdder';

class ItemAdderContainer  extends Component {
    state = {newItemTitle : ""};

	handleTitleChange = (e) => {
		const newItemTitle = e.target.value;
		this.setState({newItemTitle});
	};

	handleSubmit = (e) => {
        e.preventDefault();

		const {categoryId, addNewItem} = this.props;
		const newItemTitle = this.state.newItemTitle;

		if(newItemTitle.trim()) addNewItem(newItemTitle, categoryId);

		this.setState({newItemTitle: ""});
	};

	render() {
		return (
			<ItemAdder
				handleSubmit={this.handleSubmit}
				placeholder={this.props.placeholder}
				newItemTitle={this.state.newItemTitle}
				handleTitleChange={this.handleTitleChange}
			/>
		)
	}
}

export default ItemAdderContainer;
