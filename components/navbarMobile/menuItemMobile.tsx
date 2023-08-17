
import { motion } from "framer-motion";
import menuData from "@/data/NavMenuData" 

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

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = () => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
      
    <motion.div
      className="li-mobile"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className="icon-placeholder" > tes</div> */}

      <div className="text-placeholder pl-4"  > tes1 </div>
    </motion.div>
  );
};
