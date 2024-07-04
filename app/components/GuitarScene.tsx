"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Guitar from "./Guitar";

const GuitarScene: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 10, position: [2, 0, 0] }}
      style={{ background: "none" }}
    >
      <Environment preset="warehouse" />
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      <Guitar />
    </Canvas>
  );
};

export default GuitarScene;
