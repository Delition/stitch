import styles from './newCtaBlock.module.scss';
import ImageComponent from 'next/image';
import CustomLink from '../../shared/CustomLink';
import Slider from 'react-slick';
import {settings} from '../../../constants/scrollSettings';
import {screenWidth} from '../../../constants/screenSize';
import {useWindowSize} from '../../../hooks';
import Lottie from "react-lottie";
import {getModeCtaBlock} from "./utils";

const NewCTABlock = ({Badge, Title, Subtitle, buttons, Mode, style, BlockId}) => {
	
	const size = useWindowSize();
	const modeStyle = getModeCtaBlock(Mode);
	
	return (
		<div className={`${styles.content_wrapper} ${Mode ? modeStyle : ''} ${style ? styles[style] : ''}`}
		     id={BlockId}>
			<div className={styles.top_content}>
				<div className={styles.content}>
					{Badge && <ul className={styles.badges_list}>
						<li className={styles.badge}>{Badge}</li>
					</ul>}
					{Title && <h2 className={styles.title}>{Title}</h2>}
					{Subtitle && <p className={styles.text}>{Subtitle}</p>}
				</div>
			</div>
			<div className={styles.down_content}>
				<div className={styles.buttons_wrapper}>
					{buttons?.map((button) => {
						return (<CustomLink key={button.id}
						                    href={button.href ? button.href : '#'}
						                    label={button.label}
						                    isExternal={button.isExternal}
						                    theme={button.theme}
						                    target={button.target}
						                    arrowUp={button.ArrowUp}
						/>)
					})}
				</div>
			</div>
		</div>)
}

export default NewCTABlock;