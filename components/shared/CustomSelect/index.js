import { Select } from 'antd';
import { useState } from 'react';
import DownOutlined from '../../../asset/image/svg/down_out_lined.svg';
import styles from './select.module.scss';

const CustomSelect = ({ placeholder, isRequired, name }) => {
    return (
        <div className={ styles.wrapper }>
            <Select id={ name } className="styled_select" suffixIcon={ <DownOutlined/> }/>
            { name && (
                <label className={ styles.label } htmlFor={ name }>
                    { placeholder }
                    { isRequired && <span>*</span> }
                </label>)
            }
        </div>
    );
};

export default CustomSelect;