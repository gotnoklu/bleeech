import { createFileRoute } from '@tanstack/react-router'
import ShowDocs from '../../../content/docs/components/show.mdx'

export const Route = createFileRoute('/docs/components/show')({
  component: ShowComponentPage,
  context: () => ({ title: 'Components/Show' }),
})

function ShowComponentPage() {
  return <ShowDocs />
}


export const Route = createFileRoute('/docs/components/show')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/docs/components/show"!</div>
}
