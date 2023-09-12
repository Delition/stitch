export const getBackgroundColor = (mode) => {
    switch (mode) {
        case 'gray':
            return 'background_gray';
        case 'Violet':
            case 'violet':
            return 'background_violet';
        default:
            return '';
    }
};