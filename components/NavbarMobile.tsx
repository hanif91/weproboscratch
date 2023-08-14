'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { useState } from "react"

import menuData from "@/data/NavMenuData" 

import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NavbarMobile() {
  const [toggle, setToggle] = useState(false)

  const HandleClick = (open : boolean) =>{
    

    setToggle(!toggle)
  }

  return (
    <>
        <DropdownMenu key={"drmobilemenu"} onOpenChange={ (open) => {HandleClick(open)} }>
        <DropdownMenuTrigger asChild key={"mbtriggerdown"}>
          <Button variant="ghost" size="icon" key={"btnmobilebtun"}>
            <Menu  className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  ${toggle ? "hidden" : ""} `}/>
            <X className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${toggle ? "rotate-0 scale-100" : ""}`} />
            {/* <span className="sr-only">Toggle Menu</span> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent  align="end" className="border-myprimary-500  bg-slate-300 gap-0 p-0" key={"mobilemenu"}>
    
        
            <div className='flex items-center pt-3 pb-2 px-1.5 bg-slate-300'>
              <Link
                href={"/sign-in"}
                className='bg-myprimary-500 text-center grow mx-auto my-auto py-2 px-4 bg rounded-full text-myprimary-50 text-sm hover:bg-myprimary-600 active:bg-myprimary-700 '
              >
                Masuk
              </Link>
            </div>
            <DropdownMenuSeparator className="bg-myprimary-500" />
          {menuData.map((mnu) => (
            <div className="bg-slate-300 hover:bg-myprimary-50 hover:rounded-full" key={`mobilemenulist ${mnu.id}`}>
       
                    {!mnu.path ?
                      (
           
                        <DropdownMenuSub key={`suba ${mnu.id}`}>
                        <DropdownMenuSubTrigger  key={`trigger ${mnu.id}`}>
                          <span>{mnu.title}</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal key={`protal${mnu.id}`}>
                          <DropdownMenuSubContent className="border-2 gap-0 p-0 border-myprimary-500 " key={`sub${mnu.id}`}>
                            {mnu.submenu?.map( smenu => (
                             
                                <DropdownMenuItem className=" border-0  bg-teal-50 hover:bg-secondary" key={`s ${smenu.id}`}>{smenu.title}</DropdownMenuItem>
                             
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ) 
                    : 
                    (
                      <>
                        <DropdownMenuItem className="bg-slate-300" key={`${mnu.id}`}>{mnu.title}</DropdownMenuItem>
                      </>
                    )
                    }

            </div>
          ))}

  
        </DropdownMenuContent>
      </DropdownMenu>
    </>

  
  )
}
