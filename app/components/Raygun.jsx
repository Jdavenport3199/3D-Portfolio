import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function Raygun(props) {
  const { nodes, materials } = useGLTF('/raygun.gltf')

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0025;
    }
  });

  return (
    <group ref={mesh} {...props} position={[0, -1, 0]} rotation={[0, Math.PI / 1, 0]} dispose={null}>
      <mesh geometry={nodes.barrel_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.centerguard_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.ring1_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.rod_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.topguard_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.spoiler_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.baseplating_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.energycylinder_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.handlesupport_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.rims_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.base_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.spoiler1_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.trigger_high.geometry} material={materials.checkerboard} position={[-0.016, 0, 0]} />
      <mesh geometry={nodes.dialswitch_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.basespikes_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.scopebase_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.reticle_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.scopering_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.fin_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.ring2_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.switchbase001_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.basecover_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.switch1_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.basepin_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.spoiler1001_high.geometry} material={materials.checkerboard} position={[0.681, 0.252, 0.002]} rotation={[0, 0, -0.598]} />
      <mesh geometry={nodes.spoiler1002_high.geometry} material={materials.checkerboard} position={[0.674, -0.228, 0.002]} rotation={[0, 0, -1.218]} />
      <mesh geometry={nodes.Sphere_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.Sphere001_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.handle_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.handleguard_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.switchbase_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.ballswitch_high.geometry} material={materials.checkerboard} />
      <mesh geometry={nodes.baseplating_high001.geometry} material={materials.dial} />
      <mesh geometry={nodes.barrel_high001.geometry} material={materials.glass} />
      <mesh geometry={nodes.Plane.geometry} material={materials.checkerboard} />
    </group>
  )
}

useGLTF.preload('/raygun.gltf')

export default Raygun;