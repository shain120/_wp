import type { SocialLink } from "@/types/portfolio";

interface FooterProps {
  socials: SocialLink[];
}

export default function Footer({ socials }: FooterProps) {
  return (
    <footer className="relative z-10 border-t-2 border-white/8 py-12 text-center text-sm text-white/50">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-6 px-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="chip hover:bg-p5red hover:text-white"
          >
            {social.label}
          </a>
        ))}
      </div>
      <p className="p5-menu mt-6 uppercase tracking-[0.1em]">
        © {new Date().getFullYear()} SHAIN PROFILE — ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
