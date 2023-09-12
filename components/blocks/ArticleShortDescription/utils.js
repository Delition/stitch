export const getCategoryClass = (theme) => {
    switch (theme) {
        case 'Red':
            return 'category_item_red';
        case 'Orange':
            return 'category_item_orange';
        case 'Violet':
            return 'category_item_violet';
        case 'Green':
            return 'category_item_green';
        case 'Blue':
            return 'category_item_blue';
        case 'Purple':
            return 'category_item_purple';
        default:
            return '';
    }
}