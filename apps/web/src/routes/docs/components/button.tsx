import { createFileRoute } from '@tanstack/react-router'
import ButtonDocs from '../../../content/docs/components/button.mdx'

export const Route = createFileRoute('/docs/components/button')({
  component: ButtonComponentPage,
})

function ButtonComponentPage() {
  return <ButtonDocs />
}
