import { useEffect, useState } from 'react';
import styles from './blogList.module.scss';
import { BlogRows } from './BlogRows';
import { CategoriesList } from './CategoriesList';
import { FeaturedBlog } from './FeaturedBlog';
import Spinner from '../../shared/Spinner';
import { getStrapiURL } from '../../../utils';

const BlogList = ({ blog, BlockId }) => {
    const initialState = {
        categoryName: 'All posts',
        categoryTheme: 'Purple',
    };
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState(initialState);
    const [blogData, setBlogData] = useState(null);
    const { data: { attributes } } = blog;

    useEffect(() => {
        setIsLoading(true);
        fetch(getStrapiURL('/blogs?publicationState=live'))
            .then((res) => res.json())
            .then((data) => {
                setBlogData(data);
                setIsLoading(false);
            });
    }, []);

    return <div className={ styles.wrapper } id={BlockId}>
        <div className={ styles.content_left }>
            <FeaturedBlog data={ attributes }/>
        </div>
        <span className={ styles.dividing_line }/>
        <div className={ styles.content_right }>
            { isLoading && <Spinner/> }
            <div className={ styles.blog_category }>
                { !isLoading && <span className={ styles.category_title }>Filter</span> }
                <CategoriesList
                    currentCategory={ category }
                    setCurrentCategory={ setCategory }
                    isLoading={ isLoading }
                />
            </div>
            <div className={ styles.blog_content }>
                <BlogRows currentCategory={ category }
                          blogData={ blogData }
                          isLoading={ isLoading }
                          setIsLoading={ setIsLoading }
                          excludeItem={blog.data.id}
                />
            </div>
        </div>
    </div>;
};

BlogList.defaultProps = {};

export default BlogList;