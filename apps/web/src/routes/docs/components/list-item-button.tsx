import { createFileRoute } from '@tanstack/react-router'
import ListItemButtonDocs from '../../../content/docs/components/list-item-button.mdx'

export const Route = createFileRoute('/docs/components/list-item-button')({
  component: ListItemButtonComponentPage,
  context: () => ({ title: 'Components/List Item Button' }),
})

function ListItemButtonComponentPage() {
  return <ListItemButtonDocs />
}

