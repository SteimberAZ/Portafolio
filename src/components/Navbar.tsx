import { useState, useEffect } from "react";

type NavbarItems = {
  data: string;
  link: string;
};

type Props = {
  items: NavbarItems[];
  onNavigate: (section: string) => void;
};

function Navbar({ items, onNavigate }: Props) {

  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (items.length > 0) {
      setActive(items[0].link);     // activo por defecto
      onNavigate(items[0].link);    // navegación inicial
    }
  }, [items]);

  useEffect(() => {
    const handleResize = () => {
      if (items.length > 0) {
        const inicio = items[0].link;

        setActive(inicio);        // ✔ activa el botón de inicio
        onNavigate(inicio);       // ✔ navega a inicio
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [items, onNavigate]);

  const handleClick = (section: string) => {
    setActive(section);
    onNavigate(section);
  };

  return (
    <div className="shadow-sm fixed top-1 left-1/2 -translate-x-1/2 w-[50%] min-w-[330px] bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 text-white text-xl font-bold overflow-hidden transition-all duration-200 animate-showup z-50">

      <div className="flex items-center gap-2 lg:gap-10 justify-center">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(item.link)}
            className={`btn btn-ghost transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:backdrop-blur-lg text-base p-0.5 md:text-lg md:p-1 lg:text-xl lg:p-1.5 xl:text-2xl xl:p-2
              ${active === item.link
                ? "bg-white/10 border-white/15 backdrop-blur-lg"
                : "text-white/80"
              }`}
          >
            {item.data}
          </button>
        ))}
      </div>

      <span className="absolute top-0 h-full w-[650px] 
        bg-gradient-to-r from-transparent via-white/40 to-transparent 
        animate-shine pointer-events-none"
      ></span>
    </div>
  );
}

export default Navbar;
