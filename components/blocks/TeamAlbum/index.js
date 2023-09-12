import styles from './teamAlbum.module.scss';
import CTABlock from '../CTABlock';
import AvatarList from '../AvatarList';

const TeamAlbum = ({ Badge, TeamMember, Title, buttons, BlockId }) => {
    return (
        <div className={ styles.wrapper } id={BlockId}>
            <CTABlock Badge={ Badge } Title={ Title } buttons={ buttons } style={ 'without_background' } />
            <AvatarList dataList={ TeamMember }/>
        </div>
    );
};

export default TeamAlbum;