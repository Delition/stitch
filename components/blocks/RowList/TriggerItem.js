import styles from './rowList.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import React from "react";
import Lottie from "react-lottie";
import ImageComponent from "next/image";

export const TriggerItem = ({ triggerItem }) => {
    const itemRef = `itemRef${ triggerItem.id }`;

    const { ref = itemRef, inView } = useInView({ delay: 100 });
    if(triggerItem.ImageMedia !== null){
        return <li ref={ ref }
                   className={ `${ inView ? styles.list_item_visible : styles.list_item_invisible } ${ styles.list_item }` }
                   id={ (triggerItem.BlockId ? triggerItem.BlockId : triggerItem.index)}>
            <div className={ styles.content_left }>
                {triggerItem.ImageMedia.Image.data !== null ?
                    <a rel="noreferrer" href={triggerItem.ImageMedia.href} target="_blank"><Image src={ triggerItem.ImageMedia.Image.data.attributes.url }
                           alt={ triggerItem.ImageMedia.Image.data.attributes.name }
                           height={ triggerItem.ImageMedia.Image.data.attributes.height }
                           width={ triggerItem.ImageMedia.Image.data.attributes.width }
                    /></a> : '' }
            </div>
            <div className={ styles.content_right }>
            <span
                className={ styles.item_number }>{ triggerItem.NumberText ? triggerItem.NumberText : triggerItem.index + 1 }</span>
                <h2 className={ styles.item_title }>{ triggerItem.Title }</h2>
                <div className={ styles.item_description }
                     dangerouslySetInnerHTML={ { __html: triggerItem.Description } }></div>
            </div>
        </li>;
    } else if(triggerItem.VideoMedia !== null){
        return <li ref={ ref }
                   className={ `${ inView ? styles.list_item_visible : styles.list_item_invisible } ${ styles.list_item }` }
                   id={ (triggerItem.BlockId ? triggerItem.BlockId : triggerItem.index)}>
            <div className={ styles.content_left }>
                { triggerItem.VideoMedia.Video.data !== null ?
                    <div className="image-hero">
                        <video playsInline width="100%" loop muted autoPlay>
                            <source  src={triggerItem.VideoMedia.Video.data.attributes.url} type="video/mp4" />
                        </video>
                    </div> : null }
            </div>
            <div className={ styles.content_right }>
            <span
                className={ styles.item_number }>{ triggerItem.NumberText ? triggerItem.NumberText : triggerItem.index + 1 }</span>
                <h2 className={ styles.item_title }>{ triggerItem.Title }</h2>
                <div className={ styles.item_description }
                     dangerouslySetInnerHTML={ { __html: triggerItem.Description } }></div>
            </div>
        </li>;
    } else if(triggerItem.AnimationMedia !== null){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: triggerItem.AnimationMedia.Data,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
        return <li ref={ ref }
                   className={ `${ inView ? styles.list_item_visible : styles.list_item_invisible } ${ styles.list_item }` }
                   id={ (triggerItem.BlockId ? triggerItem.BlockId : triggerItem.index)}>
            <div className={ styles.content_left }>
                { triggerItem.AnimationMedia.Data !== null ?
                    <div className="image-hero">
                        <Lottie options={defaultOptions}
                        /></div> : null }
            </div>
            <div className={ styles.content_right }>
            <span
                className={ styles.item_number }>{ triggerItem.NumberText ? triggerItem.NumberText : triggerItem.index + 1 }</span>
                <h2 className={ styles.item_title }>{ triggerItem.Title }</h2>
                <div className={ styles.item_description }
                     dangerouslySetInnerHTML={ { __html: triggerItem.Description } }></div>
            </div>
        </li>;
    } else {
        return <li ref={ ref }
                   className={ `${ inView ? styles.list_item_visible : styles.list_item_invisible } ${ styles.list_item }` }
                   id={ (triggerItem.BlockId ? triggerItem.BlockId : triggerItem.index)}>
            <div className={ styles.content_left }>
                {triggerItem.Image.data !== null ?
                    <Image src={ triggerItem.Image.data.attributes.url }
                           alt={ triggerItem.Image.data.attributes.name }
                           height={ triggerItem.Image.data.attributes.height }
                           width={ triggerItem.Image.data.attributes.width }
                    /> : '' }
            </div>
            <div className={ styles.content_right }>
            <span
                className={ styles.item_number }>{ triggerItem.NumberText ? triggerItem.NumberText : triggerItem.index + 1 }</span>
                <h2 className={ styles.item_title }>{ triggerItem.Title }</h2>
                <div className={ styles.item_description }
                     dangerouslySetInnerHTML={ { __html: triggerItem.Description } }></div>
            </div>
        </li>;
    }

};