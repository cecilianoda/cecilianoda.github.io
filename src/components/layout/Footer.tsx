import monogram from '../../assets/logos/monograma-principal.svg'
import type { ContactChannel } from '../../core/types/content'
import { ArrowIcon } from '../ui/ArrowIcon'
import { Brand, FooterBottom, FooterGrid, FooterRoot } from './Footer.styles'

interface FooterProps {
  contacts: ContactChannel[]
}

export function Footer({ contacts }: FooterProps) {
  return (
    <FooterRoot>
      <FooterGrid>
        <Brand>
          <img src={monogram} alt="" width="72" height="78" />
          <div>
            <strong>Cecília Noda</strong>
            <span>Psicóloga clínica · CRP 09/22516</span>
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
        <span>© {new Date().getFullYear()} Cecília Noda</span>
        <a href="#inicio">
          Voltar ao início <ArrowIcon direction="up" />
        </a>
      </FooterBottom>
    </FooterRoot>
  )
}
