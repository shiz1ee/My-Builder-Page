import { useRef } from "react"
import { gsap } from "gsap"
import { SlowMo } from "gsap/EasePack"
import './BubbleButton.css'
import { useEffect } from "react"




gsap.registerPlugin(SlowMo)

const SLOW = 'slow(0.1, 0.7, false)'

function BubbleButton({href, children}) {
    const root = useRef(null)
    const master = useRef(null)

    useEffect(() => {
        //say no to potato pc
        
        const ctx = gsap.context(() => {
            const tlc = gsap.utils.toArray('.circle.top-left', root.current)
            const brc = gsap.utils.toArray('.circle.bottom-right', root.current)
            const blob = root.current.querySelector('.blob')

            
            const tl = gsap.timeline()
            tl.to(tlc, {duration: 1.2, x: -25, y: -25, scaleY: 2, ease: SLOW}) 
            tl.to(tlc[0], {duration: 0.1, scale:0.2, x: '+=6', y: '-=2' })
            tl.to(tlc[1], {duration: 0.1, scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1')
            tl.to(tlc[2], {duration: 0.1, scale:0.2, x: '-=15', y: '+=6' }, '-=0.1')
            tl.to(tlc[0], {duration: 1, scale: 0, x: '-=5', y: '-=15', opacity: 0})
            tl.to(tlc[1], {duration: 1, scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0}, '-=1')
            tl.to(tlc[2], {duration: 1, scale: 0, x: '-=15', y: '+=5', opacity: 0}, '-=1')
            
            //god not again
            const tl2 = gsap.timeline()
            tl2.set(brc, { x: 0, y: 0, rotation: 45})
            tl2.to(brc, {duration: 1.1, x: 30, y: 30, ease: SLOW})
            tl2.to(brc[0], {duration:0.1, scale: 0.2, x: '-=6', y: '+=3'})
            tl2.to(brc[1], {duration:0.1, scale: 0.8, x: '+=7', y: '+=3'}, '-=0.1')
            tl2.to(brc[2], {duration:0.1, scale: 0.2, x: '+=15', y: '-=6'}, '-=0.2')
            tl2.to(brc[0], {duration:1, scale: 0, x: '+=5', y: '+=15', opacity: 0})
            tl2.to(brc[1], {duration:1, scale: 0.4, x: '+=7', y: '+=7', opacity: 0}, '-=1')
            tl2.to(brc[2], {duration:1, scale: 0, x: '+=15', y: '-=5', opacity: 0}, '-=1')

            const m = gsap.timeline({ paused: true })
            m.add(tl)
            m.to(blob, {duration: 0.8, scaleY: 1.1 }, 0.1)
            m.add(tl2, 0.2)
            m.to(blob, {duration: 1.8, scale: 1, ease: 'elastic.out(1.2, 0.4)'}, 1.2)
            m.timeScale(2.6)

            master.current = m
        }, root)

        return () => ctx.revert()
    }, [])

    const play = () => {
        console.log('hover!', master.current)
        master.current?.restart()
    }

    return (
        <span className="bubble" ref={root}>
            <svg className="goo" xmins="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <a href={href} className="bubble-btn" onPointerEnter={play}>
                {children}
            </a>
            <span className="bubble-effect" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                    <span key={i} className="circle top-left"></span>
                ))}
                <span className="blob"></span>
                {[0, 1, 2].map((i) => (
                    <span key={i} className="circle bottom-right"></span>
                ))}
            </span>
        </span>
    )
}

export default BubbleButton