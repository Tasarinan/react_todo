import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditIcon from 'material-ui/svg-icons/content/create';
import TextField from 'material-ui/TextField';

import './TodoItem.css';

class TodoItem extends Component {
	state = {

	};

    handleTitleChange = (e) => {
        this.setState({newItemTitle: e.target.value});
    };

    render() {
        return (
			<li className="TodoItem">
				<div className="TodoItemName">
					<input type="checkbox" name="isCompleted" />
					<TextField
						className="TodoItemTitle"
						id="text-field-default"
						defaultValue={this.props.title}
					/>
				</div>
				<FloatingActionButton className="CategoryItemButton" backgroundColor={"#78909C"} mini>
					<EditIcon />
				</FloatingActionButton>
			</li>
        );
    }
}


export default TodoItem;
