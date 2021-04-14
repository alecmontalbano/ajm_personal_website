import React from 'react';
import { useBlock } from './blocks';
import Plane from './plane';

export default function Stripe() {
    const { contentMaxWidth } = useBlock();
    return(
        <Plane scale={[100, contentMaxWidth, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color='#E0F7FA' />       
    );
}