import styles from './aritlceForm.module.scss';
import {ITEMS_LABELS} from "../../shared/ContactSalesForm/constants";
import Link from "next/link";
import form_styles from '../../shared/ContactSalesForm/form.module.scss';
import {useEffect} from "react";

export default function ArticleForm({ footerData }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        script.async = true;
        document.body.appendChild(script);
        
        script.addEventListener('load', () => {
            if (window.hbspt?.forms) {
                window.hbspt.forms.create({
                    portalId: '26634095',
                    formId: footerData.SalesFormId,
                    target: '#sales-form-blog',
                });
            }
        });
    }, []);
    
    return (
        <div className={styles.blog_form_wrapper}>
            <div className={styles.container}>
                
                <div className={styles.text_part}>
                    <span className={styles.badge}>{footerData.BlogPageBadge}</span>
                    <h3 className={styles.title}>{footerData.BlogPageTitle}</h3>
                    <div className={styles.text}>{footerData.BlogPageDescription}
                    </div>
                </div>
    
                <div className={styles.form_part}>
                    {footerData.SalesFormId && <div id='sales-form-blog' className="wrapper sales-form"/>}
                    <div className={form_styles.form_text}>
                        {ITEMS_LABELS.TERMS_TEXT}
                        <Link href={"/terms-of-service"}>
                            {ITEMS_LABELS.TERMS_LINK}
                        </Link></div>
                </div>

            </div>
        </div>
    );
}