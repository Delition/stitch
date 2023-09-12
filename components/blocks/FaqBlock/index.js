import styles from "./faqBlock.module.scss";
import {themeClass} from "./utils";
import FaqBlockItem from "./FaqBlockItem";
import {useState} from "react";

const FaqBlock = ({Theme, Badge, Title, AccordionItem}) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const handleItemClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};
	
	return (
		<div className={`${styles.faq} ${themeClass(Theme)}`}>
			<div className={styles.faq_wrapper}>
				<div className={styles.faq_headline}>
					{Badge && <span className={styles.badge}>{Badge}</span>}
					{Title && <h1 className={styles.title}>{Title}</h1>}
				</div>
				<div className={styles.faq_content}>
					{AccordionItem.map((item) => {
						return (
							<FaqBlockItem
								key={item.id} index={item.id}
								title={item.Title}
								description={item.Description}
								activeIndex={activeIndex}
								onItemClick={handleItemClick}
							/>
						)
					})}
				</div>
			</div>
		</div>);
};

export default FaqBlock;
