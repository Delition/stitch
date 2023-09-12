import styles_menu from './articleMenu.module.scss';
import { useRouter } from 'next/router';
import {getStrapiURL} from "../../../utils";
import { useEffect, useState } from 'react';
import Paragraph from "../Paragraph";
import styles from '../../../styles/article.module.scss';
import styles_manager from '../../../components/shared/BlogManager/blogManager.module.scss';

const PageMenu = ({ Title,  }) => {
    const [pageData, setPageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { push } = useRouter();

    useEffect(() => {
        setIsLoading(true);
        fetch(getStrapiURL('/pages/'+Title))
            .then((res) => res.json())
            .then((data) => {
                setPageData(data);
                setIsLoading(false);
            });
    }, [Title]);
    if(pageData !== null){
        let menu = [];
          pageData.data[0].attributes.Blocks.map((item) => {
              if (item.__component == 'blocks.paragraph-block' && item.Title !== null && item.Title !== undefined)
                  menu.push({ [item.id]: item.Title });
          });

        const handleClick = (id) => {
            push(`#paragraph-block${ id }`)
        }

        return (
            <div className={styles.article_wrapper}>
                <div className={styles.content_wrapper}>
                    <div className={styles.menu_wrapper}>
                        <div className={ styles_menu.wrapper }>
                            <h2>Index</h2>
                            <ul className={ styles_menu.menu_list }>
                                { menu.map((item) => {
                                    const id = Number(Object.keys(item));
                                    return <li className={ styles_menu.menu_item }
                                               key={ id }
                                    >
                                    <span onClick={()=> handleClick(id)}>
                                           { item[id] }
                                    </span>
                                    </li>;
                                }) }
                            </ul>
                        </div>
                    </div>
                    <div className={styles_manager.blog_manager_wrapper}>
                        {
                            pageData.data[0].attributes.Blocks.map((item,index) => {
                                if (item.__component == 'blocks.paragraph-block')
                                    return <Paragraph key={ `index-${ index }` } { ...item }/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }


};

export default PageMenu;