import "../styles/globals.scss";
import Context from "../utils/context";
import { useAppReducer } from "../hooks/reducer";
import { PopUp, CustomPopUp } from "../components/shared";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { pageView, GTM_ID } from "../utils/gtm";
import Head from "next/head";
import { HubspotProvider } from 'next-hubspot';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageView);
    return () => {
      router.events.off("routeChangeComplete", pageView);
    };
  }, [router.events]);

  const { state, dispatch } = useAppReducer();

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="6lr6im2myfm7u5vktb54d0ssgrna5j"
        />
      </Head>
      <Context.Provider value={contextValue}>
        {/* Google Tag Manager - Global base code */}
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
            `,
          }}
        />
          <Script
              id="marker-io"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                  __html: `
                window.markerConfig = {
                  destination: '63eb59c4e3c0edb939dbee7c', 
                  source: 'snippet'
                };
            
                !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);`,
              }}
          />
        <Script
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/26634095.js"
        />
          <HubspotProvider>
              <Component {...pageProps} />
              {pageProps.pageData !== undefined && pageProps.pageData.footer !== undefined ?
                  <PopUp {...pageProps.pageData.footer} />
                  : ''}
              {pageProps.pageData !== undefined && pageProps.pageData.blocks !== undefined ?
              <PopUp {...pageProps.pageData.blocks[pageProps.pageData.blocks.length - 1]} />
              : ''}
              {pageProps.pageData !== undefined && pageProps.pageData.blocks !== undefined ?
                  <CustomPopUp {...pageProps.pageData.blocks[pageProps.pageData.blocks.length - 1]} />
                  : ''}
          </HubspotProvider>
      </Context.Provider>
    </>
  );
}

export default MyApp;
