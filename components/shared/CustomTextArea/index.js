import { Input } from 'antd';
import TextAreaLine from '../../../asset/image/svg/textareaLine.svg';
import styles from './textArea.module.scss';

const { TextArea } = Input

const CustomTextArea = ({ placeholder, isRequired, name }) => {
    return (
        <div className={ styles.wrapper }>
            <TextArea id={name} />
            { name && (
                <label className={styles.label} htmlFor={name}>
                    { placeholder }
                    { isRequired && <span>*</span> }
                </label>)
            }
            <div className={ styles.icon_wrapper}>
                <TextAreaLine />
            </div>
        </div>
    );
};

export default CustomTextArea;