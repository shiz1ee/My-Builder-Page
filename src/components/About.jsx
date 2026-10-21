import './About.css'

function About() {
    return (
        <section id="about" className="about">
            <h2 className='section-title'>About me</h2>

            <div className='bento'>
                <div className='bento-card bio'>
                    <h3>Who am I</h3>
                    <p>
                        Hi, I'm <b>Sainath Shinde</b>.
                         I'm 18 and I love making games and technical things.
                         I like making projects which I have no clue about,
                          because figuring it out and learning them out is the most fun part!
                    </p>
                </div>

                <div className='bento-card'>
                    <h3>Based in</h3>
                    <p>India</p>
                </div>

                <div className='bento-card'>
                    <h3>Learning</h3>
                    <p>C++ and full-stack web development.</p>
                </div>

                <div className='bento-card'>
                    <h3>Goal</h3>
                    <p>Become an <b>indie game developer</b> and be as much nerdy as i can.</p>
                </div>

                <div className='bento-card highlights'>
                    <h3>Games that i like</h3>
                    <p>Portal 1 & 2, subnautica, etc</p>
                </div>
                {/*yeah jsut copy the div secion to make future bento cards. idea: idk */}
            </div>
        </section>
    )
}

export default About