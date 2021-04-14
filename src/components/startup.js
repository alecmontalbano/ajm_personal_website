import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import lerp from "lerp";

export default function Startup() {
    const ref = useRef();
    useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)));
    return(
        <mesh ref={ref} position={[0, 0, 200]}  scale={[100, 100, 1]}>
            <planeBufferGeometry attach="geometry"/>
            <meshBasicMaterial attach="material" color="#dfdfdf" transparent />
        </mesh>
    );
}