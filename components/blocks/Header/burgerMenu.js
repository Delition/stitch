import MenuIcon from '../../../asset/image/svg/burgerMenu_icon.svg';
import CloseMenuIcon from '../../../asset/image/svg/closeMenu.svg';
import styles from './header.module.scss';

export const BurgerMenu = ({isOpen, toggle, nav}) => {

    return (
        <div className={ styles.burger_menu_wrapper }
            onClick={ () => toggle(!isOpen)}
        >
            {!isOpen ? <MenuIcon/> : <CloseMenuIcon />}
        </div>
    );
};