import '../styles/globals.css'
import App, { Container } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '@fortawesome/fontawesome-svg-core/styles.css'
import * as React from "react";

// import your default seo configuration
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    window.onload = function () {
      var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
      if (mobile) {
        alert("This website was designed for Desktop. Visit this on a computer for better view. Better mobile view coming soon!");
      }
    }
  })

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
