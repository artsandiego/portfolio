import Head from 'next/head';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Custom404 = () => {
  const [click, setClick] = useState("Well look who's here...");
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
      document.querySelector('.c-text').classList.add('hidden');
      setClick("Oh sh%$#!")
    });
  })
  const hover = (e) => {
    console.log(e.target)
    e.target.classList.add('addclass')
  }
  return (
    <>
      <Head>
        <title>Art San Diego | Developer & Designer - Missing Page</title>
      </Head>
      <div className="cursor-container"><div className="cursor"></div></div>
      <main className="for-o-for bg-primary flex flex-col items-center justify-center h-screen w-screen overflow-hidden">
        <div className="parent">
          <div className="hoveritem" onMouseEnter={(e) => {hover(e)}}>Hover Me</div>
          <div className="hoveritem">I will change if you hover him</div>
        </div>
        <div className="c"></div>
        <Image className="c-vid" src="/assets/images/cat.gif" alt="Surprised cat" height="215px" width="316px" />
        <p className="font-spectral text-125 text-secondary">{ click }</p>
        <p className="c-text font-montserrat text-25 text-secondary mb-16">Welcome to the void... nothing to see here... trust me.</p>
        <a href="/" className="alt font-montserrat text-16 text-secondary">Take me Home!</a>
      </main>
    </>
  )
}

export default Custom404;
