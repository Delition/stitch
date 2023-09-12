import {useEffect} from 'react';
import Link from 'next/link';
import styles from './form.module.scss';
import CloseIcon from '../../../asset/image/svg/closeIcon.svg';
import {ITEMS_LABELS} from './constants';

const ContactSalesForm = ({onClose, isOpened, form, elemId}) => {
	const id = elemId
	
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://js.hsforms.net/forms/v2.js';
		script.async = true;
		document.body.appendChild(script);
		
		script.addEventListener('load', () => {
			if (window.hbspt?.forms) {
				window.hbspt.forms.create({
					portalId: '26634095',
					formId: form,
					target: '#sales-form-' + id,
				});
			}
		});
	}, []);
	
	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};
		document.addEventListener('keydown', handleKey);
		
		return () => document.removeEventListener('keydown', handleKey);
	}, [onClose]);
	
	
	return (
		<div className={`${styles.wrapper} ${isOpened ? styles.opened : styles.closed}`}>
			<h2 className={styles.form_title}>Contact sales</h2>
			<div id={'sales-form-' + id} className="wrapper sales-form"/>
			<div className={styles.form_text}>
				{ITEMS_LABELS.TERMS_TEXT}
				<Link href={"/terms-of-service"}>
					{ITEMS_LABELS.TERMS_LINK}
				</Link></div>
			<div className={styles.close_modal} onClick={onClose}>
				<CloseIcon/>
			</div>
		</div>
	);
};

export default ContactSalesForm;