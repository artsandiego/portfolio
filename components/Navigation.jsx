import Link from 'next/link'

const Navigation = () => {
  return (
    <header className="flex justify-between items-start z-50 fixed">
      <img className="" className="" src="/assets/icons/artsandiego-crtved-logo.svg" alt="Art San Diego and CRTVED Logo" />
      <div className="flex items-start">
        <div className="flex flex-row mr-16">
          <a href="https://www.github.com/crtved" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Behance</a>
          <a href="https://www.behance.net/crtved" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Behance</a>
          <a href="https://www.instagram.com/crt.ved" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">LinkedIn</a>
          <a href="https://www.linkedin.com/in/artsandiego/" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Facebook</a>
          <a href="https://www.fb.com/creativedeveloperph" target="_blank" rel="noreferrer noopener" className="alt socials mx-2 text-transparent">Instagram</a>
        </div>
        <nav className="navigation flex flex-col text-right top-auto">
          <Link href="#about"><a className="alt font-montserrat text-white text-16 uppercase hover:text-primary">About Me</a></Link>
          <Link href="#work"><a className="alt font-montserrat text-white text-16 uppercase hover:text-primary">CRTVED</a></Link>
          <Link href="mailto:asd.artsandiego@gmail.com"><a className="alt font-montserrat text-white text-16 uppercase hover:text-primary">Hire Me</a></Link>
          <Link href="#"><a className="alt line-through font-montserrat text-white text-16 uppercase hover:text-primary">Blog</a></Link>
        </nav>
      </div>
    </header>
  );
}
 
export default Navigation;