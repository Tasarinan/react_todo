import React from 'react';
import { NavLink } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import './TodoEdit.css';

const TodoEdit = ({ categoryId, editTask, todoItem: {id, title, isCompleted, description}}) => {

	const editedTask = {
		newTitle: null,
		newIsCompleted: null,
		newDescription: null
	};

	const handleSubmit = () => {
		const {newTitle, newIsCompleted, newDescription} = editedTask;

		editTask(id, newTitle.value, newIsCompleted.checked, newDescription.value);
	};

	return (
        <div className="TodoEdit">
            <h1 className="TodoEditMainTitle">Task details:</h1>
            <div className="TodoEditTitle">
                <span className="TodoEditSpan">Please set the task name:</span>
                <input
                    type="text"
                    className="TodoEditTitleInput"
                    id="text-field-default"
                    defaultValue={title}
                    ref={(title) => editedTask.newTitle = title}
                />
            </div>
            <div className="TodoEditCheckboxWrap">
                <label className="TodoEditCheckboxlabel">
                    <input
                        className="TodoEditCheckbox"
                        type="checkbox"
                        style={{width: 'auto'}}
                        name="isCompleted"
                        id="isCompleted"
                        defaultChecked={isCompleted}
                        ref={(isCompleted) => editedTask.newIsCompleted = isCompleted}
                    />
                    Completed
                </label>
            </div>
            <h3 className="TodoEditDescTitle">Commentary: </h3>
            <textarea
                className="TodoEditTextarea"
                defaultValue={description}
                placeholder="Task description or a plan"
                ref={(description) => editedTask.newDescription = description}
            />
            <div className="TodoEditButtonsWrap">
                <NavLink to={`/${categoryId}`} className="TodoEditButtonsWrap">
                    <RaisedButton
                        label="Save changes"
                        primary
                        className="TodoEditButton"
                        onClick={handleSubmit}
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
};

export default TodoEdit;