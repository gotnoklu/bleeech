import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  IconBrandTypescript,
  IconPackage,
  IconCode,
  IconPalette,
  IconRocket,
  IconCheck,
  IconArrowRight,
  IconBook,
} from '@tabler/icons-react'
import { CodeExample } from '../components/code-example'
import { Footer } from '../components/footer'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2">
              <Badge className="mb-6 bg-secondary/40 text-secondary-foreground"># React Native</Badge>
              <Badge className="mb-6 bg-secondary/40 text-secondary-foreground"># UI</Badge>
            </div>
            <h1 className="mb-10 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              The stylish UI library
              <br />
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                you've been looking for
              </span>
            </h1>
            <p className="mb-10 text-xl text-muted-foreground md:text-md">
              Bleeech is the React Native UI library built for beautiful design.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Get Started
                <IconArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                <IconBook className="mr-2 size-4" />
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Why Bleeech?</h2>
            <p className="text-lg text-muted-foreground">
              Built with modern best practices and developer experience in mind
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <IconPackage className="size-6 text-primary" />
                </div>
                <CardTitle>Strictly Modular</CardTitle>
                <CardDescription>
                  Import only the specific components you use via direct sub-paths. No bloat, just what you need.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <IconRocket className="size-6 text-primary" />
                </div>
                <CardTitle>Tree-Shaking Optimized</CardTitle>
                <CardDescription>
                  Designed to ensure zero dead code in your production bundle. Keep your app fast and lightweight.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <IconBrandTypescript className="size-6 text-primary" />
                </div>
                <CardTitle>TypeScript First</CardTitle>
                <CardDescription>
                  Comprehensive type definitions for a superior developer experience. Catch errors before they happen.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <IconPalette className="size-6 text-primary" />
                </div>
                <CardTitle>Beautiful by Default</CardTitle>
                <CardDescription>
                  Aesthetically pleasing components out of the box. Customize with theming support for light and dark
                  modes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="border-y bg-muted/30 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight">Get Started in Seconds</h2>
              <p className="text-lg text-muted-foreground">Install and start building beautiful React Native apps</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 w-full">
              <div className="inline-flex flex-col gap-10 w-full">
                <div className="inline-flex flex-col gap-5">
                  <header>
                    <div className="mb-4 flex items-center gap-2">
                      <IconCode className="size-5 text-primary" />
                      <CardTitle>Installation</CardTitle>
                    </div>
                    <CardDescription>Add Bleeech to your project</CardDescription>
                  </header>
                  <div>
                    <CodeExample
                      codes={[
                        {
                          id: 'npm',
                          label: 'npm',
                          language: 'bash',
                          filename: 'script.sh',
                          code: 'npm install @bleeech/ui',
                        },
                        {
                          id: 'yarn',
                          label: 'yarn',
                          language: 'bash',
                          filename: 'script.sh',
                          code: 'yarn add @bleeech/ui',
                        },
                        {
                          id: 'pnpm',
                          label: 'pnpm',
                          language: 'bash',
                          filename: 'script.sh',
                          code: 'pnpm add @bleeech/ui',
                        },
                        {
                          id: 'bun',
                          label: 'bun',
                          language: 'bash',
                          filename: 'script.sh',
                          code: 'bun add @bleeech/ui',
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col gap-5">
                  <header>
                    <div className="mb-4 flex items-center gap-2">
                      <IconCode className="size-5 text-primary" />
                      <CardTitle>Quick Example</CardTitle>
                    </div>
                    <CardDescription>Start using components right away</CardDescription>
                  </header>
                  <div>
                    <CodeExample
                      selector="dropdown"
                      codes={[
                        {
                          id: 'tsx',
                          label: 'TSX',
                          language: 'tsx',
                          filename: 'app.tsx',
                          code: `import { Button } from '@bleeech/ui/components/button'
import { Text } from '@bleeech/ui/components/text'

export const App = () => (
  <>
    <Text variant="lg">
      Hello, Bleeech!
    </Text>
    <Button 
      variant="outlined"
    >
      Get Started
    </Button>
  </>
)`,
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-fit">
                Style Your First App
                <IconArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features List */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">Everything You Need</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                'Modular architecture',
                'Tree-shaking optimized',
                'TypeScript support',
                'Light & dark themes',
                'Named exports',
                'Small bundle size',
                'Comprehensive components',
                'Developer-friendly API',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-primary/10">
                    <IconCheck className="size-4 text-primary" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-linear-to-br from-primary/5 via-transparent to-primary/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight">Ready to build something amazing?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Start building beautiful React Native apps with Bleeech today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Get Started
                <IconArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                <IconBook className="mr-2 size-4" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
