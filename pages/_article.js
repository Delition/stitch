import Head from 'next/head';
import Header from "../components/blocks/Header";
import ArticleHero from '../components/blocks/ArticleHero';
import ArticleMenu from '../components/blocks/ArticleMenu';
import { SocialBlock } from '../components/blocks/ArticleMenu/SocialBlock';
import ArticleShortDescription from '../components/blocks/ArticleShortDescription';
import Footer from "../components/blocks/Footer";
import PreviewBanner from "../components/global/PreviewBanner";
import BlogManager from "../components/shared/BlogManager";
import styles from '../styles/article.module.scss';
import { useWindowSize } from '../hooks';
import { screenWidth } from '../constants/screenSize';
import ArticlePosts from '../components/blocks/ArticlePosts';
import AritlceForm from '../components/blocks/AritlceForm';
import {useRouter} from "next/router";

const Article = ({ pageData, preview }) => {
    const router = useRouter();
    const size = useWindowSize();
    const isDesktop = size.width >= screenWidth.tabletL;
    const isMobile = size.width <= screenWidth.phoneXL;

    if (pageData !== undefined) {
        const { content: { data: { 0: { attributes: blogAttributes, id: blogId } } } } = pageData;
        const menu = [];
        blogAttributes.Content.map((item) => {
            if (item.Title !== null && item.Title !== undefined)
                menu.push({ [item.id]: item.Title });
        });

        return (
            <div className={'page-layout'}>
                <Head>
                    <title>{ blogAttributes.MetaTitle ? blogAttributes.MetaTitle : blogAttributes.Title }</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="canonical" href={"https://stitch.money"+router.asPath} />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content="Stitch" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={blogAttributes.Title} />
                    <meta property="og:description" content={blogAttributes.MetaDescription ? blogAttributes.MetaDescription : ''} />
                    <meta property="description" content={blogAttributes.MetaDescription ? blogAttributes.MetaDescription : ''} />
                    <meta property="og:url" content={"https://stitch.money"+router.asPath} />
                    <meta property="og:image" content={blogAttributes.MetaImage.data ? blogAttributes.MetaImage.data.attributes.url : ''} />
                    <meta property="og:image:width" content={blogAttributes.MetaImage.data ? blogAttributes.MetaImage.data.attributes.width : '100'}/>
                    <meta property="og:image:height" content={blogAttributes.MetaImage.data ? blogAttributes.MetaImage.data.attributes.height : '50'}/>
                    <meta property="og:image:secure_url" content={blogAttributes.MetaImage.data ? blogAttributes.MetaImage.data.attributes.url : ''} />
                    <meta property="article:published_time" content={blogAttributes.publishedAt} />
                    <meta property="article:modified_time" content={blogAttributes.updatedAt} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@stitchmoneyhq" />
                    <meta name="twitter:domain" content="stitch.money" />
                    <meta name="twitter:title" content={blogAttributes.Title} />
                    <meta name="twitter:description" content={blogAttributes ? blogAttributes.MetaDescription : ''} />
                    <meta name="twitter:creator" content="@stitchmoneyhq" />
                    <meta name="twitter:image" content={blogAttributes.MetaImage.data ? blogAttributes.MetaImage.data.attributes.url : ''} />
                </Head>
                {preview && <PreviewBanner />}
                <Header key={ `index-100` } { ...pageData.header }/>
                {blogAttributes.ImageFull.data !== null ? <ArticleHero imageData={ blogAttributes.ImageFull.data.attributes }/> : '' }
                <div className={ styles.article_wrapper }>
                    <ArticleShortDescription content={ blogAttributes } isMobile={isMobile}/>
                    <div className={ styles.content_wrapper }>
                        { isDesktop ? <>
                            <div className={ styles.menu_wrapper }>
                                { blogAttributes.HidePostNav !== 'yes' ? <ArticleMenu menu={ menu }/> : '' }
                                <SocialBlock footerData={ pageData.footer } isDesktop={ isDesktop }/>
                            </div>
                            <BlogManager blocks={ blogAttributes.Content }/>
                        </> : <>
                        {blogAttributes.HidePostNav !== 'yes' ? <ArticleMenu menu={ menu }/> : '' }
                            <span className={ styles.dividing_line }></span>
                            <BlogManager blocks={ blogAttributes.Content }/>
                            <span className={ styles.dividing_line }></span>
                            <SocialBlock footerData={ pageData.footer }
                                         isDesktop={ isDesktop }
                                         isMobile={ isMobile }/>
                        </> }

                    </div>
                </div>
                <AritlceForm footerData={ pageData.footer} />
                <ArticlePosts id={ blogId }
                              isDesktop={ isDesktop }
                              isMobile={ isMobile }/>
                <Footer key={ `index-101` } { ...pageData.footer }/>
            </div>
        );
    }

};

Article.defaultProps = {};

export default Article;
