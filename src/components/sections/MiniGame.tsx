import React, { useState, useEffect, useRef } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Play, RotateCcw } from "lucide-react";

export default function MiniGame() {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(ref, { selector: "[data-animate]" });

  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [gameOver, setGameOver] = useState(false);

  const moveTarget = () => {
    const x = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    const y = Math.floor(Math.random() * 80) + 10;
    setTargetPos({ x, y });
  };

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    moveTarget();
  };

  const handleTargetClick = () => {
    if (!isPlaying) return;
    setScore((s) => s + 1);
    moveTarget();
  };

  useEffect(() => {
    let timer: number;
    if (isPlaying && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      setGameOver(true);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  return (
    <section ref={ref} className="section-shell relative z-10 mx-auto w-full">
      <GlassCard data-animate className="p5-paper-card mt-10 p-6 sm:p-7">
        <p className="p5-readable-label p5-readable-label--red">
          MINI GAME / PHANTOM REFLEX
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h3 className="p5-accent text-3xl leading-tight text-black sm:text-4xl">
              PHANTOM REFLEX
            </h3>
            <p className="p5-regular mt-2 text-base leading-8 text-black/80">
              測試你的怪盜神經！在時間內點擊出現的目標。
            </p>
          </div>
          
          <div className="flex gap-6 rounded-md border-4 border-black bg-p5yellow px-6 py-3 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col items-center">
              <span className="p5-menu text-sm uppercase tracking-widest text-black/70">SCORE</span>
              <span className="p5-accent text-3xl text-black">{score}</span>
            </div>
            <div className="h-12 w-1 bg-black/20"></div>
            <div className="flex flex-col items-center">
              <span className="p5-menu text-sm uppercase tracking-widest text-black/70">TIME</span>
              <span className={`p5-accent text-3xl ${timeLeft <= 5 ? "text-p5red animate-pulse" : "text-black"}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-8 h-[400px] w-full overflow-hidden rounded-md border-4 border-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black shadow-[8px_8px_0px_rgba(220,38,38,1)]">
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
              <button
                onClick={startGame}
                className="group flex items-center gap-3 border-4 border-p5red bg-black px-8 py-4 transition-transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
              >
                <Play className="text-p5red transition-colors group-hover:text-white" size={24} fill="currentColor" />
                <span className="p5-accent text-3xl text-white group-hover:text-p5yellow">START MISSION</span>
              </button>
            </div>
          )}

          {isPlaying && (
            <button
              onClick={handleTargetClick}
              className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-p5red text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all hover:scale-110 active:scale-90"
              style={{ left: `${targetPos.x}%`, top: `${targetPos.y}%` }}
            >
              <Target size={32} />
            </button>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md">
              <h4 className="p5-accent text-5xl text-p5red mb-2">MISSION ACCOMPLISHED</h4>
              <p className="p5-menu text-2xl text-white mb-8 tracking-widest">FINAL SCORE: <span className="text-p5yellow">{score}</span></p>
              <button
                onClick={startGame}
                className="group flex items-center gap-3 border-4 border-white bg-p5red px-8 py-4 transition-transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
              >
                <RotateCcw className="text-white" size={24} />
                <span className="p5-accent text-3xl text-white">RETRY</span>
              </button>
            </div>
          )}
        </div>
      </GlassCard>
    </section>
  );
}
