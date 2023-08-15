'use client'
import Image from 'next/image'
import React from 'react'
import  { shapes,stars }   from "@/data/DataImages"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from 'next/link'

function Hero() {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='sectiontop' id='home'>
      <div className='flex flex-col md:flex-row justify-center items-center place-content-center '>
        <div className='grow flex-1 w-auto text-center'>
          <div className=''>
            <div className='animate-bounce text-xs pt-3 font-extrabold md:text-2xl  text-myprimary-500'>
   
              Perumda Air Minum Bayuangga
              
            </div>

            <div className=' text-3xl pt-3 md:text-5xl font-bold text-txtprimary'>
                Pelayanan Air Bersih Untuk Masyarakat <span className=''><br/></span> <span className='text-transparent bg-clip-text bg-gradient-to-l from-mysecondary-500 to-myprimary-500 bg-300% animate-gradient'> Kota Probolinggo </span>
            </div>

            
            <div className=' text-sm leading-5 pt-3 md:text-xl font-bold text-txtsecondary'>
              Air Kami di olah langsung dari Sumber Mata Air terbaik di Kota Probolinggo yaitu Sumber Mata Air  
              <span className='text-transparent bg-clip-text bg-gradient-to-l from-mysecondary-500 to-myprimary-500 bg-300% animate-gradient duration-1000'> Ronggojalu</span>
            </div>
          </div>
          

        </div>

        <div className='flex-none w-auto md:w-[450px] text-center place-content-center items-center'>
          <div className='pt-3 bg-water-image h-[400px] bg-center bg-contain bg-no-repeat relative'>          


            <div className="flex place-content-center  items-center h-full">
                <div className='w-[350px] h-full relative'>
                  <motion.img
                  className={`absolute  w-[${stars[2].width}px] h-[${stars[2].height}px] top-3 bottom-0 left-5 `}
                  src={stars[2].src}
                  alt='star3'
                  animate={{ 
                    scale : [0.8,1.3,0.8]
                  }}
                  initial = {{ scale : 0}}
                  transition = {{ repeat : Infinity, duration : 2}}
                  >

                  </motion.img>


                  <motion.img
                    className={`absolute  w-[${stars[1].width}px] h-[${stars[1].height}px] top-5 bottom-0 right-5  `}
                    src={stars[1].src}
                    alt='star2'
                    animate={{ 
                      scale : [0.5,1,0.5]
                    }}
                    initial = {{ scale : 0}}
                    transition = {{ repeat : Infinity, duration : 2}}
                  >

                  </motion.img>

                  <div
                    className={`absolute inset-x-0 bottom-0 h-16 text-base md:text-xl`}>

              
                    Cek Kualitas Air Kami

                    <Link
                      href="/tes"
                    > 
                      <motion.button
                        className=' bg-gradient-to-l from-myprimary-600 to-myprimary-400 rounded-full px-8 mx-2 py-1 text-txttexticon'
                        animate={{ 
                          scale : [1,0.8,1]
                        }}
                        initial = {{ scale : 0.8}}
                        transition = {{ repeat : Infinity, duration : 2}}
                      >  Disini
                      </motion.button>
              
                    </Link>


                  </div>
           
                </div>
            </div>
          </div>   

        </div>
      </div>
    </div>
  )
}

export default Hero