import { motion } from "framer-motion";



function HeroM({}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 3,
          },
        },
      }}
      
    >
    
        <motion.span
          
          variants={{
            hidden: { opacity: 0, x: 5000 },
            visible: { opacity: 1, x: 0 },
          }}
          className="inline-block"
        >
          <img src="/imge.png" className="w-[400px] p-5"></img>
        </motion.span>
       
    </motion.div>
  );
}

export default HeroM;