import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type Project = {
  image: string;
  description: string;
};

type InfiniteScrollProps = {
  projects: Project[];
};

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-[80%] h-[100%] lg:h-[60%] text-white 
                 md:text-[1.5rem] lg:text-3xl sm:text-[1.2rem] text-[1rem] 
                 font-normal flex pt-5 justify-center items-center"
    >
      <motion.div
        className={`flex gap-4 cursor-grab active:cursor-grabbing ${
          isMobile ? "flex-col" : "flex-row"
        } justify-center items-center`}
        drag={isMobile ? "y" : "x"} 
        dragConstraints={containerRef}
        dragElastic={0.15}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      >
        {projects.map((project, i) => (
          <div key={i} className="select-none">
            <img
              draggable={false}
              className="h-auto w-[200px] lg:w-[350px] rounded-lg pimg"
              src={project.image}
              alt={project.description}
            />
            <div className="relative w-[200px] h-[80px] lg:w-[350px] md:h-[100px] pdiv bg-white top-[-5px] block text-black pt-2.5 p-1 rounded-b-lg md:text-[1.5rem] lg:text-2xl sm:text-[1.2rem] text-[1rem] font-normal">
              {project.description}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
