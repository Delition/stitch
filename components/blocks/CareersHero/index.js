import styles from './careersHero.module.scss';
import CustomLink from '../../shared/CustomLink';
import React from "react";

const CareersHero = ({ Badge, Text, buttons, Description, BlockId }) => {
    return (
            <div className={styles.wrapper} id={BlockId}>
                <span className={styles.badge}>{Badge}</span>
                <div className={styles.title} dangerouslySetInnerHTML={{__html: Text}} ></div>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: Description}} ></div>
                <div className={styles.buttons_wrapper}>
                    {buttons.map((link) => {
                        return <CustomLink key={link.id}
                                           href={link.href}
                                           label={link.label}
                                           target={link.target}
                                           arrowUp={link.ArrowUp}
                                           theme={link.theme}
                        />
                    })}
                </div>
            </div>
    )
}

export default CareersHero;