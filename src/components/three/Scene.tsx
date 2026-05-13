import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import ParticleField from "@/components/three/ParticleField";

export default function Scene() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const sync = () => setMobile(mediaQuery.matches);
    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, mobile ? 1.2 : 1.6]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ParticleField count={mobile ? 900 : 1600} />
          <EffectComposer multisampling={0}>
            <Bloom mipmapBlur intensity={0.55} luminanceThreshold={0.34} />
            <Noise opacity={0.02} blendFunction={BlendFunction.SCREEN} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
