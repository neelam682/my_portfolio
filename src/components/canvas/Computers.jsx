import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, Preload, OrbitControls } from "@react-three/drei";

// Loader Component
const CanvasLoader = () => (
  <Html center>
    <div style={{ color: "white", fontSize: 16 }}>Loading...</div>
  </Html>
);

// Model Component
const ComputersModel = ({ device }) => {
  const groupRef = useRef();
  const { scene } = useGLTF("/Computer.glb");

  if (!scene) return null; // ❗ Prevents NaN if model fails

  useFrame(({ mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.01;
      //groupRef.current.rotation.x = mouse.y * 0.2;
    }
  });

  // Device-specific adjustments
  const updateDevice = () => {
    const width = window.innerWidth;
    const isIpadPro =
      /iPad/.test(navigator.userAgent) || (width >= 1024 && width <= 1366);

    if (width <= 480) setDevice("mobile");
    else if (isIpadPro) setDevice("iPad Pro");
    else if (width <= 1024) setDevice("tablet");
    else if (width <= 1440) setDevice("desktop");
    else setDevice("large");
  };

  const config = {

    mobile: {
      scale: 0.002,
      position: [-0.2, -0.3, 0],
    },
    tablet: {
      scale: 0.004,
      position: [0, -1.2, 0],
    },
    "iPad Pro": {
      scale: 0.004,
      position: [-1.5, -0.5, 0],
    },
    desktop: {
      scale: 0.006,
      position: [2, -1.2, -1],
    },
  }[device];

  return (
    <group
      ref={groupRef}
      scale={config.scale}
      position={config.position}
      rotation={[0, 0, 0]}
    >
      {/* 💡 Realistic Left + Right Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-5, 5, 5]} // Left side
        intensity={1.2}
        castShadow
      />
      <directionalLight
        position={[5, 5, 5]} // Right side
        intensity={1.2}
        castShadow
      />
      <directionalLight
        position={[5, -5, 5]} // Right side
        intensity={1.2}
        castShadow
      />
      <directionalLight
        position={[5, 5, -5]} // Right side
        intensity={1.2}
        castShadow
      />
      <primitive object={scene} dispose={null} />
    </group>
  );
};

const Computers = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width <= 768) setDevice("mobile");
      else if (width <= 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.5, 8], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <ComputersModel device={device} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Computers;









