import { Input } from 'antd';
import styles from './input.module.scss';

const CustomInput = ({ title, isRequired, name, state: { value } }) => {

    return (
        <div className={ styles.input_wrapper }>
            <Input id={ name } />
            { !value && (
                <label className={ styles.label } htmlFor={ name }>
                    { title }
                    { isRequired && <span>*</span> }
                </label>)
            }
        </div>
    );
};

export default CustomInput;