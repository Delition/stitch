import delve from "dlv";

import { getDataDependencies } from "../services/api";
import { getData, getHeader, getFooter, getBlog, getRedirects, checkRedirects} from "../utils";
import { getLocalizedParams } from "../utils/localize";
import PreviewBanner from "../components/global/PreviewBanner";
import BlockManager from "../components/shared/BlockManager";
import SeoData from "../components/shared/SeoData";
import Article from "./_article";
import NotFound from "./404";

const Universals = ({ pageData, preview }) => {
    const blocks = delve(pageData, "blocks");
    if(pageData.notfound === true)
        return <NotFound />
    if(pageData.blog === true)
        return <Article pageData={pageData} preview={preview} />
    return (
        <div className={`${'page-layout ' + (pageData.data[0].attributes.Mode !== null ? pageData.data[0].attributes.Mode : '')} ${pageData.data[0].attributes.ButtonHeaderMode === 'yellow' ? 'header-yellow-button' : ''}`}>
            <SeoData pageData={pageData}/>
            {preview && <PreviewBanner/>}
            <BlockManager blocks={blocks}/>
        </div>
    );
};

export async function getServerSideProps(context) {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=3600, stale-while-revalidate=59'
    )

    const { slug, locale } = getLocalizedParams(context.query);
    try {
        const data = getData((slug == false ? 'home' : slug), locale, context.preview);
        const res = await fetch(delve(data, "data"));
        const json = await res.json();
        const redirects = getRedirects();
        const redirects_res = await fetch(delve(redirects, "data"));
        const redirects_json = await redirects_res.json();
        let check = checkRedirects(redirects_json.data,(slug == false ? 'home' : slug));
        if(check){
            return {
                redirect: {
                    destination: check,
                    permanent: false,
                },
            };
        }
        const header = getHeader();
        const footer = getFooter();

        const header_res = await fetch(delve(header, "data"));
        const header_json = await header_res.json();

        const footer_res = await fetch(delve(footer, "data"));
        const footer_json = await footer_res.json();
        if(slug.indexOf('blog') !== -1 && slug.toString().length > 5){
            const data_blog = getBlog(slug[1], context.preview);
            const res_blog = await fetch(delve(data_blog, "data"));
            const json_blog = await res_blog.json();
            if (json_blog.data.length) {
                const pageData = {
                    blog: true,
                    slug: slug,
                    header: header_json.data.attributes,
                    footer: footer_json.data.attributes,
                    content: json_blog,
                };
                return {
                    props: { pageData, preview: context.preview || null },
                };
            }
        }
        if (!json.data.length) {
            const pageData = {
                notfound: true,
            }
            return  {props: { pageData }}
        }
        header_json.data.attributes.__component = 'blocks.header';
        footer_json.data.attributes.__component = 'blocks.footer';
        json.data[0].attributes.Blocks.unshift(header_json.data.attributes);
        json.data[0].attributes.Blocks.push(footer_json.data.attributes);
        const pageData = await getDataDependencies(json);

        return {
            props: { pageData, preview: context.preview || null },
        };
    } catch (error) {
        const pageData = {
            notfound: true,
        }
        return  {props: { pageData }}
    }
}

export default Universals;
