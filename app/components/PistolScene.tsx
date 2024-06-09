"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Pistol from "./Pistol";

const PistolScene: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 35, position: [0, 1, 5] }}
      style={{ background: "#0b090a" }}
    >
      <Environment preset="warehouse" />
      {/* <OrbitControls /> */}
      <Pistol />
    </Canvas>
  );
};

export default PistolScene;
