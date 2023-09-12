import { useEffect } from 'react';
import Prism from 'prismjs';
import { Collapse } from 'antd';
import styles from './accordion.module.scss';
import { CodeSection } from '../../shared/CodeSection';
import PlusIcon from '../../../asset/image/svg/plus_icon.svg';
import MinusIcon from '../../../asset/image/svg/minus_icon.svg';

const { Panel } = Collapse;

const BlogAccordion = ({ AccordionItem }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return <div className={ styles.wrapper }>
        { AccordionItem?.map((item, index) => {
            return (
                <Collapse className="accordion-item" key={ index }
                          expandIcon={ ({ isActive }) => isActive ? <MinusIcon/> : <PlusIcon/> }>
                    <Panel header={ <div dangerouslySetInnerHTML={{__html: item.Title}}></div> }
                           key={ item.id }>
                        <CodeSection item={ item } accordion={ true }/>
                    </Panel>
                </Collapse>
            );
        }) }
    </div>;
};


BlogAccordion.defaultProps = {};

export default BlogAccordion;