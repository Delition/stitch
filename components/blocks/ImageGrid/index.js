import styles from './imageGrid.module.scss';
import Description from '../Description';
import { ImageGridSection } from './ImageGridSection';
import {ImageColumnSection} from "../ImageColumn/ImageColumnSection";

const ImageGrid = ({ Badge, Title, GridItem, BlockId }) => {
    return <div className={ styles.wrapper } id={BlockId}>
        {Title && <Description Text={ Title } badge={ Badge }/>}
        { GridItem ? GridItem.map((item) => {
            return <ImageGridSection key={ item.id }
                                     badge={ item.Badge }
                                     imageData={ item.Image.data }
                                     direction={ item.ImageDirection }
                                     description={ item.Description }
                                     links={item.LinksIcons}
                                     title={ item.Title }
                                     id={item.id}
                                     ImageMedia={ item.ImageMedia }
                                     VideoMedia={ item.VideoMedia }
                                     AnimationMedia={ item.AnimationMedia }
            />
        }) : null }
    </div>;
};

export default ImageGrid;