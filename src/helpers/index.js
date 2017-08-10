export const findCurrentItem = (list, itemId) => list.filter(item => item.id === itemId).reduce((currentItem) => currentItem);

export function createNewCategory (newTitle, isRoot) {
    return {
        id: Date.now(),
        title: newTitle,
        todos: [],
        root: isRoot,
        subcategories: []
    };
}

export function createNewTask(newTitle) {
    return {
        id: Date.now(),
        title: newTitle,
        isCompleted: false
    };
}

export const checkCompleted = (initialState, newIsShowDoneChecked) => {
    if(newIsShowDoneChecked) {
        const newCategoryList = initialState.categoryList.map(category => {
            category.todos = category.todos.filter(todo => todo.isCompleted);
            return category;
        });
        return {isShowDoneChecked: newIsShowDoneChecked, categoryList: newCategoryList}
    }

    return {isShowDoneChecked: newIsShowDoneChecked};
};

export const addNewCategory = (initialState, newCategoryTitle) => {
    const newCategoryList = [createNewCategory(newCategoryTitle, true), ...initialState.categoryList];
    return {categoryList: newCategoryList};
};

export const addNewSubcategory = (initialState, newSubcategoryTitle, categoryToAddSub) => {
    const newSubcategory = createNewCategory(newSubcategoryTitle, false);
    const newCategoryList = [newSubcategory, ...initialState.categoryList.map(category => {
        return category.id === categoryToAddSub
            ? Object.assign({}, category, {subcategories: [newSubcategory.id, ...category.subcategories]})
            : category
    })];
    return {categoryList: newCategoryList};
};

export const editCategory = (initialState, newCategoryTitle, categoryToEdit) => {
    const newCategoryList = initialState.categoryList.map(category => {
        if(category.id === categoryToEdit) {
            category.title = newCategoryTitle
        }
        return category;
    });

    return {categoryList: newCategoryList};
};

export const deleteCategory = (initialState, categoryToDelete) => {
    const newCategoryList = initialState.categoryList.map(category => {
        if(category.subcategories.includes(categoryToDelete)) {
            category.subcategories = category.subcategories.filter(sub => sub !== categoryToDelete);
        }
        return category;
    }).filter(category => category.id !== categoryToDelete);

    return {categoryList: newCategoryList};
};

export const addNewTask = (initialState, newTaskTitle, categoryToAddTask) => {
    const newCategoryList = initialState.categoryList.map(category => {
        if(category.id === categoryToAddTask) {
            category.todos = [ ...category.todos, createNewTask(newTaskTitle)]
        }
        return category;
    });

    return {categoryList: newCategoryList};
};

export const editTask = (initialState, taskToEdit, newTaskTitle, isCompleted, description) => {
    const newCategoryList = initialState.categoryList.map(category => {
        category.todos.map(todo => {
            if(todo.id === taskToEdit) {
                todo.title = newTaskTitle;
                todo.isCompleted = isCompleted;
                todo.description = description;
            }
            return todo;
        });
        return category;
    });

    return {categoryList: newCategoryList};
};

export const moveTaskToNewCategory = (initialState, categoryToAddNewTask, currentTask) => {

    let currentTodo;

    initialState.categoryList.forEach(category => category.todos.forEach(todo => {
        if(todo.id === currentTask) currentTodo = todo;
    }));

    const newCategoryList = initialState.categoryList.map(category => {
        category.todos = category.todos.filter(todo => todo.id !== currentTask);
        return category
    })
        .map(category => {
            if(category.id === categoryToAddNewTask) {
                category.todos.push(currentTodo);
            }
            return category;
        });

    return {categoryList: newCategoryList};
};

export const getModalConfig = (initialState, modalConfig) => ({modalConfig});
