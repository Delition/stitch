import { useState, useEffect, useCallback } from 'react';
import { getStrapiURL } from '../../../utils';
import styles from './blogList.module.scss';
import { getCategoryClass, ALL_CATEGORY } from './utils';

export const CategoriesList = ({ currentCategory, setCurrentCategory, isLoading }) => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch(getStrapiURL('/categories?filters[blog][title][$null]'))
            .then((res) => res.json())
            .then((categories) => {
                setCategories(categories);
            });


    }, []);

    const categoryClass = `${getCategoryClass(currentCategory.categoryTheme)}`;

    const getActiveClass = useCallback((item, activeCategory) => {
        if(activeCategory === item.Name){
            return `${styles.category_item} ${styles[categoryClass]}`
        }
        else {
            return styles.category_item
        }
    }, [currentCategory])

    const chooseCategory = ({ Name: categoryName, Theme: categoryTheme }) => {
        const category = {
            categoryName,
            categoryTheme,
        };
        setCurrentCategory(category);
    };

    return (<>
            {!isLoading && <ul className={ styles.category_list }>
                <li className={ getActiveClass(ALL_CATEGORY, currentCategory.categoryName) }
                    onClick={ () => chooseCategory(ALL_CATEGORY) }
                >{ALL_CATEGORY.Name}</li>
                { categories ? categories.data.map(({ id, attributes }) => {
                    return <li key={ id }
                               className={ getActiveClass(attributes, currentCategory.categoryName) }
                               onClick={ () => chooseCategory(attributes) }
                    >
                        { attributes.Name }
                    </li>;
                }) : null }
            </ul>}
        </>
    );
};
