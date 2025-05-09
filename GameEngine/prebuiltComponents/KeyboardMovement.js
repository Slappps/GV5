class KeyboardMovement extends Component {
    constructor(speed = 1) {
        super()
        this.speed = speed
    }
    update() {
        
        var xkey = 0
        var ykey = 0

        if (Input.keysDown.includes("ArrowLeft"))
            xkey = -1
        if (Input.keysDown.includes("ArrowRight"))
            xkey = 1
        if (Input.keysDown.includes("ArrowUp"))
            ykey = -1
        if (Input.keysDown.includes("ArrowDown"))
            ykey = 1

        if (xkey != 0 || ykey != 0){
            this.move([xkey,ykey])
        }
        
        
        
    }


    move(targetXY) {
        
        let xparent = targetXY[0]
        let yparent = targetXY[1]


        let mag = Math.sqrt((xparent**2) + (yparent**2))

        let x = xparent / mag
        let y = yparent / mag
        
        console.log(x,y)

        this.parent.transform.x += x * (this.speed * Time.deltaTime )
        this.parent.transform.y += y * (this.speed * Time.deltaTime)

        
           
    }
}