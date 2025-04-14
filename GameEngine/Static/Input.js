class Input {
    /** Store input states for our game */
    static keysDown = []

    //Keeps track of the mouse position
    static mousePosition = { x: 0, y: 0 }

    //Keeps track if the mouse is currently clicked
    static mouseDown = false;

    //Keeps track if the mouse was up or down in the current frame
    static mouseUpThisFrame = false;
    static mouseDownThisFrame = false;


    /** Respond to key up events */
    static keyup(e) {
        let index = Input.keysDown.indexOf(e.code)
        Input.keysDown.splice(index, 1)
    }

    /** Respond to key down events */
    static keydown(e) {
        console.log(e)
        if (!Input.keysDown.includes(e.code))
            Input.keysDown.push(e.code)
    }

    /*Keeps track of the mouse movement by constantly listening for mouse movement */
    static mousemove(e) {
        Input.mousePosition.x = e.clientX;
        Input.mousePosition.y = e.clientY;
    }

    /*Keeps track if the mouse was up this frame as well as the mouse not being down currently down */
    static mouseup(e){
        Input.mouseUpThisFrame = true;
        Input.mouseDown = false;
    }

    /*Keeps track if the mouse was down this frame as well as the mouse not being up currently down */
    static mousedown(e){
        Input.mouseDownThisFrame = true;
        Input.mouseDown = true
    }
}