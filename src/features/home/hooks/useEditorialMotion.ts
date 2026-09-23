import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** A deliberately small, scoped motion system for the landing page. */
export function useEditorialMotion(root: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const page = root.current
    // Tests and older browsers can still render every piece of content without motion.
    if (!page || !window.matchMedia) return

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power2.out' } })
        heroTimeline
          .from('[data-hero-decoration]', { autoAlpha: 0, duration: 0.7, stagger: 0.12 })
          .from('[data-hero-brand]', { autoAlpha: 0, y: 12, duration: 0.65 }, '-=0.35')
          .from(
            '[data-hero-line]',
            { autoAlpha: 0, y: 28, filter: 'blur(7px)', duration: 0.8, stagger: 0.12 },
            '-=0.25',
          )
          .from('[data-hero-support]', { autoAlpha: 0, y: 16, duration: 0.65 }, '-=0.4')
          .from('[data-hero-actions]', { autoAlpha: 0, y: 12, duration: 0.55 }, '-=0.35')
          .from(
            '[data-hero-image]',
            { autoAlpha: 0, y: 20, scale: 0.985, duration: 1.05 },
            '-=0.85',
          )

        const dynamicWord = page.querySelector<HTMLElement>('[data-dynamic-word]')
        if (dynamicWord) {
          const words = ['escutar', 'acolher', 'transformar', 'compreender']
          const wordTimeline = gsap.timeline({ delay: 1.25 })
          words.forEach((word) => {
            wordTimeline
              .to(dynamicWord, { autoAlpha: 0, y: -7, duration: 0.2, ease: 'sine.in' })
              .call(() => {
                dynamicWord.textContent = word
              })
              .to(dynamicWord, { autoAlpha: 1, y: 0, duration: 0.38, ease: 'sine.out' })
              .to({}, { duration: word === 'compreender' ? 0 : 0.55 })
          })
        }

        gsap.utils.toArray<HTMLElement>('[data-scroll-reveal]', page).forEach((element) => {
          gsap.from(element, {
            autoAlpha: 0,
            filter: 'blur(7px)',
            scrollTrigger: { trigger: element, start: 'top 86%', once: true },
            duration: 0.8,
            y: 22,
            ease: 'power2.out',
          })
        })

        gsap.utils.toArray<HTMLElement>('[data-image-reveal]', page).forEach((element) => {
          gsap.from(element, {
            clipPath: 'inset(7% 4% 7% 4%)',
            scrollTrigger: { trigger: element, start: 'top 82%', once: true },
            duration: 1,
            ease: 'power2.out',
            scale: 1.025,
          })
        })

        const aboutImage = page.querySelector<HTMLElement>('[data-about-image]')
        if (aboutImage) {
          gsap.to(aboutImage, {
            scrollTrigger: {
              trigger: aboutImage,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.7,
            },
            y: -18,
            ease: 'none',
          })
        }

        gsap.utils.toArray<HTMLElement>('[data-organic-shape]', page).forEach((shape, index) => {
          gsap.to(shape, {
            duration: 13 + index * 3,
            ease: 'sine.inOut',
            repeat: -1,
            y: index % 2 ? 16 : -14,
            x: index % 2 ? -12 : 14,
            yoyo: true,
          })
        })
      })

      return () => media.revert()
    }, page)

    return () => context.revert()
  }, [root])
}
