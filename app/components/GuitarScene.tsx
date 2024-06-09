"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Guitar from "./Guitar";

const GuitarScene: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 30, position: [4, 0, 10] }}
      style={{ background: "#0b090a" }}
    >
      <Environment preset="warehouse" />
      {/* <OrbitControls /> */}
      <Guitar />
    </Canvas>
  );
};

export default GuitarScene;
