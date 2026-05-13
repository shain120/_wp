import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  hasMoved: boolean;
}

const initialPosition: MousePosition = {
  x: 0,
  y: 0,
  normalizedX: 0,
  normalizedY: 0,
  hasMoved: false,
};

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>(initialPosition);

  useEffect(() => {
    const updatePosition = (clientX: number, clientY: number) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;

      setPosition({
        x: clientX,
        y: clientY,
        normalizedX: (clientX / width) * 2 - 1,
        normalizedY: (clientY / height) * 2 - 1,
        hasMoved: true,
      });
    };

    const handleMove = (event: PointerEvent | MouseEvent) => {
      if (typeof event.clientX !== "number" || typeof event.clientY !== "number") {
        return;
      }

      updatePosition(event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return position;
}
