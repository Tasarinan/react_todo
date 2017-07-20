import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import './TodoEdit.css';

class TodoEditContainer extends Component {

    handleSubmit = () => {
        const { editTask, todoItem: {id}} = this.props;
        const title = this.title.value;
        const isCompleted = this.isCompleted.checked;
        const description = this.description.value;

        editTask(id, title, isCompleted, description);
    };

    render () {
        const {categoryId, todoItem: {isCompleted, title, description}} = this.props;

        return (
            <div className="TodoEdit">
                <div className="TodoEditTitle">
                    <span className="TodoEditSpan"> Please set the task name:</span>
                    <input
                        type="text"
                        className="TodoEditTitleInput"
                        id="text-field-default"
                        defaultValue={title}
                        ref={(title) => this.title = title}
                    />
                </div>
                <div className="TodoEditCheckboxWrap">
                    <label  className="TodoEditCheckboxlabel">
                        <input
                            className="TodoEditCheckbox"
                            type="checkbox"
                            style={{width: 'auto'}}
                            name="isCompleted"
                            id="isCompleted"
                            defaultChecked={isCompleted}
                            ref={(isCompleted) => this.isCompleted = isCompleted}
                        />
                        Completed
                    </label>
                </div>
                <textarea
                    className="TodoEditTextarea"
                    defaultValue={description}
                    placeholder="Task description or a plan"
                    ref={(description) => this.description = description}
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