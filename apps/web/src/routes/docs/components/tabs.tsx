import { createFileRoute } from '@tanstack/react-router'
import TabsDocs from '../../../content/docs/components/tabs.mdx'

export const Route = createFileRoute('/docs/components/tabs')({
  component: TabsComponentPage,
  context: () => ({ title: 'Components/Tabs' }),
})

function TabsComponentPage() {
  return <TabsDocs />
}

