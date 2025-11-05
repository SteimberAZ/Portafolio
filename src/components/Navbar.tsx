
type NavbarItems = {
  data: string;
  link: string;
};
type Props = {
  items: NavbarItems[];
};

function Navbar({ items }: Props) {
  return (
    <div className="shadow-sm fixed top-5 w-[50%] min-w-[330px] bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 text-white text-xl font-bold overflow-hidden transition-all duration-200 animate-showup">
      <div className="flex items-center  gap-0.5 lg:gap-10 md:gap-3 h-[10px] sm:h-[30px] md:h-[40px] lg:h-[50px] justify-center flex-row ">
        {items.map((item, idx) => (
          <a
            className="btn btn-ghost  transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:backdrop-blur-lg 
            text-base p-0.5
            md:text-lg  md:p-1  
            lg:text-xl lg:p-1.5 
            xl:text-2xl xl:p-2" 
            key={idx}
            href={item.link || "#"}
          >
            {item.data}
          </a>
          
        ))}
        
      </div>
      <span
        className="absolute top-0  h-full w-[650px] 
               bg-gradient-to-r from-transparent via-white/40 to-transparent 
               animate-shine pointer-events-none"
      ></span>
    </div>
  );
}

export default Navbar;
