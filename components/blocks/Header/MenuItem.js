import styles from './header.module.scss';
import Minus from '../../../asset/image/svg/minus_icon.svg';
import Plus from '../../../asset/image/svg/plus_icon.svg';
import PurpleArrow from '../../../asset/image/svg/purpleArrow.svg';
import RightArrow from '../../../asset/image/svg/right_arrow_icon.svg';

export const MenuItem = ({item}) => {
	return (
		<a href={item.href} target={item.target}>
			{item.Icon.data &&
				<i className={styles.icon_wrapper}> <img src={item.Icon.data.attributes.url} alt=''/> </i>}
			<span>{item.label}</span>
			
			{item?.menu_item_level?.length > 0
				? <>
					<span className={styles.active_icon}><Minus/></span>
					<span className={styles.default_icon}><Plus/></span>
				</>
				: <>
					<span className={styles.active_icon}><PurpleArrow/></span>
					<span className={styles.default_icon}><RightArrow/></span>
				</>}
		</a>
	);
};