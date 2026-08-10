import type { SiteContent } from '../../../core/types/content'
import { aboutContent } from './aboutContent'
import { approachContent } from './approachContent'
import { contactContent } from './contactContent'
import { faqContent } from './faqContent'
import { finalCtaContent } from './finalCtaContent'
import { heroContent } from './heroContent'
import { identityContent } from './identityContent'
import { navigationContent } from './navigationContent'
import { processContent } from './processContent'

export { whatsappHref } from './contactContent'

export const siteContent: SiteContent = {
  identity: identityContent,
  navigation: navigationContent,
  hero: heroContent,
  about: aboutContent,
  approach: approachContent,
  process: processContent,
  faq: faqContent,
  finalCta: finalCtaContent,
  contacts: contactContent,
}
