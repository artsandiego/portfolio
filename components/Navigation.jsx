import Link from 'next/link'
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';

const LINKS = gql`
  query GetLinks{
    navigationLinks {
      id
      title
      link
    }
  }
`;

const Navigation = () => {
  useEffect(() => {
    let cursorContainer = document.querySelector(".cursor-container");
    document.querySelectorAll('.alt').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active-alt');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active-alt');})
    });
  })

  const { loading, error, data } = useQuery(LINKS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( Error Message: {error}</p>

  return (
    <header className="flex justify-between items-start z-50 fixed">
      <img className="" className="" src="/assets/icons/artsandiego-crtved-logo.svg" alt="Personal brand of Art San Diego" height="58px" width="52px" />
      <div className="flex items-start">
        <div className="flex flex-row mr-16">
          <a href="https://www.github.com/crtved" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Behance</a>
          <a href="https://www.behance.net/crtved" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Behance</a>
          <a href="https://www.instagram.com/crt.ved" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">LinkedIn</a>
          <a href="https://www.linkedin.com/in/artsandiego/" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Facebook</a>
          <a href="https://www.fb.com/creativedeveloperph" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Instagram</a>
        </div>
        <nav className="navigation flex flex-col text-right top-auto">
          {data.navigationLinks.map((navigationLink, i) => {
            return (
              <Link href={ navigationLink.link } key={ i }><a className="alt font-montserrat text-white text-16 uppercase hover:text-primary">{ navigationLink.title }</a></Link>
            )
          })}
        </nav>
      </div>
    </header>
  );
}
 
export default Navigation;