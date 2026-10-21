import './Navbar.css'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

function Navbar() {

    const go = (e) => {
        e.preventDefault()
        gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: e.currentTarget.getAttribute('href'), offsetY: 100},
            ease: 'power2.inOut'
        })
    }

    return (
        <nav className="navbar">
            <a href="#home" className="logo">
                <span className="dot"></span>Sainath
            </a>
            <ul className="nav-links">
                <li><a href="#about" onClick={go}>About</a></li>
                <li><a href="#skills" onClick={go}>Skills</a></li>
                <li><a href="#projects" onClick={go}>Projects</a></li>
                <li><a href="#contact" onClick={go}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar