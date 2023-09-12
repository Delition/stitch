import { useEffect } from 'react';
import styles from './codeSection.module.scss';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-graphql.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-csharp.js';

export const CodeSection = ({ item, accordion = false }) => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    if (accordion) {
        return <div className={styles.accordion_wrapper}>
            <div dangerouslySetInnerHTML={{__html: item.Description}}></div>
        </div>;
    } else {
        return (
            <div className={ styles.code_wrapper }>
                <div dangerouslySetInnerHTML={{__html: item.Description}}></div>
            </div>
        );
    }
};
