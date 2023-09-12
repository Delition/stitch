import styles from "./faqBlock.module.scss";
export const themeClass = (Theme) =>
	Theme === 'light' ? styles['faq_light']
		: Theme === 'transparent' ? styles['faq_transparent'] : '';
	