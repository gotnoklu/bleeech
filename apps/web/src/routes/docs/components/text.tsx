import { createFileRoute } from '@tanstack/react-router'
import TextDocs from '../../../content/docs/components/text.mdx'

export const Route = createFileRoute('/docs/components/text')({
  component: TextComponentPage,
  context: () => ({ title: 'Components/Text' }),
})

function TextComponentPage() {
  return <TextDocs />
}

