import { createFileRoute } from '@tanstack/react-router'
import ListItemDocs from '../../../content/docs/components/list-item.mdx'

export const Route = createFileRoute('/docs/components/list-item')({
  component: ListItemComponentPage,
  context: () => ({ title: 'Components/List Item' }),
})

function ListItemComponentPage() {
  return <ListItemDocs />
}

