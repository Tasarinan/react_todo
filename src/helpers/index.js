export function findCurrentItem(list, itemId) {
    return list.filter(item => item.id === itemId)
        .reduce((currentItem) => currentItem)
}
