import styles from './hero.module.scss';
import { CustomLink } from '../../shared';
import { getTicketClass } from './utils';
import ImageComponent from "next/image";
import React from "react";
import Lottie from 'react-lottie';

const Hero = ({ Ticket, TicketTheme, Subtitle, LinkHref, LinkText, Title, Description, buttons, Image, ImageMedia, VideoMedia, AnimationMedia, BlockId }) => {
    const ticketClass = `${ getTicketClass(TicketTheme) }`;
    if(ImageMedia  !== null){
        return <div className={ styles.wrapper } id={BlockId}>
            <div className={ styles.content }>
                <ul className={ styles.list }>
                    { Ticket &&
                    <li className={ `${ TicketTheme ? styles[ticketClass] : '' } ${ styles.ticket }` }>{ Ticket }</li> }
                    <li className={ styles.list_item }>{ Subtitle }</li>
                    { LinkText && <li className={ styles.list_item }>
                        <CustomLink isExternal={ false } href={ LinkHref } label={ LinkText }/>
                    </li> }
                </ul>
                <div className={ styles.title }
                     dangerouslySetInnerHTML={ { __html: Title } }
                >
                </div>
                <div className={ styles.text } dangerouslySetInnerHTML={ { __html: Description } }></div>
                <div className={ styles.button_wrapper }>
                    { buttons.map((button) => {
                        return <CustomLink
                            key={ button.id }
                            label={ button.label }
                            href={ button.href }
                            isExternal={ button.isExternal }
                            theme={ button.theme }
                            target={ button.target }
                        />;
                    }) }
                </div>
            </div>

            <div className={ ImageMedia.Image.data ? styles.content : styles.without_content }>
                { ImageMedia.Image.data !== null ?
                    <div className="image-hero"><a rel="noreferrer" href={ImageMedia.href} target="_blank">
                        <ImageComponent src={ ImageMedia.Image.data.attributes.url }
                                        alt={ ImageMedia.Image.data.attributes.name }
                                        width={ ImageMedia.Image.data.attributes.width }
                                        height={ ImageMedia.Image.data.attributes.height }
                        /></a></div> : null }
            </div>
        </div>;
    } else if(VideoMedia  !== null) {
        return <div className={ styles.wrapper } id={BlockId}>
            <div className={ styles.content }>
                <ul className={ styles.list }>
                    { Ticket &&
                    <li className={ `${ TicketTheme ? styles[ticketClass] : '' } ${ styles.ticket }` }>{ Ticket }</li> }
                    <li className={ styles.list_item }>{ Subtitle }</li>
                    { LinkText && <li className={ styles.list_item }>
                        <CustomLink isExternal={ false } href={ LinkHref } label={ LinkText }/>
                    </li> }
                </ul>
                <div className={ styles.title }
                     dangerouslySetInnerHTML={ { __html: Title } }
                >
                </div>
                <div className={ styles.text } dangerouslySetInnerHTML={ { __html: Description } }></div>
                <div className={ styles.button_wrapper }>
                    { buttons.map((button) => {
                        return <CustomLink
                            key={ button.id }
                            label={ button.label }
                            href={ button.href }
                            isExternal={ button.isExternal }
                            theme={ button.theme }
                            target={ button.target }
                        />;
                    }) }
                </div>
            </div>

            <div className={ VideoMedia ? styles.content : styles.without_content }>
                { VideoMedia.Video.data !== null ?
                    <div className="image-hero">
                        <video playsInline width="100%" loop muted autoPlay>
                            <source  src={VideoMedia.Video.data.attributes.url} type="video/mp4" />
                        </video>
                    </div> : null }
            </div>
        </div>;
    } else if(AnimationMedia  !== null) {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: AnimationMedia.Data,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
        return <div className={ styles.wrapper } id={BlockId}>
            <div className={ styles.content }>
                <ul className={ styles.list }>
                    { Ticket &&
                    <li className={ `${ TicketTheme ? styles[ticketClass] : '' } ${ styles.ticket }` }>{ Ticket }</li> }
                    <li className={ styles.list_item }>{ Subtitle }</li>
                    { LinkText && <li className={ styles.list_item }>
                        <CustomLink isExternal={ false } href={ LinkHref } label={ LinkText }/>
                    </li> }
                </ul>
                <div className={ styles.title }
                     dangerouslySetInnerHTML={ { __html: Title } }
                >
                </div>
                <div className={ styles.text } dangerouslySetInnerHTML={ { __html: Description } }></div>
                <div className={ styles.button_wrapper }>
                    { buttons.map((button) => {
                        return <CustomLink
                            key={ button.id }
                            label={ button.label }
                            href={ button.href }
                            isExternal={ button.isExternal }
                            theme={ button.theme }
                            target={ button.target }
                        />;
                    }) }
                </div>
            </div>

            <div className={ AnimationMedia.data !== null ? styles.content : styles.without_content }>
                { AnimationMedia.data !== null ?
                    <div className="image-hero">
                        <Lottie options={defaultOptions}
                        /></div> : null }
            </div>
        </div>;
    } else {
        return <div className={ styles.wrapper } id={BlockId}>
            <div className={ styles.content }>
                <ul className={ styles.list }>
                    { Ticket &&
                    <li className={ `${ TicketTheme ? styles[ticketClass] : '' } ${ styles.ticket }` }>{ Ticket }</li> }
                    <li className={ styles.list_item }>{ Subtitle }</li>
                    { LinkText && <li className={ styles.list_item }>
                        <CustomLink isExternal={ false } href={ LinkHref } label={ LinkText }/>
                    </li> }
                </ul>
                <div className={ styles.title }
                     dangerouslySetInnerHTML={ { __html: Title } }
                >
                </div>
                <div className={ styles.text } dangerouslySetInnerHTML={ { __html: Description } }></div>
                <div className={ styles.button_wrapper }>
                    { buttons.map((button) => {
                        return <CustomLink
                            key={ button.id }
                            label={ button.label }
                            href={ button.href }
                            isExternal={ button.isExternal }
                            theme={ button.theme }
                            target={ button.target }
                        />;
                    }) }
                </div>
            </div>

            <div className={ Image.data ? styles.content : styles.without_content }>
                { Image.data !== null ?
                    <div className="image-hero">
                        <ImageComponent src={ Image.data.attributes.url }
                                        alt={ Image.data.attributes.name }
                                        width={ Image.data.attributes.width }
                                        height={ Image.data.attributes.height }
                        /></div> : null }
            </div>
        </div>;
    }

};

Hero.defaultProps = {};

export default Hero;