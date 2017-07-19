import React, {Component} from 'react';
import TodoItem from '../../components/TodoItem';

class TodoItemContainer extends Component {
	state = {newItemTitle: ""};

    handleTitleChange = (e) => {
        this.setState({newItemTitle: e.target.value});
    };

    handleSubmit = () => {
        const {editTask, id} = this.props;
        const {newItemTitle} = this.state;

        if(newItemTitle.trim()) editTask(id, newItemTitle);

        this.setState({newItemTitle: ""});
	};

    render() {
    	const {id, title, isCompleted, url} = this.props;

        return (
            <TodoItem
				id={id}
				title={title}
				isCompleted={isCompleted}
				url={url}
				handleTitleChange={this.handleTitleChange}
				handleSubmit={this.handleSubmit}
			/>
        );
    }
}

export default TodoItemContainer;
