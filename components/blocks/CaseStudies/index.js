import styles from "./caseStudies.module.scss";
import ImageComponent from "next/image";
import {CustomLink} from "../../shared";
import {themeClass} from "./utils";
import CaseStudiesTopItem from "./CaseStudiesTopItem";

import {useState, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper/core";
import "swiper/css";
SwiperCore.use([Navigation]);


const CaseStudies = ({Theme, Badge, CaseStudyEnable, BackgroundHex, Testimonials, BlockId, TitleHex}) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [thumbsActiveIndex, setThumbsActiveIndex] = useState(0);
	const [mainSwiper, setMainSwiper] = useState(null);
	
	const sliderRef = useRef(null);
	const sliderPrevRef = useRef(null);
	const sliderNextRef = useRef(null);
	
	const handleMainSlideChange = (swiper) => {
		thumbsSwiper ? thumbsSwiper.slideTo(swiper.activeIndex) : null;
	};
	
	return (
		<div className={`${styles.case_studies} ${themeClass(Theme)}`} id={BlockId}>
			<div className={styles.case_studies__wrapper} style={{backgroundColor: BackgroundHex}}>
				<Swiper
					ref={sliderRef}
					onSwiper={(swiper) => {
						setMainSwiper(swiper);
						swiper.on("slideChange", () => {
							setThumbsActiveIndex(swiper.activeIndex);
						});
					}}
					onSlideChange={handleMainSlideChange}
					spaceBetween={48}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = sliderPrevRef.current;
						swiper.params.navigation.nextEl = sliderNextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{Testimonials.map((testimonial, index) => {
						return (
							<SwiperSlide key={testimonial.id} className={styles.testimonial}>
								{CaseStudyEnable !== 'no' ? <div className={styles.case_studies__top}>
									<div className={styles.case_studies__item}>
										{Badge &&
											<span className={styles.badge}
											      style={{borderColor: TitleHex}}>{Badge}</span>}
										{testimonial.Title && <h2 className={styles.title}>{testimonial.Title}</h2>}
									</div>
									<CaseStudiesTopItem
										CaseTitleColor={TitleHex}
										CaseTitle={testimonial.ProblemTitle}
										CaseText={testimonial.Problem}/>
									<CaseStudiesTopItem
										CaseTitleColor={TitleHex}
										CaseTitle={testimonial.SolutionTitle}
										CaseText={testimonial.Solution}/>
								</div> : ''}
								<div className={styles.testimonial__inner}>
									<div className={styles.testimonial__image}>
										{testimonial?.Image?.data?.attributes?.url &&
											<ImageComponent src={testimonial?.Image.data.attributes.url}
											                alt={testimonial?.Image.data.attributes.name}
											                width={testimonial?.Image.data.attributes.width}
											                height={testimonial?.Image.data.attributes.height}
											/>}
									</div>
									<div className={styles.testimonial__content}>
										<div className={styles.testimonial__title}
										     dangerouslySetInnerHTML={{__html: testimonial.Testimonial}}></div>
										<h4 className={styles.testimonial__job}>{testimonial.JobTitle}</h4>
										{testimonial.LinkText &&
											<div className={styles.testimonial__link}>
												<CustomLink label={testimonial.LinkText} href={testimonial.Link}/>
											</div>
										}
									</div>
								</div>
							</SwiperSlide>
						);
					})}
					<button ref={sliderPrevRef} style={{backgroundColor: BackgroundHex}}
					        className={`${styles.testimonial_button} ${styles.testimonial_button_prev}`}/>
					<button ref={sliderNextRef} style={{backgroundColor: BackgroundHex}}
					        className={`${styles.testimonial_button} ${styles.testimonial_button_next}`}/>
				</Swiper>
			</div>
			<div className={`${styles.partners} ${'partners-slider'} ${Testimonials?.length >= 4 ? 'multiple' : ''}`}>
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={48}
					slidesPerView={3}
					breakpoints={{
						768: {
							simulateTouch: false,
							slidesPerView: 5
						}
					}}
				>
					{Testimonials.map((partners, index) => {
						return (
							<SwiperSlide
								key={partners.id}
								className={`${styles.swiper_slide} ${index === thumbsActiveIndex ? styles.parents_active : ''}`}
								onClick={() => mainSwiper.slideTo(index)}>
								<div key={partners.id} className={styles.partners_item}>
									{partners?.Logo?.data &&
										<ImageComponent src={partners?.Logo.data.attributes.url}
										                alt={partners?.Logo.data.attributes.name}
										                width={partners?.Logo.data.attributes.width}
										                height={partners?.Logo.data.attributes.height}
										/>}
								</div>
							</SwiperSlide>);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default CaseStudies;