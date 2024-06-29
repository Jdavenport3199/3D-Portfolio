"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Pistol from "./Pistol";

const PistolScene: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 40, position: [4, 0, 2] }}
      style={{ background: "none" }}
    >
      <Environment preset="warehouse" />
      {/* <OrbitControls /> */}
      <Pistol />
    </Canvas>
  );
};

export default PistolScene;
