import styles from './imageRowBlock.module.scss';
import ImageComponent from 'next/image';
import CustomLink from '../../shared/CustomLink';

export const ImageRowItem = ({ item }) => {

    if (item) {
        const { Description, Image, Link, LinkHref, Title } = item;

        return <div className={ styles.image_row_item }>
            <div className={ styles.image_wrapper}>
                {Image.data !== null ?
            <ImageComponent src={ Image.data.attributes.url }
                            alt={ Image.data.attributes.name }
                            width={ 200 }
                            height={ 200 }
            /> : '' }
            </div>
            <h3 className={styles.image_row_title}>{Title}</h3>
            <div className={styles.image_row_description} dangerouslySetInnerHTML={ {__html: Description}}/>
            <CustomLink label={Link} href={LinkHref}/>
        </div>;
    }
};