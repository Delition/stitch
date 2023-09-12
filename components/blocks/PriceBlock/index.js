import styles from './priceBlock.module.scss';
import React, {useState} from "react";
import { CustomLink } from '../../shared';

const PriceBlock = ({PriceItem, BlockId}) => {
    const [currentTab, setCurrentTab] = useState(PriceItem[0].id.toString());
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    return (<div className={styles.wrapper} id={BlockId}>
        <div className={styles.content_wrapper}>
            <ul className={styles.tab_list}>
                {PriceItem.map((cardItem) =>
                    <li className={`${styles.tab_item} ${currentTab === `${cardItem.id}` ? styles.tab_item_active : ''}`}
                        key={cardItem.id}>
                        <button
                            id={`${cardItem.id}`}
                            className={styles.tab_button}
                            onClick={(handleTabClick)}
                        >
                            {cardItem.Title}
                        </button>
                    </li>)}
            </ul>
            {PriceItem.map((cardItem) =>
                currentTab === `${cardItem.id}` &&
                <div key={cardItem.id} className={styles.card_list}>
                    {cardItem.PriceCard.map((card) => {
                        return (
                            <div className={styles.card_item} key={card.id}>
                                {card.Title && <h2 className={styles.card_title}>{card.Title}</h2>}
                                
                                {card.Description && <div className={styles.card_description}
                                                          dangerouslySetInnerHTML={{__html: card.Description}}/>}
                                
                                {card.FromText && <div className={styles.card_inner}
                                                       dangerouslySetInnerHTML={{__html: card.FromText}}/>}
                                
                                {card.AfterFrom && <div className={styles.card_after}>{card.AfterFrom}</div>}
    
                                {card.ButtonText && <CustomLink
                                    key={card.id}
                                    label={card.ButtonText}
                                    href={card.ButtonLink}
                                    theme="dark"
                                />}
                                
                                {card.Includes && <div className={styles.card_features}
                                                       dangerouslySetInnerHTML={{__html: card.Includes}}/>}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    </div>)
}

export default PriceBlock;