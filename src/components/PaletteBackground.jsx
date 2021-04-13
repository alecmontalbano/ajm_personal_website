import React, {Component} from "react";

class PaletteBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canvas: false,
            gl: false
        };
    }

    setcanvas =()=> {
        //set canvas
        const c = document.querySelector("#canvas");
        if (!this.state.canvas || this.state.canvas === undefined )
          this.setState({ canvas: c });      
        if (!this.state.gl || this.state.gl === undefined )
          this.setState({ gl: c.getContext("webgl") });
    }

    compileshader =(gl, shaderSource, shaderType)=> {
        // Create the shader object
        var shader = gl.createShader(shaderType);
       
        // Set the shader source code.
        gl.shaderSource(shader, shaderSource);
       
        // Compile the shader
        gl.compileShader(shader);
       
        // Check if it compiled
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!success) {
          // Something went wrong during compilation; get the error
          throw "could not compile shader:" + gl.getShaderInfoLog(shader);
        }
       
        return shader;
      }

    createprogram =(gl, vertexShader, fragmentShader)=> {
        // create a program.
        var program = gl.createProgram();
       
        // attach the shaders.
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
       
        // link the program.
        gl.linkProgram(program);
       
        // Check if it linked.
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!success) {
            // something went wrong with the link
            throw ("program failed to link:" + gl.getProgramInfoLog (program));
        }
       
        return program;
      };

    webglrender =(prog, posatt, posbuf, resloc, mouloc)=> {
        const gl = this.state.gl; 

        // WebGlUtils.resizeCanvasToDisplaySize(gl.canvas);
    
        // Tell WebGL how to convert from clip space to pixels
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
        // Tell it to use our program (pair of shaders)
        gl.useProgram(prog);
    
        // Turn on the attribute
        gl.enableVertexAttribArray(posatt);
    
        // Bind the position buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, posbuf);
    
        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        gl.vertexAttribPointer(
            posatt,
            2,          // 2 components per iteration
            gl.FLOAT,   // the data is 32bit floats
            false,      // don't normalize the data
            0,          // 0 = move forward size * sizeof(type) each iteration to get the next position
            0,          // start at the beginning of the buffer
        );
    
        gl.uniform2f(resloc, gl.canvas.width, gl.canvas.height);
        gl.uniform2f(mouloc, this.props.mouseX, this.props.mouseY);
    
        gl.drawArrays(
            gl.TRIANGLES,
            0,     // offset
            6,     // num vertices to process
        );
      }

    webglmain =()=> {
        this.setcanvas();

        const gl = this.state.gl;

        if (!gl)
            return;


        const vs = `
        // an attribute will receive data from a buffer
        attribute vec4 a_position;
    
        // all shaders have a main function
        void main() {
    
            // gl_Position is a special variable a vertex shader
            // is responsible for setting
            gl_Position = a_position;
        }
        `;
        
        const fs = `
        precision highp float;

        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
    
        void main() {
          // gl_FragColor is a special variable a fragment shader
          // is responsible for setting
    
          gl_FragColor = vec4(fract((gl_FragCoord.xy - u_mouse) / u_resolution), 0, 1);
        }
        `;

        var vshader = this.compileshader(gl, vs, gl.VERTEX_SHADER);
        var fshader = this.compileshader(gl, fs, gl.FRAGMENT_SHADER);
    
        // setup GLSL program
        const program = this.createprogram(gl, vshader, fshader);
    
        // look up where the vertex data needs to go.
        const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    
        // look up uniform locations
        const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
        const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    
        // Create a buffer to put three 2d clip space points in
        const positionBuffer = gl.createBuffer();
    
        // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
        // fill it with a 2 triangles that cover clipspace
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,  // first triangle
            1, -1,
        -1,  1,
        -1,  1,  // second triangle
            1, -1,
            1,  1,
        ]), gl.STATIC_DRAW);    
    
        this.webglrender(program, positionAttributeLocation, positionBuffer, resolutionLocation, mouseLocation);
    }

    render() {
        this.webglmain();

        return (
            <div className="palette-bg">

            </div>
        );
    }   
}

export default PaletteBackground;