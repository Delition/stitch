import styles from './scrollSlider.module.scss';
import {SliderItem} from './SliderItem';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper/core";
import "swiper/css";

SwiperCore.use([Navigation]);

const ScrollSlider = ({items, circleImage, BlockId}) => {
	return (
		<div className={`${styles.wrapper} ${'scroll-slider'}`} id={BlockId}>
			<Swiper
				spaceBetween={24}
				navigation={true}
				slidesPerView={1}
				breakpoints={{
					768: {
						slidesPerView: 2
					},
					900: {
						slidesPerView: 3
					}
				}}
			>
				{items && items.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<SliderItem
								title={item.Title}
								description={item.Description}
								imageData={item.Image?.data}
								circleImage={circleImage}
								ImageMedia={item.ImageMedia}
								VideoMedia={item.VideoMedia}
								AnimationMedia={item.AnimationMedia}
							/>
						</SwiperSlide>);
				})}
			</Swiper>
		</div>
	);
}
export default ScrollSlider;