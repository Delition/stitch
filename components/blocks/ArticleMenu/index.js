import styles from './articleMenu.module.scss';
import { useRouter } from 'next/router';

const ArticleMenu = ({ menu }) => {

    const { push } = useRouter();

    const handleClick = (id) => {
        push(`#paragraph-block${ id }`);
    };

    return (
        <div className={ styles.wrapper }>
            <h2 className={ styles.title }>In this post</h2>
            <ul className={ styles.menu_list }>
                { menu.map((item) => {
                    const id = Number(Object.keys(item));
                    return <li className={ styles.menu_item }
                               key={ id }
                    >
                        <span onClick={ () => handleClick(id) }>
                               { item[id] }
                        </span>
                    </li>;
                }) }
            </ul>
        </div>
    );
};

export default ArticleMenu;