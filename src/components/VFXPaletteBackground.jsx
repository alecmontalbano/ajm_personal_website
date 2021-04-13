import React, {Component} from "react";
import * as VFX from "react-vfx";
import styled from "styled-components";

class VFXPaletteBackground extends Component {

    render() {
        const Content = styled.div`
        width: 100vw;
        min-height: 100vh;
        `;

        // webgl for background
        const palettebg = `
        uniform vec2 resolution;
        uniform float time;

        vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
        {
            return a + b*cos( 6.28318*(c*t+d) );
        }

        void main()
        {
            vec2 p = gl_FragCoord.xy / resolution.xy;
            
            // animate
            // p.y -= 0.02*time;
            // compute colors
            vec3 col = pal( p.y+3.9, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(0.5,0.20,0.25),vec3(2.0,1.0,0.0) );
            // vec3 col = pal( p.x+3.9, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(2.0,1.0,0.0),vec3(0.5,0.20,0.25) );

            gl_FragColor = vec4( col, 1.0 );
        }
        `;
        return (
            <div className="palette-bg">
                <VFX.VFXSpan shader={palettebg}>
                    <Content></Content>
                </VFX.VFXSpan>
            </div>
        );
    }   
}

export default VFXPaletteBackground;