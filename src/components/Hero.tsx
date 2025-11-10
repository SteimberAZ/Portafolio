import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { Texture } from "three";
import { a, useSpring } from "@react-spring/three";

function CameraController() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    // Movimiento suave de cámara con el mouse
    camera.position.x = mouse.current.x * 1.5;
    camera.position.y = mouse.current.y * 1.5;
    camera.position.z = 5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

type Props = {
  texture: Texture;

};

function Hero({ texture }: Props) {
  
  const { position, opacity } = useSpring({
    from: { position: [-50, 0, 0], opacity: 0 },
    to: { position: [0, 0, 0], opacity: 1 },
    config: { tension: 150, friction: 20 },
    
  });
  

  return (
    <Canvas className="transition-all duration-200 w-[0px] h-auto overflow-visible z-50 md:flex hidden md:w-auto relative">
      <ambientLight intensity={1} />
      <pointLight position={[1, 1, 20]} />

      <a.mesh  position={position as any}>
        <boxGeometry args={[6, 6, 0]}  />
        
        <a.meshStandardMaterial  map={texture as any} transparent opacity={opacity as any} /> 
      </a.mesh>

      <CameraController />
    </Canvas>
  );
}

export default Hero;
