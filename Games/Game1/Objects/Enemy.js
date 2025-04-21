class Enemy extends GameObject{

    constructor(){
        super()

        this.transform.x = 900
        this.transform.y = 200
        
        this.addComponent(new Circle('orange'))
        this.addComponent(new enemyLogic())
        //this.addComponent(new VectorBounce())
        

    }
}