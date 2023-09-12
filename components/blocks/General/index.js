import styles from './general.module.scss';
import {useState} from "react";
import {CustomLink} from "../../shared";
import ImageComponent from "next/image";
import Lottie from "react-lottie";

const General = ({tabs, BlockId, ImageDirection}) => {
	const [activeTab, setActiveTab] = useState(0);
	const handleTabClick = (index) => {
		setActiveTab(index);
	};
	return (
		<div className={styles.wrapper} id={BlockId}>
			<div className={`${styles.content_wrapper} ${ImageDirection === 'right' ? styles.content_wrapper__right : '' }`}>
				<div className={styles.left}>
					{tabs?.map(({id, ImageMedia, VideoMedia, AnimationMedia}, index) => {
						switch (true) {
							case ImageMedia !== null:
								const imagePath = ImageMedia?.Image?.data?.attributes;
								return (
									<div key={id} className={`${styles.content} ${activeTab === index ? styles['active_tab'] : ''}`}>
										{ImageMedia.href !== null
											? <a rel="noreferrer" href={ImageMedia.href} target="_blank"><ImageComponent src={imagePath.url ?? ""} alt={imagePath.alternativeText}
											                  width={imagePath.width} height={imagePath.width}/></a>
											: <ImageComponent src={imagePath.url ?? ""} alt={imagePath.alternativeText}
											                  width={imagePath.width} height={imagePath.width}/>}
									</div>
								);
							case VideoMedia !== null:
								const videoPath = VideoMedia?.Video?.data?.attributes;
								return (<div key={id}
								             className={`${styles.content} ${activeTab === index ? styles['active_tab'] : ''}`}>
									<video playsInline autoPlay loop style={{width: '100%', height: '100%'}}>
										<source src={videoPath.url}/>
									</video>
								</div>);
							case AnimationMedia !== null:
								const defaultOptions = {
									loop: true,
									autoplay: true,
									animationData: AnimationMedia.Data,
									rendererSettings: {preserveAspectRatio: 'xMidYMid slice'}
								};
								return (<div key={id}
								             className={`${styles.content} ${activeTab === index ? styles['active_tab'] : ''}`}>
									<Lottie options={defaultOptions}/>
								</div>);
							default:
								return null;
						}
					})}
				</div>
				<div className={styles.right}>
					<ul className={styles.controls}>
						{tabs?.map((tab, index) => {
							return (<li key={tab.id}
							            className={`${styles.controls_item} ${activeTab === index ? styles['active_tab'] : ''}`}
							            onClick={() => handleTabClick(index)}>
								{tab.Title}
							</li>)
						})}
					</ul>
					<div className={styles.list}>
						{tabs?.map((tab, index) => {
							return (<div key={tab.id}
							             className={`${styles.list_item} ${activeTab === index ? styles['active_tab'] : ''}`}>
								<h2 className={styles.subtitle}>
									{tab.Subtitle}
								</h2>
								<div className={styles.text}>
									<div className={styles.text_left}
									     dangerouslySetInnerHTML={{__html: tab.LeftText}}/>
									<div className={styles.text_right}
									     dangerouslySetInnerHTML={{__html: tab.RightText}}/>
								</div>
								{!tab.LinksIcons.length
									? <CustomLink href={tab.Link} label={tab.LinkText}/>
									: tab?.LinksIcons.map(link => {
										const linkIcon = link?.Icon?.data?.attributes;
										return (
											<div key={link.id} className={styles.item}>
												{link.Icon &&
													<ImageComponent src={linkIcon.url} alt={linkIcon.name} width={24}
													                height={linkIcon.height}/>}
												<CustomLink href={link.Link} label={link.LinkText}/>
											</div>
										)
									})
								}
							</div>)
						})}
					</div>
				</div>
			</div>
		</div>);
};

export default General;