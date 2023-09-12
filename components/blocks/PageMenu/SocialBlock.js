import styles from './articleMenu.module.scss';
import { getSocialIcon } from './utils';
import { socialNetwork } from '../../../constants/socialNetwork';
import Newsletter from '../../shared/Newsletter';

export const SocialBlock = ({ footerData, isDesctop, isMobile }) => {
    const { NewsletterTitle, NewsletterDescription, InputPlaceholder } = footerData;
    let pathPage = '';

    if (typeof window !== 'undefined') {
        pathPage = window.location.href;
    }

    return (
        <div className={ styles.social_wrapper }>
            { isDesctop || isMobile ? <>
                <div className={ styles.share_wrapper }>
                <h3 className={ styles.social_title }>Share</h3>
                <ul className={ styles.social_list }>
                    { socialNetwork.map((item) => {
                        return <li key={ item.id } className={ styles.social_item }>
                            { getSocialIcon(item.title, pathPage) }
                        </li>;
                    }) }
                </ul>
                </div>
                <div className={ styles.newsletter_wrapper + ' newsletter_wrapper' }>
                    <Newsletter placeholder={ InputPlaceholder }
                                newsletterTitle={ NewsletterTitle }
                                newsletterDescription={ NewsletterDescription }
                    />
                </div>
            </> : <>
                <div className={ styles.newsletter_wrapper }>
                    <Newsletter placeholder={ InputPlaceholder }
                                newsletterTitle={ NewsletterTitle }
                                newsletterDescription={ NewsletterDescription }
                    />
                </div>
                <div className={ styles.share_wrapper }>
                    <h3 className={ styles.social_title }>Share</h3>
                    <ul className={ styles.social_list }>
                        { socialNetwork.map((item) => {
                            return <li key={ item.id } className={ styles.social_item }>
                                { getSocialIcon(item.title, pathPage) }
                            </li>;
                        }) }
                    </ul>
                </div>
            </> }

        </div>
    );
};