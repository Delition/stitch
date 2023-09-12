import styles from './rowList.module.scss';
import { TriggerList } from './TriggerList';

const RowList = ({ Badge, Description, Row, BlockId }) => {

    return (
        <div className={styles.wrapper} id={BlockId}>
            {Badge || Description ? <div className={styles.header}>
                { Badge ? <h3 className={styles.badge}>{Badge}</h3> : ''}
                { Description ? <h2 className={styles.title}>{Description}</h2> : ''}
            </div> : null}
            {Row && <TriggerList data={Row}/>}
        </div>
    );
};

export default RowList;