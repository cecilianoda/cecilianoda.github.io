export interface NavigationItem {
  label: string
  href: `#${string}`
}

export interface ContactChannel {
  label: string
  value: string
  href: string
}

export interface NumberedContent {
  number: string
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface SiteContent {
  navigation: NavigationItem[]
  hero: { eyebrow: string; title: string; titleLines: string[]; support: string }
  about: {
    eyebrow: string
    title: string
    introduction: string
    details: string[]
    facts: string[]
  }
  approach: { eyebrow: string; title: string; introduction: string; foundations: NumberedContent[] }
  process: { eyebrow: string; title: string; steps: NumberedContent[] }
  faq: { eyebrow: string; title: string; items: FaqItem[] }
  finalCta: { title: string; subtitle: string; body: string }
  contacts: ContactChannel[]
}
