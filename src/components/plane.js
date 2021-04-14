import React, { useRef } from 'react';
import { useBlock } from './blocks';
import state from '../store';
import { useFrame } from '@react-three/fiber';
import './CustomMaterial'
import lerp from 'lerp';

export default function Plane({ color = "white", map, ...props }) {
    const { viewportHeight, offsetFactor } = useBlock();
    const material = useRef();
    let last = state.top.current;
    useFrame(() => {
        const { pages, top, zoom } = state;
        material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight * zoom), 0.1);
        material.current.shift = lerp(material.current.shift, (top.current - last) / 150, 0.1);
        last = top.current;
    });
    return (
        <mesh {...props}>
            <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
            <customMaterial ref={material} attach="material" color={color} map={map} />
        </mesh>
    );
}