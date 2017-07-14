import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import './TodoEdit.css';

class TodoEditContainer extends Component {
    state = {newItemTitle: ""};

    handleTitleChange = (e) => {
        this.setState({newItemTitle: e.target.value});
    };

    handleSubmit = () => {
        const { editTask, todoItem: { id } } = this.props;
        const {newItemTitle} = this.state;

        if(newItemTitle.trim()) editTask(newItemTitle, id);

        this.setState({newItemTitle: ""});
    };

    render () {
        const {categoryId, todoItem: {isCompleted, title}} = this.props;

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
                    <Checkbox
                        style={{width: 'auto'}}
                        name="isCompleted"
                        checked={isCompleted}
                    />
                    <span>Completed</span>
                </div>
                <textarea className="TodoEditTextarea" placeholder="Task description or a plan"/>
                <div className="TodoEditButtonsWrap">
                    <NavLink to={`${categoryId}`} className="TodoEditButtonsWrap">
                        <RaisedButton
                            label="Save changes"
                            primary
                            className="TodoEditButton"
                            onClick={this.handleSubmit}
                        />
                    </NavLink>
                    <RaisedButton
                        label="Cancel"
                        secondary
                        className="TodoEditButton"
                    />
                </div>
            </div>
        );
    }
}
export default TodoEditContainer;