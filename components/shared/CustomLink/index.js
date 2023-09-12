import { useContext } from 'react';
import styles from './link.module.scss';
import { useRouter } from "next/router";
import {OPEN_MODAL_ACTION, OPEN_MODAL_ACTION_CUSTOM} from '../../../constants/actions';
import Context from '../../../utils/context';
import RightArrow from '../../../asset/image/svg/right_arrow_icon.svg';
import WhiteArrow from '../../../asset/image/svg/whiteArrow.svg';
import ArrowUp from '../../../asset/image/svg/arrow_up_icon.svg';
import { getLinksIcon } from './utils';

const CustomLink = ({
                        label,
                        href,
                        target,
                        isExternal,
                        theme,
                        arrowUp,
                        withOutIcon,
                        linkIcon,
                    }) => {
    const iconTipe = arrowUp ? <ArrowUp/> : <span className={ styles.arrow_wrapper }>
        <span className={ styles.default_icon }>
            <RightArrow/>
        </span>
        <span className={ styles.active_icon }>
            <WhiteArrow/>
        </span>
    </span>;

    const { dispatch } = useContext(Context);
    const router = useRouter();
    const isActiveLink = router.asPath === href;
    const icon = withOutIcon ? null : iconTipe;

    const handleClick = () => {
        dispatch(OPEN_MODAL_ACTION);
        document.body.style.overflowY = 'hidden';
    };
    const handleClickCustom = () => {
        dispatch(OPEN_MODAL_ACTION_CUSTOM);
        document.body.style.overflowY = 'hidden';
    };

    if (href === '#open-popup') {
        return <div onClick={ handleClick } className={ styles.wrapper }>
            { linkIcon ?
                <span className={ styles.prev_links_icon }>{ getLinksIcon(linkIcon) }</span>
                : null }
            <button className={ `${ theme === 'dark' ? styles.primary_link : (theme === 'yellow' ? styles.yellow_link : styles.contact_button) }  ${ styles.link }`}>
                { label }
                { icon }
            </button>
        </div>;
    } else if(href === '#custom-popup') {
        return <div onClick={ handleClickCustom } className={ styles.wrapper }>
            { linkIcon ?
                <span className={ styles.prev_links_icon }>{ getLinksIcon(linkIcon) }</span>
                : null }
            <button className={ `${ theme === 'dark' ? styles.primary_link : (theme === 'yellow' ? styles.yellow_link : styles.contact_button) }  ${ styles.link }` }>
                { label }
                { icon }
            </button>
        </div>;
    }

    if (isExternal) {
        switch (theme) {
            case 'dark':
                return (
                    <div className={ styles.wrapper }>
                        { linkIcon ?
                            <span className={ styles.prev_links_icon }>{ getLinksIcon(linkIcon) }</span>
                            : null }
                        <a className={ `${ styles.primary_link } ${ styles.link }` }
                           target={ target } href={ href }
                        >
                            { label }
                            { icon }
                        </a>
                    </div>
                );
                break;
            case 'yellow':
                return (
                    <div className={ styles.wrapper }>
                        { linkIcon ?
                            <span className={ styles.prev_links_icon }>{ getLinksIcon(linkIcon) }</span>
                            : null }
                        <a className={ `${ styles.yellow_link } ${ styles.link }` }
                           target={ target } href={ href }
                        >
                            { label }
                            { icon }
                        </a>
                    </div>
                );
                break;
            default:
                return (
                    <div className={ styles.wrapper }>
                        { linkIcon ?
                            <span className={ styles.prev_links_icon }>{ getLinksIcon(linkIcon) }</span>
                            : null }
                        <a className={ `${ styles.secondary_link } ${ styles.link } ${ isActiveLink ? styles.active_link : '' }` }
                           href={ href } target={ target }
                        >
                            { label }
                            { icon }
                        </a>
                    </div>
                );
        }
    } else {
        switch (theme) {
            case 'dark':
                return (
                    <div className={ styles.wrapper }>
                        { linkIcon ?
                            <span className={ styles.prev_links_icon }>{ getLinksIcon(linkIcon) }</span>
                            : null }
                        <a className={ `${ styles.primary_link } ${ styles.link }` } href={ href } target={ target }>
                            { label }
                            { icon }
                        </a>
                    </div>
                );
                break;
            case 'yellow':
                return (
                    <div className={ styles.wrapper }>
                        { linkIcon ?
                            <span className={ styles.prev_links_icon }>{ getLinksIcon(linkIcon) }</span>
                            : null }
                        <a className={ `${ styles.yellow_link } ${ styles.link }` } href={ href } target={ target }>
                            { label }
                            { icon }
                        </a>
                    </div>
                );
                break;
            default:
                return (
                    <div className={ styles.wrapper }>
                        { linkIcon ?
                            <span className={ styles.prev_links_icon }>{ getLinksIcon(linkIcon) }</span>
                            : null }
                        <a className={ `${ styles.secondary_link } ${ styles.link } ${ isActiveLink ? styles.active_link : '' }` }
                           target={ target } href={ href }>
                            { label }
                            { icon }
                        </a>
                    </div>
                );
        }
    }
};

CustomLink.defaultProps = {};

export default CustomLink;