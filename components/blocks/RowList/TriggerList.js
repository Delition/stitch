import styles from './rowList.module.scss';
import { TriggerItem } from './TriggerItem';

export const TriggerList = ({ data }) => {

    return <ul className={ styles.list }>
        { data.map((item,index) => {
            item.index = index
            return <TriggerItem id={item.BlockId} key={index} triggerItem={item}/>
        }
        ) }
    </ul>;
};