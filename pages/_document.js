import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GTM_ID } from '../utils/gtm';
import Script from "next/script";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=aea4ff75-763f-472b-ae48-93caf687f757" async="true"></script>
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body>
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
