import portrait from '../../../assets/images/cecilia-retrato.webp'
import seatedPortrait from '../../../assets/images/cecilia-sentada.webp'
import { Footer } from '../../../components/layout/Footer'
import { Header } from '../../../components/layout/Header'
import { LinkButton } from '../../../components/ui/LinkButton'
import { ArrowIcon } from '../../../components/ui/ArrowIcon'
import { Container, Eyebrow } from '../../../styles/shared.styles'
import { Faq } from '../components/Faq'
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
  ProcessGrid,
  ProcessHeading,
  ProcessSection,
  SectionIntro,
  StepNumber,
  Steps,
} from './HomePage.styles'

export function HomePage() {
  const { hero, about, approach, process, faq, finalCta, navigation, contacts } = siteContent

  return (
    <>
      <Header navigation={navigation} ctaHref={whatsappHref} />
      <main id="conteudo">
        <Hero id="inicio" aria-labelledby="hero-title">
          <HeroGrid>
            <HeroCopy>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1 id="hero-title" aria-label={hero.title}>
                {hero.titleLines.map((line) => (
                  <span key={line} aria-hidden="true">
                    {line}
                  </span>
                ))}
              </h1>
              <HeroSupport>{hero.support}</HeroSupport>
              <HeroActions>
                <LinkButton href={whatsappHref} target="_blank" rel="noreferrer">
                  Agendar uma conversa
                </LinkButton>
                <InlineLink href="#sobre">
                  Conheça meu trabalho <ArrowIcon direction="down" />
                </InlineLink>
              </HeroActions>
            </HeroCopy>
            <HeroVisual>
              <HeroArch aria-hidden="true" />
              <img
                src={portrait}
                alt="Retrato de Cecília Noda, psicóloga clínica"
                width="1600"
                height="1986"
                fetchPriority="high"
              />
              <OnlineBadge>
                <i aria-hidden="true" /> Atendimento 100% online
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
            <AboutEyebrow>{about.eyebrow}</AboutEyebrow>
            <AboutIntro>
              <h2 id="about-title">{about.title}</h2>
              <p>{about.introduction}</p>
            </AboutIntro>
            <AboutVisual>
              <AboutPhotoFrame>
                <AboutPhotoMedia>
                  <img
                    src={seatedPortrait}
                    alt="Cecília Noda sorrindo em um retrato informal"
                    width="1600"
                    height="1600"
                    loading="lazy"
                  />
                </AboutPhotoMedia>
              </AboutPhotoFrame>
            </AboutVisual>
            <AboutDetails>
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
            <SectionIntro>
              <div>
                <Eyebrow $light>{approach.eyebrow}</Eyebrow>
                <h2 id="approach-title">{approach.title}</h2>
              </div>
              <p>{approach.introduction}</p>
            </SectionIntro>
            <FoundationGrid>
              {approach.foundations.map((foundation) => (
                <FoundationCard key={foundation.number}>
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
            <ProcessHeading>
              <Eyebrow>{process.eyebrow}</Eyebrow>
              <h2 id="process-title">{process.title}</h2>
            </ProcessHeading>
            <Steps>
              {process.steps.map((step) => (
                <li key={step.number}>
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
            <FaqHeading>
              <Eyebrow>{faq.eyebrow}</Eyebrow>
              <h2 id="faq-title">{faq.title}</h2>
            </FaqHeading>
            <FaqContent>
              <Faq items={faq.items} />
            </FaqContent>
          </FaqGrid>
        </FaqSection>

        <FinalCta aria-labelledby="cta-title">
          <FinalCtaInner>
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
      <Footer contacts={contacts} />
      <MobileWhatsapp
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com Cecília pelo WhatsApp"
      >
        <ArrowIcon /> WhatsApp
      </MobileWhatsapp>
    </>
  )
}
