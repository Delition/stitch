import Head from "next/head";
import ImageComponent from 'next/image';
import Image404 from '../asset/image/png/404.png';
import CustomLink from '../components/shared/CustomLink';
import { useEffect, useState } from 'react';
import {getStrapiURL} from "../utils";
import Header from "../components/blocks/Header";

const NotFound = () => {
    const [pageData, setPageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(getStrapiURL('/header'))
            .then((res) => res.json())
            .then((data) => {
                setPageData(data);
                setIsLoading(false);
            });
    }, []);

    return (

        <div className="page_not_found">
            <Head>
                <title>Not found 404</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            {pageData != null ? <Header {...pageData.data.attributes}/> : ''}
            <div className="page_404_wrapper">
                <div className="page_404_content">
                    <div className='page_404_image_block'>
                        <h2>Missing</h2>
                        <ImageComponent src={ Image404 } alt="404-page" width={ 156 } height={ 156 }/>
                        <p>We can’t seem to find the page you’re looking for.</p>
                    </div>
                    <CustomLink href={ '/' } label={ 'Home' } isExternal={true} isRefresh={true}/>
                </div>
            </div>
        </div>
    );
};

export default NotFound;