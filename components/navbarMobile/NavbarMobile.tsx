'use client'

import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { useEffect, useRef,useState } from 'react';
import { motion, sync, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimentions';
import  Navigation  from "./Navigation";
import { MenuToggle } from "./toogleMenu";
import  { logos }   from "@/data/DataImages"
import Image from "next/image";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 205px 28px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    
    clipPath: 'circle(22px  at 205px 28px)',
  
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function NavbarMobile() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [smenuOpenState, setSmenuOpenState] = useState(false)

  function changeStateSmenu() {
    setSmenuOpenState(!smenuOpenState)
  }

  useEffect(() => {
    console.log("nav menu rendered")
  
 
  }, [])
  

  function handleOnHoverEnd() {
    isOpen ? toggleOpen() : false
    // setSmenuOpenState(!smenuOpenState)
  }

  const getStateUpdate = (data : boolean) => {
    console.log('tiscoming from parent')
  }

  return (
    <motion.div 
    className="md:hidden absolute top-0 right-0 bottom-0 w-[250px] z-30 "
    initial={false}
    animate={isOpen ? "open" : "closed"}
    // onHoverEnd={() => console.log("Hover ends")}
    custom={height}
    ref={containerRef}
  >
    <motion.div className="backgr" variants={sidebar} />
    {/* <Image 
         src = {logos[0].src}
         alt ="logo"
         width={60}
         height={logos[0].height}
         className="absolute"
       /> */}
      <Navigation smenuOpenState={smenuOpenState} setchangeStateSmenu={changeStateSmenu} getStatesub={getStateUpdate}/>
    <MenuToggle toggle={() => toggleOpen()} />

  </motion.div>

  
  )
}
