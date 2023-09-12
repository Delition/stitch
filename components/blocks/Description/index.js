import styles from './description.module.scss';
import React from "react";

const Description = ({badge, text, Text, BlockId}) => {
    return (
        <div className={ styles.wrapper } id={BlockId}>
            {badge && <span className={styles.badge}>{badge}</span>}
            {text && <div className={styles.title} dangerouslySetInnerHTML={{__html: text}} ></div>}
            {Text && <div className={styles.title_wrapper} dangerouslySetInnerHTML={{__html: Text}} ></div>}
        </div>
    );
};

export default Description;
