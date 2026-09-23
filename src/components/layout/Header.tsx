import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logos/assinatura-horizontal.svg'
import { navigateToSection } from '../../core/sectionNavigation'
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
  brandName: string
  navigation: NavigationItem[]
  ctaHref: string
}

export function Header({ brandName, navigation, ctaHref }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const desktopMedia = window.matchMedia?.('(min-width: 64rem)')
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    desktopMedia?.addEventListener('change', closeOnDesktop)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
      desktopMedia?.removeEventListener('change', closeOnDesktop)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)
  const closeMenuAndRestoreFocus = () => {
    setIsOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <HeaderRoot>
      <HeaderInner>
        <LogoLink
          href="/"
          aria-label={`${brandName} — início`}
          onClick={(event) => {
            navigateToSection(event, '/')
            closeMenu()
          }}
        >
          <img src={logo} alt="" width="178" height="46" />
        </LogoLink>
        <MenuButton
          ref={menuButtonRef}
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
          tabIndex={-1}
          $isOpen={isOpen}
          onClick={closeMenuAndRestoreFocus}
        />
        <Navigation id="main-navigation" aria-label="Navegação principal" $isOpen={isOpen}>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => {
                    navigateToSection(event, item.href)
                    closeMenu()
                  }}
                >
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
