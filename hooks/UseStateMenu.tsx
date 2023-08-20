import menuData from '@/data/NavMenuData'
import { Console } from 'console'
import  { useEffect, useState } from 'react'

export default function UseStateMenu() {
  const [mounted, setMounted] = useState(false)

  let arr : Boolean[] = []
  useEffect(() => {
    menuData.map((menu,index) => {
      arr.push(false);
    })

    setMounted(true)
  }, [])

  if (!mounted) {
    return arr
  } 

  
  return arr;

}
