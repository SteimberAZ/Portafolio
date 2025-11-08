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
import InfiniteScroll from "./components/InfiniteScroll";
import AboutCard from "./components/AboutCard";


function App() {
  const proyectos = [
  {
    image: "/Blank.png",
    description: "Proyecto 0: descripción ",
  },
  {
    image: "/Blank.png",
    description: "Proyecto 0: descripción ",
  },
  {
    image: "/Blank.png",
    description: "Proyecto 0: descripción ",
  },
  {
    image: "/Blank.png",
    description: "Proyecto 0: descripción ",
  },
  ];

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


  return (
   
    
    <div className="container-scroll  w-screen h-screen flex md:flex-row flex-col bg-blue-700 justify-center items-center text-black px-[500vw] py-[500vh]  md:py-[0vh]  overflow-y-hidden snap-x snap-mandatory scroll-smooth gap-[200px] z-1  ">
    
      {/* 🧭 NAVBAR */}
      <Navbar items={itemsNav} onNavigate={handleNavigate} />

      {/* 🏠 SECCIÓN INICIO */}
      <section
        id="inicio"
        ref={inicioRef}
        className="snap-start w-screen h-screen flex flex-col md:flex-row justify-center items-center shrink-0 pth  "
      >
        <div className="  relative shadow-sm top-[60px] h-[70%] min-h-[350px]  w-[80%] min-w-[330px] hth bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 text-white text-xl font-bold overflow-hidden transition-all duration-200 animate-showup z-10 justify-center items-center flex md:flex-row flex-col">
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
        </div>
      </section>

      
      <section
        id="proyectos"
        ref={proyectosRef}
        className="snap-start w-screen h-screen flex flex-col md:flex-row justify-center items-center shrink-0 pth  "
      >
        <div className="  relative shadow-sm top-[60px] h-[70%] min-h-[350px]  w-[80%] min-w-[330px] hth bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 text-white text-xl font-bold overflow-hidden transition-all duration-200 animate-showup z-10 justify-center items-center flex flex-col">
              
          <div className=" flex w-[80%]   h-[25%] justify-center  xl:text-8xl text-[45px] font-extrabold flex-col ">
              Proyectos
              
          </div>
          <InfiniteScroll projects={proyectos}  />
        </div>
      </section>
      <section
        id="proyectos"
        ref={sobreMiRef}
        className="snap-start w-screen h-screen  flex justify-center items-center shrink-0 pth  "
      >
       
       <AboutCard
        title="Sobre mí"
        name="Randy Arteaga"
        description={`Hola, tengo 19 años y soy de Ecuador.
        Estudio Ingeniería de Software en la Universidad Técnica de Manabí.
        Me apasiona la tecnología, el diseño y el desarrollo de software.
        Este portafolio refleja mi crecimiento y aprendizaje como futuro desarrollador.`}
        socialLinks={[
          {
            href: "https://www.instagram.com/steimber.1",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
            alt: "Instagram",
          },
          {
            href: "https://www.tiktok.com/@randy_arteaga19",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg",
            alt: "TikTok",
          },
          {
            href: "https://github.com/SteimberAZ",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
            alt: "GitHub",
          },
        ]}
      />

      </section>
    </div>
  

  );
}

export default App;
