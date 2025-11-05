import Navbar from "./components/Navbar";
import "./App.css";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import Hero from "./components/Hero";
import HeroM from "./components/HeroM";
import { useEffect, useState } from "react";
import TextoFor from "./components/TextoFor";
import useDynamicFavicon from "./components/useDynamicFavicon";
import { useRef } from "react";

function App() {
  useDynamicFavicon();
  const [isMobile, setIsMobile] = useState(false);
  const image = useLoader(TextureLoader, "/imge.png");
  const itemsNav = [
    { data: "Inicio", link: "inicio" },
    { data: "Proyectos", link: "proyectos" },
    { data: "Sobre mí", link: "sobreMi" },
    { data: "Contacto", link: "" },
  ];
 
  const text = `RANDY ARTEAGA   
  ESTUDIANTE DE ING.DE SOFTWARE`;
  const text2 = `Hola aqui van los proyecto pero aun no lo eh echo jajaja, en sobre mi si hay cosas`;
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1357);
    handleResize(); // ejecutar una vez al inicio
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const proyectosRef = useRef<HTMLDivElement | null>(null);
  const sobreMiRef = useRef<HTMLDivElement | null>(null);
  const handleNavigate = (section: string) => {
   const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    inicio: inicioRef,
    proyectos: proyectosRef,
    sobreMi: sobreMiRef,
  };

    const ref = refs[section];
    ref?.current?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
    // 👇 Scroll automático al inicio al montar la app
  useEffect(() => {
    const timeout = setTimeout(() => {
      inicioRef.current?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }, 500); // espera medio segundo para que cargue todo
    return () => clearTimeout(timeout);
  }, []);

 // 🔹 Función para moverse a una sección específica
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }
};

 
  // 🔹 Detectar cambio de orientación o tamaño
  useEffect(() => {
    const handleResizeOrOrientation = () => {
    scrollToSection(inicioRef as React.RefObject<HTMLDivElement | null>); // ✅
  };
    // Escuchar tanto cambio de tamaño como cambio de orientación
    window.addEventListener("resize", handleResizeOrOrientation);
    window.addEventListener("orientationchange", handleResizeOrOrientation);

    return () => {
      window.removeEventListener("resize", handleResizeOrOrientation);
      window.removeEventListener("orientationchange", handleResizeOrOrientation);
    };
  }, []);


  return (
   
   
    <div className="container-scroll  w-screen h-screen flex flex-row bg-blue-700 justify-center items-center text-black px-[500vw] overflow-x-hidden overflow-y-auto snap-x snap-mandatory scroll-smooth gap-2 z-1">
      
      {/* 🧭 NAVBAR */}
      <Navbar items={itemsNav} onNavigate={handleNavigate} />

      {/* 🏠 SECCIÓN INICIO */}
      <section
        id="inicio"
        ref={inicioRef}
        className="snap-start w-screen h-screen flex flex-col md:flex-row justify-center items-center shrink-0 pth "
      >
        {!isMobile ? (
          <div className="w-[500px] h-[500px] flex justify-center items-center">
            <Hero texture={image} />
          </div>
        ) : (
          <div className="w-[250px] h-[250px] flex justify-center items-center">
            <HeroM />
          </div>
        )}
        <div className="w-[250px] md:w-[500px] flex justify-center items-center">
          <TextoFor texto={text.split("")} />
        </div>
      </section>

      
      <section
        id="proyectos"
        ref={proyectosRef}
        className="snap-start w-screen h-screen flex flex-col md:flex-row justify-center items-center shrink-0 pth "
      >
        {!isMobile ? (
          <div className="w-[500px] h-[500px] flex justify-center items-center">
            <Hero texture={image} />
          </div>
        ) : (
          <div className="w-[250px] h-[250px] flex justify-center items-center ">
            <HeroM />
          </div>
        )}
        <div className="w-[250px] md:w-[500px] flex justify-center items-center">
          <TextoFor texto={text2.split("")} />
        </div>
      </section>
      <section
        id="proyectos"
        ref={sobreMiRef}
        className="snap-start w-screen h-screen flex flex-col md:flex-row justify-center items-center shrink-0 pth "
      >
       
        <div className=" relative shadow-sm top-[60px] h-[70%] min-h-[350px]  w-[80%] min-w-[330px] bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 text-white text-xl font-bold overflow-hidden transition-all duration-200 animate-showup z-10 justify-center items-center flex flex-col">

          <div className=" flex w-[80%]   h-[20%] justify-center  xl:text-8xl text-[45px] font-extrabold flex-col ">
              Sobre mí
              
          </div>
          <div className=" flex w-[80%] h-[10%]  text-sky-300 lg:text-4xl text-[25px]  font-bold ">
              Randy Arteaga
          </div>
          <div className=" flex w-[80%] h-[65%] lg:h-[40%] text-white md:text-[1.5rem]  lg:text-3xl  sm:text-[1.2rem]  text-[1rem]  font-normal border-b border-white/50 hmd">
             Hola, tengo 19 años y soy de Ecuador.
Estudio Ingeniería de Software en la Universidad Técnica de Manabí.
Me apasiona la tecnología, el diseño y el desarrollo de software.
Este portafolio refleja mi crecimiento y aprendizaje como futuro desarrollador.
          </div>
          <div className=" flex w-[80%] h-[10%] text-white text-4xl font-normal  ">
           <div className="flex gap-6 justify-center items-center mt-6">
             
              <a
                href="https://www.instagram.com/steimber.1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                  alt="Instagram"
                  className="w-8 h-8 invert dark:invert-0"
                />
              </a>

             
              <a
                href="https://www.tiktok.com/@randy_arteaga19"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
                  alt="TikTok"
                  className="w-8 h-8 invert dark:invert-0"
                />
              </a>

              
              <a
                href="https://github.com/SteimberAZ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                  alt="GitHub"
                  className="w-8 h-8 invert dark:invert-0"
                />
              </a>
            </div>

          </div>
        </div>

      </section>
    </div>
  

  );
}

export default App;
