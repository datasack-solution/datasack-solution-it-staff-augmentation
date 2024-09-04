import { IsCallusModalOpenedProvider } from "@/components/callusModalContext";
import { ToastProvider } from "@/components/toastContext";
import "@/styles/globals.css";
import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import { GoogleTagManager } from '@next/third-parties/google';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();

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
    <Component {...pageProps} />
    {/* <GoogleTagManager gtmId={'AW-16583886159'}/> */}
    <GoogleTagManager gtmId={'GTM-PJGGKTVQ'}/>
  </EuiProvider>
  </IsCallusModalOpenedProvider>
  </ToastProvider>;
}
