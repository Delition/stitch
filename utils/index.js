// Get the url of the Strapi API based om the env variable or the default local one.
export function getStrapiURL(path) {
    return `${process.env.NEXT_PUBLIC_API_URL || "https://strapi-prod-web-app.azurewebsites.net/api"}${path}`;
}

// This function will get the url of your medias depending on where they are hosted
export function getStrapiMedia(url) {
    if (url == null) {
        return null;
    }
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }
    return `${process.env.NEXT_PUBLIC_API_URL_UPLOADS || "https://strapi-prod-web-app.azurewebsites.net/"}${url}`;
}

// handle the redirection to the homepage if the page we are browsinng doesn't exists
export function redirectToHomepage() {
    return {
        redirect: {
            destination: `/`,
            permanent: false,
        },
    };
}

export function checkRedirects(items,slug) {
    let check = false;
    for( let key in items){
        let tmp_tring = slug.toString().replace(',','/');

        if(items[key].attributes.OldUrl == tmp_tring.replace(',','/')){
            check = items[key].attributes.NewUrl
        }
    }
    if(check === null)
        check = '/';

    return check;

}

// This function will build the url to fetch on the Strapi API
export function getData(slug, locale, preview) {
    const previewParams = preview ? '?publicationState=preview&published_at_null=true' : '?publicationState=live';
    const slugToReturn = `/${slug}`;
    const apiUrl = `/pages/${slug}${previewParams}`;

    return {
        data: getStrapiURL(apiUrl),
        slug: slugToReturn,
    };
}

export function getBlog(slug, preview) {
    const previewParams = preview ? '?publicationState=preview&published_at_null=true' : '?publicationState=live';
    const slugToReturn = `/${slug}`;
    const apiUrl = `/blogs/${slug}${previewParams}`;

    return {
        data: getStrapiURL(apiUrl),
        slug: slugToReturn,
    };
}

export function getHeader() {
    const apiUrl = `/header`;

    return {
        data: getStrapiURL(apiUrl),
    };
}

export function getRedirects() {
    const apiUrl = `/redirects?pagination[limit]=100`;

    return {
        data: getStrapiURL(apiUrl),
    };
}

export function getFooter() {
    const apiUrl = `/footer`;

    return {
        data: getStrapiURL(apiUrl),
    };
}
