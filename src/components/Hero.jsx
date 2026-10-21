import './Hero.css'
import BubbleButton from './BubbleButton'


function Hero() {
    return (
        <header id="home" className='hero'>
            <div className='hero-text'>
                <span className='chip'>
                    <span className='dot'></span> Currently building: Platformer Game 
                </span>
                <h1>Hey, I'm Sainath.</h1>
                <p className='tagline'>I'm 18 and I build games and websites</p>
                <p className='intro'>
                    I'm learning C++ and full-stack development, and I like picking projects I have no idea on How to build, because figuring it out is the best part. My goal is to become an Indie game developer.
                </p>
                <div className='hero-buttons'>
                    <BubbleButton href="#projects" >Check out my project</BubbleButton>
                    <a href="https://github.com/shiz1ee" className='btn btn-outline' target='_blank' rel='noopener noreferrer'>Github</a>
                </div>
            </div>

            <div className='hero-photo'>
                
                <img src="/images/pfp.jpeg" alt="Sainath" />
            </div>
        </header>
    )
}

export default Hero