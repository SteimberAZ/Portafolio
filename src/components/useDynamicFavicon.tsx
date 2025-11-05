import { useEffect } from "react";


export function useDynamicFavicon() {
  useEffect(() => {
    const favicon = document.getElementById("favicon") as HTMLLinkElement | null;

    if (!favicon) return;

    // 👇 Tipamos el parámetro correctamente como boolean
    const updateFavicon = (isDark: boolean) => {
      favicon.href = isDark ? "/LogoPngDark.png" : "/LogoPngLight.png";
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // establecer favicon inicial
    updateFavicon(mediaQuery.matches);

    // listener con tipado correcto
    const listener = (e: MediaQueryListEvent) => updateFavicon(e.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);
}


export default useDynamicFavicon;
