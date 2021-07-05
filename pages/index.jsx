import Head from 'next/head'
import Navigation from 'components/Navigation'
import { gsap } from "gsap";
import { useEffect } from 'react'
import Image from 'next/image';
import CookieConsent from 'react-cookie-consent'

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
    const ev = (selector) => {
      selector.addEventListener('mousemove', () => {cursorContainer.classList.add('active');})
      selector.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active');})
    }
    document.querySelectorAll('.placeholder').forEach(e => {ev(e)});
    document.querySelectorAll('.cta').forEach(e => {ev(e)});
    document.querySelectorAll('.eye').forEach(e => {ev(e)});
    document.querySelectorAll('.illustrated-logo').forEach(e => {ev(e)});
    document.querySelectorAll('.alt').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active-alt');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active-alt');})
    });
    document.querySelectorAll('.hover-dev').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active-photo-dev');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active-photo-dev');})
    });
    document.querySelectorAll('.hover-des').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active-photo-des');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active-photo-des');})
    });

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
            <a href="mailto:crtved.artsandiego@gmail.com" className="cta head-cta absolute overflow-hidden text-transparent">
              Let's Talk
              <img src="/assets/cta/cta-lets-talk.svg" alt="Let's Talk call to action" />
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
                  I started as an aspiring Graphic Designer back in 2012.
                </p>
              </div>

              <div className="default-paragraph inline-flex flex-row justify-start">             
                <span className="line"></span>
                <p className="p2 text-25 text-white font-spectral">
                  I studied Information Technology and after University I decided to work as front-end web developer. I'm always curious how to bridge the gap between form and function.</p>
              </div>

              <div className="default-paragraph inline-flex flex-row justify-start">             
                <span className="line"></span>
                <p className="p3 text-25 text-white font-spectral">
                  Luckily I find a way 🎉 now I enjoy creating aesthetic experiences for the web through UI design and Creative Front-End Web Development.
                </p>
              </div>


              <div className="design-element">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>

            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
          </section>
          <section id="work" className="work skew-element">
            <h1 className="title relative z-10 inline-block text-white text-100 font-spectral leading-tight">Work</h1>

            <div className="flex flex-row flex-1 relative h-40">
              <div className="default-paragraph work-section inline-flex flex-row justify-start">             
                <span className="line"></span>
                <p className="text-25 text-white font-spectral">
                  I'm a developer and a designer who crafts <span className="text-primary">visual elements for the web.</span> 
                  My interest in design led me to study other design fields like brand identity design, graphic design and print.
                </p>
              </div>
              <div className="illustrated-logo absolute right-0 bottom-0">
                <img src="/assets/icons/logodrawing.svg" alt="Art San Diego logo pencil drawing" />
              </div>
            </div>

            <div className="work-content">
              
              <div className="project flex flex-row w-full justify-center mb-44 skew-element">
                <div className="project-title flex flex-col justify-end pb-32 mr-32">
                  <h2 className="work-title font-spectral text-primary text-60 z-20">Innersloth website</h2>
                  <div className="default-paragraph inline-flex flex-row justify-start">             
                    <span className="line"></span>
                    <p className="text-25 text-white font-spectral">
                      UI design concept for a game development company.
                    </p>
                  </div>
                </div>
                <div className="project-image work-content__image">
                  <div className="placeholder"></div>
                  <Image src="/assets/images/innersloth.jpg" alt="Innersloth website design thumbnail" height="600" width="550" />
                  <a href="https://www.behance.net/gallery/121735575/Innersloth-Website-UIUX-Design-Concept" rel="noopener noreferrer" className="cta left absolute overflow-hidden text-transparent z-10" target="_blank">
                    View Case Study
                    <img src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" />
                  </a>
                </div>
              </div>

              <div className="project flex flex-row-reverse w-full justify-center mb-44 skew-element">
                <div className="project-title flex flex-col justify-end pb-32 ml-32">
                  <h2 className="font-spectral text-primary text-60 z-20">Sociov website</h2>
                  <div className="default-paragraph inline-flex flex-row justify-start">             
                    <span className="line"></span>
                    <p className="text-25 text-white font-spectral">
                      UI/UX design concept for a startup.
                    </p>
                  </div>
                </div>
                <div className="project-image work-content__image">
                  <div className="placeholder"></div>
                  <Image src="/assets/images/sociov.jpg" alt="Sociov website design thumbnail" height="600" width="550" />
                  <a href="https://www.behance.net/gallery/121735799/Sociov-Website-UIUX-Design-Concept" rel="noopener noreferrer" className="cta right absolute overflow-hidden text-transparent z-10" target="_blank">
                    View Case Study
                    <img src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" />
                  </a>
                </div>
              </div>

              <div className="project flex flex-row w-full justify-center mb-44 skew-element">
                <div className="project-title flex flex-col justify-end pb-32 mr-32">
                  <h2 className="font-spectral text-primary text-60 z-20">Filidian Bank website</h2>
                  <div className="default-paragraph inline-flex flex-row justify-start">             
                    <span className="line"></span>
                    <p className="text-25 text-white font-spectral">
                      UI/UX Design and Web Development for a banking firm.
                    </p>
                  </div>
                </div>
                <div className=" project-image work-content__image">
                  <div className="placeholder"></div>
                  <Image src="/assets/images/filidianbank.jpg" alt="Filidian Bank website design thumbnail" height="600" width="550" />
                  <a href="https://www.behance.net/gallery/122173739/Filidian-Bank-Website-UIUX-Design-Development" rel="noopener noreferrer" className="cta left absolute overflow-hidden text-transparent z-10" target="_blank">
                    View Case Study
                    <img src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" />
                  </a>
                </div>
              </div>

              <div className="project flex flex-row-reverse w-full justify-center mb-44 skew-element">
                <div className="project-title flex flex-col justify-end pb-32 ml-32">
                  <h2 className="font-spectral text-primary text-60 z-20">Kami Ai logo</h2>
                  <div className="default-paragraph inline-flex flex-row justify-start">             
                    <span className="line"></span>
                    <p className="text-25 text-white font-spectral">
                      Logo design for arts & crafts business.
                    </p>
                  </div>
                </div>
                <div className="project-image work-content__image">
                  <div className="placeholder"></div>
                  <Image src="/assets/images/kamiai.jpg" alt="Kami Ai logo" height="600" width="550" />
                  <a href="#" className="cta right absolute overflow-hidden text-transparent z-10" target="_blank">
                    View Case Study
                    <img src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" />
                  </a>
                </div>
              </div>

              <div className="project flex flex-row w-full justify-center mb-44 skew-element">
                <div className="project-title flex flex-col justify-end pb-32 mr-32">
                  <h2 className="font-spectral text-primary text-60 z-20">Divine logo</h2>
                  <div className="default-paragraph inline-flex flex-row justify-start">             
                    <span className="line"></span>
                    <p className="text-25 text-white font-spectral">
                      Logo design for Divine San Diego, an Artisan.
                    </p>
                  </div>
                </div>
                <div className="project-image work-content__image">
                  <div className="placeholder"></div>
                  <Image src="/assets/images/divine.jpg" alt="Divine logo" height="600" width="550" />
                  <a href="https://www.behance.net/gallery/115433221/Divine-Branding" className="cta left absolute overflow-hidden text-transparent z-10" target="_blank">
                    View Case Study
                    <img src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" />
                  </a>
                </div>
              </div>

              <div className="project flex flex-row-reverse w-full justify-center skew-element">
                <div className="project-title flex flex-col justify-end pb-32 ml-32">
                  <h2 className="font-spectral text-primary text-60 z-20">CENA Footwear</h2>
                  <div className="default-paragraph inline-flex flex-row justify-start">             
                    <span className="line"></span>
                    <p className="text-25 text-white font-spectral">
                      Logo design for a footwear business.
                    </p>
                  </div>
                </div>
                <div className="project-image work-content__image">
                  <div className="placeholder"></div>
                  <Image src="/assets/images/cena.jpg" alt="CENA Footwear logo" height="600" width="550" />
                  <a href="#" className="cta right absolute overflow-hidden text-transparent z-10" target="_blank">
                    View Case Study
                    <img src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" />
                  </a>
                </div>
              </div>

            </div>
          </section>
          <section className="contact z-20 relative">
            <p className="text-right text-125 font-spectral text-white">Got any <span className="text-primary">awesome idea</span> in your mind? I'm always open for <span className="text-primary">creative discussion</span><br/><a className="text-white underline placeholder" href="mailto:crtved.artsandiego@gmail.com">Let's talk</a>.</p>
          </section>
        </main>
        <footer className="footer flex flex-row relative bg-primary z-20">
          <div>
            <p className="font-spectral text-secondary text-25">Let's Talk</p>
            <div className="mt-8">
              <a className="font-montserrat text-16 text-secondary" href="mailto:crtved.artsandiego@gmail.com">crtved.artsandiego@gmail.com</a>
              <div className="flex flex-row mt-8 z-20">
                <a href="https://www.behance.net/crtved" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Behance</a>
                <a href="https://www.linkedin.com/in/artsandiego/" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">LinkedIn</a>
                <a href="https://fb.com/creativedeveloperph" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Facebook</a>
                <a href="https://www.instagram.com/crt.ved" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mx-32">
            <p className="font-spectral text-secondary text-25">Experience</p>
            <div className="mt-8">
              <p className="font-montserrat text-16 text-secondary mb-4">Independent Creative Front-End Web Developer and UI/UX Designer</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Independent Web Development and UI/UX Design Consultant, and Senior Team Lead</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Senior Creative Front-End Web Developer</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Junior Front-End Web Developer</p>
              <a href="https://drive.google.com/file/d/18QoJVjZsRciNQa7dkz6FM4fvakqF1JlX/view" rel="noopener noreferrer" target="_blank" className="alt font-montserrat text-16 text-secondary font-bold underline uppercase">DOWNLOAD CV</a>
            </div>
          </div>
          <div>
            <p className="font-spectral text-secondary text-25">Tech used</p>
            <div className="mt-8">
              <p className="font-montserrat text-16 text-secondary mb-4">Next JS (React JS)</p>
              <p className="font-montserrat text-16 text-secondary mb-4">TailwindCSS</p>
              <p className="font-montserrat text-16 text-secondary mb-4">GSAP</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Adobe Photoshop</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Adobe Illustrator</p>
              <p className="font-montserrat text-16 text-secondary mb-4">Adobe XD</p>
            </div>
          </div>
        </footer>
        <div className="footer-low flex flex-row justify-between items-center">
          <p className="font-montserrat text-white text-16">© 2021 Art San Diego All rights reserved</p>
          <p className="font-montserrat text-white text-16"><span className="text-primary">//</span>CRTVED</p>
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