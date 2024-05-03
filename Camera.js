class Camera{
    constructor(size){
        this.fov = 60;
        this.eye = new Vector3(0,0,0);
        this.at = new Vector3(0,0, -1);
        this.up = new Vector3(0,1,0);

        this.viewMatrix = new Matrix4();
        this.projectionMatrix = new Matrix4();
        this.projectionMatrix.setPerspective(this.fov, size, 0.1, 1000);
    }

    moveForward(){
        var f = this.at.sub(this.eye);
        f = f.divide(f.length());
        this.at = this.at.add(f);
        this.eye = this.eye.add(f);
    }

    moveBackward(){
        let b = new Vector3();
        b = b.set(this.eye);
        b = b.sub(this.at);
        b = b.normalize();
        b = b.mul(0.2);

        this.eye = this.eye.add(b);
        this.at = this.at.add(b);
    }

    moveLeft(){
        let l = new Vector3();
        l = l.set(this.at);
        l = l.sub(this.eye);
        let left = l.cross(this.up, l);
        left = left.normalize();
        left = left.mul(0.2);

        this.eye = this.eye.add(left);
        this.at = this.at.add(left);
    }

    moveRight(){
        let r = new Vector3();
        r = r.set(this.at);
        r = r.sub(this.eye);
        let right = r.cross(r, this.up);
        right = right.normalize();
        right = right.mul(0.2);

        this.eye = this.eye.add(right);
        this.at = this.at.add(right);
    }

    panLeft(){
        var f = new Vector3();
        f = f.set(this.at);
        f = f.sub(this.eye);

        let rotationMatrix = new Matrix4();
        rotationMatrix.setIdentity();
        rotationMatrix.rotate(1, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
        f = rotationMatrix.multiplyVector3(f);
        this.at = f.add(this.eye);
    }

    panRight(){
        var f = new Vector3();
        f = f.set(this.at);
        f = f.sub(this.eye);
        rotationMatrix.setIdentity();
        rotationMatrix.rotate(-1, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
        f = rotationMatrix.multiplyVector3(f);
        this.at = f.add(this.eye);
    }

}