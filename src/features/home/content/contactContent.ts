import type { ContactChannel } from '../../../core/types/content'

const whatsappMessage =
  'Oi, Cecília! :) Gostaria de saber mais sobre como funciona a terapia com você.'

export const whatsappHref = `https://api.whatsapp.com/send?phone=5562981458024&text=${encodeURIComponent(whatsappMessage)}`

export const contactContent: ContactChannel[] = [
  {
    label: 'E-mail',
    value: 'cecilianoda.psi@gmail.com',
    href: 'mailto:cecilianoda.psi@gmail.com',
  },
  {
    label: 'Instagram',
    value: '@cecilianodapsi',
    href: 'https://www.instagram.com/cecilianodapsi',
  },
  { label: 'WhatsApp', value: '+55 62 98145-8024', href: whatsappHref },
]
