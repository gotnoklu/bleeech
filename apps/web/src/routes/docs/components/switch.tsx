import { createFileRoute } from '@tanstack/react-router'
import SwitchDocs from '../../../content/docs/components/switch.mdx'

export const Route = createFileRoute('/docs/components/switch')({
  component: SwitchComponentPage,
  context: () => ({ title: 'Components/Switch' }),
})

function SwitchComponentPage() {
  return <SwitchDocs />
}
