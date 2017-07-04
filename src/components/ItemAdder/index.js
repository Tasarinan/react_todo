import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './ItemAdder.css';

class ItemAdder  extends Component {
	constructor(props) {
		super(props);
		this.state = {newItemTitle : ""};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTitleChange(e){
		const newItemTitle = e.target.value;
		this.setState({newItemTitle});
	}

	handleSubmit(){
		const {categoryId, addNewItem} = this.props;
		const newItemTitle = this.state.newItemTitle;

		if(newItemTitle.trim()) addNewItem(newItemTitle, categoryId);

		this.setState({newItemTitle: ""});
	}

	render() {
		return (
            <form className="ItemAdder">
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