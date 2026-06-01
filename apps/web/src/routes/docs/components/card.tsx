import { createFileRoute } from '@tanstack/react-router'
import CardDocs from '../../../content/docs/components/card.mdx'

export const Route = createFileRoute('/docs/components/card')({
  component: CardComponentPage,
  context: () => ({ title: 'Components/Card' }),
})

function CardComponentPage() {
  return <CardDocs />
}

