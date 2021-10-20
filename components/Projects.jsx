import Image from 'next/image';
// import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';

// const PROJECTS = gql`
//   query GetProjects {
//     projects {
//       title
//       description
//       role
//       link
//       image {
//         url
//         alternativeText
//       }
//     }
//   }
// `;

const PROJECT_DATA = [
  {
    title: "THE LIBRVN",
    description: "Brand identity design for the librvn.",
    role: "Logo/Brand Identity Designer",
    image: "/assets/images/thelibrvn.png",
    alt: "The Librvn",
    link: "https://www.behance.net/gallery/129483121/THE-LIBRVN-Brand-Identity-Design"
  },
  {
    title: "Beyond The Box",
    description: "Design concept for a gadget store.",
    role: "UI Designer",
    image: "/assets/images/beyondthebox.png",
    alt: "Beyond the box design concept",
    link: "https://www.behance.net/gallery/125907337/Beyondthebox-Landing-Page-Design-Concept"
  },
  {
    title: "Notion",
    description: "A case study for one of the best app out there.",
    role: "UI/UX Designer",
    image: "/assets/images/notion.png",
    alt: "Notion Case Study Thumbnail",
    link: "https://www.behance.net/gallery/121735799/Sociov-Website-UIUX-Design-Concept"
  },
  {
    title: "Filidian Bank Website",
    description: "A website for a rural bank.",
    role: "Designer, Developer",
    image: "/assets/images/filidianbank.jpg",
    alt: "Filidian Bank Project Thumbnail",
    link: "https://www.behance.net/gallery/122173739/Filidian-Bank-Website-UIUX-Design-Development"
  },
  {
    title: "Sociov Website",
    description: "Landing page design concept for a startup business.",
    role: "Designer",
    image: "/assets/images/sociov.jpg",
    alt: "Sociov Project Thumbnail",
    link: "https://www.behance.net/gallery/121735799/Sociov-Website-UIUX-Design-Concept"
  },
  // {
  //   title: "Kami Ai Logo",
  //   description: "Brand logo design for arts & crafts bizz.",
  //   role: "Designer",
  //   image: "/assets/images/kamiai.jpg",
  //   alt: "Kami-ai Project Thumbnail",
  //   link: "https://www.instagram.com/kami_ai_/"
  // },
  {
    title: "Divine Logo",
    description: "Brand Logo design for Divine San Diego, an Artisan.",
    role: "Logo Designer",
    image: "/assets/images/divine.jpg",
    alt: "Divine Project Thumbnail",
    link: "https://www.behance.net/gallery/115433221/Divine-Branding"
  },
  // {
  //   title: "CENA Footwear",
  //   description: "Brand logo design for a footwear business.",
  //   role: "Designer",
  //   image: "/assets/images/cena.jpg",
  //   alt: "CENA Project Thumbnail",
  //   link: "https://www.facebook.com/cenafootwear"
  // }
]

const Projects = () => {
  useEffect(() => {
    let cursorContainer = document.querySelector(".cursor-container");
    const ev = selector => {
      selector.addEventListener('mousemove', () => {cursorContainer.classList.add('active');})
      selector.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active');})
    }
    document.querySelectorAll('.cta').forEach(e => {ev(e)});
    document.querySelectorAll('.placeholder').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active');})
    });
  })

  // const { loading, error, data } = useQuery(PROJECTS);

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error :( Error Message: {error}</p>

  return (
    <div className="work-content">
      {/* {data.projects.map((project, i) => {
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
                src={project.image.url}
                height="600" width="550"
                alt={project.image.alternativeText}
              />
              <a href={ project.link } rel="noopener noreferrer" className="cta absolute overflow-hidden text-transparent z-10" target="_blank">
                View Case Study
                <Image src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" height="225px" width="225px" />
              </a>
            </div>
          </div>
        )
      })} */}
      {
        PROJECT_DATA.map((project, i) => {
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
                  src={project.image}
                  height="600" width="550"
                  alt={project.alt}
                />
                <a href={ project.link } rel="noopener noreferrer" className="cta absolute overflow-hidden text-transparent z-10" target="_blank">
                  View Case Study
                  <Image src="/assets/cta/cta-view-case-study.svg" alt="View Case Study call to action" height="225px" width="225px" />
                </a>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
 
export default Projects;