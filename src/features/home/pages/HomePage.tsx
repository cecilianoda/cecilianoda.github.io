import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import portrait from '../../../assets/images/cecilia-retrato.webp'
import portraitSmall from '../../../assets/images/cecilia-retrato-960.webp'
import seatedPortrait from '../../../assets/images/cecilia-sentada.webp'
import seatedPortraitSmall from '../../../assets/images/cecilia-sentada-800.webp'
import { Footer } from '../../../components/layout/Footer'
import {
  getSectionPathFromHash,
  navigateToSection,
  scrollToSection,
} from '../../../core/sectionNavigation'
import { Header } from '../../../components/layout/Header'
import { LinkButton } from '../../../components/ui/LinkButton'
import { ArrowIcon } from '../../../components/ui/ArrowIcon'
import { Container, Eyebrow } from '../../../styles/shared.styles'
import { Faq } from '../components/Faq'
import { useEditorialMotion } from '../hooks/useEditorialMotion'
import { siteContent, whatsappHref } from '../content/siteContent'
import {
  AboutDetails,
  AboutEyebrow,
  AboutGrid,
  AboutIntro,
  AboutPhotoFrame,
  AboutPhotoMedia,
  AboutSection,
  AboutVisual,
  ApproachSection,
  CtaBody,
  CtaSubtitle,
  Facts,
  FaqContent,
  FaqGrid,
  FaqHeading,
  FaqSection,
  FinalCta,
  FinalCtaInner,
  FoundationCard,
  FoundationGrid,
  Hero,
  HeroActions,
  HeroArch,
  HeroCopy,
  HeroGrid,
  HeroRail,
  HeroSupport,
  HeroVisual,
  InlineLink,
  MobileWhatsapp,
  OnlineBadge,
  OrganicBackdrop,
  ProcessGrid,
  ProcessHeading,
  ProcessSection,
  SectionIntro,
  StepNumber,
  Steps,
} from './HomePage.styles'

