import styles from './scrollCards.module.scss';
import ScrollSlider from '../ScrollSlider';
import { getBackgroundColor } from '../../../utils/getExtraStyles';

const ScrollCards = ({Badge, Title, Description, ScrollItem, Mode, BlockId}) => {
    const isInvestors = Badge === 'Investors';
    const extraStyle = getBackgroundColor(Mode);

    return <div className={styles.wrapper} id={BlockId}>
            <div className={`${styles.content_wrapper} ${Mode ? extraStyle : ''}`}>
                <div className={styles.top_content}>
                    {Badge && <span className={styles.badge}>{Badge}</span>}
                    {Title && <h2 className={styles.title}>{Title}</h2>}
                    {Description && <p className={styles.description}>{Description}</p>}
                </div>
                <ScrollSlider items={ScrollItem} circleImage={isInvestors}/>
            </div>
    </div>
}

export default ScrollCards;