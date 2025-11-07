type Project = {
  image: string;
  description: string;
};

type InfiniteScrollProps = {
  projects: Project[];
  
};

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  projects,
 
}) => {
  return (
    <div className="overflow-hidden  w-[80%] h-[100%] lg:h-[60%] text-white md:text-[1.5rem] lg:text-3xl sm:text-[1.2rem] text-[1rem] font-normal flex pt-5 justify-center items-center">
      <div
        className="scroll-container   gap-4 flex  justify-center items-center"
        
      >
        {/* Contenido original */}
        <div className="scroll-content flex  flex-row  gap-4 justify-center items-center">
          {projects.map((project, i) => (
            <div key={i}>
              <img
                className="h-auto w-[200px] lg:w-[350px] rounded-lg pimg"
                src={project.image}
                alt=""
              />
              <div className="relative w-[200px] h-[80px] lg:w-[350px] md:h-[100px] pdiv bg-white top-[-5px] block text-black pt-2.5 p-1 rounded-b-lg md:text-[1.5rem] lg:text-2xl sm:text-[1.2rem] text-[1rem] font-normal">
                {project.description}
              </div>
            </div>
          ))}
        </div>

        {/* Duplicado para el efecto infinito */}
        <div className="scroll-content flex flex-row  gap-4 justify-center items-center">
          {projects.map((project, i) => (
            <div key={`dup-${i}`}>
              <img
                className="h-auto w-[200px] lg:w-[350px] rounded-lg   pimg"
                src={project.image}
                alt=""
              />
              <div className="relative pdiv w-[200px] h-[80px] lg:w-[350px] md:h-[100px] bg-white top-[-5px] block text-black pt-2.5 p-1 rounded-b-lg md:text-[1.5rem] lg:text-2xl sm:text-[1.2rem] text-[1rem] font-normal">
                {project.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;