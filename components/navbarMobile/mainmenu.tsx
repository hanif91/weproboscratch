
import { motion } from "framer-motion";
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



function MainMenu({ data, smenuOpenState }: any) {
  return (
    <>

    <motion.div
      className="li-mobile"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className="icon-placeholder" > tes</div> */}

      <div className="text-placeholder pl-4 text-sm"  > 
        <div className="flex items-center justify-start h-full">{data.title}</div>
   
      
      </div>
    </motion.div>

    </>
  )
}

export default MainMenu