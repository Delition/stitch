import Paragraph from '../../blocks/Paragraph';
import BlogAccordion from '../../blocks/BlogAccordion';
import styles from './blogManager.module.scss';

const getBlogComponent = ({ __component, ...rest }, index) => {
    let Block;


    switch (__component) {
        case 'blocks.paragraph-block':
            Block = Paragraph;
            break;
        case 'blocks.accordion-block':
            Block = BlogAccordion;
            break;
    }

    return Block ? <Block key={ `index-${ index }` } { ...rest } /> : null;
};

const BlogManager = ({ blocks }) => {
    return <div className={ styles.blog_manager_wrapper }>{ blocks.map(getBlogComponent) }</div>;
};

BlogManager.defaultProps = {
    blocks: [],
};

export default BlogManager;