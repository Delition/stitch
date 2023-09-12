import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styles from './spinner.module.scss';

const antIcon = <LoadingOutlined style={ { fontSize: 96 } } spin/>;

export default function Spinner() {
    return <div className={ styles.spinner_wrapper }>
        <Spin indicator={ antIcon }/>
    </div>;
}