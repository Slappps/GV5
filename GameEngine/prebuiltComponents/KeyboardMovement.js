class KeyboardMovement extends Component {
    constructor(speed = 200) {
        super()
        this.speed = speed
    }
    update() {
        
        if (Input.keysDown.includes("ArrowLeft"))
            this.parent.transform.x -= this.speed / Time.fps
        if (Input.keysDown.includes("ArrowRight"))
            this.parent.transform.x += this.speed / Time.fps
        if (Input.keysDown.includes("ArrowUp"))
            this.parent.transform.y -= this.speed / Time.fps
        if (Input.keysDown.includes("ArrowDown"))
            this.parent.transform.y += this.speed / Time.fps
    }
}