import { createFileRoute } from '@tanstack/react-router'
import SeparatorDocs from '../../../content/docs/components/separator.mdx'

export const Route = createFileRoute('/docs/components/separator')({
  component: SeparatorComponentPage,
  context: () => ({ title: 'Components/Separator' }),
})

function SeparatorComponentPage() {
  return <SeparatorDocs />
}

