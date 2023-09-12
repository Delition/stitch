import styles from './heroNew.module.scss';
import {getTicketClass} from './utils';
import RightArrow from '../../../asset/image/svg/right_arrow_icon.svg';
import {CustomLink} from '../../shared';
import {screenWidth} from '../../../constants/screenSize';
import {useWindowSize} from "../../../hooks";
import {useEffect, useMemo, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroNew = ({
	                 Title,
	                 Subtitle,
	                 Description,
	                 LinkText,
	                 LinkHref,
	                 Ticket,
	                 TicketTheme,
	                 buttons,
	                 Video,
	                 VideoMobile,
                 }) => {
	const ticketClass = useMemo(() => getTicketClass(TicketTheme), [TicketTheme]);
	const videoRef = useRef(null);
	const videoPlayerRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const size = useWindowSize();
	const desktopVideo = Video?.data?.attributes;
	const mobileVideo = VideoMobile?.data?.attributes;
	
	useEffect(() => {
		const videoRefWrapper = videoRef?.current?.firstChild;
		const videoRefWrapperWidth = videoRefWrapper?.clientWidth;
		const videoRefWrapperHeight = videoRefWrapper?.clientHeight;
		const videoPlayer = videoPlayerRef?.current;
		const headerWrapper = document.querySelector('.headroom-wrapper');
		
		const onEnter = () => {
			headerWrapper.classList.add('header--disabled');
			setIsPlaying(true);
			videoPlayer?.play();
			gsap.to(videoRefWrapper, {maxWidth: '100%'});
			gsap.to(videoRefWrapper?.firstChild, {height: '100vh'});
		};
		const onLeave = () => {
			headerWrapper.classList.remove('header--disabled');
			setIsPlaying(false);
			videoPlayer?.pause();
			gsap.to(videoRefWrapper, {maxWidth: `${videoRefWrapperWidth}px`});
			gsap.to(videoRefWrapper?.firstChild, {height: '60vh'});
		};
		let animation = null;
		
		if (videoRefWrapper) {
			animation = gsap.fromTo(
				videoRefWrapper,
				{
					maxWidth: `${videoRefWrapperWidth}px`,
					maxHeight: `${videoRefWrapperHeight}px`,
				},
				{
					maxHeight: '300vh',
					scrollTrigger: {
						trigger: videoRefWrapper,
						start: '5% center+=100',
						end: '100% center+=100',
						toggleActions: 'play none none reverse',
						onEnter,
						onEnterBack: onEnter,
						onLeave,
						onLeaveBack: onLeave,
					},
					onComplete: () => {
						isPlaying && (videoPlayer.currentTime = 0 && videoPlayer.play());
					},
				}
			);
		}
		
		return () => {
			animation?.kill();
		};
	}, [size.width, videoRef]);
	
	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={styles.hero_inner}>
					<div className={styles.hero_top}>
						{Ticket &&
							<span
								className={`${TicketTheme ? styles[ticketClass] : ''} ${styles.ticket}`}>{Ticket}</span>}
						{Subtitle &&
							<span className={styles.subtitle}>{Subtitle}</span>}
						{LinkText &&
							<a className={styles.link} href={LinkHref}>{LinkText}<RightArrow/></a>}
					</div>
					{Title &&
						<div className={styles.title} dangerouslySetInnerHTML={{__html: Title}}></div>}
					{Description &&
						<div className={styles.text} dangerouslySetInnerHTML={{__html: Description}}></div>}
					{buttons && buttons.map(button => (
						<div key={button.id}>
							<CustomLink href={button?.href}
							            target={button?.target}
							            isExternal={button?.isExternal}
							            label={button?.label}
							            theme={button?.theme}/>
						</div>
					))}
				</div>
			</div>
			{size.width >= screenWidth.laptopS
				? <>{desktopVideo?.url && <div className={styles.hero_video} ref={videoRef}>
					<div className={styles.hero_video_wrapper}>
						<video ref={videoPlayerRef}
						       playsInline
						       className={styles.hero_video_video}
						       src={desktopVideo?.url}
						       muted
						       onEnded={() => setIsPlaying(false)}
						       loop
						       preload='auto'
						/>
					</div>
				</div>}</>
				: <>{mobileVideo?.url &&
					<div className={`${styles.hero_video} ${styles.hero_video_mobile}`} ref={videoRef}>
						<div className={styles.hero_video_wrapper}>
							<video ref={videoPlayerRef}
							       playsInline
							       className={styles.hero_video_video}
							       src={mobileVideo?.url}
							       muted
							       onEnded={() => setIsPlaying(false)}
							       loop
							       preload='auto'
							/>
						</div>
					</div>}</>
			}
		</>
	);
};
export default HeroNew;