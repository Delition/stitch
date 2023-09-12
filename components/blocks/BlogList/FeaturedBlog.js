import styles from './blogList.module.scss';
import CustomLink from '../../shared/CustomLink';
import ImageComponent from 'next/image';
import { getFeaturedHeaderClass } from './utils';
import { getPostedDate } from '../../../utils/date';

export const FeaturedBlog = ({ data }) => {

    const {
        Author,
        Thumb,
        Category,
        Title,
        ShortDescription,
        OldPublishDate,
        slug,
    } = data;
    if(Category.data == null)
        var catName = 'Green'
    else
        var catName = Category.data.attributes.Theme
    const contentHeaderClass = `${ getFeaturedHeaderClass(catName) }`;

    return <div className={ styles.featured_wrapper }>
        <div className={styles.featured_overflow}>
            <CustomLink href={ `/blog/${ slug }` }/>
        </div>
        <div className={ styles.featured_image }>
            {Thumb.data !== null ?
            <ImageComponent src={ Thumb.data.attributes.url }
                            alt={ Thumb.data.attributes.name }
                            width={ 1000 }
                            height={ 400 }
            />
            : '' }
        </div>
        <div className={ `${ styles[contentHeaderClass] } ${ styles.content_header }` }>
            <div className={styles.category_wrapper}>
                <h3 className={ styles.category }>{ Category.data !== null ? Category.data.attributes.Name : '' }</h3>
                <h3 className={ styles.featured_category }>Featured</h3>
            </div>
            <span className={ styles.featured_date }>{ OldPublishDate }</span>
        </div>
        <h2 className={ styles.featured_title }>{ Title }</h2>
        <p className={styles.featured_author} dangerouslySetInnerHTML={{__html: `<span>by</span> ${Author}`}} />
        <div className={styles.featured_description} dangerouslySetInnerHTML={{__html: ShortDescription}} />
        <div className={styles.featured_link}>
            <CustomLink href={`/blog/${slug}`} label="Read More"/>
        </div>
    </div>;
};