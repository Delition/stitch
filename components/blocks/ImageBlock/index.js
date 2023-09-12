import styles from './imageBlock.module.scss';
import CustomLink from '../../shared/CustomLink';
import ImageComponent from 'next/image';
import ShieldCheck from '../../../asset/image/svg/shield_check.svg';
import Link from 'next/link';
import RightArrow from '../../../asset/image/svg/right_arrow_icon.svg';
import React from "react";
import WhiteArrow from '../../../asset/image/svg/whiteArrow.svg';
import Lottie from "react-lottie";

const ImageBlock = ({
	                    Badge,
	                    Title,
	                    LeftText,
	                    RightText,
	                    buttons,
	                    LinksIcons,
	                    Image,
	                    BlockId,
	                    ImageMedia,
	                    VideoMedia,
	                    AnimationMedia,
	                    ImageDirection
                    }) => {
	if (ImageMedia !== null) {
		return <div className={styles.wrapper} id={BlockId}>
			<div
				className={`${styles.content_wrapper} ${ImageDirection === 'right' ? styles.content_wrapper__right : ''}`}>
				<div className={styles.left}>
					{ImageMedia.Image.data !== null ?
						<a rel="noreferrer" href={ImageMedia.href} target="_blank">
							<ImageComponent src={ImageMedia.Image?.data.attributes.url}
							                alt={ImageMedia.Image?.data.attributes.name}
							                width={440}
							                height={440}
							/></a> : ''}
				</div>
				<div className={styles.right}>
					{Badge && <ul className={styles.badges_list}>
						<li className={styles.badge}>{Badge}</li>
					</ul>}
					{Title && <h2 className={styles.title}>{Title}</h2>}
					<div className={styles.text_wrapper}>
						<div className={styles.text_left} dangerouslySetInnerHTML={{__html: LeftText}}></div>
						<div className={styles.text_right} dangerouslySetInnerHTML={{__html: RightText}}></div>
					</div>
					{LinksIcons && <div className={styles.links_wrapper}>
						{LinksIcons.map((link) => {
							return (<Link key={link.id}
							              href={link.Link}>
								<a>
									{link.Icon.data !== null ?
										<ImageComponent src={link.Icon.data.attributes.url}
										                alt={link.Icon.data.attributes.name}
										                width={20}
										                height={20}
										/> : ''}
									{link.LinkText}
									<span className={styles.default_icon}>
                                    <RightArrow/>
                                </span>
									<span className={styles.active_icon}>
                                    <WhiteArrow/>
                                </span>
								</a>
							</Link>);
						})}
					</div>}
					{buttons && <div className={styles.buttons_wrapper}>
						{buttons ?
							<CustomLink key={buttons.id}
							            href={buttons.href}
							            label={buttons.label}
							            isExternal={buttons.isExternal}
							            theme={buttons.theme}
							/> : ''}
					</div>}
				</div>
			</div>
		</div>;
	} else if (VideoMedia !== null) {
		return <div className={styles.wrapper} id={BlockId}>
			<div
				className={`${styles.content_wrapper} ${ImageDirection === 'right' ? styles.content_wrapper__right : ''}`}>
				<div className={styles.left}>
					{VideoMedia.Video.data !== null ?
						<div className="image-hero">
							<video playsInline width="100%" loop muted autoPlay>
								<source src={VideoMedia.Video.data.attributes.url} type="video/mp4"/>
							</video>
						</div> : null}
				</div>
				<div className={styles.right}>
					{Badge && <ul className={styles.badges_list}>
						<li className={styles.badge}>{Badge}</li>
					</ul>}
					{Title && <h2 className={styles.title}>{Title}</h2>}
					<div className={styles.text_wrapper}>
						<div className={styles.text_left} dangerouslySetInnerHTML={{__html: LeftText}}></div>
						<div className={styles.text_right} dangerouslySetInnerHTML={{__html: RightText}}></div>
					</div>
					{LinksIcons && <div className={styles.links_wrapper}>
						{LinksIcons.map((link) => {
							return (<Link key={link.id}
							              href={link.Link}>
								<a>
									{link.Icon.data !== null ?
										<ImageComponent src={link.Icon.data.attributes.url}
										                alt={link.Icon.data.attributes.name}
										                width={20}
										                height={20}
										/> : ''}
									{link.LinkText}
									<span className={styles.default_icon}>
                                    <RightArrow/>
                                </span>
									<span className={styles.active_icon}>
                                    <WhiteArrow/>
                                </span>
								</a>
							</Link>);
						})}
					</div>}
					{buttons && <div className={styles.buttons_wrapper}>
						
						{buttons ?
							<CustomLink key={buttons.id}
							            href={buttons.href}
							            label={buttons.label}
							            isExternal={buttons.isExternal}
							            theme={buttons.theme}
							/> : ''}
					</div>}
				</div>
			</div>
		</div>;
		
	} else if (AnimationMedia !== null) {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: AnimationMedia.Data,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		};
		return <div className={styles.wrapper} id={BlockId}>
			<div
				className={`${styles.content_wrapper} ${ImageDirection === 'right' ? styles.content_wrapper__right : ''}`}>
				<div className={styles.left}>
					{AnimationMedia.data !== null ?
						<div className="image-hero">
							<Lottie options={defaultOptions}
							/></div> : null}
				</div>
				<div className={styles.right}>
					{Badge && <ul className={styles.badges_list}>
						<li className={styles.badge}>{Badge}</li>
					</ul>}
					{Title && <h2 className={styles.title}>{Title}</h2>}
					<div className={styles.text_wrapper}>
						<div className={styles.text_left} dangerouslySetInnerHTML={{__html: LeftText}}></div>
						<div className={styles.text_right} dangerouslySetInnerHTML={{__html: RightText}}></div>
					</div>
					{LinksIcons && <div className={styles.links_wrapper}>
						{LinksIcons.map((link) => {
							return (<Link key={link.id}
							              href={link.Link}>
								<a>
									{link.Icon.data !== null ?
										<ImageComponent src={link.Icon.data.attributes.url}
										                alt={link.Icon.data.attributes.name}
										                width={20}
										                height={20}
										/> : ''}
									{link.LinkText}
									<span className={styles.default_icon}>
                                    <RightArrow/>
                                </span>
									<span className={styles.active_icon}>
                                    <WhiteArrow/>
                                </span>
								</a>
							</Link>);
						})}
					</div>}
					{buttons && <div className={styles.buttons_wrapper}>
						
						{buttons ?
							<CustomLink key={buttons.id}
							            href={buttons.href}
							            label={buttons.label}
							            isExternal={buttons.isExternal}
							            theme={buttons.theme}
							/> : ''}
					</div>}
				</div>
			</div>
		</div>;
	}
	return <div className={styles.wrapper} id={BlockId}>
		<div className={`${styles.content_wrapper} ${ImageDirection === 'right' ? styles.content_wrapper__right : ''}`}>
			<div className={styles.left}>
				{Image.data !== null ?
					<ImageComponent src={Image?.data.attributes.url}
					                alt={Image?.data.attributes.name}
					                width={440}
					                height={440}
					/> : ''}
			</div>
			<div className={styles.right}>
				{Badge && <ul className={styles.badges_list}>
					<li className={styles.badge}>{Badge}</li>
				</ul>}
				{Title && <h2 className={styles.title}>{Title}</h2>}
				<div className={styles.text_wrapper}>
					{LeftText && <div className={styles.text_left} dangerouslySetInnerHTML={{__html: LeftText}}></div>}
					{RightText &&
						<div className={styles.text_right} dangerouslySetInnerHTML={{__html: RightText}}></div>}
				</div>
				{LinksIcons && <div className={styles.links_wrapper}>
					{LinksIcons.map((link) => {
						return (<Link key={link.id}
						              href={link.Link}>
							<a>
								{link.Icon.data !== null ?
									<ImageComponent src={link.Icon.data.attributes.url}
									                alt={link.Icon.data.attributes.name}
									                width={20}
									                height={20}
									/> : ''}
								{link.LinkText}
								<span className={styles.default_icon}>
                                    <RightArrow/>
                                </span>
								<span className={styles.active_icon}>
                                    <WhiteArrow/>
                                </span>
							</a>
						</Link>);
					})}
				</div>}
				{buttons && <div className={styles.buttons_wrapper}>
					
					{buttons ?
						<CustomLink key={buttons.id}
						            href={buttons.href}
						            label={buttons.label}
						            isExternal={buttons.isExternal}
						            theme={buttons.theme}
						/> : ''}
				</div>}
			</div>
		</div>
	</div>;
};

export default ImageBlock;