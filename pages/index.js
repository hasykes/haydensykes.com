import Head from "next/head";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Script from 'next/script'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hayden Sykes</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito"
        ></link>
        
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-80KDYLLH1E" strategy="afterInteractive" />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive">
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
            }}
        </Script>
      </Head>
      <Logo />
    </Layout>
  );
}

//<footer></footer>
