import styles from "./caseStudies.module.scss";

export const themeClass = (Theme) =>
	Theme === 'dark' ? styles['case_studies_dark']
		: Theme === 'light' ? styles['case_studies_light'] : '';
	