import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useBlock } from "./blocks";
import Plane from "./plane";
import lerp from "lerp";
import state from "../store";

export default function Cross() {
    const ref = useRef();
    const { viewportHeight } = useBlock();
    useFrame(() => {
        const curTop = state.top.current;
        const curY = ref.current.rotation.z;
        const nextY = (curTop / ((state.pages - 1) * viewportHeight * state.zoom)) * Math.PI;
        ref.current.rotation.z = lerp(curY, nextY, 0.1);
    });
    return(
        <group ref={ref} scale={[2, 2, 2]}>
            <Plane scale={[1, 0.2, 0.2]} color="#000000" />
            <Plane scale={[0.2, 1, 0.2]} color="#000000" />
        </group>
    );
}