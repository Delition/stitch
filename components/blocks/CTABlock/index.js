import styles from './ctaBlock.module.scss';
import ImageComponent from 'next/image';
import CustomLink from '../../shared/CustomLink';
import {screenWidth} from '../../../constants/screenSize';
import {useWindowSize} from '../../../hooks';
import Lottie from "react-lottie";
import {getModeCtaBlock} from "./utils";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper/core";
import "swiper/css";
import {useRef} from "react";

SwiperCore.use([Navigation]);

const CTABlock = ({Badge, Title, Subtitle, buttons, Cards, Mode, style, BlockId}) => {
	const sliderPrevRef = useRef(null);
	const sliderNextRef = useRef(null);
	const size = useWindowSize();
	const modeStyle = getModeCtaBlock(Mode);
	
	return (<div className={`${styles.wrapper} ${style ? styles[style] : ''}`} id={BlockId}>
		<div className={`${styles.content_wrapper} ${Mode ? modeStyle : ''}`}>
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
				{size.width >= screenWidth.laptopS
					? <>{Cards && <ul className={styles.cards_list}>
						{Cards.map((card) => {
							if (card.ImageMedia !== null) {
								return <li className={styles.card_item} key={card.id}>
									{card.ImageMedia.Image.data !== null ?
										<a rel="noreferrer" href={card.ImageMedia.href} target="_blank"><ImageComponent
											src={card.ImageMedia.Image.data.attributes.url}
											alt={card.ImageMedia.Image.data.attributes.name}
											width={88}
											height={88}
										/></a> : ''}
									<h3 className={styles.card_title}>{card.Title}</h3>
									<div className={styles.card_subtitle}
									     dangerouslySetInnerHTML={{__html: card.Description}}></div>
								</li>
							} else if (card.VideoMedia !== null) {
								return <li className={styles.card_item} key={card.id}>
									{card.VideoMedia.Video.data !== null ?
										<div className="image-hero">
											<video playsInline width="100%" loop muted autoPlay>
												<source src={card.VideoMedia.Video.data.attributes.url}
												        type="video/mp4"/>
											</video>
										</div> : null}
									<h3 className={styles.card_title}>{card.Title}</h3>
									<div className={styles.card_subtitle}
									     dangerouslySetInnerHTML={{__html: card.Description}}></div>
								</li>
							} else if (card.AnimationMedia !== null) {
								const defaultOptions = {
									loop: true,
									autoplay: true,
									animationData: card.AnimationMedia.Data,
									rendererSettings: {
										preserveAspectRatio: 'xMidYMid slice',
									},
								};
								return <li className={styles.card_item} key={card.id}>
									{card.AnimationMedia.data !== null ?
										<div className="image-hero">
											<Lottie options={defaultOptions}
											/></div> : null}
									<h3 className={styles.card_title}>{card.Title}</h3>
									<div className={styles.card_subtitle}
									     dangerouslySetInnerHTML={{__html: card.Description}}></div>
								</li>
							} else {
								return <li className={styles.card_item} key={card.id}>
									{card.Image.data !== null ?
										<ImageComponent src={card.Image.data.attributes.url}
										                alt={card.Image.data.attributes.name}
										                width={88}
										                height={88}
										/> : ''}
									<h3 className={styles.card_title}>{card.Title}</h3>
									<div className={styles.card_subtitle}
									     dangerouslySetInnerHTML={{__html: card.Description}}></div>
								</li>
							}
						})}
					</ul>}</>
					: <div className="cards-slider">
						<Swiper
							spaceBetween={24}
							navigation={true}
							slidesPerView={1.2}
							breakpoints={{
								768: {
									slidesPerView: 2.2
								},
								900: {
									slidesPerView: 3
								}
							}}
							onInit={(swiper) => {
								swiper.params.navigation.prevEl = sliderPrevRef.current;
								swiper.params.navigation.nextEl = sliderNextRef.current;
								swiper.navigation.init();
								swiper.navigation.update();
							}}
						>
							{Cards && Cards.map((card) => {
								if (card.ImageMedia !== null) {
									return <SwiperSlide className={`${`${styles.card_item} ${styles.card_item_slide}`}`}
									                    key={card.id}>
										{card.ImageMedia.Image.data !== null ?
											<ImageComponent src={card.ImageMedia.Image.data.attributes.url}
											                alt={card.ImageMedia.Image.data.attributes.name}
											                width={88}
											                height={88}
											/> : ''}
										<h3 className={styles.card_title}>{card.Title}</h3>
										<div className={styles.card_subtitle}
										     dangerouslySetInnerHTML={{__html: card.Description}}></div>
									</SwiperSlide>
								} else if (card.VideoMedia !== null) {
									return <SwiperSlide className={`${styles.card_item} ${styles.card_item_slide}`}
									                    key={card.id}>
										{card.VideoMedia.Video.data !== null ?
											<div className="image-hero">
												<video playsInline width="100%" loop muted autoPlay>
													<source src={card.VideoMedia.Video.data.attributes.url}
													        type="video/mp4"/>
												</video>
											</div> : null}
										<h3 className={styles.card_title}>{card.Title}</h3>
										<div className={styles.card_subtitle}
										     dangerouslySetInnerHTML={{__html: card.Description}}></div>
									</SwiperSlide>
								} else if (card.AnimationMedia !== null) {
									const defaultOptions = {
										loop: true,
										autoplay: true,
										animationData: card.AnimationMedia.Data,
										rendererSettings: {
											preserveAspectRatio: 'xMidYMid slice',
										},
									};
									return <SwiperSlide className={`${styles.card_item} ${styles.card_item_slide}`}
									                    key={card.id}>
										{card.AnimationMedia.data !== null ?
											<div className="image-hero">
												<Lottie options={defaultOptions}
												/></div> : null}
										<h3 className={styles.card_title}>{card.Title}</h3>
										<div className={styles.card_subtitle}
										     dangerouslySetInnerHTML={{__html: card.Description}}></div>
									</SwiperSlide>
								} else {
									return <SwiperSlide className={`${styles.card_item} ${styles.card_item_slide}`}
									                    key={card.id}>
										{card.Image.data !== null ?
											<ImageComponent src={card.Image.data.attributes.url}
											                alt={card.Image.data.attributes.name}
											                width={88}
											                height={88}
											/> : ''}
										<h3 className={styles.card_title}>{card.Title}</h3>
										<div className={styles.card_subtitle}
										     dangerouslySetInnerHTML={{__html: card.Description}}></div>
									</SwiperSlide>
								}
							})}
							<button ref={sliderPrevRef} className={`${styles.card_button} ${styles.card_button_prev}`}/>
							<button ref={sliderNextRef} className={`${styles.card_button} ${styles.card_button_next}`}/>
						</Swiper>
					</div>
				}
				<div className={styles.buttons_wrapper}>
					{buttons.map((button) => {
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
		</div>
	</div>)
}

export default CTABlock;