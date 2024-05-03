class Cube{
    constructor(){
        this.type = "cube";
        this.color = [1.0,1.0,1.0,1.0];
        this.matrix = new Matrix4();

        this.textureNum = 0;
    }

    render(){
        var rgba = this.color;

        // Pass the color of a point to u_FragColor variable
        gl.uniform1i(u_whichTexture, this.textureNum);
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
        //front
        drawTriangle3DUV([0,0,0,  1, 1, 0,  1,0,0], [0,0,1,1,1,1])
        drawTriangle3DUV([0,0,0,  0, 1, 0,  1,1,0], [0,0,0,1,1,1] );
        gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
        //right
        drawTriangle3DUV([0,1,1,  0,0,1, 0,0,0], [1,0,0,1,1,1]);
        drawTriangle3DUV([0,1,1,  0,0,0, 0,1,0], [1,0,0,1,1,1]);
        gl.uniform4f(u_FragColor, rgba[0]*0.85, rgba[1]*0.85, rgba[2]*0.85, rgba[3]);
        //back
        drawTriangle3DUV([0,1,1,  1,1,1, 1,0,1], [1,0,0,1,1,1]);
        drawTriangle3DUV([0,1,1,  1,0,1, 0,0,1], [1,0,0,1,1,1]);
        gl.uniform4f(u_FragColor, rgba[0]*0.8, rgba[1]*0.8, rgba[2]*0.8, rgba[3]);
        //left
        drawTriangle3DUV([1,1,1,  1,1,0, 1,0,0], [1,0,0,1,1,1]);
        drawTriangle3DUV([1,1,1,  1,0,0, 1,0,1], [1,0,0,1,1,1]);
        gl.uniform4f(u_FragColor, rgba[0]*0.75, rgba[1]*0.75, rgba[2]*0.75, rgba[3]);
        //bottom
        drawTriangle3DUV([0,0,1,  1,0,1, 1,0,0], [1,0,0,1,1,1]);
        drawTriangle3DUV([0,0,1,  1,0,0, 0,0,0], [1,0,0,1,1,1]);
        gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);
        //top
        drawTriangle3DUV([1,1,1,  0,1,1, 0,1,0], [1,0,0,1,1,1]);
        drawTriangle3DUV([1,1,1,  0,1,0, 1,1,0], [1,0,0,1,1,1]);
   }

   renderfast(){
        var rgba = this.color;

        // Pass the color of a point to u_FragColor variable
        //gl.uniform1i(u_whichTexture, this.textureNum);
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
        
        var allverts = [];
        //front
        allverts = allverts.concat([0,0,0,  1, 1, 0,  1,0,0]);
        allverts = allverts.concat([0,0,0,  0, 1, 0,  1,1,0]);

        allverts = allverts.concat([0,1,0,  0,1,1,  1,1,1]);
        allverts = allverts.concat([0,1,0,  1,1,1,  1,1,0]);

        allverts = allverts.concat([0,1,1,1,1,1,1,0,1]);
        allverts = allverts.concat([0,1,1,1,0,1,0,0,1]);

        allverts = allverts.concat([1,1,1,1,1,0,1,0,0]);
        allverts = allverts.concat([1,1,1,1,0,0,1,0,1]);
        
        allverts = allverts.concat([0,0,1,1,0,1,1,0,0]);
        allverts = allverts.concat([0,0,1,1,0,0,0,0,0]);

        allverts = allverts.concat([1,1,1,0,1,1,0,1,0]);
        allverts = allverts.concat([1,1,1,0,1,0,1,1,0]);
        drawTriangle3D(allverts);
    }
}