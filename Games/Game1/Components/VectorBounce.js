class VectorBounce extends Component{
    constructor() {
        super()
        this.timeSinceLastShot = 0
        this.speed = 600

        //---persistant vars----
        //this.angle = Math.floor(Math.random() * 360) + 0
        this.angle = Math.random() * (360 - 0) + 0;

        //entity speed should be a property of the bouncy ball and not of the component vectorBounce(), how can i do that?
        
        this.dirX = 1
        this.dirY = 1
        


    }
    update(){
        this.move()
    }
    move() {
        let colliding = collisions.cirOutOfbnds([this.parent.transform.x,this.parent.transform.y,50])


        if(colliding == 'x'){
            console.log("bounce")
            this.dirX = 1
        }
        if(colliding == '-x'){
            console.log("bounce -x")
            this.dirX = -1
        }
        if(colliding == 'y'){
            console.log("bounce y")
            this.dirY = 1
        }
        if(colliding == '-y'){
            console.log("bounce -y")
            this.dirY = -1
        }
        
        
        this.radians = this.angle * (Math.PI / 180)
        this.vecX = Math.cos(this.radians)
        this.vecY = Math.sin(this.radians)

        console.log('Before: ' , this.vecX , this.vecY)
        this.vecX = this.vecX * this.dirX
        this.vecY = this.vecY * this.dirY
        console.log('After: ' , this.vecX , this.vecY)

        

        //Time.deltaTime? How does js know which instance of Time are we reading this variable from from? Is this similar to Math.PI?
        //vector angle not working, how is transformx,y diffrent from GV3
        this.parent.transform.x += this.vecX * (this.speed * Time.deltaTime )
        this.parent.transform.y += -1*(this.vecY * (this.speed * Time.deltaTime))
        
        
                


    }
}