import styles from './clients.module.scss';
import { ClientsItem } from './ClientsItem';
import Marquee from "react-fast-marquee";

const Clients = ({Title, Images, BlockId}) => {

    return <div className={styles.wrapper} id={BlockId}>
        <h2 className={styles.title}>{Title}</h2>
        <div className={styles.list}>
            <Marquee
                gradient={false}
                speed={50}
            >
                {Images?.data.map((item) => {
                    return (<ClientsItem data={item} key={item.id}/>);
                })}
            </Marquee>
        </div>
    </div>;
};

export default Clients;