import styles from './avatarList.module.scss';
import { AvatarItem } from './AvatarItem';

const AvatarList = ({ dataList }) => {

    return (
        <div className={ styles.wrapper }>
            { dataList && <ul className={ styles.list }>
                { dataList.map((item) => {
                    return <AvatarItem key={ item.id } data={ item.Image?.data } name={ item.Name } description={item.Description}/>;
                }) }
            </ul> }
        </div>
    );
};

export default AvatarList;