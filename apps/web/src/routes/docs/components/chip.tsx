import { createFileRoute } from '@tanstack/react-router'
import ChipDocs from '../../../content/docs/components/chip.mdx'

export const Route = createFileRoute('/docs/components/chip')({
  component: ChipComponentPage,
  context: () => ({ title: 'Components/Chip' }),
})

function ChipComponentPage() {
  return <ChipDocs />
}

