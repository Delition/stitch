import styles from './smallCards.module.scss';
import {SmallCardItem} from './CardItem';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper/core";
import "swiper/css";

SwiperCore.use([Navigation]);

const SmallCards = ({CardItem, BlockId, Title, Description, Badge}) => {
	return <div id={BlockId}>
		{CardItem &&
			<div className={styles.wrapper}>
				<div className={styles.top_content}>
					{Badge && <span className={styles.badge}>{Badge}</span>}
					{Title && <h2 className={styles.title}>{Title}</h2>}
					{Description && <p className={styles.description}>{Description}</p>}
				</div>
				<div className={`${'scroll-slider'} ${CardItem.length <= 3 ? 'scroll-slider-small' : ''}`}>
				<Swiper
					spaceBetween={24}
					navigation={true}
					slidesPerView={1}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						900: {
							slidesPerView: 3,
						}
					}}
				>
					{CardItem.map((item) => {
						return (
							<SwiperSlide key={item.id}>
								<SmallCardItem data={item}/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				</div>
			</div>}
	</div>
}

export default SmallCards;