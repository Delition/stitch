import styles from './hero-wide.module.scss';
import CustomLink from '../../shared/CustomLink';

const HeroWide = ({ Badge, Text, buttons, Theme, BlockId}) => {
    return (
        <div className={Theme ? styles.wrapper+' '+styles.violet : styles.wrapper } id={BlockId}>
            { Badge ? <span className={ styles.badge }>{ Badge }</span> : ''}
            <div className={ styles.title } dangerouslySetInnerHTML={ { __html: Text } }></div>

            <div className={ styles.buttons_wrapper }>
                { buttons.map((link) => {
                    return (
                        <CustomLink key={ link.id }
                                    href={ link.href }
                                    label={ link.label }
                                    isExternal={ link.isExternal }
                                    theme={ link.theme }
                                    withOutIcon={ true }

                        />
                    );
                }) }
            </div>
        </div>
    );
};

HeroWide.defaultProps = {};

export default HeroWide;