import React from 'react'
import { useGLTF, Center } from '@react-three/drei'
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function Pistol(props) {
  const { nodes, materials } = useGLTF('/pistol.glb')
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={mesh} {...props} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} dispose={null}>
      <Center>
        <mesh geometry={nodes.Circle001.geometry} material={materials.Bronze} />
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.Blacksteel} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.RedMetal} />
        <mesh geometry={nodes.Circle001_3.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Circle001_4.geometry} material={materials.Glass1} />
        <mesh geometry={nodes.Circle001_5.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Circle001_6.geometry} material={materials.Leather} />
        <mesh geometry={nodes.Circle001_7.geometry} material={materials.GreenMetal} />
        <mesh geometry={nodes.Circle001_8.geometry} material={materials.ClockFace} />
      </Center>
    </group>
  )
}

useGLTF.preload('/pistol.glb')

export default Pistol;