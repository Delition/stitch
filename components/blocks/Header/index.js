import delve from 'dlv';
import { useState, useEffect } from 'react';
import { getStrapiMedia } from "../../../utils";
import ImageComponent from 'next/image';
import { Space } from 'antd';
import styles from './header.module.scss';
import { BurgerMenu } from './burgerMenu';
import { useWindowSize } from '../../../hooks';
import { screenWidth } from '../../../constants/screenSize';
import { DropdownItem } from './DropdownItem';
import CustomLink from '../../shared/CustomLink';
import { useInView } from 'react-intersection-observer';
import Headroom from 'react-headroom';

const refreshPage = (path) => {
    window.location.href = `${ path }`;
};

const Header = ({ button, menuitem, sitelogo: siteLogo, sitewhitelogo: sitewhitelogo}) => {
    const [menuIsOpen, setMenuISOpen] = useState(false);
    
    useEffect(() => {
        menuIsOpen === true ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
    }, [menuIsOpen]);

    const { ref, inView } = useInView();

    const size = useWindowSize();
    const { data: { attributes: logoAttributes } } = siteLogo;
    const { data: { attributes: logoWhiteAttributes } } = sitewhitelogo;

    const dropdown = menuitem.map((item, index) => {
        if (item.second_level) {
            return (
                <DropdownItem item={ item } key={ `menu-${ index }` }/>
            );
        }
        return <a href={ item.Link } key={ `menu-${ index }` }>
            <Space className={ styles.dropdown_item }>
                { item.Title }
            </Space>
        </a>;
    });

    return (
        <>
            <Headroom>
                <header className={ `${ styles.wrapper } ${ inView ? 'headroom--pinned' : 'headroom--unpinned' }` }>
                    <div className={styles.logo_wrapper} onClick={() => refreshPage('/')}>
                        <div className={'header_logo'}>
                            <div className={'header_logo_black'}>
                                <ImageComponent
                                    width={138}
                                    height={36}
                                    layout="fixed"
                                    src={getStrapiMedia(delve(logoAttributes, 'url'))}
                                    alt={delve(logoAttributes, 'alternativeText')}
                                />
                            </div>
                            <div className={'header_logo_white'}>
                                <ImageComponent
                                    width={138}
                                    height={36}
                                    layout="fixed"
                                    src={getStrapiMedia(delve(logoWhiteAttributes, 'url'))}
                                    alt={delve(logoWhiteAttributes, 'alternativeText')}
                                />
                            </div>
                        </div>
                    </div>
                    { size.width >= screenWidth.tabletL ? <>
                        <nav className={ styles.navigation }>
                            { dropdown }
                        </nav>
                        <CustomLink
                            key={ button.id }
                            label={ button.label }
                            target={ button.target }
                            href={ button.href }
                            isExternal={ button.isExternal }
                            theme={ button.theme }
                        />
                    </> : <BurgerMenu isOpen={ menuIsOpen } toggle={ setMenuISOpen } nav={ dropdown }/> }
                </header>
            </Headroom>
            <div className={ styles.scroll_trigger } ref={ ref }></div>
            <nav
                className={ `${ styles.mobile_navigation } ${ menuIsOpen ? styles.mobile_open : styles.mobile_close }` }>
                { dropdown }
            </nav>
        </>
    );
};

Header.defaultProps = {};

export default Header;