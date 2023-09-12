import styles from './articleShortDescription.module.scss';
import ReactMarkdown from 'react-markdown';
import { getPostedDate } from '../../../utils/date';
import { getCategoryClass } from './utils';

const ArticleShortDescription = ({ content, isMobile }) => {
    const {
        Category: { data: { attributes: categoryAttributes } },
        ShortDescription: description,
        TimeToRead,
        Title,
        Author,
        OldPublishDate,
    } = content;


    return <div className={ styles.wrapper }>
        <div className={ styles.left_content }></div>
        <div className={ styles.right_content }>
            <span className={ styles.posted_date }>{ OldPublishDate }</span>
            <h2 className={ styles.title }>{ Title }</h2>
            <div className={ styles.description } dangerouslySetInnerHTML={ { __html: description } }></div>
            <div className={ styles.author }>
                <ReactMarkdown>{ Author }</ReactMarkdown>
                { isMobile ? <span>{ `${ TimeToRead } read` }</span> : <>
                    <span className={ styles.read_time }>|</span>
                    <span className={ styles.read_time }>{ `${ TimeToRead } read` }</span>
                </> }
            </div>

            <span className={ `${ styles.category_item } ${ styles[getCategoryClass(categoryAttributes.Theme)] }` }>
                { categoryAttributes.Name }
            </span>
            <span className={ styles.horizontal_line }/>
        </div>
    </div>;
};

export default ArticleShortDescription;