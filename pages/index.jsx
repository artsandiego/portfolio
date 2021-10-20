import Head from 'next/head'
import CookieConsent from 'react-cookie-consent'
import { useEffect } from 'react';
import { gsap } from "gsap";
import Image from 'next/image';
import Navigation from 'components/Navigation'
import Projects from '../components/Projects';

const Home = () => {
  
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
    const selectAll = (element) => { return document.querySelectorAll(element) }
    const selectAllUnique = (element, trigger) => {
      return document.querySelectorAll(element).forEach(e => {
        e.addEventListener('mousemove', () => {cursorContainer.classList.add(trigger);})
        e.addEventListener('mouseleave', () => {cursorContainer.classList.remove(trigger);})
      });
    }
    const ev = selector => {
      selector.addEventListener('mousemove', () => {cursorContainer.classList.add('active');})
      selector.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active');})
    }
    selectAll('.cta').forEach(e => {ev(e)});
    selectAll('.floaters').forEach(e => {ev(e)});
    selectAllUnique('.alt', 'active-alt');
    selectAllUnique('.hover-dev', 'active-photo-dev');
    selectAllUnique('.hover-des', 'active-photo-des');

    /* scroll wave */
    gsap.registerPlugin(ScrollTrigger);
    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".skew-element", "skewY", "deg"),
        clamp = gsap.utils.clamp(-1, 1);
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -200);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 1.5,
            ease: "power3s",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew)
          });
        }
      }
    });
    gsap.set(".skew-element", { transformOrigin: "right center", force3D: true });

    /* loading */
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.querySelector('.loading').classList.add('out');
        document.querySelector('.scroll').classList.add('stretch');
        document.querySelector('.intro-text').classList.add('enter');
        document.querySelector('.label').classList.add('enter');
        document.querySelector('.head-cta').classList.add('enter');
      }, 2000)
      setTimeout(() => {
        document.querySelector('.loading').classList.add('hidden');
      }, 3000)
    });
  })

  return (
    <>
      <Head>
        <title>Art San Diego | Developer & Designer</title>
      </Head>
      <div className="loading">
        <div className="cover">
          <div className="ripple"><div></div><div></div></div>
        </div>
      </div>
      <div className="cursor-container"><div className="cursor"></div></div>
      <div className="relative overflow-hidden">
        <Navigation/>
        <div className="film-grain"></div>
        <div className="vertical-lines"></div>
        <main>          
          <section className="introduction skew-element relative z-10">
            <span className="label text-white text-16 font-montserrat uppercase inline-block">portfolio of art san diego 2021</span>
            <h1 className="intro-text text-white text-125 font-spectral leading-tight">
              <span className="intro-text-items ml-20">Creative Front-end Web</span><br />
              <span className="intro-text-items text-white font-spectral leading-tight"><span className=" text-primary hover-dev">Developer</span> & </span><br />
              <span className="intro-text-items ml-60">UI <span className="text-primary hover-des">Designer</span></span>
            </h1>
            <a href="mailto:asd.artsandiego@gmail.com" className="cta head-cta absolute overflow-hidden text-transparent">
              Let&aposs Talk
              <Image src="/assets/cta/cta-lets-talk.svg" alt="Let's Talk call to action" height="225px" width="225px" />
            </a>
            <div className="scroll inline-flex flex-col items-center absolute left-0 -bottom-40">
              <a href="#about" className="alt text-16 font-montserrat text-white uppercase mb-1">Scroll</a>
              <span className="inline-block bg-primary"></span>
            </div>
          </section>
          <section id="about" className="about relative skew-element">
            <h1 className="title relative z-10 inline-block text-white text-100 font-spectral leading-tight">About me</h1>
            
            <div>
              <div className="default-paragraph inline-flex flex-row justify-start">             
                <span className="line"></span>
                <p className="text-25 text-white font-spectral">
                 It all started when I was in 5th grade. I have this Marvel Heroes coloring book, but instead of putting colors in it, I traced the illustrations <span className="text-primary font-bold">and act as if I draw them myself</span>. Weird way of showing creativity huh.
                </p>
              </div>

              <div className="default-paragraph inline-flex flex-row justify-start">             
                <span className="line"></span>
                <p className="p2 text-25 text-white font-spectral">
                Fast forward to college, I took BSIT and immediately fell in love with <span className="text-primary font-bold">coding</span>. And so, with the passion I have for design and love for writing code, I decided to start my career as a <span className="text-primary font-bold">Front-End Web Developer</span>. I was so sure that this decision will lead me to something bigger.</p>
              </div>

              <div className="default-paragraph inline-flex flex-row justify-start">             
                <span className="line"></span>
                <p className="p3 text-25 text-white font-spectral">
                  And now, the present me enjoys creating <span className="text-primary font-bold">aesthetic experiences for the web</span> and with a mission to inspire people who wanted to pursue their passion in design or development.
                </p>
              </div>


              <div className="design-element">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div> 
            </div>

            <div className="eyes">
              <div className="floaters eye"></div>
              <div className="floaters eye"></div>
            </div>
          </section>
          <section id="work" className="work skew-element">
            <h1 className="title relative z-10 inline-block text-white text-100 font-spectral leading-tight">THE LIBRVN</h1>

            <div className="flex flex-row flex-1 relative h-40">
              <div className="default-paragraph work-section inline-flex flex-row justify-start">             
                <span className="line"></span>
                <p className="text-25 text-white font-spectral">
                  The brand aims to produce quality content that can be an inspiration to other creative individuals, wether you&apos;re just starting out or coming from other field. <span className="text-primary font-bold">THE LIBRVN</span> is also providing services that help SMEs and Startups jumpstart their digital journey.
                  <div className="mt-4">
                    Here are some of our work, you can also check us out on <a className="alt text-primary font-bold underline" href="https://github.com/thelibrvn" rel="noopener noreferrer" target="_blank">Github</a> or <a className="alt text-primary font-bold underline" href="https://behance.net/thelibrvn" rel="noopener noreferrer" target="_blank">Behance</a>.
                  </div>
                </p>
              </div>
              <div className="floaters illustrated-logo absolute right-0 bottom-0">
                <a className="block" href="/void" target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/icons/logodrawing.svg" alt="Hand drawn THELIBRVN logo" height="180px" width="160px" />
                </a>
              </div>
            </div>

            <Projects />
            
          </section>
          <section className="contact z-20 relative">
            <p className="text-right text-125 font-spectral text-white">Something in your mind? perhaps another<br/>
              <span className="text-primary">awesome idea</span>? <br /><a className="text-white underline placeholder" href="mailto:asd.artsandiego@gmail.com">Let&apos;s talk</a>.</p>
          </section>
        </main>
        <footer id="contact" className="footer flex flex-row relative bg-primary z-20">
          <div>
            <p className="font-spectral text-secondary text-25">Let&apos;s Talk</p>
            <div className="mt-8">
              <a className="font-montserrat text-16 text-secondary" href="mailto:asd.artsandiego@gmail.com">asd.artsandiego@gmail.com</a>
              <div className="flex flex-row mt-8 z-20">
                <a href="https://www.github.com/thelibrvn" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Github</a>
                <a href="https://www.behance.net/thelibrvn" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Behance</a>
                <a href="https://www.instagram.com/thelibrvn" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">LinkedIn</a>
                <a href="https://www.linkedin.com/in/artsandiego/" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Facebook</a>
                <a href="https://www.fb.com/thelibrvn" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mx-32">
            <p className="font-spectral text-secondary text-25">Experience</p>
            <div className="mt-8">
              <p className="font-montserrat text-16 text-secondary mb-4">Creative Developer, UI/UX Designer and Founder <a className="alt underline font-bold" href="https://www.facebook.com/thelibrvn" rel="noopener noreferrer" target="_blank">@THE LIBRVN</a></p>
              <p className="font-montserrat text-16 text-secondary mb-4">Independent Web Dev & Web Design consultant | Senior Developer</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Lead Creative Front-End Web Developer</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Junior Front-End Web Developer</p>
            </div>
          </div>
          <div>
            <p className="font-spectral text-secondary text-25">Tech used</p>
            <div className="mt-8">
              <p className="font-montserrat text-16 text-secondary mb-4">TailwindCSS</p>
              <p className="font-montserrat text-16 text-secondary mb-4">GSAP</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Next JS / Vercel</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Strapi / Heroku</p>
              <p className="font-montserrat text-16 text-secondary mb-4">GraphQL / MongoDB</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Adobe PS & XD</p>
            </div>
          </div>
        </footer>
        <div className="footer-low flex flex-row justify-between items-center">
          <p className="font-montserrat text-white text-16">© 2021 Art San Diego, All rights reserved</p>
          <p className="font-montserrat text-white text-16"><span className="text-primary">@</span>THELIBRVN</p>
        </div>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="GOT IT"
        style={{
          width: "25%",
          margin: "1rem",
          background: "#212121",
          right: "0"
        }}
        buttonStyle={{
          border: "1px solid #ffbb00",
          background: "#212121",
          color: "#ffbb00",
          fontSize: "16px"
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  )
}

export default Home;