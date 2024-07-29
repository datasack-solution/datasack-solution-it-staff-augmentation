import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
  return <EuiProvider colorMode="light">
    <Component {...pageProps} />
    <GoogleTagManager gtmId={'AW-16583886159'} />
  </EuiProvider>;
}
