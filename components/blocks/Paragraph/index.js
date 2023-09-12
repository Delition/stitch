import styles from './paragraph.module.scss';
import {useEffect} from "react";

const Paragraph = ({SimpleParagraph, id, FormId, ColorBgHex, BlockId}) => {
	const blockId = `paragraph-block${id}`;
	
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://js.hsforms.net/forms/v2.js';
		script.async = true;
		document.body.appendChild(script);
		
		script.addEventListener('load', () => {
			if (window.hbspt?.forms) {
				window.hbspt.forms.create({
					portalId: '26634095',
					formId: FormId,
					target: '#' + blockId,
				});
			}
		});
	}, []);
	
	
	return <div id={BlockId} className="paragraph_text_block">
		{ColorBgHex ?
			<style>
				{`#` + blockId + ` pre{background-color: ` + ColorBgHex + `!important;}`}
			</style> : ''}
		{SimpleParagraph?.map((item) => {
			return (
				
				<div className={styles.paragraph_text}
				     id={blockId}
				     key={item.id}
				     dangerouslySetInnerHTML={{__html: item.Content}}
				>
				</div>
			
			);
		})}
		{FormId && <div id={'sales-form-' + blockId} className="wrapper sales-form sales-form-blog"/>}
	</div>;
};


Paragraph.defaultProps = {};

export default Paragraph;