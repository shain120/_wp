import { create } from "zustand";

interface AppState {
  activeSection: string;
  cursorVariant: "default" | "active" | "text" | "drag";
  mobileMenuOpen: boolean;
  setActiveSection: (section: string) => void;
  setCursorVariant: (variant: "default" | "active" | "text" | "drag") => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useStore = create<AppState>((set) => ({
  activeSection: "home",
  cursorVariant: "default",
  mobileMenuOpen: false,
  setActiveSection: (activeSection) => set({ activeSection }),
  setCursorVariant: (cursorVariant) => set({ cursorVariant }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}));
