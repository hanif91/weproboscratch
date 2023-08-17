import React from 'react'
import  menuData  from "@/data/NavMenuData"
import  { logos }   from "@/data/DataImages"
import { HiMenu, HiX} from "react-icons/hi"
import Image from 'next/image'
import NavbarMenu from '@/components/NavbarMenu'
import Link from 'next/link'
// import NavbarMobile from './NavbarMobile'
import NavbarMobile from '@/components/navbarMobile/NavbarMobile'
import { PageWrapper } from './page-wrapper'


function Navbar() {
  console.log(logos[0].src)
  return (
<div className='fixed w-full top-0 left-0 z-20 bg-slate-300'>
 
 <div  className='container py-3 mx-auto flex items-center justify-between px-2'>
     {/* div Sebelah Kiri */}
   <Link
     href={"/"}
     className='flex items-center justify-start ml-6 gap-4 cursor-pointer'
   >
      <div className='flex items-start'>
       <Image 
         src = {logos[0].src}
         alt ="logo"
         width={60}
         height={logos[0].height}
       />
       <div className='my-0 ml-1 p-0'>
         <p className='text-xs tracking-wider uppercase text-teal-800 font-bold '>Perumdam</p>
         <p className='text-xs tracking-wider uppercase text-teal-800 font-bold'>Bayuangga</p>
       </div>
     </div>       
   </Link>
   {/* <div className='flex items-center justify-start ml-6 gap-4 cursor-pointer'>


     
   </div> */}

        {/* div Sebelah Kanan */}  

   <div className="flex  items-center justify-end gap-4 mr-3 md:mr-6 ">
     <div className='flex-none items-end hidden md:flex'>
       <NavbarMenu/>

       <Link
         href={"/sign-in"}
         className='bg-myprimary-500 ml-5 py-2 px-4 bg rounded-full text-myprimary-50 text-sm hover:bg-myprimary-600 active:bg-myprimary-700 '
       >
         Masuk
       </Link>

     </div>
     <div className='flex flex-none md:hidden '>

     </div>
     

   </div>


 </div>


</div>





  )
}

export default Navbar