import Head from 'next/head'
import {useRouter} from "next/router";

const SeoData = ({ pageData }) => {
    const router = useRouter();
    console.log(pageData.data[0].attributes.GoogleIndexing && pageData.data[0].attributes.GoogleIndexing == 'No');
    return (
        <Head>
            <title>{pageData.data[0].attributes.MetaTitle ? pageData.data[0].attributes.MetaTitle : pageData.data[0].attributes.Title}</title>
            <link rel="canonical" href={"https://stitch.money"+router.asPath} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Stitch" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={pageData.data[0].attributes.MetaTitle ? pageData.data[0].attributes.MetaTitle : pageData.data[0].attributes.Title} />
            <meta property="og:description" content={pageData.data[0].attributes.MetaDescription ? pageData.data[0].attributes.MetaDescription : ''} />
            <meta property="description" content={pageData.data[0].attributes.MetaDescription ? pageData.data[0].attributes.MetaDescription : ''} />

            <meta name="robots" content={pageData.data[0].attributes.GoogleIndexing && pageData.data[0].attributes.GoogleIndexing == 'No' ? 'noindex' : 'index'} />
            <meta property="og:url" content={"https://stitch.money"+router.asPath} />
            <meta property="og:image" content={pageData.data[0].attributes.MetaImage.data ? pageData.data[0].attributes.MetaImage.data.attributes.url : ''} />
            <meta property="og:image:width" content={pageData.data[0].attributes.MetaImage.data ? pageData.data[0].attributes.MetaImage.data.attributes.width : '100'}/>
            <meta property="og:image:height" content={pageData.data[0].attributes.MetaImage.data ? pageData.data[0].attributes.MetaImage.data.attributes.height : '50'}/>
            <meta property="og:image:secure_url" content={pageData.data[0].attributes.MetaImage.data ? pageData.data[0].attributes.MetaImage.data.attributes.url : ''} />
            <meta property="article:published_time" content={pageData.data[0].attributes.publishedAt} />
            <meta property="article:modified_time" content={pageData.data[0].attributes.updatedAt} />
            <meta name="twitter:site" content="@stitchmoneyhq" />
            <meta name="twitter:domain" content="stitch.money" />
            <meta name="twitter:title" content={pageData.data[0].attributes.MetaTitle ? pageData.data[0].attributes.MetaTitle : pageData.data[0].attributes.Title} />
            <meta name="twitter:description" content={pageData.data[0].attributes.MetaDescription ? pageData.data[0].attributes.MetaDescription : ''} />
            <meta name="twitter:creator" content="@stitchmoneyhq" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={pageData.data[0].attributes.MetaImage.data ? pageData.data[0].attributes.MetaImage.data.attributes.url : ''} />
        </Head>
    )
};

SeoData.defaultProps = {
};

export default SeoData;
