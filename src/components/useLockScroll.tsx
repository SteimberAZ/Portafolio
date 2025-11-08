import { useEffect } from "react";

export const useLockScroll = (locked: boolean) => {
  useEffect(() => {
    const body = document.body;
    let scrollY = 0;

    if (locked) {
      // Guardamos la posición actual del scroll
      scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "4000px";
      body.style.height = "4000px";
      body.style.overflow = "hidden"; // bloquea el scroll
    } else {
      // Restauramos todo
      const y = Math.abs(parseInt(body.style.top || "0"));
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo(0, y);
    }

    // Limpieza
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
    };
  }, [locked]);
};
export default useLockScroll;