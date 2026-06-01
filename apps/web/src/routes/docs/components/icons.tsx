import { createFileRoute } from '@tanstack/react-router'
import IconsDocs from '../../../content/docs/components/icons.mdx'

export const Route = createFileRoute('/docs/components/icons')({
  component: IconsComponentPage,
  context: () => ({ title: 'Components/Icons' }),
})

function IconsComponentPage() {
  return <IconsDocs />
}

