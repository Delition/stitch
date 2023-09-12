import styles from "./ctaBlock.module.scss";
export const getModeCtaBlock = (mode) => {
    switch (mode) {
        case 'gray':
            return styles['gray'];
        case 'violet':
            return styles['violet'];
        case 'dark':
            return styles['dark'];
        default:
            return '';
    }
};