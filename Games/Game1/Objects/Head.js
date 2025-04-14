class Head extends GameObject{
    constructor(){
        super()
        
        this.addComponent(new Circle())
        this.addComponent(new KeyboardMovement(300))
        this.addComponent(new HeadLogic())
        
    }
}