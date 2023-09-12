import { useEffect, useState } from 'react';
import styles from './blogList.module.scss';
import PostsList from '../PostsList'
import { ALL_CATEGORY } from './utils';

export const BlogRows = ({ currentCategory, isLoading, blogData, excludeItem}) => {
    const [filteredBlogData, setFilteredBlogData] = useState(blogData);

    useEffect(() => {
        const currenBlogArray = [];
        if (blogData && blogData.data.some(item => (item.attributes.Category.data !== null && item.attributes.Category.data.attributes.Name === currentCategory.categoryName)) || currentCategory.categoryName === ALL_CATEGORY.Name) {
            blogData && blogData.data.filter(item => {
                if (currentCategory.categoryName === ALL_CATEGORY.Name && excludeItem !== item.id ) {
                    currenBlogArray.push(item);
                    return setFilteredBlogData(currenBlogArray);
                }
                if (item.attributes.Category.data.attributes.Name === currentCategory.categoryName && excludeItem !== item.id) {
                    currenBlogArray.push(item);
                    return setFilteredBlogData(currenBlogArray);
                }
            });
        } else {
            return setFilteredBlogData(null);
        }

    }, [blogData, currentCategory.categoryName]);

    return (<>
            { filteredBlogData && !isLoading ?
                <PostsList data={filteredBlogData} allPosts={true}/> :
                <span className={ styles.content_item_title }>No posts in this category</span> }
        </>
    );
};