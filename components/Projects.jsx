import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';

const PROJECTS = gql`
  query GetProjects {
    projects {
      title
      description
      role
      link
      image {
        url
        alternativeText
      }
    }
  }
`;

const Projects = () => {
  useEffect(() => {
    let cursorContainer = document.querySelector(".cursor-container");
    document.querySelectorAll('.placeholder').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active');})
    });
  })

  const API = process.env.API_URL
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( Error Message: {error}</p>

  return (
    <div className="work-content">
      {data.projects.map((project, i) => {
        return (
          <div key={ i } className="project flex flex-row w-full justify-center mb-44 skew-element">  
            <div className="project-title flex flex-col justify-end pb-32 mr-32">
              <h2 className="font-spectral text-primary text-60 z-20">{ project.title }</h2>
              <div className="default-paragraph inline-flex flex-row justify-start">             
                <span className="line"></span>
                <p className="text-25 text-white font-spectral">
                  { project.description }
                  <span className="opacity-70 text-16 block font-light font-spectral">Role: <span className="text-primary opacity-50 text-16 font-light font-spectral">{ project.role }</span></span>
                </p>
              </div>
            </div>
            <div className="project-image work-content__image">
              <div className="placeholder"></div>
              <Image
                src={API + project.image.url}
                height="600" width="550"
                alt={project.image.alternativeText}
              />
              <a href={ project.link } rel="noopener noreferrer" className="cta absolute overflow-hidden text-transparent z-10" target="_blank">
                View Case Study
                <img src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" />
              </a>
            </div>
          </div>
        )
      })}

{/* 
      <div className="project flex flex-row-reverse w-full justify-center mb-44 skew-element">  
        <div className="project-title flex flex-col justify-end pb-32 ml-32">
          <h2 className="font-spectral text-primary text-60 z-20">Sociov website</h2>
          <div className="default-paragraph inline-flex flex-row justify-start">             
            <span className="line"></span>
            <p className="text-25 text-white font-spectral">
              Landing page design concept for a startup business.
              <span className="opacity-70 text-16 block font-light font-spectral">Role: <span className="text-primary opacity-50 text-16 font-light font-spectral">Designer</span></span>
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
              A website for a rural bank.
              <span className="opacity-70 text-16 block font-light font-spectral">Role: <span className="text-primary opacity-50 text-16 font-light font-spectral">Designer, Developer</span></span>
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
              <span className="opacity-70 text-16 block font-light font-spectral">Role: <span className="text-primary opacity-50 text-16 font-light font-spectral">Designer</span></span>
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
              <span className="opacity-70 text-16 block font-light font-spectral">Role: <span className="text-primary opacity-50 text-16 font-light font-spectral">Designer</span></span>
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
              <span className="opacity-70 text-16 block font-light font-spectral">Role: <span className="text-primary opacity-50 text-16 font-light font-spectral">Designer</span></span>
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
      </div> */}

    </div>
  );
}
 
export default Projects;