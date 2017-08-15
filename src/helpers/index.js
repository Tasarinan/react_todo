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
