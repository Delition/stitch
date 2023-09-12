import styles from './hubspot.module.scss';
import {useEffect} from "react";

const Hubspotblock = (data) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://js.hsforms.net/forms/v2.js';
		script.async = true;
		document.body.appendChild(script);
		script.addEventListener('load', () => {
			if (window.hbspt?.forms) {
				window.hbspt.forms.create({
					portalId: '26634095',
					formId: data.FormId,
					target: '#sales-form-' + data.id,
				});
			}
		});
	}, []);
	return (
		<div className={'custom-wrapper ' + styles.wrapper} id={data.BlockId}>
			<div className={styles.content_wrapper}>
				<div className="row">
					<div id={'sales-form-' + data.id} className="wrapper sales-form"/>
				</div>
			</div>
		</div>
	);
};

export default Hubspotblock;