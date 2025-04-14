class BouncyBall extends GameObject{
    constructor(){
        super()

        //initialize position
        this.transform.x = 100
        this.transform.y = 100
        

        this.addComponent(new Circle())
        this.addComponent(new VectorBounce())
        this.addComponent(new BallCollider())
        
    }
}