export const getFeaturedHeaderClass = (theme) => {
    switch (theme) {
        case 'Red':
            return 'featured_header_red';
        case 'Orange':
            return 'featured_header_orange';
        case 'Violet':
            return 'featured_header_violet';
        case 'Green':
            return 'featured_header_green';
        case 'Blue':
            return 'featured_header_blue';
        case 'Featured':
            return 'featured_category';
            case 'Yellow':
            return 'featured_header_yellow';
        default:
            return 'content_header';
    }
};

export const getCategoryClass = (theme) => {
    switch (theme) {
        case 'Red':
            return 'category_item_red';
        case 'Orange':
            return 'category_item_orange';
            case 'Yellow':
            return 'category_item_yellow';
        case 'Violet':
            return 'category_item_violet';
        case 'Green':
            return 'category_item_green';
        case 'Blue':
            return 'category_item_blue';
            case 'Purple':
            return 'category_item_purple';
        case 'Featured':
            return 'category_item_featured';
        default:
            return '';
    }
}

export const ALL_CATEGORY = {
    Name: 'All posts',
    Theme: 'Purple'
};