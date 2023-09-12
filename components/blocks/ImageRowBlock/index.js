import styles from './imageRowBlock.module.scss'
import { ImageRowItem } from './ImageRowItem';
import Slider from 'react-slick';
import { settings } from '../../../constants/scrollSettings';
import { screenWidth } from '../../../constants/screenSize';
import { useWindowSize } from '../../../hooks';

const ImageRowBlock = ({Title, ImageRow, BlockId}) => {

    const size = useWindowSize();

    return <div className={styles.wrapper} id={BlockId}>
        <div className={styles.title_wrapper} dangerouslySetInnerHTML={ { __html: Title }}></div>
        { ImageRow ? <div className={ styles.image_row_wrapper }>
            { size.width >= screenWidth.tabletL ? <>
                { ImageRow.map(item => {
                    return <ImageRowItem key={ item.id } item={ item }/>;
                }) }
            </> : <Slider {...settings}>
                { ImageRow.map(item => {
                    return <ImageRowItem key={ item.id } item={ item }/>;
                }) }
            </Slider> }
        </div>  : null }
    </div>
}

export default ImageRowBlock;