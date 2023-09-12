import styles from './textBlock.module.scss';
import CustomLink from "../../shared/CustomLink";

const TextBlock = ({
	                   BlockId,
	                   BackgroundLeftHex,
	                   LeftText,
	                   RightText,
	                   RightLinkText,
	                   RightLink,
	                   BackgroundRightHex,
	                   LeftTextColor,
	                   RightTextColor
                   }) => {
	return (
		<div className={styles.wrapper} id={BlockId}>
			<div className={styles.content}>
				<div className={`${styles.content_left} ${styles[LeftTextColor]}`}
				     style={{backgroundColor: BackgroundLeftHex}}>
					<div
						className={styles.content_left_title}
						dangerouslySetInnerHTML={{__html: LeftText}}/>
				</div>
				
				<div className={`${styles.content_right} ${styles[RightTextColor]}`}
				     style={{backgroundColor: BackgroundRightHex}}>
					<div
						className={styles.content_right_text}
						dangerouslySetInnerHTML={{__html: RightText}}/>
					
					<div className={styles.content_right_link}>
						<CustomLink href={RightLink} label={RightLinkText}/>
					</div>
				</div>
			
			</div>
		</div>
	);
};

export default TextBlock;