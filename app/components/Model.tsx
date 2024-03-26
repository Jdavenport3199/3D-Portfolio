import {
  useGLTF,
  MeshTransmissionMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { useControls } from "leva";
import { gsap } from "gsap";

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/models/Statue.glb");
  const mesh = useRef(null);
  const ref = useRef(null);
  const tl = useRef();
  const scale = viewport.width / 4.5;
  const materialProps = useControls({
    thickness: { value: 1.15, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.4, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.35, min: 0, max: 1 },
    backside: { value: true },
    transparent: { value: false },
    opacity: { value: 0, min: 0, max: 1, step: 0.05 },
  });

  const scroll = useScroll();

  useFrame(() => {
    if (mesh.current) {
      (mesh.current as any).rotation.y += 0.002;
    }

    // tl.current.seek(scroll.offset * tl.current.duration());
  });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline();

  //   tl.current.to(
  //     ref.current.position,
  //     {
  //       duration: 1,
  //       y: 15,
  //       x: 45,
  //     },
  //     0
  //   );

  //   tl.current.to(
  //     ref.current.rotation,
  //     {
  //       duration: 1,
  //       y: Math.PI / 1.8,
  //       x: 0,
  //       z: 0,
  //     },
  //     0
  //   );

  //   tl.current.to(
  //     ref.current.scale,
  //     {
  //       duration: 1,
  //       x: 1.5,
  //       y: 1.5,
  //       z: 1.5,
  //     },
  //     0
  //   );
  // }, []);

  return (
    <group
      ref={ref}
      scale={[scale, scale, scale]}
      dispose={null}
      position={[0, 0, -40]}
    >
      <mesh ref={mesh} {...nodes.Statue}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
