/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/dancer.glb -o src/components/Dancer.jsx 
*/

import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Dancer(props) {
  const [currentAnimation, setCurrentAnimation] = useState('wave');
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/dancer.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[currentAnimation].fadeIn(0.5).play();
    return () => {
      actions[currentAnimation].fadeOut(0.5).stop();
    };
  }, [actions, currentAnimation]);

  return (
    <group
      onClick={() =>
        setCurrentAnimation((prev) => {
          if (prev === 'wave') return 'windmill';
          return 'wave';
        })
      }
      position-y={0.8}
      scale={0.01}
      ref={group}
      {...props}
      dispose={null}
    >
      <group name='AuxScene'>
        <group position={[0, -82.942, -1.295]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name='Ch03'
            geometry={nodes.Ch03.geometry}
            material={materials.Ch03_Body}
            skeleton={nodes.Ch03.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/dancer.glb');
