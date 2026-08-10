import type { SiteContent } from '../../../core/types/content'

export const processContent: SiteContent['process'] = {
  eyebrow: 'O processo',
  title: 'Como funciona o atendimento?',
  steps: [
    {
      number: '1',
      title: 'Entre em Contato',
      description: 'Envie uma mensagem pelo WhatsApp. Responderei em breve para conversarmos.',
    },
    {
      number: '2',
      title: 'Alinhamento e dúvidas',
      description: 'Uma conversa online para entendermos seu momento.',
    },
    {
      number: '3',
      title: 'Primeira sessão',
      description:
        'Para nos conhecermos e alinharmos as expectativas e compromissos quanto ao processo terapêutico.',
    },
    {
      number: '4',
      title: 'Sessões Semanais',
      description:
        'Encontros online de 50 minutos, com horário fixo semanal para criar ritmo e segurança.',
    },
    {
      number: '5',
      title: 'Seu Processo',
      description: 'Cada jornada é única, por isso caminhamos no ritmo que faz sentido para você.',
    },
  ],
}
