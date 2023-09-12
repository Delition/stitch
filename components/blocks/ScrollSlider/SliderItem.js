import styles from './scrollSlider.module.scss';
import ImageComponent from 'next/image';
import React from "react";
import Lottie from "react-lottie";

export const SliderItem = ({ title, description, imageData, circleImage, ImageMedia, VideoMedia, AnimationMedia }) => {
    if(ImageMedia  !== null){
        return (
            <div className={ styles.item_wrapper }>
                <div className={ `${ styles.image_wrapper } ${circleImage ? styles.circle_image : ''}` }>
                    {ImageMedia.Image.data !== null ?
                        <a rel="noreferrer" href={ImageMedia.href} target="_blank"><ImageComponent src={ ImageMedia.Image.data.attributes.url }
                                        alt={ ImageMedia.Image.data.attributes.name }
                                        height={ 88 }
                                        width={ 88 }/></a>
                        : '' }
                </div>
                <h3 className={ styles.item_title }>{ title }</h3>
                <div className={styles.item_description} dangerouslySetInnerHTML={{__html: description}} ></div>
            </div>
        );
    } else if(VideoMedia  !== null){
        return (
            <div className={ styles.item_wrapper }>
                <div className={ `${ styles.image_wrapper } ${circleImage ? styles.circle_image : ''}` }>
                    { VideoMedia.Video.data !== null ?
                        <div className="image-hero">
                            <video playsInline width="100%" loop muted autoPlay>
                                <source  src={VideoMedia.Video.data.attributes.url} type="video/mp4" />
                            </video>
                        </div> : null }
                </div>
                <h3 className={ styles.item_title }>{ title }</h3>
                <div className={styles.item_description} dangerouslySetInnerHTML={{__html: description}} ></div>
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
            <div className={ styles.item_wrapper }>
                <div className={ `${ styles.image_wrapper } ${circleImage ? styles.circle_image : ''}` }>
                    { AnimationMedia.data !== null ?
                        <div className="image-hero">
                            <Lottie options={defaultOptions}
                            /></div> : null }
                </div>
                <h3 className={ styles.item_title }>{ title }</h3>
                <div className={styles.item_description} dangerouslySetInnerHTML={{__html: description}} ></div>
            </div>
        );
    } else {
        return (
            <div className={ styles.item_wrapper }>
                <div className={ `${ styles.image_wrapper } ${circleImage ? styles.circle_image : ''}` }>
                    {imageData !== null ?
                    <ImageComponent src={ imageData.attributes.url }
                                    alt={ imageData.attributes.name }
                                    height={ 88 }
                                    width={ 88 }/>
                                    : '' }
                </div>
                <h3 className={ styles.item_title }>{ title }</h3>
                <div className={styles.item_description} dangerouslySetInnerHTML={{__html: description}} ></div>
            </div>
        );
    }

};