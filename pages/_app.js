import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';
import '@fortawesome/fontawesome-svg-core/styles.css'
import * as React from "react";

// import your default seo configuration
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        {...SEO}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
