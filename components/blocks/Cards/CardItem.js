import React from 'react';
import styles from './Cards.module.scss';
import Image from 'next/image';
import RightArrow from '../../../asset/image/svg/right_arrow_icon.svg';
import Link from 'next/link';
import WhiteArrow from '../../../asset/image/svg/whiteArrow.svg';

export const CardItem = ({ data }) => {
    const { Title, Description, LinkText, LinkHref } = data;
    return <li className={ styles.card_item }>
        <div className={ styles.top_container }>
            <h3 className={ styles.card_item_title }>{ Title }</h3>
            <div className={ styles.image_wrapper }>
                {data.Image.data !== null ?
                    <Image
                        src={ data.Image.data.attributes.url }
                        alt={ `${ Title } image` }
                        width={ 200 }
                        height={ 200 }
                    />
                    : ''}
            </div>
            <div className={ styles.card_item_text } dangerouslySetInnerHTML={ { __html: Description } }></div>
        </div>
        { LinkHref && <div className={ styles.bottom_container }>
            <Link href={ LinkHref }>
                <a className={ styles.card_item_link }>
                    { LinkText }
                    <span className={ styles.default_icon }>
                        <RightArrow/>
                    </span>
                    <span className={ styles.active_icon }>
                        <WhiteArrow/>
                    </span>
                </a>
            </Link>
        </div> }
    </li>;
};