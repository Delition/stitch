export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageView = (url) => {
    window.dataLayer.push({
        event: 'pageView',
        page: url,
    });
};
