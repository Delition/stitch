import styles from './footer.module.scss';
import LinkComponent from 'next/link';

export const BottomList = ({menuItems}) => {
    return <ul className={styles.bottom_list}>
        {menuItems.map((menuItem) => {
            return <li key={menuItem.id} className={styles.bottom_list_item}>
                    <a className={styles.bottom_list_link} target={menuItem.target} href={menuItem.href}>
                        {menuItem.label}
                    </a>
            </li>
        })}
    </ul>
}