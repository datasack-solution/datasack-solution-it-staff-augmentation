import { GoogleTagManager } from "@next/third-parties/google";
import { Head, Html, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* <GoogleTagManager gtmId={'GTM-N8CGPQFR'}/> */}
        {/* when using next/script, it is not reflected in header section. */}
        {/* <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PJGGKTVQ');`
        }}></script> */}

        {/* use below */}

{/* latest comment */}
                {/* <script dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N8CGPQFR');`
                }}></script> */}

                <script dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-RD5F5DH96G');`
                }}></script>

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16583886159">
        </script>
        <script dangerouslySetInnerHTML={{
          __html:` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16583886159');`
        }}>
        </script> */}

      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=AW-16583886159" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        /> */}

        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJGGKTVQ"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript> */}

          {/* use below */}

{/* latest comment */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8CGPQFR"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript> */}

           <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-RD5F5DH96G"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      </body>
    </Html>
  );
}
