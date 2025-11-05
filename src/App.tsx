import Navbar from "./components/Navbar";
import "./App.css";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import Hero from "./components/Hero";
import HeroM from "./components/HeroM";
import { useEffect, useState } from "react";
import TextoFor from "./components/TextoFor";


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const image = useLoader(TextureLoader, "/imge.png");
  const itemsNav = [
    { data: "Inicio", link: "" },
    { data: "Proyectos", link: "" },
    { data: "Sobre mí", link: "" },
    { data: "Contacto", link: "" },
  ];
  const itemsCar= [
    { texture: "/imge.png" },
    { texture:"/imge.png" },
    { texture: "/imge.png" },
    { texture: "/imge.png"  },
  ];
  const text = `RANDY ARTEAGA   
  ESTUDIANTE DE ING.DE SOFTWARE`;
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1357);
    handleResize(); // ejecutar una vez al inicio
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
   
    <div className="w-screen h-screen  bg-red-800 justify-center items-center flex text-black flex-col md:flex-row z-[2]">
        
        <Navbar items={itemsNav}></Navbar>

        {!isMobile && (
          <div className="w-[500px]  h-[500px]  transition-all duration-200  overflow-visible justify-end-safe  md:flex hidden">
            <div className="w-[500px]  h-[500px] justify-center items-center relative md:flex hidden">
              <Hero texture={image}></Hero>
            </div>
          </div>
        )}
        {isMobile && (
          <div className="w-[250px]  h-[250px]  transition-all duration-200  overflow-visible  ">
            <div className="w-[250px]  h-[250px] justify-center items-center ">
              <HeroM></HeroM>
            </div>
          </div>
        )}
        <div className="w-[250px] justify-center items-center md:w-[500px] ">
          <TextoFor texto={text.split("")}></TextoFor>
        </div>
    </div>
      
  );
}

export default App;
