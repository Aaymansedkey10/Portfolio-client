import { useState, useCallback } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    const newState = !isOpen;
    setIsOpen(newState);
  }, [isOpen]);

  return { isOpen, open, close, toggle };
};
