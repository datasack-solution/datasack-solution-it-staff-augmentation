import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';
import { GoogleAnalytics,GoogleTagManager } from '@next/third-parties/google'
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url:string) => {
      window.gtag('config', 'G-RD5F5DH96G', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <EuiProvider colorMode="light">
     <GoogleAnalytics 
        gaId="G-RD5F5DH96G"          
        dataLayerName="it-staff-augmentation-datalayer"   
        key="ga-analytics"
      />
    <Component {...pageProps} />
    <GoogleTagManager gtmId={'AW-16583886159'} />
  </EuiProvider>;
}
