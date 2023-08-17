
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from 'lucide-react';


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export default function SubMainMenu({ data ,getStatesub,smenuOpenState}: any) {
  const [sopen, setSopen] = useState(false)

  const handleGetStateSmenu = (e : any) => {
    e.preventDefault();
    setSopen(!sopen)
    getStatesub(sopen)
  }

  useEffect(() => {
    console.log("sub menu rendered")
  
 
  }, [])
  
  
  return (
    <>
      <>
        <motion.div
          className="li-mobile-sub"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* <div className="icon-placeholder" > tes</div> */}
          <div className="text-placeholder pl-4 text-sm lu"  > 
            <div className="flex items-center justify-between h-full">
              <div onClick={handleGetStateSmenu} >
                {data.title}
              </div>
      
              <ArrowDown className='pr-1 mr-2 w-6'/>

           
            </div>

                 
          </div>
          <motion.div 
            animate={ sopen ? {height : "fit-content"} : {height : 0}}
            className='overflow-hidden h-0'>
              {
                data.submenu.map( (smenu : any) => (
                  <div key={smenu.id} >
                    {smenu.title}
                  </div>
                ) )
              }
            </motion.div>    

  
        </motion.div>
      </>


    </>
  );
}
