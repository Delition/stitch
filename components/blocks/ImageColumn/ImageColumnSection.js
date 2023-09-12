import styles from './imageColumn.module.scss';
import ImageComponent from 'next/image';
import React from "react";
import { getBackgroundColor } from '../../../utils/getExtraStyles';
import Lottie from "react-lottie";

export const ImageColumnSection = ({
                                       badge,
                                       imageData,
                                       direction,
                                       leftText,
                                       rightText,
                                       title,
                                       mode,
                                       ImageMedia,
                                       VideoMedia,
                                       AnimationMedia,
                                   }) => {

    const extraStyle = getBackgroundColor(mode);
    if(ImageMedia  !== null){
        return (
            <div
                className={ `${ styles.section_wrapper }
             ${ direction === 'right' ? styles.right_direction : '' } 
             ${ mode ? extraStyle : '' }` }>
                <div className={ `${ styles.image_wrapper } ${ direction === 'left' ? styles.direction_item : '' }` }>
                    {ImageMedia.Image.data !== null !== null  ?
                        <a rel="noreferrer" href={ImageMedia.href} target="_blank"><ImageComponent src={ ImageMedia.Image.data.attributes.url }
                                        alt={ ImageMedia.Image.data.attributes.name }
                                        width={ 440 }
                                        height={ 440 }
                        /></a> : ''}
                </div>
                <div className={ `${ styles.content_wrapper } ${ direction === 'right' ? styles.direction_item : '' }` }>
                    { badge && <span className={ styles.badge }>{ badge }</span> }
                    <h2 className={ styles.title }>{ title }</h2>
                    <div className={styles.text_wrapper}>
                        <div className={styles.text_left} dangerouslySetInnerHTML={{__html: leftText}}></div>
                        <div className={styles.text_right} dangerouslySetInnerHTML={{__html: rightText}}></div>
                    </div>
                </div>
            </div>
        );
    } else if(VideoMedia  !== null){
        return (
            <div
                className={ `${ styles.section_wrapper }
             ${ direction === 'right' ? styles.right_direction : '' } 
             ${ mode ? extraStyle : '' }` }>
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
                    <div className={styles.text_wrapper}>
                        <div className={styles.text_left} dangerouslySetInnerHTML={{__html: leftText}}></div>
                        <div className={styles.text_right} dangerouslySetInnerHTML={{__html: rightText}}></div>
                    </div>
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
            <div
                className={ `${ styles.section_wrapper }
             ${ direction === 'right' ? styles.right_direction : '' } 
             ${ mode ? extraStyle : '' }` }>
                <div className={ `${ styles.image_wrapper } ${ direction === 'left' ? styles.direction_item : '' }` }>
                    { AnimationMedia.data !== null ?
                        <div className="image-hero">
                            <Lottie options={defaultOptions}
                            /></div> : null }
                </div>
                <div className={ `${ styles.content_wrapper } ${ direction === 'right' ? styles.direction_item : '' }` }>
                    { badge && <span className={ styles.badge }>{ badge }</span> }
                    <h2 className={ styles.title }>{ title }</h2>
                    <div className={ styles.text_wrapper }>
                        <div className={styles.text_left} dangerouslySetInnerHTML={{__html: leftText}}></div>
                        <div className={styles.text_right} dangerouslySetInnerHTML={{__html: rightText}}></div>
                    </div>
                </div>
            </div>
        );
    } else {

    return (
        <div
            className={ `${ styles.section_wrapper }
             ${ direction === 'right' ? styles.right_direction : '' } 
             ${ mode ? extraStyle : '' }` }>
            <div className={ `${ styles.image_wrapper } ${ direction === 'left' ? styles.direction_item : '' }` }>
                {imageData !== null  ?
                <ImageComponent src={ imageData.attributes.url }
                                alt={ imageData.attributes.name }
                                width={ 440 }
                                height={ 440 }
                /> : ''}
            </div>
            <div className={ `${ styles.content_wrapper } ${ direction === 'right' ? styles.direction_item : '' }` }>
                { badge && <span className={ styles.badge }>{ badge }</span> }
                <h2 className={ styles.title }>{ title }</h2>
                <div className={ styles.text_wrapper }>
                    <div className={styles.text_left} dangerouslySetInnerHTML={{__html: leftText}}></div>
                    <div className={styles.text_right} dangerouslySetInnerHTML={{__html: rightText}}></div>
                </div>
            </div>
        </div>
    );
    }

};