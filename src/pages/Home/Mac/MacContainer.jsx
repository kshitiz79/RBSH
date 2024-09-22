// src/components/MacContainer.jsx
import React from 'react';
import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MacContainer = () => {
  // Load the GLTF model
  const { scene } = useGLTF('/public/mac.glb'); // Ensure the path to your GLB file is correct
  const tex = useTexture('/public/red.jpg'); // Example texture for the screen; update the path as needed
  const meshes = {};
  // Traverse the model and collect meshes
  scene.traverse((e) => {
    meshes[e.name] = e;
  });

  // Set initial material properties for the screen mesh
  if (meshes.screen) {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
  }

  // Use scroll data from ScrollControls
  const scrollData = useScroll();

  // Animate rotation based on scroll position
  useFrame(() => {
    if (meshes.screen) {
      // Adjust this calculation if the rotation seems off
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - scrollData.offset * 120);
    }
  });

  return (
    <group position={[0, -5, -60]}>
      <primitive object={scene} />
    </group>
  );
};

export default MacContainer;
