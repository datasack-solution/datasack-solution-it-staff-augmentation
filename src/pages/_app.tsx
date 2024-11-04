import { IsCallusModalOpenedProvider } from "@/components/callusModalContext";
import { ToastProvider } from "@/components/toastContext";
import "@/styles/globals.css";
import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import type { AppProps } from "next/app";
import { GoogleTagManager,GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps }: AppProps) {

  return <ToastProvider>
    <IsCallusModalOpenedProvider>
    <EuiProvider colorMode="light">
     {/* <GoogleAnalytics 
        gaId="G-RD5F5DH96G"          
        dataLayerName="it-staff-augmentation-datalayer"   
        key="ga-analytics"
      /> */}
    {/* <GoogleTagManager gtmId={'GTM-N8CGPQFR'}/> */}
    <Component {...pageProps} />
    {/* <GoogleTagManager gtmId={'AW-16583886159'}/> */}
    {/* <GoogleTagManager gtmId={'GTM-PJGGKTVQ'}/> */}
  </EuiProvider>
  </IsCallusModalOpenedProvider>
  </ToastProvider>;
}
