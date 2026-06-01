import { createFileRoute } from '@tanstack/react-router'
import SliderDocs from '../../../content/docs/components/slider.mdx'

export const Route = createFileRoute('/docs/components/slider')({
  component: SliderComponentPage,
  context: () => ({ title: 'Components/Slider' }),
})

function SliderComponentPage() {
  return <SliderDocs />
}
