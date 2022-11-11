import Head from "next/head";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Landing from "../components/Landing";

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
      </Head>
      <Logo />
    </Layout>
  );
}

//<footer></footer>
