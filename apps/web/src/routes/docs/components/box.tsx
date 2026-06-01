import { createFileRoute } from '@tanstack/react-router'
import BoxDocs from '../../../content/docs/components/box.mdx'

export const Route = createFileRoute('/docs/components/box')({
  component: BoxComponentPage,
  context: () => ({ title: 'Components/Box' }),
})

function BoxComponentPage() {
  return <BoxDocs />
}


export const Route = createFileRoute('/docs/components/box')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/docs/components/box"!</div>
}
