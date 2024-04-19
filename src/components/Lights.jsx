import { useRef } from 'react';

/* eslint-disable react/no-unknown-property */
export const Lights = () => {
  const lightRef = useRef(null);

  // useHelper(lightRef, THREE.DirectionalLightHelper, 3, 0xffff00);
  // useHelper(lightRef, THREE.PointLightHelper, 3, 0xffff00);
  // useHelper(lightRef, THREE.HemisphereLightHelper, 3, 0xffff00);
  // useHelper(lightRef, THREE.SpotLightHelper, 1, 0xffffff);
  // useEffect(() => {
  //   if (targetRef.current) setTarget(targetRef.current);
  // }, []);

  return (
    <>
      {/* <ambientLight args={[0xffffff, 10]} /> */}
      <directionalLight
        ref={lightRef}
        castShadow
        args={[0xffffff, 5]}
        position={[4, 4, 4]}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={1000}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      />
    </>
  );
};
