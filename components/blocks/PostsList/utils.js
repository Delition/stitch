export const getBlogHeaderClass = (theme) => {
    switch (theme) {
        case 'Red':
            return 'content_header_red';
        case 'Orange':
            return 'content_header_orange';
            case 'Yellow':
            return 'content_header_yellow';
        case 'Violet':
            return 'content_header_violet';
        case 'Green':
            return 'content_header_green';
        case 'Blue':
            return 'content_header_blue';
            case 'Featured':
            return 'content_header_featured';
        default:
            return '';
    }
};