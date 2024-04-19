import {
  FirstPersonControls,
  FlyControls,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
} from '@react-three/drei';

export const Controls = () => {
  return (
    <OrbitControls
    // enableDamping
    // dampingFactor={0.03}
    // autoRotateSpeed={10}
    // autoRotate
    // // maxPolarAngle={Math.PI / 2}
    // // minPolarAngle={Math.PI / 2}
    />
  );
};
