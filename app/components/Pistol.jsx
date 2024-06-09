import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function Pistol(props) {
  const { nodes, materials } = useGLTF('/pistol.glb')
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0025;
    }
  });

  return (
    <group ref={mesh} {...props} rotation={[0, Math.PI / 4.5, 0]} dispose={null}>
      <mesh geometry={nodes.Circle001.geometry} material={materials.Bronze} />
      <mesh geometry={nodes.Circle001_1.geometry} material={materials.Blacksteel} />
      <mesh geometry={nodes.Circle001_2.geometry} material={materials.RedMetal} />
      <mesh geometry={nodes.Circle001_3.geometry} material={materials.Gold} />
      <mesh geometry={nodes.Circle001_4.geometry} material={materials.Glass1} />
      <mesh geometry={nodes.Circle001_5.geometry} material={materials.Plastic} />
      <mesh geometry={nodes.Circle001_6.geometry} material={materials.Leather} />
      <mesh geometry={nodes.Circle001_7.geometry} material={materials.Clock} />
      <mesh geometry={nodes.Circle001_8.geometry} material={materials.GreenMetal} />
      <mesh geometry={nodes.Circle001_9.geometry} material={materials.ClockFace} />
      <mesh geometry={nodes.Circle001_10.geometry} material={materials.ClockMetal} />
      <mesh geometry={nodes.Circle001_11.geometry} material={materials.Metal} />
      <mesh geometry={nodes.Circle001_12.geometry} material={materials.Glass} />
      <mesh geometry={nodes.Circle001_13.geometry} material={materials.Connector} />
      <mesh geometry={nodes.Circle001_14.geometry} material={materials.Liquid} />
    </group>
  )
}

useGLTF.preload('/pistol.glb')

export default Pistol;