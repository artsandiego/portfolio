import Head from 'next/head';
import { useEffect } from 'react';
import { gsap } from "gsap";
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';

// const LOGO = gql`
//   query GetLogoNavigationLinks {
//     logo {
//       image {
//         url
//         alternativeText
//       }
//     }
//   }
// `;

const Links = () => {
  useEffect(() => {
     /* cursor follow animation */
     let cursorContainer = document.querySelector(".cursor-container");
     let moveCircle = (e) => {
       gsap.to(cursorContainer, 0.3, {
         css: {
           left: e.pageX,
           top: e.pageY
         }
       });
     }
    window.addEventListener('mousemove', moveCircle);
    
    const selectAllUnique = (element, trigger) => {
      return document.querySelectorAll(element).forEach(e => {
        e.addEventListener('mousemove', () => {cursorContainer.classList.add(trigger);})
        e.addEventListener('mouseleave', () => {cursorContainer.classList.remove(trigger);})
      });
    }
    selectAllUnique('.alt', 'active-alt');
  })

  // const { loading, error, data } = useQuery(LOGO);

  // if (loading) return <p className="hidden">Loading...</p>
  // if (error) return <p className="hidden">Error :( Error Message: {error}</p>

  return (
    <>
      <Head>
        <title>Links | Art San Diego</title>
      </Head>
      <div className="cursor-container"><div className="cursor"></div></div>
      <div className="film-grain"></div>
      <div className="vertical-lines"></div>
      <section className="h-screen w-3/4 mx-auto flex justify-center items-center">
        <div className="flex flex-col text-center">
          <div>
            <Image src="/assets/images/logo.png" alt="Art San Diego and CRTVED Logo" height="52" width="58" />
          </div>
          <p className="sm:text-16 text-white font-montserrat lg:text-25 mt-8 z-10">THE LIBRVN</p>
          <p className="sm:text-16 text-white font-montserrat lg:text-25 z-10">Building aesthetic experiences for the web. ⚡</p>
          <div className="flex flex-col mt-8">
            <Link href="https://artsandiego.dev"><a className="alt text-secondary font-montserrat sm:text-16 lg:text-25 font-bold uppercase my-4 z-10 bg-primary py-4 px-32 rounded-lg" rel="noopener noreferrer" target="_blank">Portfolio</a></Link>
            <Link href="https://instagram.com/thelibrvn"><a className="alt text-secondary font-montserrat sm:text-16 lg:text-25 font-bold uppercase my-4 z-10 bg-primary py-4 px-32 rounded-lg" rel="noopener noreferrer" target="_blank">Instagram</a></Link>
            <Link href="https://behance.net/thelibrvn"><a className="alt text-secondary font-montserrat sm:text-16 lg:text-25 font-bold uppercase my-4 z-10 bg-primary py-4 px-32 rounded-lg" rel="noopener noreferrer" target="_blank">Behance</a></Link>
            <Link href="https://github.com/thelibrvn"><a className="alt text-secondary font-montserrat sm:text-16 lg:text-25 font-bold uppercase my-4 z-10 bg-primary py-4 px-32 rounded-lg" rel="noopener noreferrer" target="_blank">Github</a></Link>
            <Link href="https://fb.com/thelibrvn"><a className="alt text-secondary font-montserrat sm:text-16 lg:text-25 font-bold uppercase my-4 z-10 bg-primary py-4 px-32 rounded-lg" rel="noopener noreferrer" target="_blank">Facebook Page</a></Link>
            <Link href="https://linkedin.com/in/artsandiego"><a className="alt text-secondary font-montserrat sm:text-16 lg:text-25 font-bold uppercase my-4 z-10 bg-primary py-4 px-32 rounded-lg" rel="noopener noreferrer" target="_blank">LinkedIn</a></Link>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default Links;