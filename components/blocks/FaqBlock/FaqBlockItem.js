import {useState, useLayoutEffect, useRef} from "react";
import styles from './faqBlock.module.scss'

const FaqBlockItem = ({index, title, description, activeIndex, onItemClick}) => {
	const isActive = index === activeIndex;
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef(null);
	
	const handleItemClick = () => isActive ? onItemClick(null) : onItemClick(index);
	
	useLayoutEffect(() => {
		isActive ? setContentHeight(contentRef.current.scrollHeight) : setContentHeight(0)
	}, [isActive]);
	
	return (
		<div className={`${styles.faq_item} ${isActive ? styles.faq_item_active : ""}`}>
			<div className={styles.faq_item_title} onClick={handleItemClick} dangerouslySetInnerHTML={{__html: title}}/>
			<div ref={contentRef}
			     className={`${styles.faq_item_description} ${isActive ? styles.faq_item_description_active : ""}`}
			     style={{height: contentHeight}}
			     dangerouslySetInnerHTML={{__html: description}}
			/>
		</div>
	);
};

export default FaqBlockItem;


