import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Connect with Cutlerwater"
        titleTemplate="Connect with Cutlerwater"
        defaultTitle="Connect with Cutlerwater"
        description="An app with all my social links"
        canonical="https://cutlerwater-newportfolio.netlify.app/"
        openGraph={{
          url: "https://cutlerwater-newportfolio.netlify.app/",
          title: "Connect with Cutlerwater",
          description: "An app with all my social links",
          images: [
            {
              url: "/og-image.png",
              width: 800,
              height: 420,
              alt: "Connect with Cutlerwater",
            },
          ],
          profile: {
            firstName: "Cutlerwater",
            gender: "Male",
            lastName: "Cutler",
            username: "Cutlerwater",
          },
        }}
        /* twitter={{
          handle: "@Cutlerwater",
          site: "@Cutlerwater",
          cardType: "summary_large_image",
        }} */
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
