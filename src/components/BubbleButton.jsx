import { useRef } from "react"


gsap.registerPlugin(SlowMo)

const SLOW = 'slow(0.1, 0.7, false'

function BubbleButton({href, children}) {
    const root = useRef(null)
    const master = useRef(null)

    useEffect(() => {
        //say no to potato pc
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
            
        })
    })
}