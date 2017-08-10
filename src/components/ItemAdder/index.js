import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './ItemAdder.css';

class ItemAdder  extends Component {
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
			<form className="ItemAdder" onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="categoryAdder"
					id="categoryAdder"
					placeholder={this.props.placeholder}
					value={this.state.newItemTitle}
					onChange={this.handleTitleChange}
				/>
				<RaisedButton
					label="Add"
					primary
					onClick={this.handleSubmit}
				/>
			</form>
        )
    }
}

export default ItemAdder;