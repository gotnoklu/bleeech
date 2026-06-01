import { createFileRoute } from '@tanstack/react-router'
import InputDocs from '../../../content/docs/components/input.mdx'

export const Route = createFileRoute('/docs/components/input')({
  component: InputComponentPage,
  context: () => ({ title: 'Components/Input' }),
})

function InputComponentPage() {
  return <InputDocs />
}

