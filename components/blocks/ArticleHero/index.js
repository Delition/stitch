import ImageComponent from 'next/image';
import styles from './atricleHero.module.scss';

const ArticleHero = ({imageData}) => {

    return <div className={ styles.hero }>
        <ImageComponent src={imageData.url}
                        alt={imageData.formats.name}
                        width={1440}
                        height={480}
                        layout='responsive'
        />
    </div>;
};

export default ArticleHero;