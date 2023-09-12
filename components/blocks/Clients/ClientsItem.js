import styles from './clients.module.scss';
import Image from 'next/image';

export const ClientsItem = ({data: {attributes}}) => {

    return (
        <div className={styles.list_item}>
            <img src={attributes.url} alt={`${attributes.caption}`} height={40} width="130"/>
        </div>
    );
};