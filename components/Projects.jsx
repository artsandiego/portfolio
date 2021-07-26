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
      })}
    </div>
  );
}
 
export default Projects;