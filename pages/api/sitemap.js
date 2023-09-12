import { useEffect, useState } from 'react';
import {getStrapiURL} from "../../utils";
import moment from 'moment';
import {POSTED_DATE_FORMAT} from "../../constants/date";


export async  function handler(req, res) {

   /* const [pageData, setPageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);*/

    const pages = await fetch(getStrapiURL('/pages'))
    const data = await pages.json()
    const blogs = await fetch(getStrapiURL('/blogs'))
    const blog_data = await blogs.json()

    var links = '';
    for( let key in data.data){
        links += `<url>
                      <loc>https://stitch.money/`+(data.data[key].attributes.slug == 'home' ? '' : data.data[key].attributes.slug+`/`)+`</loc>
                      <lastmod>`+moment(data.data[key].attributes.updatedAt).format('YYYY-MM-DD hh:mm')+`</lastmod>
                 </url>`
    }
    for( let key in blog_data.data){
        links += `<url>
                      <loc>https://stitch.money/blog/`+blog_data.data[key].attributes.slug+`/</loc>
                      <lastmod>`+moment(blog_data.data[key].attributes.updatedAt).format('YYYY-MM-DD hh:mm')+`</lastmod>
                 </url>`
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    `+links+`
    </urlset>`

    res.end(xml)
}
export default handler;