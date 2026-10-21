import './Skills.css'

const icon = (name) => 
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`

const groups = [
    {
        title: 'Game Dev',
        note: 'Where I want to end up',
        wide: true,
        skills: [{name: 'Godot', icon: icon('godot')}],
    },
    {
        title: 'Languages',
        note: 'What I think in',
        skills: [
            { name: 'Python', icon: icon('python')},
            { name: 'JavaScript', icon: icon('javascript')},
            { name: 'C++', icon: icon('cplusplus')},
        ],
    },
    {
        title: 'Web',
        note: 'What I build sites with',
        skills: [
            { name: 'HTML', icon: icon('html5')},
            { name: 'CSS', icon: icon('css3')},
            { name: 'React', icon: icon('react')},
            { name: 'Vite', icon: icon('vitejs')},
        ],
    },
    {
        title: 'Tools',
        note: 'How i build',
        skills: [
            {name: 'Git', icons: icon('git')},
            {name: 'Github', icons: icon('github')},
            {name: 'VS Code', icons: icon('vscode')},
            {name: 'Vercel', icons: icon('vercel')},
        ],
    },
]

function Skills() {
    return (
        <section id="skills" className='skills' >
            <h2 className='section-title'>Skills</h2>

            <div className='skills-grid'>
                {groups.map((group) => (
                    <div
                    key={group.title}
                    className={group.wide ? 'skill-card wide' : 'skill-card'}
                    >
                        <h3>{group.title}</h3>
                        <p className='note'>{group.note}</p>
                        <div className='chips'>
                            {group.skills.map((skill) => (
                                <span key={skill.name} className='skill-chip'>
                                    {skill.icon && <img src={skill.icon} alt="" /> }
                                    {skill.name}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills