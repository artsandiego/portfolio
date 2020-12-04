import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>A R T S A N D I E G O .</title>
        <meta name="title" content="A R T S A N D I E G O ." />
        <link rel="icon" type="image/png" href="/artsandiego-icon.png" />
        <meta name="description" content="Creative Front-End Web Developer, UI Designer, and UX Practitioner."/>
        <meta name="keywords" content="artsandiego, crtved, web, developer, front-end, freelance, website, designer, ui, ux"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://artsandiego.dev/"/>
        <meta property="og:title" content="A R T S A N D I E G O ."/>
        <meta property="og:description" content="Creative Front-End Web Developer, UI Designer, and UX Practitioner."/>
        <meta property="og:image" content="/artsandieg-crtved.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://artsandiego.dev/"/>
        <meta property="twitter:title" content="A R T S A N D I E G O ."/>
        <meta property="twitter:description" content="Creative Front-End Web Developer, UI Designer, and UX Practitioner."/>
        <meta property="twitter:image" content="/artsandieg-crtved.jpg" />
        <script data-ad-client="ca-pub-7734586900480329" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <main>
        <div className="image__container">
          <Image className="image__img" src="/artsandiego.png" alt="Art San Diego Logo" height={627} width={699}/>
          <h1 className="image__title">ARTSANDIEGO.</h1>
        </div>
        <div className="social__container">
          <a href="https://www.notion.so/Art-San-Diego-76e258b0b87d47eb8e3db7c426e8a376" target="_blank" rel="noopener nofollow">Portfolio</a>
          <a href="https://www.linkedin.com/in/artsandiego/" target="_blank" rel="noopener nofollow">LinkedIn</a>
          <a href="https://www.github.com/crtved" target="_blank" rel="noopener nofollow">Github</a>
          <a href="https://www.behance.net/crtved" target="_blank" rel="noopener nofollow">Behance</a>
          <a href="https://www.instagram.com/crt.ved/" target="_blank" rel="noopener nofollow">Instagram</a>
        </div>
      </main>
      <style jsx>{`
        html {
          margin: 0;
          padding: 0;
        }
        body {
          margin: 0 !important;
          padding: 0 !important;
        }
        main {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          flex-direction: column;
        }
        .image__container {
          height: 150px;
          width: 150px;
        }
        .image__title {
          font-family: 'Helvetica';
          font-size: 1rem !important;
          letter-spacing: 4px;
          font-weight: regular !important;
          color: #202426;
        }
        .social__container {
          display: flex;
          margin: 5rem;
        }
        .social__container a {
          margin: 0 1rem;
          font-family: 'Helvetica';
          text-transform: uppercase;
          letter-spacing: 4px;
          display: block;
          text-decoration: none;
          color: #202426;
          position: relative;
        }
        .social__container a:before {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 20px;
          height: 2px;
          background-color: #202426;
          transition: width 0.5s ease;
        }
        .social__container a:hover:before {
          width: 50px;
        }
        @media screen and (max-width: 425px) {
          .social__container {
            flex-direction: column;
          }
          .social__container a {
            padding-top: 1.5rem;
            text-align: center;
          }
          .social__container a:before {
            width: 0%; 
          }
        }
      `}
      </style>
      <style global>{`
        html, body, main {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
      `}</style>
    </>
  )
}
