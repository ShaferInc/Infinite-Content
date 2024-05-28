import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './ThreeScene.css';

function CameraAndLight() {
  const ref = useRef();

  useFrame(({ camera }) => {
    ref.current.position.set(camera.position.x, camera.position.y, camera.position.z + 5);
  });

  return (
    <>
      <perspectiveCamera ref={ref} position={[0, 0, 5]} />
      <directionalLight position={[0, 0, 10]} />
    </>
  );
}

function ThreeScene() {
  return (
    <div className="three-scene">
      <Canvas>
        <CameraAndLight />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ThreeScene;