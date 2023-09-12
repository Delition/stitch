import styles from './avatarList.module.scss';
import ImageComponent from 'next/image';

export const AvatarItem = ({ data, name, description }) => {


    return <li className={ styles.list_item }>
        <div className={ styles.content_wrapper}>
            <div className={ styles.image_wrapper }>
                {data !== null ?
                <ImageComponent src={ data.attributes.url }
                                alt={ data.attributes.name }
                                width={ data.attributes.width }
                                height={ data.attributes.height }/>
                                : ''}
            </div>
            { name && <span className={ styles.name }>{ name }</span> }
            { description &&  <div dangerouslySetInnerHTML={ { __html: description } }></div> }
        </div>
    </li>;
};