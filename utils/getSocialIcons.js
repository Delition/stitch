import TwitterIcon from '../asset/image/svg/twitter_icon.svg';
import LinkedInIcon from '../asset/image/svg/linkedIn_icon.svg';
import YouTubeIcon from '../asset/image/svg/youTube_icon.svg'
import InstagramIcon from '../asset/image/svg/instagram_icon.svg'

export const getSocialIcons = (targetIcons) => {
    switch (targetIcons) {
        case 'twitter':
            return <TwitterIcon/>;
            break;
        case 'linkedin':
            return <LinkedInIcon/>;
            break;
        case 'youtube':
            return <YouTubeIcon/>
	        break;
	    case 'instagram':
		    return <InstagramIcon/>
    }
};