import React, {useState, useEffect} from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const logoText = `<SW>`

export default function NavBar() {
  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState("")
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  
  const toggleHamburger = () => {

    setActive(!active)

    const newClass = !active ? "is-active" : ""
    setNavBarActiveClass(newClass)
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <span className="nav-logo">{width >= 1088 ? logoText : 'Steve Wisner'}</span>
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item navbar-option" to="/">
              Home
            </Link>
            <Link className="navbar-item navbar-option" to="/projects">
              Projects
            </Link>
            <Link className="navbar-item navbar-option" to="/contact">
              Contact
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/spwisner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// export default Navbar;
