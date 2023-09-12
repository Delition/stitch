import React from 'react';
import styles from './smallCards.module.scss';
import Image from 'next/image';
import Lottie from "react-lottie";

export const SmallCardItem = ({ data }) => {
    const {Title, Description} = data;
    if(data.ImageMedia){
        return <div className={styles.card_item}>
            <div className={styles.image_wrapper}>
                {data.ImageMedia.Image.data !== null ?
                    <a rel="noreferrer" href={data.ImageMedia.href} target="_blank"><Image
                        src={data.ImageMedia.Image.data.attributes.url}
                        alt={`${Title} image`}
                        width={88}
                        height={88}
                    /></a> : ''
                }
            </div>
            <h3 className={styles.card_item_title}>{Title}</h3>
            <div className={styles.card_item_text} dangerouslySetInnerHTML={{__html: Description}} ></div>
        </div>
    } else if(data.VideoMedia){
        return <div className={styles.card_item}>
            <div className={styles.image_wrapper}>
                { data.VideoMedia.Video.data !== null ?
                    <div className="image-hero">
                        <video playsInline width="100%" loop muted autoPlay>
                            <source  src={data.VideoMedia.Video.data.attributes.url} type="video/mp4" />
                        </video>
                    </div> : null }
            </div>
            <h3 className={styles.card_item_title}>{Title}</h3>
            <div className={styles.card_item_text} dangerouslySetInnerHTML={{__html: Description}} ></div>
        </div>
    } else if(data.AnimationMedia  !== null){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: data.AnimationMedia.Data,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
        return <div className={styles.card_item}>
            <div className={styles.image_wrapper}>
                { data.AnimationMedia.data !== null ?
                    <div className="image-hero">
                        <Lottie options={defaultOptions}
                        /></div> : null }
            </div>
            <h3 className={styles.card_item_title}>{Title}</h3>
            <div className={styles.card_item_text} dangerouslySetInnerHTML={{__html: Description}} ></div>
        </div>
    } else {
        return <div className={styles.card_item}>
            <div className={styles.image_wrapper}>
                {data.Image.data !== null ?
                    <Image
                        src={data.Image.data.attributes.url}
                        alt={`${Title} image`}
                        width={88}
                        height={88}
                    /> : ''
                }
            </div>
            <h3 className={styles.card_item_title}>{Title}</h3>
            <div className={styles.card_item_text} dangerouslySetInnerHTML={{__html: Description}} ></div>
        </div>
    }

}