import styles from './accordionPage.module.scss';
import Description from '../Description';
import { Collapse } from 'antd';
import PlusIcon from '../../../asset/image/svg/plus_icon.svg';
import MinusIcon from '../../../asset/image/svg/minus_icon.svg';
import ImageComponent from 'next/image';
import React from "react";
import Lottie from "react-lottie";

const { Panel } = Collapse;

const AccordionPage = ({ Badge, Description: pageDescription, Image, PageAccordionItem, BlockId, ImageMedia, VideoMedia, AnimationMedia }) => {
    if(ImageMedia !== null){
        return <>
            {Badge && <Description badge={Badge} text={pageDescription}/>}
            <div className={ styles.wrapper } id={BlockId}>
                <div className={ styles.image_wrapper }>
                    {ImageMedia.Image.data !== null ?
                        <a rel="noreferrer" href={ImageMedia.href} target="_blank"><ImageComponent src={ ImageMedia.Image.data.attributes.url }
                                        alt={ ImageMedia.Image.data.attributes.name }
                                        width={ ImageMedia.Image.data.attributes.width }
                                        height={ ImageMedia.Image.data.attributes.height }/></a>
                        : ''}
                </div>
                <div className={ styles.accordions_wrapper }>
                    { PageAccordionItem && <Collapse className="accordion-item"
                                                     expandIcon={ ({ isActive }) => isActive ? <MinusIcon/> : <PlusIcon/> }
                                                     defaultActiveKey={ 0 }
                                                     accordion={ true }
                    >
                        { PageAccordionItem?.map((item, index) => {
                            return (
                                <Panel header={ <p className={ styles.title_wrapper }
                                                   dangerouslySetInnerHTML={ { __html: item.Title } }></p> }
                                       key={ index }>
                                    <div className={ styles.accordion_description }
                                         dangerouslySetInnerHTML={ { __html: item.Description } }></div>
                                </Panel>
                            );
                        }) }
                    </Collapse> }
                </div>
            < /div>
            ;
        </>;
    } else if(VideoMedia !== null){
        return <>
            {Badge && <Description badge={Badge} text={pageDescription}/>}
            <div className={ styles.wrapper } id={BlockId}>
                <div className={ styles.image_wrapper }>
                    { VideoMedia.Video.data !== null ?
                        <div className="image-hero">
                            <video width="100%" loop muted autoPlay>
                                <source  src={VideoMedia.Video.data.attributes.url} type="video/mp4" />
                            </video>
                        </div> : null }
                </div>
                <div className={ styles.accordions_wrapper }>
                    { PageAccordionItem && <Collapse className="accordion-item"
                                                     expandIcon={ ({ isActive }) => isActive ? <MinusIcon/> : <PlusIcon/> }
                                                     defaultActiveKey={ 0 }
                                                     accordion={ true }
                    >
                        { PageAccordionItem?.map((item, index) => {
                            return (
                                <Panel header={ <p className={ styles.title_wrapper }
                                                   dangerouslySetInnerHTML={ { __html: item.Title } }></p> }
                                       key={ index }>
                                    <div className={ styles.accordion_description }
                                         dangerouslySetInnerHTML={ { __html: item.Description } }></div>
                                </Panel>
                            );
                        }) }
                    </Collapse> }
                </div>
            < /div>
            ;
        </>;
    } else if(AnimationMedia  !== null) {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: AnimationMedia.Data,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
        return <>
            {Badge && <Description badge={Badge} text={pageDescription}/>}
            <div className={ styles.wrapper } id={BlockId}>
                <div className={ styles.image_wrapper }>
                    { AnimationMedia.Data !== null ?
                        <div className="image-hero">
                            <Lottie options={defaultOptions}
                            /></div> : null }
                </div>
                <div className={ styles.accordions_wrapper }>
                    { PageAccordionItem && <Collapse className="accordion-item"
                                                     expandIcon={ ({ isActive }) => isActive ? <MinusIcon/> : <PlusIcon/> }
                                                     defaultActiveKey={ 0 }
                                                     accordion={ true }
                    >
                        { PageAccordionItem?.map((item, index) => {
                            return (
                                <Panel header={ <p className={ styles.title_wrapper }
                                                   dangerouslySetInnerHTML={ { __html: item.Title } }></p> }
                                       key={ index }>
                                    <div className={ styles.accordion_description }
                                         dangerouslySetInnerHTML={ { __html: item.Description } }></div>
                                </Panel>
                            );
                        }) }
                    </Collapse> }
                </div>
            < /div>
            ;
        </>;
    } else {

    return <>
        {Badge && <Description badge={Badge} text={pageDescription}/>}
        <div className={ styles.wrapper } id={BlockId}>
            <div className={ styles.image_wrapper }>
                {Image.data !== null ?
                <ImageComponent src={ Image.data.attributes.url }
                                alt={ Image.data.attributes.name }
                                width={ Image.data.attributes.width }
                                height={ Image.data.attributes.height }/>
                                : ''}
            </div>
            <div className={ styles.accordions_wrapper }>
                { PageAccordionItem && <Collapse className="accordion-item"
                                                 expandIcon={ ({ isActive }) => isActive ? <MinusIcon/> : <PlusIcon/> }
                                                 defaultActiveKey={ 0 }
                                                 accordion={ true }
                >
                    { PageAccordionItem?.map((item, index) => {
                        return (
                            <Panel header={ <p className={ styles.title_wrapper }
                                               dangerouslySetInnerHTML={ { __html: item.Title } }></p> }
                                   key={ index }>
                                <div className={ styles.accordion_description }
                                     dangerouslySetInnerHTML={ { __html: item.Description } }></div>
                            </Panel>
                        );
                    }) }
                </Collapse> }
            </div>
        < /div>
    </>;
    }

};

export default AccordionPage;