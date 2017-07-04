import React, {Component} from 'react';

import data from '../../data/data.json';
import Dashboard from '../../components/Dashboard';

class DashboardContainer extends Component {
    constructor() {
        super();
        this.state = {
            categoryList: data,
            modalConfig: {
                itemTitle: "",
                focusedItem: null,
                mode: "",
                title: ""
            },
            isModalOpen: false,
        };
    }

    static createNewCategory(newTitle, isRoot) {
        return {
            id: Date.now(),
            title: newTitle,
            todos: [],
            root: isRoot,
            subcategories: []
        };
    }

    static createNewTask(newTitle) {
        return {
            id: Date.now(),
            title: newTitle,
            isCompleted: false
        };
    }

    addNewCategory = (newCategoryTitle) => {
        const newCategoryList = [DashboardContainer.createNewCategory(newCategoryTitle, true), ...this.state.categoryList];
        this.setState({categoryList: newCategoryList});
    };

    addNewSubcategory = (newSubcategoryTitle, categoryToAddSub) => {
        const newSubcategory = DashboardContainer.createNewCategory(newSubcategoryTitle, false);
        const newCategoryList = [newSubcategory, ...this.state.categoryList.map(category => {
            return category.id === categoryToAddSub
                ? Object.assign({}, category, {subcategories: [newSubcategory.id, ...category.subcategories]})
                : category
        })];
        this.setState({categoryList: newCategoryList});
    };

    editCategory = (newCategoryTitle, categoryToEdit) => {
        const newCategoryList = this.state.categoryList.map(category => {
            if(category.id === categoryToEdit) {
                category.title = newCategoryTitle
            }
            return category;
        });

        this.setState({categoryList: newCategoryList});
    };

    deleteCategory = (categoryToDelete) => {
        const newCategoryList = this.state.categoryList.map(category => {
            if(category.subcategories.includes(categoryToDelete)) {
                category.subcategories = category.subcategories.filter(sub => sub !== categoryToDelete);
            }
            return category;
        }).filter(category => category.id !== categoryToDelete);

        this.setState({categoryList: newCategoryList});
    };

    addNewTask = (newTaskTitle, categoryToAddTask) => {
        const newCategoryList = this.state.categoryList.map(category => {
            if(category.id === categoryToAddTask) {
                category.todos = [ ...category.todos, DashboardContainer.createNewTask(newTaskTitle)]
            }
            return category;
        });

        this.setState({categoryList: newCategoryList});
    };

    getModalConfig = (modalConfig) => this.setState({modalConfig});

    handleModalOpen = () => this.setState({isModalOpen: !this.state.isModalOpen});


    render() {
        const {categoryList, modalConfig, isModalOpen} = this.state;
        const itemsToRender = categoryList
            .filter(cat => cat.root)
            .map(cat => cat.id);

        return (
        	<Dashboard
				addNewCategory={this.addNewCategory}
				categoryList={categoryList}
				itemsToRender={itemsToRender}
				editCategory={this.editCategory}
				deleteCategory={this.deleteCategory}
				addNewSubcategory={this.addNewSubcategory}
                addNewTask={this.addNewTask}
				modalConfig={modalConfig}
				getModalConfig={this.getModalConfig}
				isModalOpen={isModalOpen}
				handleModalOpen={this.handleModalOpen}
			/>
        );
    }
}

export default DashboardContainer;