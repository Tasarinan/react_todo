import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditIcon from 'material-ui/svg-icons/content/create';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import './TodoItem.css';

class TodoItem extends Component {
	state = {
		newItemTitle: ""
	};

    handleTitleChange = (e) => {
        this.setState({newItemTitle: e.target.value});
    };

    handleSubmit = () => {
        const {editTask, id} = this.props;
        const {newItemTitle} = this.state;

        if(newItemTitle.trim()) editTask(newItemTitle, id);

        this.setState({newItemTitle: ""});
	};

    render() {
    	const {id, title, isCompleted, url} = this.props;
        return (
			<li className="TodoItem">
				<div className="TodoItemName">
					<Checkbox
						style={{width: 'auto'}}
						name="isCompleted"
						checked={isCompleted}
					/>
					<TextField
						className="TodoItemTitle"
						id="text-field-default"
						defaultValue={title}
						onChange={this.handleTitleChange}
						onBlur={this.handleSubmit}
					/>
				</div>
				<NavLink to={`${url}/${id}/edit`} activeClassName="selected">
					<FloatingActionButton className="CategoryItemButton" backgroundColor={"#78909C"} mini>
						<EditIcon >
						</EditIcon>
					</FloatingActionButton>
				</NavLink>
			</li>
        );
    }
}


export default TodoItem;
