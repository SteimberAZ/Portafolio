import { useEffect } from "react";

const useAutoScrollTop = () => {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const currentScroll = window.scrollY;

      // Si está algo abajo y el usuario rueda hacia arriba
      if (event.deltaY < 0 && currentScroll > 50) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

};

export default useAutoScrollTop;
