import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import './TodoEdit.css';

class TodoEditContainer extends Component {
    state = {
        newItemTitle: this.props.todoItem.title,
        isCompleted: this.props.todoItem.isCompleted,
        newDescription: this.props.todoItem.description
    };

    handleTitleChange = (e) => {
        this.setState({newItemTitle: e.target.value});
    };

    handleIsCompletedChange = (e) => {
        this.setState({isCompleted: e.target.checked});
    };

    handleDescriptionChange = (e) => {
        this.setState({newDescription: e.target.value});
    };

    handleSubmit = () => {
        const { editTask, todoItem: { id } } = this.props;
        const {newItemTitle, isCompleted, newDescription} = this.state;

        if(newItemTitle.trim()) editTask(id, newItemTitle, isCompleted, newDescription);

        this.setState({newItemTitle: "", isCompleted: null});
    };

    render () {
        const {categoryId, todoItem: {isCompleted, title, description}} = this.props;

        return (
            <div className="TodoEdit">
                <div className="TodoEditTitle">
                    <span className="TodoEditSpan"> Please set the task name:</span>
                    <TextField
                        className="TodoEditTitleInput"
                        id="text-field-default"
                        defaultValue={title}
                        onChange={this.handleTitleChange}
                    />
                </div>
                <div className="TodoEditCheckboxWrap">
                    <input
                        type="checkbox"
                        style={{width: 'auto'}}
                        name="isCompleted"
                        defaultChecked={isCompleted}
                        onChange={this.handleIsCompletedChange}
                    />
                    <span>Completed</span>
                </div>
                <textarea
                    className="TodoEditTextarea"
                    defaultValue={description}
                    placeholder="Task description or a plan"
                    onChange={this.handleDescriptionChange}
                />
                <div className="TodoEditButtonsWrap">
                    <NavLink to={`/${categoryId}`} className="TodoEditButtonsWrap">
                        <RaisedButton
                            label="Save changes"
                            primary
                            className="TodoEditButton"
                            onClick={this.handleSubmit}
                        />
                    </NavLink>
                    <NavLink to={`/${categoryId}`} className="TodoEditButtonsWrap">
                        <RaisedButton
                            label="Cancel"
                            secondary
                            className="TodoEditButton"
                        />
                    </NavLink>

                </div>
            </div>
        );
    }
}
export default TodoEditContainer;