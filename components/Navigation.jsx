import Link from 'next/link'
// import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import Image from 'next/image';
 
// const NAVIGATION = gql`
//   query GetLogoNavigationLinks {
//     logo {
//       image {
//         url
//         alternativeText
//       }
//     }
//     navigationLinks {
//       id
//       title
//       link
//     }
//   }
// `;

const Navigation = () => {
  useEffect(() => {
    let cursorContainer = document.querySelector(".cursor-container");
    document.querySelectorAll('.alt').forEach(e => {
      e.addEventListener('mousemove', () => {cursorContainer.classList.add('active-alt');})
      e.addEventListener('mouseleave', () => {cursorContainer.classList.remove('active-alt');})
    });
  })

  // const { loading, error, data } = useQuery(NAVIGATION);

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error :( Error Message: {error}</p>

  return (
    <header className="flex justify-between items-start z-50 fixed">
      <Image src="/assets/images/logo.png" alt="Art San Diego and THE LIBRVN Logo" height="52px" width="58px" />
      <div className="flex items-start">
        <div className="flex flex-row mr-16">
          <a href="https://www.github.com/thelibrvn" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Behance</a>
          <a href="https://www.behance.net/thelibrvn" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Behance</a>
          <a href="https://www.instagram.com/thelibrvn" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">LinkedIn</a>
          <a href="https://www.linkedin.com/in/artsandiego/" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Facebook</a>
          <a href="https://www.fb.com/thelibrvn" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Instagram</a>
        </div>
        <nav className="navigation flex flex-col text-right top-auto">
          <Link href="#about"><a className="alt font-montserrat text-white text-16 uppercase hover:text-primary">About</a></Link>
          <Link href="#work"><a className="alt font-montserrat text-white text-16 uppercase hover:text-primary">Brand</a></Link>
          <Link href="#contact"><a className="alt font-montserrat text-white text-16 uppercase hover:text-primary">Hire Me</a></Link>
          {/* {data.navigationLinks.map((navigationLink, i) => {
            return (
            )
          })} */}
        </nav>
      </div>
    </header>
  );
}
 
export default Navigation;