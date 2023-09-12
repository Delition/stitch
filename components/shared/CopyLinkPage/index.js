import { message } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const info = () => {
    message.info('Link copied', 10);
};

export const CopyLinkPage = ({ icon, url }) => {
    return <button className='copy-button'>
        <CopyToClipboard text={url} onCopy={info}>
            {icon}
        </CopyToClipboard>
    </button>
}