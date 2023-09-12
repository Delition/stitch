import styles from './input.module.scss';
import {useEffect} from 'react';

export default function Newsletter({newsletterDescription, newsletterTitle, formId, form}) {
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
					target: '#' + formId,
				});
			}
		});
	}, []);
	
	return (
		<div className={styles.wrapper}>
			{newsletterTitle && <h3 className={styles.title}>{newsletterTitle}</h3>}
			{formId && <div id={formId} className="hs-form-wrapper"/>}
			{newsletterDescription && (
				<div className={styles.description} dangerouslySetInnerHTML={{__html: newsletterDescription}}/>
			)}
		</div>
	);
}
