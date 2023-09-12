import { useEffect, useState } from 'react';
import PostsList from '../PostsList';
import { getStrapiURL } from '../../../utils';
import styles from './articlePosts.module.scss';
import CustomLink from '../../shared/CustomLink';
import Spinner from '../../shared/Spinner';

export default function ArticlePosts({ id, isDesktop, isMobile }) {
    const [blogData, setBlogData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(getStrapiURL(`/blogs?filters[id][$not]=${ id }&publicationState=live&pagination[limit]=3&sort[0]=createdAt:desc`))
            .then((res) => res.json())
            .then((data) => {
                setBlogData(data);
                setIsLoading(false);
            });
    }, [id]);

    return (
        <>
            { isDesktop ? <div className={ styles.wrapper }>
                { isLoading && <Spinner/> }
                {
                    blogData && !isLoading && <>
                        <PostsList data={ blogData.data } articlePosts={true}/>
                        <CustomLink href="/blog" label="All posts"/>
                    </>
                }
            </div> : <div className={ styles.wrapper }>
                { isLoading && <Spinner/> }
                {
                    blogData && !isLoading && <>
                        <PostsList data={ blogData.data } isCarusel={ true } isMobile={isMobile}/>
                        <div className={isMobile ? styles.link_wrapper : ''}>
                            <CustomLink href="/blog" label="All posts"/>
                        </div>
                    </>
                }
            </div> }
        </>
    );
}