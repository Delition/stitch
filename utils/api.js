import { message } from 'antd';

export const subscribeNewsletter = (data) => {

    const formData = new FormData();
    formData.append( "json", JSON.stringify( data ) );

    fetch("https://hooks.zapier.com/hooks/catch/11747778/bwhs6x8/",
        {
            method: "POST",
            body: JSON.stringify( data )
        })
        .then(() => message.success('Successfully subscribed'))
        .catch((error) => message.error(error.message))
}
