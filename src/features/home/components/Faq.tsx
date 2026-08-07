import { useId, useState } from 'react'
import type { FaqItem } from '../../../core/types/content'
import { Answer, AnswerInner, FaqItemRoot, FaqList, Symbol } from './Faq.styles'

interface FaqProps {
  items: FaqItem[]
}

export function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <FaqList>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-question-${index}`
        const panelId = `${baseId}-answer-${index}`
        return (
          <FaqItemRoot key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <Symbol $isOpen={isOpen} aria-hidden="true" />
              </button>
            </h3>
            <Answer
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              $isOpen={isOpen}
            >
              <AnswerInner>
                <p>{item.answer}</p>
              </AnswerInner>
            </Answer>
          </FaqItemRoot>
        )
      })}
    </FaqList>
  )
}
