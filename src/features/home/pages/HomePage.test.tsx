import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { siteContent, whatsappHref } from '../content/siteContent'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('renders the required sections in order and professional information', () => {
    render(<HomePage />)
    expect(screen.getAllByText('Cecília Noda').length).toBeGreaterThan(0)
    expect(screen.getAllByText(/CRP[: ]+09\/22516/).length).toBeGreaterThan(0)

    const main = screen.getByRole('main')
    const sectionIds = Array.from(main.querySelectorAll('section[id]')).map((section) => section.id)
    expect(sectionIds).toEqual(['inicio', 'sobre', 'psicanalise', 'atendimento', 'faq'])
    expect(screen.queryByRole('heading', { name: /artigos/i })).not.toBeInTheDocument()
  })

  it('provides anchor navigation and real CTA destinations', async () => {
    const user = userEvent.setup()
    render(<HomePage />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    const navigation = screen.getByRole('navigation', { name: 'Navegação principal' })
    for (const item of siteContent.navigation) {
      expect(within(navigation).getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        item.href,
      )
    }
    const ctas = screen.getAllByRole('link', {
      name: /agendar uma conversa|agendar conversa|conversar pelo whatsapp/i,
    })
    expect(ctas.length).toBeGreaterThanOrEqual(3)
    ctas.forEach((cta) => expect(cta).toHaveAttribute('href', whatsappHref))
  })

  it('opens and closes the mobile navigation, including after anchor navigation', async () => {
    const user = userEvent.setup()
    render(<HomePage />)
    const button = screen.getByRole('button', { name: /menu/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('button', { name: 'Fechar menu e retornar ao conteúdo' }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    await user.click(screen.getByRole('link', { name: 'Sobre mim' }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    await user.keyboard('{Escape}')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('uses clean section paths and scrolls to the requested section', async () => {
    const user = userEvent.setup()
    const scrollIntoView = vi.fn()
    window.history.replaceState(null, '', '/')
    Element.prototype.scrollIntoView = scrollIntoView
    render(<HomePage />)

    await user.click(screen.getByRole('link', { name: 'Conheça meu trabalho' }))

    expect(window.location.pathname).toBe('/sobre')
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
  })

  it('renders FAQ from local data and controls accessible panels', async () => {
    const user = userEvent.setup()
    render(<HomePage />)
    siteContent.faq.items.forEach((item) => {
      expect(screen.getByRole('button', { name: item.question })).toBeInTheDocument()
    })
    const second = screen.getByRole('button', { name: siteContent.faq.items[1].question })
    expect(second).toHaveAttribute('aria-expanded', 'false')
    second.focus()
    await user.keyboard('{Enter}')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(siteContent.faq.items[1].answer)).toBeVisible()
    await user.keyboard(' ')
    expect(second).toHaveAttribute('aria-expanded', 'false')
  })
})
