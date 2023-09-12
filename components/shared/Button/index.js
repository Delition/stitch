import styles from './button.module.scss';
import RightArrow from '../../../asset/image/svg/right_arrow_icon.svg';
import WhiteArrow from '../../../asset/image/svg/whiteArrow.svg';

export default function Button({text, disabled, isPrimary, onClick}) {
    switch (isPrimary){
        case true:
            return <button onClick={onClick} disabled={disabled} className={styles.primary_button}>
                    {text}
                    <span className={styles.arrow_wrapper}>
                        <span className={ styles.default_icon }>
                            <RightArrow/>
                        </span>
                        <span className={ styles.active_icon }>
                            <WhiteArrow/>
                        </span>
                    </span>
                    </button>;
        default:
            return <button onClick={onClick} className={styles.secondary_button}>
                     {text}
                     <span className={styles.arrow_wrapper}>
                        <span className={ styles.default_icon }>
                            <RightArrow/>
                        </span>
                        <span className={ styles.active_icon }>
                            <WhiteArrow/>
                        </span>
                     </span>
                    </button>;
    }
}