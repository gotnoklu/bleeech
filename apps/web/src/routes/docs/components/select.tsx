import { createFileRoute } from '@tanstack/react-router'
import SelectDocs from '../../../content/docs/components/select.mdx'

export const Route = createFileRoute('/docs/components/select')({
  component: SelectComponentPage,
  context: () => ({ title: 'Components/Select' }),
})

function SelectComponentPage() {
  return <SelectDocs />
}

