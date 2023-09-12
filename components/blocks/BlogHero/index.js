import styles from './blogHero.module.scss';
import Newsletter from "../../shared/Newsletter";

const BlogHero = ({ Title, Badge, FormId, BlockId }) => {
    return (
        <div className={ styles.wrapper } id={BlockId}>
            <span className={ styles.badge }>
                { Badge }
            </span>
            <div className={styles.title} dangerouslySetInnerHTML={{__html: Title}} ></div>
            <div className={styles.blog_sign_up}>
                <Newsletter placeholder="Email Address"
                        newsletterTitle="Sign up to our mailing list"
                        newsletterDescription=""
                        formId={'blog-form'}
                        form={FormId}
            />
            </div>
        </div>
    );
};

export default BlogHero;