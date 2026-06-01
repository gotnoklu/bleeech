import { createFileRoute } from '@tanstack/react-router'
import DateTimePickerDocs from '../../../content/docs/components/date-time-picker.mdx'

export const Route = createFileRoute('/docs/components/date-time-picker')({
  component: DateTimePickerComponentPage,
  context: () => ({ title: 'Components/Date Time Picker' }),
})

function DateTimePickerComponentPage() {
  return <DateTimePickerDocs />
}
