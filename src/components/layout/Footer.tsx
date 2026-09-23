import monogram from '../../assets/logos/monograma-principal.svg'
import { navigateToSection } from '../../core/sectionNavigation'
import type { ContactChannel, SiteIdentity } from '../../core/types/content'
import { ArrowIcon } from '../ui/ArrowIcon'
import { Brand, FooterBottom, FooterGrid, FooterRoot, Monogram } from './Footer.styles'

interface FooterProps {
  contacts: ContactChannel[]
  identity: SiteIdentity
}

export function Footer({ contacts, identity }: FooterProps) {
  return (
    <FooterRoot>
      <FooterGrid>
        <Brand>
          <Monogram $src={monogram} aria-hidden="true" />
          <div>
            <strong>{identity.name}</strong>
            <span>
              {identity.profession} · {identity.registration}
            </span>
          </div>
        </Brand>
        <address>
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <span>{contact.label}</span>
              {contact.value}
            </a>
          ))}
        </address>
      </FooterGrid>
      <FooterBottom>
        <span>
          © {new Date().getFullYear()} {identity.name}
        </span>
        <a href="/" onClick={(event) => navigateToSection(event, '/')}>
          Voltar ao início <ArrowIcon direction="up" />
        </a>
      </FooterBottom>
    </FooterRoot>
  )
}
