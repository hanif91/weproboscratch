'use client'
import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import menuData from "@/data/NavMenuData" 
import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion" 



function NavbarMenu() {
  return (
    <>   
      <NavigationMenu>
        <NavigationMenuList >
        {menuData.map( (menu) => (
    
        
          <NavigationMenuItem key={menu.id} className="gap-2 hover:bg-myprimary-100 hover:scale-110 duration-100 rounded-full">
            {!menu.path ? (
                // data ada submenu
                <>
                <NavigationMenuTrigger className="border-0 ">{menu.title}</NavigationMenuTrigger> 
                <NavigationMenuContent className="border-y-2 border-x-2  border-solid border-myprimary-200"> 
                  {menu.submenu?.map( smenu => (
                    <ul key={smenu.id} className="grid border-0 gap-0 p-0">
                      <motion.li whileHover={{ scale : 1.03}} className="row-span-3 gap-0 p-0 bg-teal-50 hover:bg-myprimary-100  ">
                        <Link  href={smenu.path || "/"} 
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {smenu.title}
                        </NavigationMenuLink>
                        </Link>  
                      </motion.li>
                    </ul>                 
                  ))}  
                </NavigationMenuContent> 
              </>
            ) : (
                // data tidak ada submenu
              <Link href={menu.path || "/"} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {menu.title}
              </NavigationMenuLink>
              </Link>
                
            )}
          </NavigationMenuItem>
   
        ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

export default NavbarMenu