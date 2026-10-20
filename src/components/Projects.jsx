import './Projects.css'

const projects = [
    {
        title: 'Cafe of Elysium',
        description: 'A cozy pixel-art cafe ordering system. Browse the menu book, fill up ur tray, send the order!',
        tags: ['React', 'Vite'],
        image: '/images/projects/cafe.png',
        live: '',
        github: '',
        featured: true,
    },
    {
        title: 'Save the Cat',
        description: 'A 2D platformer built with Godot 4. Play as a cat navigating handcrafted levels, collecting coins, and dodging patrolling slime across multiple stages',
        tags: ['godot'],
        image: '/images/projects/cat.png',
        live: '',
        github: '',
    },
    {
        title: 'Music Player',
        description: 'A dark-red, browser based usic player build with HTML, CSS and javaScript, play the built-in songs or either load a folder of MP#s from your device as a playlist.',
        tags: ['CSS', 'HTML5', 'JS'],
        image: '/images/projects/player.png',
        live: '',
        github: '',
    },
    {
        title: 'Minecraft Mod',
        description: 'An Alien/Cosmic themed minecraft mod made for neoforge 26.2 which adds custom items/blocks/ores which has some lore behind it, and bunch of food items',
        tags: ['Java: JDK 25', 'Neoforge 1.21+'],
        image: '/images/projects/mod.png',
        live: '',
        github: '',
    },
    {
        title: 'SafePath',
        description: 'An offline-first safety map. People can pin unsafe or safe spots (poor lighting, isolated stretches, harassment, theft, well-lit areas) with no signal and no account. Everything is saved on the device first and syncs safely when connectivity returns. If two people edit the same pin offline, the app detects it and asks the user to decide, so nothing is silently overwritten.',
        tags: ['React', 'Vite'],
        image: '/images/projects/safepath.png',
        live: '',
        github: '',
    },
]

function Projects() {
    return (
        <section id='projects' className='projects'>
            <h2 className='section-title'>Projects</h2>

            <div className='projects-grid'>
                {projects.mod((p) => (
                    <article
                        key={p.title}
                        className={p.featured ? 'project-card featured' : 'project-card'}
                    >
                        <div className='project-media'>
                            {p.image ? (
                                <img src={p.image} alt={`${p.title} screenshot`} />
                            ) : (
                                <div className='placeholder'>{p.title}</div>
                            )}
                        </div>

                        <div className='project-body'>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>

                            <div className='tags'>
                                {p.tags.map((t) => (
                                    <span key={t} className='tag'>{t}</span>
                                ))}
                            </div>

                            <div className='project-links'>
                                {p.live && <a href={p.live}>Live</a>}
                                {p.github && <a href={p.github}>Github</a>}

                            </div>
                            
                        </div>

                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects