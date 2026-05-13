import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useStore } from "@/store/useStore";
import type { NavigationLink } from "@/types/portfolio";

interface NavbarProps {
  brand: string;
  links: NavigationLink[];
}

export default function Navbar({ brand, links }: NavbarProps) {
  const desktopWidths = ["13.75rem", "13rem", "12.75rem", "13.4rem", "13rem", "13.2rem"];
  const desktopOffsets = ["0.4rem", "1rem", "0.7rem", "1.25rem", "0.95rem", "1.35rem"];
  const desktopRotations = [-4, -1, 2, -2, 1, -2];
  const {
    activeSection,
    mobileMenuOpen,
    setActiveSection,
    toggleMobileMenu,
    closeMobileMenu,
    setCursorVariant,
  } = useStore();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 mx-auto max-w-[1600px] px-4 pt-4 sm:px-6 lg:hidden">
        <div className="p5-ink-card flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <a
            href="#home"
            onMouseEnter={() => setCursorVariant("active")}
            onMouseLeave={() => setCursorVariant("default")}
            className="p5-accent text-xl uppercase tracking-[0.08em] text-white sm:text-2xl"
          >
            {brand}
          </a>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="border-2 border-black bg-p5yellow p-3 text-black"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="p5-paper-card mt-3 flex flex-col gap-2 px-4 py-4"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="p5-menu border-2 border-black bg-black px-4 py-3 text-sm uppercase tracking-[0.22em] text-white"
                  style={{ transform: "skewX(-14deg)" }}
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <aside className="pointer-events-none fixed left-4 top-4 z-40 hidden w-[18rem] lg:block xl:left-6">
        <div className="pointer-events-auto relative">
          <div className="p5-left-menu-panel" aria-hidden="true" />

          <div className="relative z-10">
            <a
              href="#home"
              onMouseEnter={() => setCursorVariant("active")}
              onMouseLeave={() => setCursorVariant("default")}
              className="p5-left-menu-brand"
            >
              {brand}
            </a>

            <div className="p5-left-menu-system">MENU SYSTEM</div>

            <nav className="mt-7 flex flex-col items-start gap-3">
              {links.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "");

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setCursorVariant("active")}
                    onMouseLeave={() => setCursorVariant("default")}
                    className={`p5-left-menu-link ${isActive ? "is-active" : ""}`}
                    style={{
                      width: desktopWidths[index % desktopWidths.length],
                      marginLeft: desktopOffsets[index % desktopOffsets.length],
                      transform: `rotate(${desktopRotations[index % desktopRotations.length]}deg)`,
                    }}
                  >
                    <span className="p5-left-menu-link-shadow" aria-hidden="true" />
                    <span className="p5-left-menu-link-cut" aria-hidden="true" />
                    <span className="p5-left-menu-link-label">{link.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
