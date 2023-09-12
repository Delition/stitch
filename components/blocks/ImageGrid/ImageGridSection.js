import styles from './imageGrid.module.scss';
import ImageComponent from 'next/image';
import React from "react";
import CustomLink from '../../shared/CustomLink';
import { useInView } from 'react-intersection-observer';
import {ImageColumnSection} from "../ImageColumn/ImageColumnSection";
import Lottie from "react-lottie";

export const ImageGridSection = ({
                                     badge,
                                     imageData,
                                     direction,
                                     description,
                                     title,
                                     links,
                                     id,
                                     ImageMedia,
                                     VideoMedia,
                                     AnimationMedia,
                                 }) => {

    const itemRef = `itemGridRef${id}`
    const divStyle = {top: "10px",position: "relative"};
    const { ref = itemRef, inView } = useInView({delay: 100});
    if(ImageMedia  !== null){
        return (
            <div ref={ref}
                 className={ ` ${inView ? styles.section_visible : styles.section_invisible} ${ styles.section_wrapper }
             ${ direction === 'right' ? styles.right_direction : '' }` }>
                <div className={ `${ styles.image_wrapper } ${ direction === 'left' ? styles.direction_item : '' }` }>
                    { ImageMedia.Image.data !== null ?
                        <a rel="noreferrer" href={ImageMedia.href} target="_blank"><ImageComponent src={ ImageMedia.Image.data.attributes.url }
                                        alt={ ImageMedia.Image.data.attributes.name }
                                        width={ 440 }
                                        height={ 440 }
                        /></a> : ''}
                </div>
                <div className={ `${ styles.content_wrapper } ${ direction === 'right' ? styles.direction_item : '' }` }>
                    { badge && <span className={ styles.badge }>{ badge }</span> }
                    <h2 className={ styles.title }>{ title }</h2>
                    <div className={ styles.description } dangerouslySetInnerHTML={ { __html: description } }></div>
                    { links ? <div className={styles.links_wrapper}>
                        {links.map(({ LinkText, id, Link, Icon }) => {
                            return <div key={id}>
                                { Icon.data !== null ?
                                    <span className={"temp"} style={divStyle}>
                                     <ImageComponent  src={Icon.data.attributes.url}
                                                      alt={Icon.data.attributes.name}
                                                      width={20}
                                                      height={20}
                                     /></span> : ''}
                                <CustomLink label={LinkText} key={id}
                                            href={Link}
                                            linkIcon={LinkText}
                                />
                            </div>
                        })
                        }
                    </div> : null }
                </div>
            </div>
        );
    } else if(VideoMedia  !== null){
        return (
            <div ref={ref}
                 className={ ` ${inView ? styles.section_visible : styles.section_invisible} ${ styles.section_wrapper }
             ${ direction === 'right' ? styles.right_direction : '' }` }>
                <div className={ `${ styles.image_wrapper } ${ direction === 'left' ? styles.direction_item : '' }` }>
                    { VideoMedia.Video.data !== null ?
                        <div className="image-hero">
                            <video playsInline width="100%" loop muted autoPlay>
                                <source  src={VideoMedia.Video.data.attributes.url} type="video/mp4" />
                            </video>
                        </div> : null }
                </div>
                <div className={ `${ styles.content_wrapper } ${ direction === 'right' ? styles.direction_item : '' }` }>
                    { badge && <span className={ styles.badge }>{ badge }</span> }
                    <h2 className={ styles.title }>{ title }</h2>
                    <div className={ styles.description } dangerouslySetInnerHTML={ { __html: description } }></div>
                    { links ? <div className={styles.links_wrapper}>
                        {links.map(({ LinkText, id, Link, Icon }) => {
                            return <div key={id}>
                                { Icon.data !== null ?
                                    <span className={"temp"} style={divStyle}>
                                     <ImageComponent  src={Icon.data.attributes.url}
                                                      alt={Icon.data.attributes.name}
                                                      width={20}
                                                      height={20}
                                     /></span> : ''}
                                <CustomLink label={LinkText} key={id}
                                            href={Link}
                                            linkIcon={LinkText}
                                />
                            </div>
                        })
                        }
                    </div> : null }
                </div>
            </div>
        );
    } else if(AnimationMedia  !== null){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: AnimationMedia.Data,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
        return (
            <div ref={ref}
                 className={ ` ${inView ? styles.section_visible : styles.section_invisible} ${ styles.section_wrapper }
             ${ direction === 'right' ? styles.right_direction : '' }` }>
                <div className={ `${ styles.image_wrapper } ${ direction === 'left' ? styles.direction_item : '' }` }>
                    { AnimationMedia.data !== null ?
                        <div className="image-hero">
                            <Lottie options={defaultOptions}
                            /></div> : null }
                </div>
                <div className={ `${ styles.content_wrapper } ${ direction === 'right' ? styles.direction_item : '' }` }>
                    { badge && <span className={ styles.badge }>{ badge }</span> }
                    <h2 className={ styles.title }>{ title }</h2>
                    <div className={ styles.description } dangerouslySetInnerHTML={ { __html: description } }></div>
                    { links ? <div className={styles.links_wrapper}>
                        {links.map(({ LinkText, id, Link, Icon }) => {
                            return <div key={id}>
                                { Icon.data !== null ?
                                    <span className={"temp"} style={divStyle}>
                                     <ImageComponent  src={Icon.data.attributes.url}
                                                      alt={Icon.data.attributes.name}
                                                      width={20}
                                                      height={20}
                                     /></span> : ''}
                                <CustomLink label={LinkText} key={id}
                                            href={Link}
                                            linkIcon={LinkText}
                                />
                            </div>
                        })
                        }
                    </div> : null }
                </div>
            </div>
        );
    } else {
        return (
            <div ref={ref}
                 className={ ` ${inView ? styles.section_visible : styles.section_invisible} ${ styles.section_wrapper }
             ${ direction === 'right' ? styles.right_direction : '' }` }>
                <div className={ `${ styles.image_wrapper } ${ direction === 'left' ? styles.direction_item : '' }` }>
                    { imageData !== null ?
                        <ImageComponent src={ imageData.attributes.url }
                                        alt={ imageData.attributes.name }
                                        width={ 440 }
                                        height={ 440 }
                        /> : ''}
                </div>
                <div className={ `${ styles.content_wrapper } ${ direction === 'right' ? styles.direction_item : '' }` }>
                    { badge && <span className={ styles.badge }>{ badge }</span> }
                    <h2 className={ styles.title }>{ title }</h2>
                    <div className={ styles.description } dangerouslySetInnerHTML={ { __html: description } }></div>
                    { links ? <div className={styles.links_wrapper}>
                        {links.map(({ LinkText, id, Link, Icon }) => {
                            return <div key={id}>
                                { Icon.data !== null ?
                                    <span className={"temp"} style={divStyle}>
                                     <ImageComponent  src={Icon.data.attributes.url}
                                                      alt={Icon.data.attributes.name}
                                                      width={20}
                                                      height={20}
                                     /></span> : ''}
                                <CustomLink label={LinkText} key={id}
                                            href={Link}
                                            linkIcon={LinkText}
                                />
                            </div>
                        })
                        }
                    </div> : null }
                </div>
            </div>
        );
    }

};