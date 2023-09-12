import { useContext } from 'react';
import Context from '../../../utils/context'
import {CLOSE_MODAL_ACTION_CUSTOM} from '../../../constants/actions';
import ContactSalesForm from '../ContactSalesForm';
import styles from './custom_popup.module.scss';

const CustomPopUp = (footer) => {
    const { state, dispatch } = useContext(Context)
    const closeModalCustom = () => {
        dispatch(CLOSE_MODAL_ACTION_CUSTOM)
        document.body.style.overflowY = 'inherit';
    };
    return (
        <div className={ `${ styles.wrapper } ${ state.isModalCutsomOpen ? styles.open : styles.closed }` }>
            <div className={ styles.pop_up } onClick={ closeModalCustom }/>
            <ContactSalesForm  onClose={ closeModalCustom } isOpened={ state.isModalCutsomOpen } form={footer.PartnersFormId} formId={'custom-form'}/>
        </div>
    );
};

export default CustomPopUp;