export function HomePage() {
  const mainRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLElement>(null)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  const initialPathname =
    typeof window !== 'undefined' ? window.location.pathname.replace(/\/$/, '') || '/' : '/'

  const skipHero = initialPathname !== '/'

  useEditorialMotion(mainRef, { skipHero })

  useEffect(() => {
    const footer = footerRef.current
    if (!footer || !window.IntersectionObserver) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.08 },
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    const legacyPath = getSectionPathFromHash(window.location.hash)

    if (legacyPath) {
      window.history.replaceState(null, '', legacyPath)
    }

    const pathname = window.location.pathname.replace(/\/$/, '') || '/'

    if (pathname !== window.location.pathname) {
      window.history.replaceState(null, '', pathname)
    }

    scrollToSection(pathname, 'auto')

    const handlePopState = () => {
      const currentPathname = window.location.pathname.replace(/\/$/, '') || '/'

      scrollToSection(currentPathname, 'auto')
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const { identity, hero, about, approach, process, faq, finalCta, navigation, contacts } =
    siteContent

  const heroTitle = hero.titleLines.join(' ')

  return (
    <>
      <Header brandName={identity.name} navigation={navigation} ctaHref={whatsappHref} />

      <main id="conteudo" ref={mainRef}>
        <Hero id="inicio" aria-labelledby="hero-title">
          <OrganicBackdrop aria-hidden="true" data-hero-decoration />

          <HeroGrid>
            <HeroCopy>
              <Eyebrow data-hero-brand>
                {identity.profession} · {identity.registration}
              </Eyebrow>

              <h1 id="hero-title" aria-label={heroTitle}>
                {hero.titleLines.map((line, index) => (
                  <span key={line} data-hero-line aria-hidden="true">
                    {index === 1 ? <em data-dynamic-word>{line}</em> : line}
                  </span>
                ))}
              </h1>

              <HeroSupport data-hero-support>{hero.support}</HeroSupport>

              <HeroActions data-hero-actions>
                <LinkButton href={whatsappHref} target="_blank" rel="noreferrer">
                  Agendar uma conversa
                </LinkButton>

                <InlineLink href="/sobre" onClick={(event) => navigateToSection(event, '/sobre')}>
                  Conheça meu trabalho <ArrowIcon direction="down" />
                </InlineLink>
              </HeroActions>
            </HeroCopy>

            <HeroVisual data-hero-image>
              <HeroArch aria-hidden="true" />

              <img
                src={portrait}
                srcSet={`${portraitSmall} 960w, ${portrait} 1600w`}
                sizes="(min-width: 48rem) min(31rem, 44vw), calc(100vw - 2.5rem)"
                alt="Retrato de Cecília Noda, psicóloga clínica"
                width="1600"
                height="1986"
                fetchPriority="high"
              />

              <OnlineBadge>
                <i aria-hidden="true" />
                Atendimento 100% online
              </OnlineBadge>
            </HeroVisual>
          </HeroGrid>

          <HeroRail aria-hidden="true">
            <span>Escuta</span>
            <span>Singularidade</span>
            <span>Acolhimento</span>
          </HeroRail>
        </Hero>

        <AboutSection id="sobre" aria-labelledby="about-title">
          <AboutGrid>
            <AboutEyebrow data-scroll-reveal>{about.eyebrow}</AboutEyebrow>

            <AboutIntro data-scroll-reveal>
              <h2 id="about-title">{about.title}</h2>
              <p>{about.introduction}</p>
            </AboutIntro>

            <AboutVisual>
              <AboutPhotoFrame>
                <AboutPhotoMedia data-image-reveal>
                  <img
                    src={seatedPortrait}
                    srcSet={`${seatedPortraitSmall} 800w, ${seatedPortrait} 1600w`}
                    sizes="(min-width: 64rem) 32rem, (min-width: 48rem) 40vw, calc(100vw - 2.5rem)"
                    alt="Cecília Noda sorrindo em um retrato informal"
                    width="1600"
                    height="1600"
                    loading="lazy"
                    data-about-image
                  />
                </AboutPhotoMedia>
              </AboutPhotoFrame>
            </AboutVisual>

            <AboutDetails data-scroll-reveal>
              {about.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <Facts aria-label="Informações profissionais">
                {about.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </Facts>
            </AboutDetails>
          </AboutGrid>
        </AboutSection>

        <ApproachSection id="psicanalise" aria-labelledby="approach-title">
          <Container>
            <SectionIntro data-scroll-reveal>
              <div>
                <Eyebrow $light>{approach.eyebrow}</Eyebrow>
                <h2 id="approach-title">{approach.title}</h2>
              </div>

              <p>{approach.introduction}</p>
            </SectionIntro>

            <FoundationGrid>
              {approach.foundations.map((foundation) => (
                <FoundationCard key={foundation.number} data-scroll-reveal>
                  <span>{foundation.number}</span>
                  <h3>{foundation.title}</h3>
                  <p>{foundation.description}</p>
                </FoundationCard>
              ))}
            </FoundationGrid>
          </Container>
        </ApproachSection>

        <ProcessSection id="atendimento" aria-labelledby="process-title">
          <ProcessGrid>
            <ProcessHeading data-scroll-reveal>
              <Eyebrow>{process.eyebrow}</Eyebrow>
              <h2 id="process-title">{process.title}</h2>
            </ProcessHeading>

            <Steps>
              {process.steps.map((step) => (
                <li key={step.number} data-scroll-reveal>
                  <StepNumber>{step.number.padStart(2, '0')}</StepNumber>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </Steps>
          </ProcessGrid>
        </ProcessSection>

        <FaqSection id="faq" aria-labelledby="faq-title">
          <FaqGrid>
            <FaqHeading data-scroll-reveal>
              <Eyebrow>{faq.eyebrow}</Eyebrow>
              <h2 id="faq-title">{faq.title}</h2>
            </FaqHeading>

            <FaqContent>
              <Faq items={faq.items} />
            </FaqContent>
          </FaqGrid>
        </FaqSection>

        <FinalCta aria-labelledby="cta-title">
          <FinalCtaInner data-scroll-reveal>
            <Eyebrow $light>Um primeiro passo</Eyebrow>
            <h2 id="cta-title">{finalCta.title}</h2>
            <CtaSubtitle>{finalCta.subtitle}</CtaSubtitle>
            <CtaBody>{finalCta.body}</CtaBody>

            <LinkButton variant="light" href={whatsappHref} target="_blank" rel="noreferrer">
              Conversar pelo WhatsApp
            </LinkButton>
          </FinalCtaInner>
        </FinalCta>
      </main>

      <Footer contacts={contacts} identity={identity} footerRef={footerRef} />

      <MobileWhatsapp
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com Cecília pelo WhatsApp"
        $isFooterVisible={isFooterVisible}
      >
        <ArrowIcon /> WhatsApp
      </MobileWhatsapp>
    </>
  )
}
