import { useContext } from 'react';
import Context from '../../../utils/context'
import { CLOSE_MODAL_ACTION } from '../../../constants/actions';
import ContactSalesForm from '../ContactSalesForm';
import styles from './popup.module.scss';

const PopUp = (footer) => {
    const { state, dispatch } = useContext(Context)
    const closeModal = () => {
        dispatch(CLOSE_MODAL_ACTION)
        document.body.style.overflowY = 'inherit';
    };

    return (
        <div className={ `${ styles.wrapper } ${ state.isModalOpen ? styles.open : styles.closed }` }>
            <div className={ styles.pop_up } onClick={ closeModal }/>
            <ContactSalesForm  onClose={ closeModal } isOpened={ state.isModalOpen } form={footer.SalesFormId} elemId={'sales-form'}/>
        </div>
    );
};

export default PopUp;