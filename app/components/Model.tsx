import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

export default function Model() {
  const mesh = useRef();
  const { nodes } = useGLTF("/models/Test.glb");
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.rotation.y += 0.002;
  });

  const materialProps = useControls({
    thickness: { value: 1.15, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.4, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.35, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 10}>
      {/* <Text
        fontSize={5}
        position={[0, 0, -15]}
        font={"fonts/InterTight-ExtraBold.ttf"}
      >
        Welcome.
      </Text> */}
      <mesh ref={mesh} {...nodes.Statue}>
        <MeshTransmissionMaterial {...materialProps} />{" "}
      </mesh>
    </group>
  );
}
