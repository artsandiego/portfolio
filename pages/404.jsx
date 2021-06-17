import Head from 'next/head';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const custom404 = () => {
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

    /* when hovered on the different ctas */
    document.querySelectorAll('.alt').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active-alt');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active-alt');})
    });
    document.querySelectorAll('.c').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active');})
    });

    document.querySelector('.c').addEventListener('click', () => {
      document.querySelector('.c-vid').classList.add('active');
    });
  })
  return (
    <>
      <Head>
        <title>Art San Diego | Developer & Designer - Missing Page</title>
      </Head>
      <div className="cursor-container"><div className="cursor"></div></div>
      <main className="for-o-for bg-primary flex flex-col items-center justify-center h-screen w-screen overflow-hidden">
        <div className="c"></div>
        <img className="c-vid" src="/assets/images/cat.gif" alt="Surprised cat" />
        <p className="font-spectral text-125 text-secondary">Well look who's here...</p>
        <p className="font-montserrat text-25 text-secondary mb-16">You're in the void, nothing to show here...trust me nothing interesting here...</p>
        <Link href="/"><a className="alt font-montserrat text-16 text-secondary">Go Home</a></Link>
      </main>
    </>
  )
}

export default custom404;
