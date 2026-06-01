import { createFileRoute } from '@tanstack/react-router'
import ProgressDocs from '../../../content/docs/components/progress.mdx'

export const Route = createFileRoute('/docs/components/progress')({
  component: ProgressComponentPage,
  context: () => ({ title: 'Components/Progress' }),
})

function ProgressComponentPage() {
  return <ProgressDocs />
}

