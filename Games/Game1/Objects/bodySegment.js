class BodySegment extends GameObject{
    constructor(color = 'red' , size = 50){
        super()
        this.color = color
        this.size = size
        //initialize position
        
        this.transform.x = 500
        this.transform.y = 200
        
        this.addComponent(new Circle(this.color, this.size))
        this.addComponent(new bodySegLogic())
        this.addComponent(new BallCollider())
        
    }
}