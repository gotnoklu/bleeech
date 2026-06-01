'use client'

import { type ReactNode, useMemo, useState } from 'react'
import type { BundledLanguage } from '@/components/kibo-ui/code-block'
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from '@/components/kibo-ui/code-block'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Show } from './ui/show'

export interface CodeExampleProps {
  selector?: 'tabs' | 'dropdown'
  codes: Array<{
    language: BundledLanguage
    filename: string
    code: string
    label: string
    id: string
    icon?: ReactNode
  }>
  className?: string
}

const CodeExample = ({ selector = 'dropdown', codes, className }: CodeExampleProps) => {
  const [selectedCode, setSelectedCode] = useState<{
    tab: string
    language: BundledLanguage
  }>({
    tab: codes[0].id,
    language: codes[0].language,
  })

  const codesIndex = useMemo(
    () =>
      codes.reduce(
        (result, code, index) => {
          result[code.id] = index
          return result
        },
        {} as { [key: string]: number }
      ),
    [codes]
  )

  return (
    <section className={className}>
      <div className="flex w-full flex-col gap-1 overflow-hidden">
        <Show when={selector === 'tabs'}>
          <Tabs
            className="overflow-x-auto"
            value={selectedCode.tab}
            onValueChange={(tab) =>
              setSelectedCode((prev) => ({
                ...prev,
                tab,
                language: codes[codesIndex[tab]].language,
              }))
            }
          >
            <TabsList className="h-10">
              {codes.map((code) => (
                <TabsTrigger key={code.id} value={code.id} className="px-8">
                  {code.icon}
                  {code.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </Show>
        <CodeBlock data={codes} value={selectedCode.language} className="w-full">
          <CodeBlockHeader className="overflow-x-auto">
            <CodeBlockFiles>
              {(item) => (
                <Show key={item.id} when={item.id === selectedCode.tab}>
                  <CodeBlockFilename key={item.id} value={item.language}>
                    {item.filename}
                  </CodeBlockFilename>
                </Show>
              )}
            </CodeBlockFiles>
            <Show when={selector === 'dropdown'}>
              <CodeBlockSelect
                value={selectedCode.tab}
                onValueChange={(selected) =>
                  setSelectedCode((prev) => ({
                    ...prev,
                    tab: selected,
                    language: codes[codesIndex[selected]].language,
                  }))
                }
              >
                <CodeBlockSelectTrigger className="max-w-[150px] md:max-w-fit [&>[data-slot='select-value']]:block [&>[data-slot='select-value']]:md:flex *:data-[slot='select-value']:text-ellipsis md:[text-overflow:initial]">
                  <CodeBlockSelectValue />
                </CodeBlockSelectTrigger>
                <CodeBlockSelectContent>
                  {(item) => (
                    <CodeBlockSelectItem key={item.id} value={item.id}>
                      {item.label}
                    </CodeBlockSelectItem>
                  )}
                </CodeBlockSelectContent>
              </CodeBlockSelect>
            </Show>
            <CodeBlockCopyButton />
          </CodeBlockHeader>
          <ScrollArea className="w-full">
            <CodeBlockBody>
              {(item) => (
                <Show key={item.id} when={item.id === selectedCode.tab}>
                  <CodeBlockItem value={item.language} className="max-h-96 w-full">
                    <CodeBlockContent language={item.language as BundledLanguage}>{item.code}</CodeBlockContent>
                  </CodeBlockItem>
                </Show>
              )}
            </CodeBlockBody>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CodeBlock>
      </div>
    </section>
  )
}

export { CodeExample }
