import type { MouseEvent } from 'react'

export type SectionPath = '/' | '/sobre' | '/psicanalise' | '/atendimento' | '/faq'

const sectionIdByPath: Record<SectionPath, string> = {
  '/': 'inicio',
  '/sobre': 'sobre',
  '/psicanalise': 'psicanalise',
  '/atendimento': 'atendimento',
  '/faq': 'faq',
}

const sectionPathByHash: Record<string, SectionPath> = {
  '#inicio': '/',
  '#sobre': '/sobre',
  '#psicanalise': '/psicanalise',
  '#atendimento': '/atendimento',
  '#faq': '/faq',
}

export function getSectionPathFromHash(hash: string): SectionPath | undefined {
  return sectionPathByHash[hash]
}

export function isSectionPath(pathname: string): pathname is SectionPath {
  const normalizedPathname = pathname.replace(/\/$/, '') || '/'
  return normalizedPathname in sectionIdByPath
}

export function scrollToSection(pathname: string, behavior: ScrollBehavior = 'smooth') {
  const normalizedPathname = pathname.replace(/\/$/, '') || '/'
  if (!isSectionPath(normalizedPathname)) return

  document.getElementById(sectionIdByPath[normalizedPathname])?.scrollIntoView?.({
    behavior,
    block: 'start',
  })
}

export function navigateToSection(event: MouseEvent<HTMLAnchorElement>, path: SectionPath) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  ) {
    return
  }

  event.preventDefault()
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path)
  }
  scrollToSection(path)
}
