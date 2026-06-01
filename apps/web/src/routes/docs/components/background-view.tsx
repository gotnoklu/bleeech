import { createFileRoute } from '@tanstack/react-router'
import BackgroundViewDocs from '../../../content/docs/components/background-view.mdx'

export const Route = createFileRoute('/docs/components/background-view')({
  component: BackgroundViewComponentPage,
  context: () => ({ title: 'Components/Background View' }),
})

function BackgroundViewComponentPage() {
  return <BackgroundViewDocs />
}
