import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  const { points, lines } = useMemo(() => {
    const nodeCount = 22;
    const pointArray = new Float32Array(nodeCount * 3);
    const connections: number[] = [];

    for (let index = 0; index < nodeCount; index += 1) {
      const i = index * 3;
      pointArray[i] = (Math.random() - 0.5) * 8;
      pointArray[i + 1] = (Math.random() - 0.5) * 4;
      pointArray[i + 2] = (Math.random() - 0.5) * 5;
    }

    for (let a = 0; a < nodeCount; a += 1) {
      for (let b = a + 1; b < nodeCount; b += 1) {
        const ax = pointArray[a * 3];
        const ay = pointArray[a * 3 + 1];
        const az = pointArray[a * 3 + 2];
        const bx = pointArray[b * 3];
        const by = pointArray[b * 3 + 1];
        const bz = pointArray[b * 3 + 2];
        const distance = Math.hypot(ax - bx, ay - by, az - bz);

        if (distance < 2.9) {
          connections.push(ax, ay, az, bx, by, bz);
        }
      }
    }

    return { points: pointArray, lines: new Float32Array(connections) };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.12,
      0.025
    );
  });

  return (
    <group ref={groupRef} position={[0, 0, -2.5]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lines.length / 3}
            array={lines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#d5121b" transparent opacity={0.16} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#f4efe5"
          transparent
          opacity={0.48}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
