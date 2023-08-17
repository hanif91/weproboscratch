import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItemMobile";
import MainMenu from "./mainmenu";
import submainmenu from "./submainmenu";
import menuData from "@/data/NavMenuData" 
import  SubMainMenu  from "./submainmenu";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};



export default function Navigation ( { smenuOpenState , setchangeStateSmenu, getStatesub  } : any) {
  

  return (
  
  <motion.div variants={variants} 
    className="ul-mobile"
  >
    {menuData.map((menu) => (
      !menu.path ? (
        <SubMainMenu key={menu.id} data={menu}  smenuOpenState={smenuOpenState} setchangeStateSmenu={setchangeStateSmenu} getStatesub={getStatesub}/>
      ) : (
        <MainMenu key={menu.id} data={menu} />
      ) 
      
      // <MenuItem key={menu.id} />
    ))}
  </motion.div>
  )
}


