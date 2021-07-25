import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script data-ad-client="ca-pub-7734586900480329" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <meta name="title" content="Art San Diego | CRTVED" />
          <link rel="icon" type="image/png" href="/artsandiego-icon.png" />
          <meta name="description" content="/kree·ay·tuhv/ | Crafting digital aesthetic experiences"/>
          <meta name="keywords" content="artsandiego, crtved, web, developer, front-end, freelance, website, designer, ui, ux, startup, small business"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://artsandiego.dev/"/>
          <meta property="og:title" content="CRTVED"/>
          <meta property="og:description" content="/kree·ay·tuhv/ | Crafting digital aesthetic experiences"/>
          <meta property="og:image" content="https://raw.githubusercontent.com/crtved/artsandiego/master/public/artsandiego-crtved-social-image.png"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:site" content="@artsandiego"/>
          <meta property="twitter:image" content="https://raw.githubusercontent.com/crtved/artsandiego/master/public/artsandiego-crtved-social-image.png" />
          <meta property="twitter:title" content="CRTVED"/>
          <meta property="twitter:url" content="https://artsandiego.dev/"/>
          <meta property="twitter:description" content="/kree·ay·tuhv/ | Crafting digital aesthetic experiences"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/ScrollTrigger.min.js"></script>
      </Html>
    )
  }
}