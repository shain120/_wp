import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";

function resolveCursorVariant(target: EventTarget | null): "default" | "active" | "text" {
  if (!(target instanceof Element)) {
    return "default";
  }

  if (target.closest('input, textarea, select, [contenteditable="true"]')) {
    return "text";
  }

  if (
    target.closest(
      'a, button, label, summary, [role="button"], [data-cursor="active"], .chip, .p5-note-link, .research-post-link, .hero-tag-chip, .tech-badge'
    )
  ) {
    return "active";
  }

  return "default";
}

const CURSOR_MODE_CLASSES = [
  "cursor-mode-default",
  "cursor-mode-active",
  "cursor-mode-text",
  "cursor-mode-drag",
];

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cursorVariant = useStore((state) => state.cursorVariant);
  const setCursorVariant = useStore((state) => state.setCursorVariant);

  useEffect(() => {
    setMounted(true);
    return () => { setMounted(false); };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(mediaQuery.matches);
    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (mounted && enabled) {
      root.classList.add("custom-cursor-ready");
    } else {
      root.classList.remove("custom-cursor-ready");
      root.classList.remove(...CURSOR_MODE_CLASSES);
    }
    return () => {
      root.classList.remove("custom-cursor-ready");
      root.classList.remove(...CURSOR_MODE_CLASSES);
    };
  }, [mounted, enabled]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(...CURSOR_MODE_CLASSES);
    if (!mounted || !enabled) return;

    const modeClass =
      cursorVariant === "active"
        ? "cursor-mode-active"
        : cursorVariant === "text"
          ? "cursor-mode-text"
          : cursorVariant === "drag"
            ? "cursor-mode-drag"
            : "cursor-mode-default";

    root.classList.add(modeClass);
    return () => { root.classList.remove(modeClass); };
  }, [mounted, enabled, cursorVariant]);

  useEffect(() => {
    if (!enabled) {
      setCursorVariant("default");
      return undefined;
    }

    let pressed = false;
    let dragging = false;

    const updateVariant = (target: EventTarget | null) => {
      if (dragging) { setCursorVariant("drag"); return; }
      setCursorVariant(resolveCursorVariant(target));
    };

    const handleMove = (event: PointerEvent | MouseEvent) => {
      if (pressed && dragging) { setCursorVariant("drag"); return; }
      updateVariant(event.target);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.isPrimary === false) return;
      pressed = true;
      updateVariant(event.target);
    };

    const handlePointerUp = (event: PointerEvent) => {
      pressed = false; dragging = false;
      updateVariant(event.target);
    };

    const handleDragStart = () => { pressed = true; dragging = true; setCursorVariant("drag"); };
    const handleDragEnd = (event: DragEvent) => { pressed = false; dragging = false; updateVariant(event.target); };
    const handleFocusIn = (event: FocusEvent) => { updateVariant(event.target); };
    const handleLeave = () => { pressed = false; dragging = false; setCursorVariant("default"); };
    const handleBlur = () => { pressed = false; dragging = false; setCursorVariant("default"); };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragend", handleDragEnd);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragend", handleDragEnd);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [enabled, setCursorVariant]);

  return null;
}
