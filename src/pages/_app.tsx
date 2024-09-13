import { IsCallusModalOpenedProvider } from "@/components/callusModalContext";
import { ToastProvider } from "@/components/toastContext";
import "@/styles/globals.css";
import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import { GoogleTagManager } from '@next/third-parties/google';
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ 'event': 'gtm.js' });
    }
  }, []);

  // useEffect(() => {
  //   const handleRouteChange = (url:string) => {
  //     window.gtag('config', 'G-RD5F5DH96G', {
  //       page_path: url,
  //     });
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return <ToastProvider>
    <IsCallusModalOpenedProvider>
    <EuiProvider colorMode="light">
     {/* <GoogleAnalytics 
        gaId="G-RD5F5DH96G"          
        dataLayerName="it-staff-augmentation-datalayer"   
        key="ga-analytics"
      /> */}
       <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJGGKTVQ');
          `
        }}
      />
    <Component {...pageProps} />
    {/* <GoogleTagManager gtmId={'AW-16583886159'}/> */}
    {/* <GoogleTagManager gtmId={'GTM-PJGGKTVQ'}/> */}
    <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-PJGGKTVQ`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
  </EuiProvider>
  </IsCallusModalOpenedProvider>
  </ToastProvider>;
}
