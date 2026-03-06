import { useCallback } from "react";

export const useScroll = () => {
  const scrollTo = useCallback((id: string) => {
    if (!id) return;
    const cleanId = id.replace("#", "");
    const el = document.getElementById(cleanId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return { scrollTo };
};
