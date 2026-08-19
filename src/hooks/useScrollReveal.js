import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return

    const {
      duration = 0.8,
      delay = 0,
      stagger = 0.1,
      from = { opacity: 0, y: 30 }
    } = options

    gsap.fromTo(
      ref.current.querySelectorAll('[data-reveal]'),
      from,
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [ref])
}
