import styles from './imageColumn.module.scss';
import { ImageColumnSection } from './ImageColumnSection';

const ImageColumn = ({ ColumnItem, BlockId }) => {
    return (
        <div className={ styles.wrapper } id={BlockId}>
            { ColumnItem && ColumnItem.map((item) => {
                // console.log(item.ImageMedia);
                return <ImageColumnSection key={ item.id }
                                           badge={ item.Badge }
                                           imageData={ item.Image.data }
                                           direction={ item.ImageDirection }
                                           leftText={ item.LeftText }
                                           rightText={ item.RightText }
                                           title={ item.Title }
                                           mode={ item.Mode }
                                           ImageMedia={ item.ImageMedia }
                                           VideoMedia={ item.VideoMedia }
                                           AnimationMedia={ item.AnimationMedia }
                />;
            }) }
        </div>
    );
};

export default ImageColumn;