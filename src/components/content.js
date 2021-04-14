import React from 'react';
import { useBlock } from './blocks';
import Plane from './plane';

export default function Content({ left, children, map }) {
    const { contentMaxWidth, canvasWidth, margin } = useBlock();
    const aspect = 1.75;
    const alignRight = (canvasWidth - contentMaxWidth - margin) / 2;
    return(
        <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
            <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#A7FFEB" map={map} />
            {children}
        </group>
    );
}