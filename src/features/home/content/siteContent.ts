import type { SiteContent } from '../../../core/types/content'

const whatsappMessage =
  'Oi, Cecília! :) Gostaria de saber mais sobre como funciona a terapia com você.'

export const whatsappHref = `https://api.whatsapp.com/send?phone=5562981458024&text=${encodeURIComponent(whatsappMessage)}`

export const siteContent: SiteContent = {
  navigation: [
    { label: 'Sobre mim', href: '#sobre' },
    { label: 'Psicanálise', href: '#psicanalise' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Dúvidas', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Psicóloga clínica · CRP 09/22516',
    title: 'Um espaço para compreender quem você é e construir novos sentidos.',
    titleLines: ['Um espaço para', 'compreender', 'quem você é e', 'construir novos', 'sentidos.'],
    support:
      'Atendimento psicológico online para adolescentes, jovens adultos e adultos, com a escuta acolhedora de quem acredita no seu processo.',
  },
  about: {
    eyebrow: 'Sobre mim',
    title: 'Olá, sou a Cecília Noda.',
    introduction:
      'Sou psicóloga clínica (CRP: 09/22516), formada pela Universidade Federal de Jataí, e sou fascinada pelos nossos diversos jeitos de existir no mundo. A partir dessa ideia, acredito que o processo terapêutico possibilita compreender nossa própria história, reconhecer nosso Eu e construir novas formas de se relacionar consigo e com o mundo.',
    details: [
      'Minha prática é orientada pela Psicanálise, respeitando a singularidade de cada pessoa e o tempo necessário para que aquilo que causa sofrimento possa encontrar sentido. Não acredito em respostas prontas ou fórmulas universais: cada percurso é único, e é justamente nessa singularidade que nosso trabalho acontece.',
      'Atendo adolescentes, jovens adultos e adultos na modalidade online, oferecendo um ambiente ético, acolhedor e seguro para que você possa falar livremente sobre suas experiências, dúvidas, angústias e desejos, e possamos crescer juntos.',
    ],
    facts: ['Neuropsicologia', 'Psicanálise', 'Adolescentes e adultos', 'Atendimento online'],
  },
  approach: {
    eyebrow: 'Abordagem terapêutica',
    title: 'Por que a Psicanálise?',
    introduction:
      'Em um mundo de pressa, estresse e pressão, a Psicanálise convida você a desacelerar e compreender a origem do seu sofrimento, reconhecendo a singularidade da sua história e abrindo espaço para transformações duradouras.',
    foundations: [
      {
        number: '01',
        title: 'Escuta da Singularidade',
        description:
          'Cada pessoa possui uma trajetória única na vida. A terapia respeita seu tempo, sua forma de sentir e os significados que você atribui às próprias experiências, sem julgamentos ou soluções padronizadas.',
      },
      {
        number: '02',
        title: 'Compreender além dos sintomas',
        description:
          'Ansiedade, insegurança, conflitos nos relacionamentos ou sentimentos difíceis costumam ter um passado. A modernidade nos exige uma cura instantânea para que possamos continuar produtivos, mas o trabalho terapêutico busca compreender o que está por trás desses sintomas, permitindo um contato mais profundo consigo mesmo.',
      },
      {
        number: '03',
        title: 'Um espaço para falar e se descobrir',
        description:
          'A psicoterapia oferece um ambiente ético, seguro e acolhedor, onde você pode falar livremente sobre suas experiências, onde o encontro paciente-terapeuta é tão único quanto sua história. A partir desse encontro, torna-se possível construir novos sentidos, ampliar o autoconhecimento e encontrar formas mais autênticas de viver.',
      },
    ],
  },
  process: {
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
        description:
          'Cada jornada é única, por isso caminhamos no ritmo que faz sentido para você.',
      },
    ],
  },
  faq: {
    eyebrow: 'Dúvidas frequentes',
    title: 'Perguntas que todo mundo faz',
    items: [
      {
        question: 'Nunca fiz terapia. Como funciona a primeira sessão?',
        answer:
          'A primeira sessão é um momento para nos conhecermos. Você pode falar sobre o que o trouxe até a terapia, suas dúvidas, expectativas ou simplesmente contar um pouco da sua história. Não há necessidade de chegar sabendo exatamente o que dizer. A conversa acontece no seu tempo.',
      },
      {
        question: 'Preciso estar vivendo uma crise para fazer terapia?',
        answer:
          'Não precisa. Muitas pessoas procuram a psicoterapia durante um período de sofrimento intenso, mas ela também pode ser um espaço de autoconhecimento, desenvolvimento emocional e reflexão sobre escolhas, relacionamentos e projetos de vida.',
      },
      {
        question: 'O que posso levar para a terapia?',
        answer:
          'Tudo o que for importante para você. Ansiedade, conflitos familiares, dificuldades nos relacionamentos, luto, insegurança, autoestima, decisões difíceis, sentimentos que parecem sem explicação ou qualquer outro tema que faça parte da sua experiência, bem como detalhes leves e histórias engraçadas… o processo terapêutico não precisa ser sempre doloroso.',
      },
      {
        question: 'Como acontecem os atendimentos?',
        answer:
          'As sessões são realizadas de forma online, por videochamada via Google Meet ou Whatsapp: plataformas gratuitas que funcionam em qualquer celular, tablet ou computador com câmera e microfone. Você receberá o link com antecedência e só precisa estar em um ambiente reservado, seguro e sigiloso, onde você se sinta confortável para conversar.',
      },
      {
        question: 'Quanto tempo dura cada sessão?',
        answer:
          'Cada sessão tem duração aproximada de 50 minutos. A frequência mais comum é semanal, mas isso pode ser conversado de acordo com suas necessidades.',
      },
      {
        question: 'A terapia tem um tempo determinado para acabar?',
        answer:
          'Não existe um prazo igual para todas as pessoas. Cada processo possui seu próprio ritmo, dependendo da história, dos objetivos e das questões trabalhadas ao longo da terapia.',
      },
      {
        question: 'Tudo o que eu disser ficará em sigilo?',
        answer:
          'Sim. O sigilo profissional é um dos princípios fundamentais da prática psicológica e garante que tudo o que é compartilhado durante o processo terapêutico seja tratado com ética, respeito e confidencialidade, conforme previsto pelo Código de Ética do Psicólogo. As exceções previstas em lei são discutidas com transparência e de antemão.',
      },
      {
        question: 'E se eu não souber por onde começar?',
        answer:
          'Você não precisa preparar um discurso antes da sessão. Muitas vezes, o ponto de partida não é aquela questão central super difícil de colocar em palavras, mas aquelas experiências pequenas que nos levam a experiências muito significativas para nós. A terapia é um espaço construído para que essas questões possam ser elaboradas aos poucos, sem pressa.',
      },
      {
        question: 'E se eu chorar ou ficar em silêncio durante a sessão?',
        answer:
          'Isso faz parte do processo terapêutico. Nem sempre é fácil colocar em palavras aquilo que sentimos, e não existe uma forma "certa" de estar na terapia. O silêncio, o choro, a dúvida, a raiva e a dificuldade para começar a falar também contam histórias, então são acolhidos da mesma forma.',
      },
      {
        question: 'Como agendar uma sessão?',
        answer:
          'Você pode entrar em contato pelo WhatsApp para tirar dúvidas, conhecer o funcionamento dos atendimentos e agendar sua primeira sessão. Será um prazer acolher você nesse primeiro passo.',
      },
    ],
  },
  finalCta: {
    title: 'Vamos marcar uma conversa?',
    subtitle: 'Dê o primeiro passo em direção a si mesmo.',
    body: 'Iniciar a psicoterapia pode despertar dúvidas, receios e expectativas. Se você sente que é o momento de olhar com mais atenção para sua história, seus conflitos e seus sentimentos, será um prazer acolher você.',
  },
  contacts: [
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
  ],
}
