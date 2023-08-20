'use client';

import React, { useEffect, useState } from 'react';
import { logos } from '@/data/DataImages';
import Image from 'next/image';
import NavbarMenu from '@/components/NavbarMenu';
import Link from 'next/link';

import  useWindowDimensions  from '@/hooks/UseDimension';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import NavMobile from './navbarMobile/navmobile';


function Navbar() {


  const [toggle, setToggle] = useState(false)
  const [toggleSubmenu, setToggleSubmenu] = useState([])
  const { height } = useWindowDimensions();


 const handleToogle = () => {
   setToggle(!toggle)
 }


  return (
    <motion.div className="sticky w-full top-0 left-0 z-20 h-12 md:h-14 bg-slate-300">
      <motion.div 
        animate={ toggle ? { height: height } : { height: "48px" }  }

         initial= { { height: "48px"}}
         transition={{ duration : 0.5 }}
        
          className="flex md:container flex-col h-12 md:h-14 "
        >
        <div className="w-full px-4 py-1 min-h-[48px]  md:min-h-[56px]  flex justify-between md:px-8 myprimary-shadow">
          {/* div Sebelah Kiri */}
          <Link
            href={'/'}
            className="flex ml-2 md:ml-0 items-start justify-start my-auto gap-4 cursor-pointer"
          >
            <div className="flex items-start ">
              <Image
                src={logos[0].src}
                alt="logo"
                width={60}
                height={logos[0].height}
              />
              <div className="my-0 ml-1 p-0">
                <p className="text-xs tracking-wider uppercase text-teal-800 font-bold ">
                  Perumdam
                </p>
                <p className="text-xs tracking-wider uppercase text-teal-800 font-bold">
                  Bayuangga
                </p>
              </div>
            </div>
          </Link>


          {/* div Sebelah Kanan */}

          <div className="flex  justify-end gap-4 mr-2 md:mr-0 ">
            <div className="flex-none items-end hidden md:flex mx-auto my-auto">
              <NavbarMenu />

              <Link
                href={'/sign-in'}
                className="bg-myprimary-500 ml-5 py-2 px-4 mb-[2px] rounded-full text-myprimary-50 text-sm hover:bg-myprimary-600 active:bg-myprimary-700 "
              >
                Masuk
              </Link>
            </div>
            <div className="flex flex-none md:hidden mx-auto my-auto">
            <Button variant="ghost" size="icon" onClick={() => setToggle(!toggle)}>
              <Menu  className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  ${toggle ? "hidden" : ""} `}/>
              <X className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${toggle ? "rotate-0 scale-100" : ""}`} />
            </Button>

            </div>

          </div>
        </div>

        <div className="flex flex-col bg-slate-300 h-full  text-sm/8 gap-1 overflow-hidden">
          <NavMobile 
            handletoogle= {handleToogle} 
          />
       
        </div>
      </motion.div>

    </motion.div>
  );
}

export default Navbar;
