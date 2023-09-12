import styles from './postsList.module.scss';
import ImageComponent from 'next/image';
import { getBlogHeaderClass } from './utils';
import { getPostedDate } from '../../../utils/date';
import CustomLink from '../../shared/CustomLink';
import { Carousel } from 'antd';

export default function PostsList({ data, isCarusel, isMobile, articlePosts, allPosts = false }) {

    const postsArray = [];

    if (data && allPosts) {
        data.forEach(item => postsArray.push(item));
    } else {
        for (let i = 0; i < 3; i++) {
            postsArray.push(data[i]);
        }
    }
    postsArray.sort((a, b) => {
        if(a.attributes.OldPublishDate === null){
            a.attributes.OldPublishDate =  '17 AUGUST 2020'
        }
        if(b.attributes.OldPublishDate === null){
            b.attributes.OldPublishDate =  '17 AUGUST 2020'
        }
        if( new Date(a.attributes.OldPublishDate.trim()) >  new Date(b.attributes.OldPublishDate.trim()))
            return -1;
        else
            return 1;
    })

    return <>
        { !isCarusel && postsArray && <ul className={ styles.content_list }>
            { postsArray.map(({
                                  id, attributes: {
                    Thumb,
                    Category,
                    Title,
                    Author,
                    ShortDescription,
                    OldPublishDate,
                    slug,
                },
                              }) => {

                return <li key={ id } className={ articlePosts ? styles.article_content_item : styles.content_item }>
                    <div className={ styles.content_item_link_overflow }>
                        <CustomLink href={ `/blog/${ slug }` }/>
                    </div>
                    <div className={ styles.content_item_image }>
                        {Thumb.data !== null ?
                        <ImageComponent src={ Thumb.data.attributes.url }
                                        alt={ Thumb.data.attributes.name }
                                        width={ 500 }
                                        height={ 200 }
                        /> : '' }
                    </div>
                    <div className={ articlePosts && styles.item_body }>
                        <div
                            className={ `${ styles[getBlogHeaderClass(Category.data == null ? 'green' : Category.data.attributes.Theme)] } ${ styles.content_header }` }>
                            <h3 className={ styles.content_item_category }>{ Category.data !== null ? Category.data.attributes.Name : '' }</h3>
                            <span
                                className={ styles.content_item_date }>{ OldPublishDate }</span>
                        </div>
                        <h2 className={ styles.content_item_title }>{ Title }</h2>
                        <p className={ styles.featured_author } dangerouslySetInnerHTML={ { __html: `<span>by</span> ${ Author }` } }/>
                        <div className={ styles.content_item_description } dangerouslySetInnerHTML={ { __html: ShortDescription } }/>
                    </div>
                    <div className={styles.content_item_link}>
                        <CustomLink href={`/blog/${slug}`} label="Read More"/>
                    </div>
                </li>;
            }) }
        </ul> }
        { isCarusel && postsArray && <Carousel className={ styles.carusel_content_list }
                                               slidesToShow={ isMobile ? 1 : 2 }>
            { postsArray.map(({
                                  id, attributes: {
                    Thumb,
                    Category,
                    Title,
                    Author,
                    ShortDescription,
                    OldPublishDate,
                    slug,
                },
                              }) => {
                return <div key={ id } className={ styles.carusel_content_item }>
                    <div className={ styles.content_item_image }>
                        {Thumb.data !== null ?
                        <ImageComponent src={ Thumb.data.attributes.url }
                                        alt={ Thumb.data.attributes.name }
                                        width={ isMobile ? 452 : 379 }
                                        height={ 172 }
                        /> : '' }
                    </div>
                    <div className={ styles.carusel_post_body }>
                        <div
                            className={ `${ styles[getBlogHeaderClass(Category.data == null ? 'green' : Category.data.attributes.Theme)] } ${ styles.content_header }` }>
                            <h3 className={ styles.content_item_category }>{ Category.data !== null ? Category.data.attributes.Name : '' }</h3>
                            <span
                                className={ styles.content_item_date }>{ OldPublishDate }</span>
                        </div>
                        <h2 className={ styles.content_item_title }>{ Title }</h2>

                        <div className={ styles.featured_author } dangerouslySetInnerHTML={ { __html: Author } }/>
                        <div className={ styles.content_item_description } dangerouslySetInnerHTML={ { __html: ShortDescription } }/>

                        <div className={ `${ styles.content_item_link } ${ styles.carusel_item_link }` }>
                            <CustomLink href={ `/blog/${ slug }` } label="Read More"/>
                        </div>
                    </div>
                </div>;
            }) }
        </Carousel> }
    </>;
}