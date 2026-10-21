import './Footer.css'

const links = [
    {
        label: 'GitHub',
        handle: 'shiz1ee',
        href: 'https://github.com/shiz1ee',
        external: true,
    },
    {
        label: 'Slack',
        handle: 'Hack Club',
        href: 'https://hackclub.enterprise.slack.com/team/U0BQBVAHEJ3',
        external: true,
    },
    {
        label: 'Email',
        handle: 'sainathshinde200815@gmail.com',
        href: 'mailto:sainathshinde200815@gmail.com',
    },
    {
        label: 'Instagram',
        handle: '@whyarentyouyappingyouyapper',
        href: 'https://www.instagram.com/whyarentyouyappingyouyapperr/',
        external: true,
    },
]

function Footer() {
    return (
        <footer id='contact' className='footer'>
            <div className='footer-card'>
                <h2>Let's talk</h2>
                <p>
                    Want to build something together, or just say hi? I'm around on these.
                </p>

                <div className='footer-links'>
                    {links.map((l) => (
                        <a
                        key={l.label}
                        href={l.href}
                        className="footer-link"
                        {...(l.external && {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        })}
                        >
                        <span className="footer-label">{l.label}</span>
                        <span className="footer-handle">{l.handle} ↗</span>
                        </a>
                    ))}
                </div>
            </div>

            <p className='footer-credit'>
                <span className='dot'></span> Built by Sainath with React + Vite
            </p>
        </footer>
    )
}

export default Footer