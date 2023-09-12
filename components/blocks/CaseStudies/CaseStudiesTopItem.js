import styles from "./caseStudies.module.scss";

const CaseStudiesTopItem = ({CaseTitle, CaseText, CaseTitleColor}) => {
	return (
		<>
			<div className={styles.case_studies__item}>
				<span className={styles.case_studies__item_title}
				      style={{color: CaseTitleColor}}>{CaseTitle}</span>
				<div className={styles.case_studies__item_text}
				     dangerouslySetInnerHTML={{__html: CaseText}}></div>
			</div>
		</>);
};

export default CaseStudiesTopItem;
