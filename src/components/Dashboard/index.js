import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import CategoryTile from '../../components/CategoryTile';
import TodoTile from '../../components/TodoTile';

const Dashboard = ({
    addNewCategory,
    categoryList,
    itemsToRender,
    editCategory,
    deleteCategory,
    addNewSubcategory,
    addNewTask,
    modalConfig,
    getModalConfig,
    isModalOpen,
    handleModalOpen,
}) => {
	return (
		<Router>
			<div className="Dashboard">
				<CategoryTile
					addNewCategory={addNewCategory}
					categoryList={categoryList}
					itemsToRender={itemsToRender}
					editCategory={editCategory}
					deleteCategory={deleteCategory}
					addNewSubcategory={addNewSubcategory}
					modalConfig={modalConfig}
					getModalConfig={getModalConfig}
					isModalOpen={isModalOpen}
					handleModalOpen={handleModalOpen}
				/>
				<Route exact path="/:categoryId"
					   render={props => <TodoTile categoryList={categoryList} addNewTask={addNewTask} {...props} />}
				/>
				<Route path="/:todoId/edit" render={() => (
					<h2>Edit page</h2>
				)}/>
			</div>
		</Router>
	);
};

export default Dashboard;
