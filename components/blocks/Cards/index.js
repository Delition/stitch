import { CardItem } from './CardItem';
import Slider from 'react-slick';
import styles from './Cards.module.scss';
import { useWindowSize } from '../../../hooks';
import { screenWidth } from '../../../constants/screenSize';

const Cards = ({ Badge, Title, Cards,BlockId }) => {
  const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        variableWidth: true,
        slidesToScroll: 1,
    };

    const size = useWindowSize();
    
    return (
        <div className={styles.wrapper} id={BlockId}>
            <div className={styles.top_content}>
                {Badge && <span className={styles.badge}>{Badge}</span>}
                {Title && <h2 className={styles.title}>{Title}</h2>}
            </div>
            {size.width >= screenWidth.laptop
                ? <ul className={styles.bottom_content}>
                    {Cards.map((card) => {
                        return <CardItem data={card} key={card.id}/>;
                    })}
                </ul>
                : <>
                    <Slider {...settings} className={'cards-slider'}>
                        {Cards.map((card) => {
                            return <CardItem data={card} key={card.id}/>;
                        })}
                    </Slider>
                </>}
        </div>
    );
};

export default Cards;