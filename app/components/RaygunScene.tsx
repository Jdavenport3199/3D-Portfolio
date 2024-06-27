"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Raygun from "./Raygun";

const RaygunScene: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 30, position: [4, 0, 10] }}
      style={{ background: "none" }}
    >
      <Environment preset="warehouse" />
      {/* <OrbitControls /> */}
      <Raygun />
    </Canvas>
  );
};

export default RaygunScene;
