import React from 'react'
import  menuData  from "@/data/NavMenuData"
import  { logos }   from "@/data/DataImages"
import { HiMenu, HiX} from "react-icons/hi"
import Image from 'next/image'
import NavbarMenu from '@/components/NavbarMenu'

function Navbar() {
  console.log(logos[0].src)
  return (
    <div className='fixed w-full top-0 left-0 z-20 bg-slate-300'>
 
      <div  className='container py-3 mx-auto flex items-center justify-between px-2'>
          {/* div Sebelah Kiri */}
        <div className='flex items-center gap-4'>
          <div className='flex items-start'>
            <Image 
              src = {logos[0].src}
              alt ="logo"
              width={60}
              height={logos[0].height}
            />
            <div className='my-0 ml-1 p-0'>
              <p className='text-xs tracking-wider uppercase text-teal-800 font-bold'>Perumdam</p>
              <p className='text-xs tracking-wider uppercase text-teal-800 font-bold'>Bayuangga</p>
            </div>
          </div>
   
          {/* menubar */}

          <div>
          {/* <ul className='flex items-start'>
            <li className='list-none cursor-pointer mr-5'>
              tes1
            </li>

            <li className='list-none cursor-pointer'>
              tes2
            </li>
          </ul> */}
            <NavbarMenu/>
          </div>
    
        </div>

             {/* div Sebelah Kanan */}  
        <div>
          <HiMenu className="text-3xl sm:hidden"/>
        </div>

      </div>
    </div>

  )
}

export default Navbar