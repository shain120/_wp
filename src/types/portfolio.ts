/* ────────────────────────────────────────────
   Portfolio data type definitions
   ──────────────────────────────────────────── */

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface ActionLink {
  label: string;
  href: string;
}

export interface HeroData {
  eyebrow: string;
  name: string;
  title: string;
  description: string;
  roleLines: string[];
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
  stats: HeroStat[];
  tags: string[];
}

export interface AboutMetric {
  label: string;
  value: string;
}

export interface AboutData {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: string[];
  metrics: AboutMetric[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillGroup {
  category: string;
  blurb: string;
  items: SkillItem[];
}

export interface SkillsData {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  groups: SkillGroup[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  accent: string;
  live: string;
  repo: string;
}

export interface ProjectsData {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  items: ProjectItem[];
}

export interface AwardLink {
  label: string;
  href: string;
}

export interface AwardEntry {
  year: string;
  label: string;
  conference: string;
  dateLocation: string;
  paperTitle: string;
  recipients: string;
  summary: string;
  image: string;
  links?: AwardLink[];
}

export interface AwardsData {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  entries: AwardEntry[];
}

export interface PostLink {
  label: string;
  href: string;
}

export interface ContactPost {
  date: string;
  status: string;
  meta: string;
  title: string;
  summary: string;
  tone: string;
  tags: string[];
  links?: PostLink[];
}

export interface NoteLink {
  label: string;
  href: string;
}

export interface ContactData {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  messageTitle: string;
  messageDescription: string;
  email: string;
  posts: ContactPost[];
  noteLinks: NoteLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface PortfolioData {
  brand: string;
  navigation: NavigationLink[];
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  projects: ProjectsData;
  awards: AwardsData;
  contact: ContactData;
  socials: SocialLink[];
}
