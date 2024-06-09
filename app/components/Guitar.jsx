import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function Guitar(props) {
  const { nodes, materials } = useGLTF('/guitar.glb')
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={mesh} {...props} position={[0, -1, 0]} rotation={[0, Math.PI / 1, 0]} dispose={null}>
      <mesh geometry={nodes.Strap.geometry} material={materials.Strap} position={[1.066, 0.43, -0.06]} rotation={[0, 0, -0.849]} />
      <mesh geometry={nodes.Stitches.geometry} material={materials.Stitches} />
      <mesh geometry={nodes.Board001.geometry} material={materials.GuitarBase} position={[0.014, 0, -0.074]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Frets001.geometry} material={materials.Strets} position={[0.014, 0, -0.074]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.GuitarBase} position={[0.029, 3.228, -0.039]} scale={1.258} />
      <mesh geometry={nodes.Eye001.geometry} material={materials['Eye.001']} position={[-0.343, -0.225, -0.075]} rotation={[Math.PI / 2, -0.157, 0]} scale={1.098} />
      <mesh geometry={nodes.BasePlate003.geometry} material={materials.GuitarCover} position={[0, 0, 0.036]} />
      <mesh geometry={nodes.PianoKeys001.geometry} material={materials.BlackKeys} position={[0, 0.133, 0.005]} />
      <mesh geometry={nodes.TeethBones001.geometry} material={materials.Bones} position={[0.014, 0.36, -0.04]} />
      <mesh geometry={nodes.Bridge001.geometry} material={materials.Metal} position={[0.006, 1.373, -1.308]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.534} />
      <mesh geometry={nodes.Bridge002.geometry} material={materials.Strings} position={[0.006, 1.373, -1.308]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.534} />
      <mesh geometry={nodes.Testbase.geometry} material={materials.GuitarBase} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.Blade} position={[0.329, -0.75, 0.002]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Eyemaybe.geometry} material={materials.Eyeball} position={[-0.345, -0.228, 0.067]} rotation={[1.601, 0, 0]} scale={[0.207, 0.213, 0.207]} />
    </group>
  )
}

useGLTF.preload('/guitar.glb')

export default Guitar;