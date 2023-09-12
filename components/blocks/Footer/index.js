import styles from './footer.module.scss';
import Newsletter from '../../shared/Newsletter';
import Link from "next/link";
import { FooterMenu } from './FooterMenu';
import { BottomList } from './BottomList';
import { getSocialIcons } from '../../../utils/getSocialIcons';
import { useWindowSize } from '../../../hooks';
import { screenWidth } from '../../../constants/screenSize';


const Footer = ({
                    NewsletterTitle,
                    NewsletterDescription,
                    InputPlaceholder,
                    SiteName,
                    Menu,
                    Logo,
                    Social,
                    SalesFormId,
                    NewsletterFormId,
                    Address,
                    bottomList,
                    ContactEmail,
                }) => {

    const size = useWindowSize();
    const isMobile = size.width <= screenWidth.phoneXL;
    return (
        <div id="footer" className={styles.wrapper}>
            
            <div className={styles.input_wrapper}>
                <div className={styles.input_wrapper_left}>
                    <Newsletter placeholder={InputPlaceholder}
                                newsletterTitle={NewsletterTitle}
                                newsletterDescription={NewsletterDescription}
                                formId={'footer-form'}
                                form={NewsletterFormId}
                    />
                    <div className={styles.social_list}>
                        {Social.map((item) => {
                            return (<Link href={item.Link} key={item.id}>
                                <a target="blank" className={styles.social_link}>
                                    {getSocialIcons(item.Class)}
                                </a>
                            </Link>);
                        })}
                    </div>
                </div>
                <div className={styles.input_wrapper_right}>
                    <FooterMenu menu={ Menu } address={Address} email={ContactEmail}/>
                </div>
            </div>
	        <div className={styles.footer_bottom}>
		        <div className={styles.bottom_menu}>
			        <div className={styles.bottom_menu_inner}>
				        <span className={styles.bottom_menu_item}>&copy;{(new Date().getFullYear())} {SiteName}</span>
				        <span className={styles.bottom_menu_item}>PCI DSS Level 1 Certified</span>
			        </div>
			        <address className={styles.bottom_menu_item} dangerouslySetInnerHTML={{__html: Address.replace(/(<([^>]+)>)/gi, "")}}>
			        </address>
			        <a className={styles.bottom_menu_item} href={"mailto:".ContactEmail}>{ContactEmail}</a>
		        </div>
		        <BottomList menuItems={bottomList}/>
	        </div>
        </div>
    );
};

export default Footer;