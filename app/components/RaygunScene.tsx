"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Raygun from "./Raygun";

const RaygunScene: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 10, position: [2, 0, 0] }}
      style={{ background: "none" }}
    >
      <Environment preset="warehouse" />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Raygun />
    </Canvas>
  );
};

export default RaygunScene;
