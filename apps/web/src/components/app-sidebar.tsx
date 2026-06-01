import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { IconChevronRight } from '@tabler/icons-react'
import { GalleryVerticalEnd } from 'lucide-react'
import type * as React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Installation',
          url: '/docs/getting-started/installation',
        },
      ],
    },
    {
      title: 'Building Your App',
      items: [
        {
          title: 'Theming',
          url: '/docs/building-your-app/theming',
        },
        {
          title: 'Styling',
          url: '/docs/building-your-app/styling',
          isActive: true,
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Avatar',
          url: '/docs/components/avatar',
        },
        {
          title: 'Background View',
          url: '/docs/components/background-view',
        },
        {
          title: 'Badge',
          url: '/docs/components/badge',
        },
        {
          title: 'Box',
          url: '/docs/components/box',
        },
        {
          title: 'Button',
          url: '/docs/components/button',
        },
        {
          title: 'Card',
          url: '/docs/components/card',
        },
        {
          title: 'Checkbox',
          url: '/docs/components/checkbox',
        },
        {
          title: 'Chip',
          url: '/docs/components/chip',
        },
        {
          title: 'Date/Time Picker',
          url: '/docs/components/date-time-picker',
        },
        {
          title: 'Select',
          url: '/docs/components/select',
        },
        {
          title: 'Icons',
          url: '/docs/components/icons',
        },
        {
          title: 'Input',
          url: '/docs/components/input',
        },
        {
          title: 'List Item',
          url: '/docs/components/list-item',
        },
        {
          title: 'List Item Button',
          url: '/docs/components/list-item-button',
        },
        {
          title: 'Popup',
          url: '/docs/components/popup',
        },
        {
          title: 'Progress',
          url: '/docs/components/progress',
        },
        {
          title: 'Separator',
          url: '/docs/components/separator',
        },
        {
          title: 'Show',
          url: '/docs/components/show',
        },
        {
          title: 'Slider',
          url: '/docs/components/slider',
        },
        {
          title: 'Switch',
          url: '/docs/components/switch',
        },
        {
          title: 'Tabs',
          url: '/docs/components/tabs',
        },
        {
          title: 'Text',
          url: '/docs/components/text',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/docs/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Bleeech Docs</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/">
                  <p className="font-medium">Home</p>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {data.navMain.map((item) => (
              <Collapsible key={item.title} asChild className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <p className="font-medium">{item.title}</p>
                      <IconChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {item.items?.length ? (
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild isActive={item.isActive}>
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    ) : null}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
