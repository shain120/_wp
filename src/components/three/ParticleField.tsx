import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
}

export default function ParticleField({ count = 2600 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color("#d5121b");
    const colorB = new THREE.Color("#f4efe5");

    for (let index = 0; index < count; index += 1) {
      const i = index * 3;
      pos[i] = (Math.random() - 0.5) * 18;
      pos[i + 1] = (Math.random() - 0.5) * 11;
      pos[i + 2] = (Math.random() - 0.5) * 6;

      const mixed = colorA.clone().lerp(colorB, Math.random());
      col[i] = mixed.r;
      col[i + 1] = mixed.g;
      col[i + 2] = mixed.b;
    }

    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.012;
    pointsRef.current.position.x = THREE.MathUtils.lerp(
      pointsRef.current.position.x,
      state.pointer.x * 0.55,
      0.018
    );
    pointsRef.current.position.y = THREE.MathUtils.lerp(
      pointsRef.current.position.y,
      state.pointer.y * 0.32,
      0.02
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        vertexColors
        transparent
        opacity={0.58}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
