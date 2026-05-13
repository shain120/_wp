import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import IntroOverlay from "@/components/layout/IntroOverlay";
import Hero from "@/components/sections/Hero";
import { portfolioData } from "@/data/portfolio";

const Scene = lazy(() => import("@/components/three/Scene"));
const About = lazy(() => import("@/components/sections/About"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Awards = lazy(() => import("@/components/sections/Awards"));
const Contact = lazy(() => import("@/components/sections/Contact"));

export default function App() {
  const { navigation, hero, about, skills, projects, awards, contact, socials, brand } =
    portfolioData;
  const [introVisible, setIntroVisible] = useState(true);
  const [introProgress, setIntroProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let finishTimeoutId: number;
    let startTime: number | undefined;

    const totalDuration = 2600;

    const animateProgress = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / totalDuration, 1);
      const easedProgress = 1 - (1 - rawProgress) ** 3;
      const pulse =
        rawProgress < 0.94
          ? (Math.sin(elapsed / 120) + Math.sin(elapsed / 70)) * 0.9
          : 0;
      const nextValue = Math.min(
        100,
        Math.max(0, easedProgress * 100 + pulse),
      );

      setIntroProgress((current) => (nextValue > current ? nextValue : current));

      if (rawProgress < 1) {
        animationFrameId = window.requestAnimationFrame(animateProgress);
        return;
      }

      setIntroProgress(100);
      finishTimeoutId = window.setTimeout(() => {
        setIntroVisible(false);
      }, 320);
    };

    animationFrameId = window.requestAnimationFrame(animateProgress);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(finishTimeoutId);
    };
  }, []);

  return (
    <div
      className={`relative bg-base text-white ${
        introVisible ? "h-screen overflow-hidden" : "min-h-screen overflow-x-hidden"
      }`}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="p5-stage-backdrop" />
        <div className="p5-stage-star-orbit" aria-hidden="true">
          <span className="p5-stage-orbit-star p5-stage-orbit-star--hero p5-stage-orbit-star--red" />
          <span className="p5-stage-orbit-star p5-stage-orbit-star--1 p5-stage-orbit-star--white" />
          <span className="p5-stage-orbit-star p5-stage-orbit-star--2 p5-stage-orbit-star--ink" />
          <span className="p5-stage-orbit-star p5-stage-orbit-star--3 p5-stage-orbit-star--red" />
          <span className="p5-stage-orbit-star p5-stage-orbit-star--4 p5-stage-orbit-star--white" />
          <span className="p5-stage-orbit-star p5-stage-orbit-star--5 p5-stage-orbit-star--ink" />
          <span className="p5-stage-orbit-star p5-stage-orbit-star--6 p5-stage-orbit-star--red" />
        </div>
        <div className="p5-stage-speedlines p5-stage-speedlines--left" />
        <div className="p5-stage-speedlines p5-stage-speedlines--right" />
        <div className="p5-stage-halftone" />
        <div className="p5-stage-shard p5-stage-shard--red-main" />
        <div className="p5-stage-shard p5-stage-shard--paper-frame" />
        <div className="p5-stage-shard p5-stage-shard--ink-ribbon" />
        <div className="p5-stage-shard p5-stage-shard--paper-chip" />
      </div>
      <div className="noise-overlay" />
      <div className="scanline-overlay" />

      <AnimatePresence>
        {introVisible ? (
          <IntroOverlay
            key="intro"
            progress={introProgress}
            brand={brand}
            name={hero.name}
            title={hero.title}
          />
        ) : null}
      </AnimatePresence>

      <CustomCursor />
      <Navbar brand={brand} links={navigation} />

      <main className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col gap-8 px-4 pb-24 pt-24 sm:px-6 lg:pl-[20rem] lg:pr-8 xl:pl-[22rem]">
        <Hero data={hero} />
        <Suspense fallback={null}>
          <About data={about} />
          <Skills data={skills} />
          <Projects data={projects} />
          <Awards data={awards} />
          <Contact data={contact} socials={socials} />
        </Suspense>
      </main>

      <Footer socials={socials} />
    </div>
  );
}
