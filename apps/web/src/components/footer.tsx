import { Separator } from './ui/separator'

export function Footer() {
  return (
    <div className="h-20 px-16 flex flex-col items-center">
      <Separator />
      <div className="py-10 flex flex-col items-center gap-4">
        <p className="text-muted-foreground line-clamp-2 text-sm font-normal leading-snug">
          &copy; {new Date().getFullYear()} Bleeech. All Rights Reserved
        </p>
      </div>
    </div>
  )
}
