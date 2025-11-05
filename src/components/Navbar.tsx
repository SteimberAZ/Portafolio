
type NavbarItems = {
  data: string;
  link: string; // nombre de la sección, no URL
};

type Props = {
  items: NavbarItems[];
  onNavigate: (section: string) => void; // 👈 nueva prop
};

function Navbar({ items, onNavigate }: Props) {
  return (
    <div className="shadow-sm fixed top-5 left-1/2 -translate-x-1/2 w-[50%] min-w-[330px] bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 text-white text-xl font-bold overflow-hidden transition-all duration-200 animate-showup z-10 ">
      <div className="flex items-center gap-2 lg:gap-10 justify-center">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onNavigate(item.link)} // 👈 manejador del scroll
            className="btn btn-ghost transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:backdrop-blur-lg 
              text-base p-0.5
              md:text-lg  md:p-1  
              lg:text-xl lg:p-1.5 
              xl:text-2xl xl:p-2"
          >
            {item.data}
          </button>
        ))}
      </div>

      <span
        className="absolute top-0 h-full w-[650px] 
          bg-gradient-to-r from-transparent via-white/40 to-transparent 
          animate-shine pointer-events-none"
      ></span>
    </div>
  );
}

export default Navbar;



