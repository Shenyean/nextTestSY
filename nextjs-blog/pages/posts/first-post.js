import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>First post </h1>
        <h2>
          Lets get ready to go <Link href="/">home</Link>
          This is my first post and this is where i will try out the different
          parts of next.js there is a facebook sdk running in the back ground
          but i cannot really figure out what it does. but you can see it in the
          Console when using the 'Link' component, the wen site does not do a
          full refresh as compare to a tag
        </h2>

        <Image src="/images/facePic.jpeg" width={144} height={155}></Image>
        <h2>
          The image component helps to optimise images on demand, the images are
          on lazy load, meaning they only load when they enter the view port
        </h2>
      </Layout>
    </>
  );
}
