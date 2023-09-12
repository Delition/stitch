import FacebookIcon from '../../../asset/image/svg/facebook_icon.svg';
import TwitterIcon from '../../../asset/image/svg/twitter_icon.svg';
import LinkedInIcon from '../../../asset/image/svg/linkedIn_icon.svg';
import LinkIcon from '../../../asset/image/svg/link_icon.svg';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'next-share';
import { CopyLinkPage } from '../../shared/CopyLinkPage';

export const getSocialIcon = (title, path) => {

    switch (title) {
        case 'facebook':
            return <FacebookShareButton url={ path } title={ title }>
                <FacebookIcon/>
            </FacebookShareButton>;
        case 'twitter':
            return <TwitterShareButton url={ path } title={ title }>
                <TwitterIcon/>
            </TwitterShareButton>;
        case 'linkedin':
            return <LinkedinShareButton url={ path } title={ title }>
                <LinkedInIcon/>
            </LinkedinShareButton>;
        case 'link':
            return <CopyLinkPage icon={ <LinkIcon/> } url={ path }/>;
        default:
            return null;
    }
};