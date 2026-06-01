import { createFileRoute } from '@tanstack/react-router'
import BadgeDocs from '../../../content/docs/components/badge.mdx'

export const Route = createFileRoute('/docs/components/badge')({
  component: BadgeComponentPage,
  context: () => ({ title: 'Components/Badge' }),
})

function BadgeComponentPage() {
  return <BadgeDocs />
}
