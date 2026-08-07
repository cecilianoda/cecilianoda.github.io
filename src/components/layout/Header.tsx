import { useEffect, useState } from 'react'
import logo from '../../assets/logos/assinatura-horizontal.svg'
import type { NavigationItem } from '../../core/types/content'
import {
  HeaderCta,
  HeaderInner,
  HeaderRoot,
  LogoLink,
  MenuBackdrop,
  MenuButton,
  MenuIcon,
  MenuLabel,
  Navigation,
} from './Header.styles'

interface HeaderProps {
  navigation: NavigationItem[]
  ctaHref: string
}

export function Header({ navigation, ctaHref }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <HeaderRoot>
      <HeaderInner>
        <LogoLink href="#inicio" aria-label="Cecília Noda — início" onClick={closeMenu}>
          <img src={logo} alt="Cecília Noda Psicologia" width="178" height="46" />
        </LogoLink>
        <MenuButton
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <MenuLabel>{isOpen ? 'Fechar' : 'Menu'}</MenuLabel>
          <MenuIcon $isOpen={isOpen} aria-hidden="true">
            <i />
            <i />
            <i />
          </MenuIcon>
        </MenuButton>
        <MenuBackdrop
          type="button"
          aria-label="Fechar menu e retornar ao conteúdo"
          $isOpen={isOpen}
          onClick={closeMenu}
        />
        <Navigation id="main-navigation" aria-label="Navegação principal" $isOpen={isOpen}>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <HeaderCta href={ctaHref} target="_blank" rel="noreferrer">
            Agendar conversa
          </HeaderCta>
        </Navigation>
      </HeaderInner>
    </HeaderRoot>
  )
}
