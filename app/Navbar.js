import {
  Sheet,
  SheetContent,

  SheetHeader,

  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { cn } from "@/lib/utils"
import { MenuIcon } from "lucide-react"
import Link from "next/link"


const NavbarMb = ({ open, onOpenChange, items, pathname, }) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}  >
      <SheetTrigger >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className={'border-b'}>
          <div className="flex items-center gap-2">

            <SheetTitle >

              Menu</SheetTitle>
          </div>

        </SheetHeader>
        <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
          {
            items.map((item) => {
              return (
                <Link onClick={() => onOpenChange(false)} key={item.link} href={item.link} className={cn('w-full text-left p-4 hover:border  flex items-center text-base font-medium', pathname == item.link ? 'bg-black text-white' : "")} >
                  {item.name}
                </Link>
              )
            })
          }

        </ScrollArea>
      </SheetContent>
    </Sheet>

  )
}

export default NavbarMb