import { createFileRoute } from '@tanstack/react-router'
import PopupDocs from '../../../content/docs/components/popup.mdx'

export const Route = createFileRoute('/docs/components/popup')({
  component: PopupComponentPage,
  context: () => ({ title: 'Components/Popup' }),
})

function PopupComponentPage() {
  return <PopupDocs />
}
