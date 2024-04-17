/* eslint-disable react/no-unknown-property */
import {
  Box,
  Circle,
  Cone,
  Cylinder,
  Plane,
  Sphere,
  Torus,
  TorusKnot,
} from '@react-three/drei';
// import * as THREE from 'three';
export const Meshes = () => {
  return (
    <>
      <Plane args={[40, 40]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Plane>

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-3, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={0xffffff} />
      </TorusKnot>
    </>
  );
};