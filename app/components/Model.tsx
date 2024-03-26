import {
  useGLTF,
  MeshTransmissionMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import { useControls } from "leva";
import { gsap } from "gsap";

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/Statue.glb");
  const mesh = useRef(null);
  const ref = useRef(null);
  const tl = useRef(null);
  const scale = viewport.width / 40;
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
  const [hasScrolled, setHasScrolled] = useState(false);
  window.onscroll = function (e) {
    setHasScrolled(true);
  };

  useFrame(() => {
    if (mesh.current) {
      (mesh.current as any).rotation.y += 0.002;
    }
    if (!hasScrolled) {
      (tl.current as any).seek(scroll.offset * (tl.current as any).duration());
    }
  });

  useLayoutEffect(() => {
    (tl.current as any) = gsap.timeline({ paused: false });

    (tl.current as any).to(
      (ref.current as any).position,
      {
        duration: 1,
        y: 1.75,
        x: 5,
      },
      0
    );

    (tl.current as any).to(
      (ref.current as any).rotation,
      {
        duration: 1,
        y: Math.PI / 1.8,
        x: 0,
        z: 0,
      },
      0
    );

    (tl.current as any).to(
      (ref.current as any).scale,
      {
        duration: 1,
        x: 0.15,
        y: 0.15,
        z: 0.15,
      },
      0
    );
  }, []);

  return (
    <group
      ref={ref}
      scale={[scale, scale, scale]}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh ref={mesh} {...nodes.Statue}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
