import { createFileRoute } from '@tanstack/react-router'
import CheckboxDocs from '../../../content/docs/components/checkbox.mdx'

export const Route = createFileRoute('/docs/components/checkbox')({
  component: CheckboxComponentPage,
  context: () => ({ title: 'Components/Checkbox' }),
})

function CheckboxComponentPage() {
  return <CheckboxDocs />
}
